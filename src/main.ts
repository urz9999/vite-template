import { createApp } from 'vue';

import App from './App.vue';
import createRouter from './components/pages/_routes.ts';
import './style.scss';

const router = createRouter();
createApp(App).use(router).mount('#app');
