import path from 'path';
import UnoCSS from 'unocss/vite';
import legacy from '@vitejs/plugin-legacy';
import handlebars from 'vite-plugin-handlebars';

export default {
  base: './',
  root: path.resolve(__dirname, 'src'),
  plugins: [
    UnoCSS(),
    handlebars({
      partialDirectory: [
        path.resolve(__dirname, 'src/partials'),
        path.resolve(__dirname, 'src/about/partials'),
        path.resolve(__dirname, 'src/culture/partials'),
      ]
   }),
    legacy({ targets: 'firefox 52' }),
  ],
  build: {
    rollupOptions: {
      input: {
        'index': path.resolve(__dirname, 'src/index.html'),

        'about': path.resolve(__dirname, 'src/about/index.html'),
        'about/honers': path.resolve(__dirname, 'src/about/honers.html'),
        'about/contact': path.resolve(__dirname, 'src/about/contact.html'),
        'about/detail': path.resolve(__dirname, 'src/about/detail.html'),
        'about/laws': path.resolve(__dirname, 'src/about/laws.html'),
        'about/organization': path.resolve(__dirname, 'src/about/organization.html'),

        'notice': path.resolve(__dirname, 'src/notice/index.html'),
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