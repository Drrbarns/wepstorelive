<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Plan;
use App\Models\Contact;
use App\Models\LandingPageSetting;
use App\Models\LandingPageCustomPage;
use App\Models\Store;

class LandingPageController extends Controller
{
    public function show(Request $request)
    {
        $host = $request->getHost();
        $store = null;

        // Check if it's a subdomain request for stores
        $hostParts = explode('.', $host);
        if (count($hostParts) > 2) {
            $subdomain = $hostParts[0];
            $store = Store::where('slug', $subdomain)
                ->where('is_active', true)
                ->first();
        }

        // Check for store custom domain
        if (!$store) {
            $store = Store::where('custom_domain', rtrim(preg_replace('/^https?:\/\//', '', $host), '/'))
                ->where('is_active', true)
                ->first();
        }

        if ($store) {
            // Redirect to store frontend
            return redirect()->route('store.home', ['storeSlug' => $store->slug]);
        }

        // If this is an Inertia request (e.g., from logout redirect), redirect to login
        // This prevents the WepStore static landing from overlaying the Laravel app
        if ($request->header('X-Inertia')) {
            return redirect()->route('login');
        }

        // Always serve the WepStore static landing when accessing the main domain
        return $this->renderStaticLanding();
    }

    /**
     * Render the static WepStore landing page from public/wepstore/index.html
     */
    protected function renderStaticLanding()
    {
        $indexPath = public_path('wepstore/index.html');

        if (!file_exists($indexPath)) {
            return response('Landing page assets not found. Please build WepStore with: npm run build:wepstore', 500);
        }

        $content = file_get_contents($indexPath);

        // Get the request and build correct base URLs
        $request = request();

        // For Laragon: http://localhost/wepstore/wepstore1/
        // We need: http://localhost/wepstore/wepstore1/public/wepstore/
        $scriptName = $request->server('SCRIPT_NAME', '');
        $basePath = dirname($scriptName); // /wepstore/wepstore1
        $baseUrl = $request->getSchemeAndHttpHost() . $basePath;

        // Path to wepstore assets folder
        $wepstoreBase = $baseUrl . '/public/wepstore/';
        $assetsBase = $wepstoreBase . 'assets/';

        // Get current URL for SEO
        $currentUrl = $request->url();
        $appUrl = config('app.url', $baseUrl);

        // Update SEO meta tags with current URL
        $content = str_replace('content="https://wepstore.com/"', 'content="' . $currentUrl . '"', $content);
        $content = str_replace('href="https://wepstore.com/"', 'href="' . $currentUrl . '"', $content);
        $content = str_replace('https://wepstore.com/images/logos/', $appUrl . '/images/logos/', $content);
        $content = str_replace('https://wepstore.com', $appUrl, $content);

        // Add base tag to head so ALL relative URLs resolve correctly
        if (strpos($content, '<base') === false) {
            $content = str_replace('<head>', '<head><base href="' . $wepstoreBase . '">', $content);
        }

        // Replace relative asset paths with absolute paths
        $replacements = [
            'src="./assets/' => 'src="' . $assetsBase,
            "src='./assets/" => "src='" . $assetsBase,
            'href="./assets/' => 'href="' . $assetsBase,
            "href='./assets/" => "href='" . $assetsBase,
        ];

        $content = str_replace(array_keys($replacements), array_values($replacements), $content);

        return response($content)->header('Content-Type', 'text/html');
    }

    public function submitContact(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string'
        ]);

        Contact::create([
            'name' => $request->name,
            'email' => $request->email,
            'subject' => $request->subject,
            'message' => $request->message,
            'is_landing_page' => true,
            'business_id' => null
        ]);

        return back()->with('success', __('Thank you for your message. We will get back to you soon!'));
    }

    public function subscribe(Request $request)
    {
        $request->validate([
            'email' => 'required|email|max:255|unique:newsletters,email'
        ]);

        \App\Models\Newsletter::create([
            'email' => $request->email,
            'status' => 'active',
            'subscribed_at' => now()
        ]);

        return back()->with('success', __('Thank you for subscribing to our newsletter!'));
    }

    public function settings()
    {
        $landingSettings = LandingPageSetting::getSettings();

        return Inertia::render('landing-page/settings', [
            'settings' => $landingSettings
        ]);
    }

    public function updateSettings(Request $request)
    {
        $request->validate([
            'company_name' => 'required|string|max:255',
            'contact_email' => 'required|email|max:255',
            'contact_phone' => 'required|string|max:255',
            'contact_address' => 'required|string|max:255',
            'config_sections' => 'required|array'
        ]);
        $landingSettings = LandingPageSetting::getSettings();
        $landingSettings->update($request->all());

        return back()->with('success', __('Landing page settings updated successfully!'));
    }
}