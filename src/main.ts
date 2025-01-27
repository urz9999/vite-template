import { createApp } from 'vue'
import "preline/preline";
import './style.scss'
import App from './App.vue'
import createRouter from "./components/pages/_routes.ts"

const router = createRouter();
createApp(App).use(router).mount('#app');