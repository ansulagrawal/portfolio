import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from './router';
import VueEasyLightbox from 'vue-easy-lightbox';

import './assets/css/main.css';

import enIN from './assets/i18n/en-IN.json';
import guIN from './assets/i18n/gu-IN.json';
import hiIN from './assets/i18n/hi-IN.json';

type MessageSchema = typeof enIN;

const i18n = createI18n<[MessageSchema], 'en-IN' | 'gu-IN' | 'hi-IN'>({
  globalInjection: true,
  legacy: false,
  locale: 'en-IN',
  fallbackLocale: 'en-IN',
  messages: {
    'en-IN': enIN,
    'gu-IN': guIN,
    'hi-IN': hiIN,
  },
});

const app = createApp(App);

app.use(i18n);
app.use(VueEasyLightbox);
app.use(router);
app.use(createPinia());

app.mount('#app');
