import { defineConfig } from 'unocss';
import transformerCompileClass from '@unocss/transformer-compile-class';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import presetUno from 'unocss/preset-uno';
import presetChinese from "unocss-preset-chinese";


export default defineConfig({
  content: {
    filesystem: ['partials/*.html', '*/partials/*.html'],
  },
  transformers: [
    transformerVariantGroup(),
    transformerCompileClass({ classPrefix: '', alwaysHash: true }),
  ],
  presets: [
    presetUno(),
    presetChinese({ chineseType: 'simplified' }),
    // presetAutoprefixer(),
  ],
  variants: [
    (m) => !m.startsWith('h:') ? m : { matcher: m.slice(2), selector: s => `${s}:hover` },
    (m) => !m.startsWith('f:') ? m : { matcher: m.slice(2), selector: s => `${s}:focus` },
    (m) => !m.startsWith('a:') ? m : { matcher: m.slice(2), selector: s => `${s}:active` },
    (m) => !m.startsWith('fin:') ? m : { matcher: m.slice(4), selector: s => `${s}:focus-within` },
  ],
  theme: {
    colors: {
      'gold': '#C9A054',
      'gold-1': '#F7F4ED',
      'gold-2': '#E4DCC7',
      'gold-3': '#CBB688',
      'fire': '#BC251E',
      'dark': '#252525'
    },
    breakpoints: {
      xs: '320px',
      sm: '640px',
      md: '960px',
      lg: '1300px',
      xl: '1640px',
    },
  },
  rules: [
    ['fr', { 'display': 'flex', 'flex-direction': 'row' }],
    ['fc', { 'display': 'flex', 'flex-direction': 'column' }],
    ['as', { 'align-items': 'start' }],
    ['ac', { 'align-items': 'center' }],
    ['ae', { 'align-items': 'end' }],
    ['jc', { 'justify-content': 'center' }],
    ['je', { 'justify-content': 'end' }],
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
    ['box', { 'box-shadow': '0 0 0 1px inset cyan' }],
    ['ellipsis', { 'overflow': 'hidden', 'text-overflow': 'ellipsis', 'white-space': 'nowrap' }],
    ['nowrap', {'white-space': 'nowrap'}],
    ['a', { 'cursor': 'pointer' }],
    [/^fs-?(\d+)$/, ([, d]) => ({ 'font-size': `${+d / 4}rem` })],
    [/^maxw-?(\d+)px$/, ([, d]) => ({ 'max-width': `${d}px` })],
    [/^minw-?(\d+)px$/, ([, d]) => ({ 'min-width': `${d}px` })],
    [/^maxh-?(\d+)px$/, ([, d]) => ({ 'max-height': `${d}px` })],
    [/^minh-?(\d+)px$/, ([, d]) => ({ 'min-height': `${d}px` })],
    [/^grid-gap-?(\d+)px$/, ([, d]) => ({ 'gap': `${d}px`, 'grid-gap': `${d}px` })],
  ]
});