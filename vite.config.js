import path from 'path';
import UnoCSS from 'unocss/vite';
import legacy from '@vitejs/plugin-legacy';
import handlebars from 'vite-plugin-handlebars';
import walkSync from './walkSync.js';

const partials = [];
const htmls = [];
walkSync(path.resolve(__dirname, 'src'), (pt, stat) => {
  if (stat.isDirectory() && pt.match('partials')){
    partials.push(pt);
  }
  if (stat.isFile() && pt.endsWith('.html') && !pt.match('partials')) {
    htmls.push(pt)
  }
});

var buildInput = {};
htmls.forEach(pt => {
  var key = pt.replace(/.*src\\/, '').replace(/\\/g, '/').replace('.html', '');
  buildInput[key] = pt;
});

export default {
  base: './',
  root: path.resolve(__dirname, 'src'),
  plugins: [
    UnoCSS(),
    handlebars({
      partialDirectory: partials,
   }),
    legacy({ targets: 'firefox 52' }),
  ],
  build: {
    rollupOptions: {
      input: buildInput,
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