import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
//import axios from 'axios'   //axios 임포트

const app = createApp(App)
app.use(router).mount('#app')
//app.config.globalProperties.$axios = axios;                 //axios에 대한 설정
//app.config.globalProperties.$serverUrl = '//localhost:8888' //axios에 대한 연결할 서버 설정 
