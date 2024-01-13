import path from 'path';
import UnoCSS from 'unocss/vite';
import legacy from '@vitejs/plugin-legacy';
import handlebars from 'vite-plugin-handlebars';

export default {
  base: './',
  plugins: [
    UnoCSS(),
    handlebars({ partialDirectory: path.resolve(__dirname, 'partials') }),
    legacy({ targets: 'firefox 52' }),
  ],
  build: {
    rollupOptions: {
      input: {
        'index': path.resolve(__dirname, 'index.html'),
        'home': path.resolve(__dirname, 'home/index.html'),
      },
      output: {
        chunkFileNames: "static/js/[name].js",
        entryFileNames: "static/js/[name].js",
        assetFileNames: "static/[ext]/[name].[ext]",
      },
    }
  }
};