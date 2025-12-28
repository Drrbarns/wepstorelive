#!/bin/bash
set -e

echo "🚀 Starting WepStore deployment..."

cd /home/wepstore.com/public_html

# Maintenance mode
php artisan down --message="Updating, back in 2 minutes!" --retry=120 || true

# Pull latest code
git pull origin main

# Install PHP dependencies
composer install --no-dev --optimize-autoloader

# Install Node dependencies
npm ci --production

# Build frontend assets
npm run build
npm run build:wepstore

# Run migrations
php artisan migrate --force

# Clear and rebuild caches
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan event:cache

# Fix permissions for CyberPanel (OpenLiteSpeed runs as nobody)
chown -R nobody:nobody storage bootstrap/cache
chmod -R 775 storage bootstrap/cache

# Restart LiteSpeed to clear opcache (optional)
# sudo /usr/local/lsws/bin/lswsctrl restart

# Back online
php artisan up

echo "✅ Deployment complete!"
