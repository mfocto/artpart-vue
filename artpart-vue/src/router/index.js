import { createRouter, createWebHistory } from 'vue-router'
import PageHIntro from '@/views/home/PageHIntro.vue'
import ManageMentPay from '@/views/manageMent/ManageMentPay.vue'
import ManageMentUsing from '@/views/manageMent/ManageMentUsing.vue'
import FacilityManageMent from '@/views/facility/FacilityManageMent.vue'

const routes = [
  {
    path: '/',
    name: 'PageHIntro',
    component: PageHIntro
  },
  //관리비 납부 내역
  {
     path: '/Pay',
     name: 'ManageMentPay',
     component: ManageMentPay
  },
  //관리비 사용 내역
  {
    path: '/Using',
    name: 'ManageMentUsing',
    component: ManageMentUsing
  },
  //시설 관리
  {
    path: '/Facility',
    name: 'FacilityManageMent',
    component: FacilityManageMent
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router