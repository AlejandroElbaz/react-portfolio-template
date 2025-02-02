import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/', // Ensures correct asset paths
    build: {
        outDir: 'dist', // Output folder
        assetsDir: 'assets', // Keeps all assets in /assets/
        manifest: true, // Generates a manifest file for NGINX
        rollupOptions: {
            output: {
                chunkFileNames: 'assets/[name]-[hash].js',
                entryFileNames: 'assets/[name]-[hash].js',
                assetFileNames: 'assets/[name]-[hash].[ext]',
            },
        },
    },
});
