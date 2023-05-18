import '@/assets/css/common.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import cookie from 'js-cookie'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)
app.use(router).mount('#app')
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$serverUrl = 'http://localhost:8282';
app.config.globalProperties.$cookie = cookie;


