import '@/assets/style.css';
import '@unocss/reset/normalize.css';
import 'virtual:uno.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');
