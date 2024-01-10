import path from 'path';
import UnoCSS from 'unocss/vite';
import legacy from '@vitejs/plugin-legacy';

export default {
  root: './src',
  publicDir: '../public',
  plugins: [
    UnoCSS(),
    legacy({targets: 'firefox 38'}),
  ],
  build: {
    rollupOptions: {
      input: {
        'index': path.resolve(__dirname, 'src/index.html'),
        'home': path.resolve(__dirname, 'src/home/index.html'),
        'home/index1': path.resolve(__dirname, 'src/home/index1.html'),
      },
      output: {
        // chunkFileNames: 'static/js/[name]-[hash].js',
        // entryFileNames: 'static/js/[name]-[hash].js',
        // assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      },
    },
    outDir: '../dist',
    emptyOutDir: true,
  },
};