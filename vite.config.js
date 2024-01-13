import path from 'path';
import UnoCSS from 'unocss/vite';
import legacy from '@vitejs/plugin-legacy';
import handlebars from 'vite-plugin-handlebars';

export default {
  base: './',
  root: path.resolve(__dirname, 'src'),
  plugins: [
    UnoCSS(),
    handlebars({ partialDirectory: path.resolve(__dirname, 'src/partials') }),
    legacy({ targets: 'firefox 52' }),
  ],
  build: {
    rollupOptions: {
      input: {
        'index': path.resolve(__dirname, 'src/index.html'),
        'about': path.resolve(__dirname, 'src/about/index.html'),
        'home': path.resolve(__dirname, 'src/home/index.html'),
      },
      output: {
        chunkFileNames: "static/js/[name].js",
        entryFileNames: "static/js/[name].js",
        assetFileNames: "static/[ext]/[name].[ext]",
      },
    },
    outDir: '../dist',
    emptyOutDir: true,
  }
};