<?php

namespace App\Console\Commands;

use App\Models\Order;
use App\Services\OrderService;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class CancelAbandonedOrders extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'orders:cancel-abandoned {--minutes=15 : Minutes to wait before cancelling}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Cancel unpaid orders that are older than the specified hours';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(
        protected OrderService $orderService,
        protected \App\Services\MoolreService $moolreService
    ) {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $minutes = $this->option('minutes');
        $threshold = Carbon::now()->subMinutes($minutes);

        $this->info("Looking for unpaid orders created before {$threshold}...");

        // Find orders that are pending/unpaid and older than threshold
        $orders = Order::whereIn('payment_status', ['unpaid', 'pending', 'awaiting_payment'])
            ->whereIn('status', ['pending', 'awaiting_payment'])
            ->where('created_at', '<', $threshold)
            ->get();

        if ($orders->isEmpty()) {
            $this->info('No abandoned orders found.');
            return 0;
        }

        $bar = $this->output->createProgressBar(count($orders));
        $bar->start();

        foreach ($orders as $order) {
            try {
                // Double check it's not actually paid (race condition safe)
                if ($order->payment_status === 'paid' || $order->status === 'confirmed') {
                    $bar->advance();
                    continue;
                }

                // Phase 6: Last-chance verification for Moolre
                if ($order->payment_gateway === 'moolre') {
                    $store = \App\Models\Store::find($order->store_id);
                    if ($store) {
                        try {
                            $status = $this->moolreService->checkStatus($store, $order->order_number);
                            if ($status === 'success') {
                                // RESCUE: Order was actually paid
                                $order->update([
                                    'status' => 'processing',
                                    'payment_status' => 'paid',
                                    'payment_details' => array_merge($order->payment_details ?? [], [
                                        'verified_at' => now(),
                                        'verified_by' => 'abandoned_job_rescue',
                                    ])
                                ]);
                                $this->orderService->reduceStockForOrder($order);

                                Log::info("Rescued Moolre order {$order->order_number} from cancellation.");
                                $bar->advance();
                                continue;
                            }
                        } catch (\Exception $e) {
                            // Check failed, proceed to cancel
                        }
                    }
                }

                $this->orderService->cancelOrder($order);

                Log::info("Auto-cancelled abandoned order: {$order->order_number}");
            } catch (\Exception $e) {
                Log::error("Failed to auto-cancel order {$order->order_number}: " . $e->getMessage());
            }

            $bar->advance();
        }

        $bar->finish();
        $this->newLine();
        $this->info("Cancelled {$orders->count()} abandoned orders.");

        return 0;
    }
}
