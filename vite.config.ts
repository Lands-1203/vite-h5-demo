import { default as react } from '@vitejs/plugin-react-swc';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import babel from 'vite-plugin-babel';

export default defineConfig({
  build: {
    outDir: 'h5-tourist-hotel-loan',
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    // target: 'modules',
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
      },
    },
  },
  plugins: [react(), babel()],
  resolve: {
    alias: {
      '@': '/src',
      '@config': '/config',
    },
  },
  server: {
    proxy: {
      '/HotelAndTravel': {
        target: process.env.hote_travel,
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/hote_travel/, ''),
      },
    },
  },

  // ssr: {},
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
