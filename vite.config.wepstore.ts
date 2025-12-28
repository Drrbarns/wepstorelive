import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: './',
    root: path.resolve(__dirname, 'resources/js/wepstore'),
    publicDir: path.resolve(__dirname, 'public/images/wepstore'),
    build: {
        outDir: path.resolve(__dirname, 'public/wepstore'),
        emptyOutDir: true,
        rollupOptions: {
            input: path.resolve(__dirname, 'resources/js/wepstore/index.html'),
        },
        assetsDir: 'assets',
    },
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js/wepstore'),
        }
    },
    css: {
        postcss: './postcss.config.wepstore.js',
    },
});
