import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/views/home/PageHome.vue'
import PageHIntro from '@/views/home/PageHIntro.vue'

const routes = [
  {
    path: '/login',
    name: 'PageHIntro',
    component: PageHIntro
  },
  {
    path: '/',
    name: 'PageHome',
    component: PageHome
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router