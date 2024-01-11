import { defineConfig } from 'unocss';
import transformerCompileClass from '@unocss/transformer-compile-class';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import presetAutoprefixer from 'unocss-preset-autoprefixer';
import presetUno from 'unocss/preset-uno';
import presetChinese from "unocss-preset-chinese";

export default defineConfig({
  content: {
    filesystem: ['partials/*.html'],
  },
  transformers: [
    transformerVariantGroup(),
    transformerCompileClass({ classPrefix: '', alwaysHash: true }),
  ],
  presets: [
    presetUno(),
    presetChinese({ chineseType: 'simplified' }),
    presetAutoprefixer(),
  ],
  variants: [
    (m) => !m.startsWith('h:') ? m : { matcher: m.slice(2), selector: s => `${s}:hover` },
    (m) => !m.startsWith('f:') ? m : { matcher: m.slice(2), selector: s => `${s}:focus` },
    (m) => !m.startsWith('a:') ? m : { matcher: m.slice(2), selector: s => `${s}:active` },
  ],
  rules: [
    ['fr', { 'display': 'flex', 'flex-direction': 'row' }],
    ['fc', { 'display': 'flex', 'flex-direction': 'column' }],
    ['ac', { 'align-items': 'center' }],
    ['jc', { 'justify-content': 'center' }],
    ['ct', { 'display': 'flex', 'align-items': 'center', 'justify-content': 'center' }],
    [/^f-?(\d+)$/, ([, d]) => ({ flex: d })],
    ['pa', { 'position': 'absolute' }],
    ['pr', { 'position': 'relative' }],
    ['pf', { 'position': 'fixed' }],
    ['ps', { 'position': 'sticky' }],
    ['ov', { 'overflow': 'visible' }],
    ['oh', { 'overflow': 'hidden' }],
    ['oa', { 'overflow': 'auto' }],
    ['ox', { 'overflow-x': 'auto' }],
    ['oy', { 'overflow-y': 'auto' }],
    ['oxh', { 'overflow-y': 'hidden' }],
    ['oyh', { 'overflow-y': 'hidden' }],
    [/^fs-?(\d+)$/, ([, d]) => ({ 'font-size': `${+d / 4}rem` })],
    [/^maxw-?(\d+)px$/, ([, d]) => ({ 'max-width': `${d}px` })],
    [/^minw-?(\d+)px$/, ([, d]) => ({ 'min-width': `${d}px` })],
    [/^maxh-?(\d+)px$/, ([, d]) => ({ 'max-height': `${d}px` })],
    [/^minh-?(\d+)px$/, ([, d]) => ({ 'min-height': `${d}px` })],
  ]
});