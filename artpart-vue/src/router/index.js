import { createRouter, createWebHistory } from 'vue-router'
import PageHIntro from '@/views/home/PageHIntro.vue'
import ManageMentPay from '@/views/home/ManageMentPay.vue'
import ManageMentUsing from '@/views/home/ManageMentUsing.vue'

const routes = [
  {
    path: '/',
    name: 'PageHIntro',
    component: PageHIntro
  },
  {
     path: '/Pay',
     name: 'ManageMentPay',
     component: ManageMentPay
  },
  {
    path: '/Using',
    name: 'ManageMentUsing',
    component: ManageMentUsing
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router