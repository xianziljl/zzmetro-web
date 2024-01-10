import { defineConfig } from 'unocss';
import transformerCompileClass from '@unocss/transformer-compile-class';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import presetLegacyCompat from '@unocss/preset-legacy-compat';

export default defineConfig({
  transformers: [
    transformerCompileClass({classPrefix: '', alwaysHash: true}),
    transformerVariantGroup(),
    
  ],
  // presets: [
  //   presetLegacyCompat({
  //     // options
  //     commaStyleColorFunction: true,
  //   }),
  // ]
});