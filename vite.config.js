import path from 'path';
import UnoCSS from 'unocss/vite';
import handlebars from 'vite-plugin-handlebars';
import walkSync from './walkSync.js';
import imagemin from 'vite-plugin-imagemin'

const srcDir = path.resolve(__dirname, 'src');
const partials = [];
const buildInput = {};

walkSync(srcDir, (pt, stat) => {
  if (stat.isDirectory() && pt.match('partials')){
    partials.push(pt);
  }
  if (stat.isFile() && pt.endsWith('.html') && !pt.match('partials')) {
    var key = pt.replace(/.*src(\\|\/)/, '').replace(/\\/g, '/').replace('.html', '');
    buildInput[key] = pt;
  }
});

export default {
  base: './',
  root: srcDir,
  plugins: [
    UnoCSS(),
    handlebars({ partialDirectory: partials }),
    imagemin(),
  ],
  build: {
    rollupOptions: {
      input: buildInput,
      plugins: [],
      output: {
        chunkFileNames: "static/js/[name].js",
        entryFileNames: "static/js/[name].js",
        assetFileNames: "static/[ext]/[name].[ext]",
      },
    },
    outDir: '../docs',
    emptyOutDir: true,
  }
};