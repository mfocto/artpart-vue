import { createRouter, createWebHistory } from 'vue-router'
import PageHIntro from '@/views/home/PageHIntro.vue'

import PageAnno from '@/views/announcement/PageAnno.vue'
import PageMinone from '@/views/minone/PageMinone.vue'
import PageMinoneForm from '@/views/minone/PageMinoneForm.vue'
import PageMyMinone from '@/views/minone/PageMyMinone.vue'
import PageMyMinoneForm from '@/views/minone/PageMyMinoneForm.vue'
import PageMeeting from '@/views/meeting/PageMeeting.vue'
import PageMyCar from '@/views/car/PageMyCar.vue'
import PageVisitCar from '@/views/car/PageVisitCar.vue'

import ManageMentPay from '@/views/home/ManageMentPay.vue'
import ManageMentUsing from '@/views/home/ManageMentUsing.vue'


const routes = [
  {
    path: '/car/PageVisitCar',
    name: 'PageVisitCar',
    component: PageVisitCar
  },
  {
    path: '/car/PageMyCar',
    name: 'PageMyCar',
    component: PageMyCar
  },
  {
    path: '/',
    name: 'PageHIntro',
    component: PageHIntro
  },
  {
    path: '/announcement/PageAnno',
    name: 'PageAnno',
    component: PageAnno
  },
  {
    path: '/minone/PageMinone',
    name: 'PageMinone',
    component: PageMinone
  },
  {
    path: '/minone/PageMinoneForm',
    name: 'PageMinoneForm',
    component: PageMinoneForm
  },
  {
    path: '/minone/PageMyMinone',
    name: 'PageMyMinone',
    component: PageMyMinone
  },
  {
    path: '/minone/PageMyMinoneForm',
    name: 'PageMyMinoneForm',
    component: PageMyMinoneForm
  },
  {
    path: '/meeting/PageMeeting',
    name: 'PageMeeting',
    component: PageMeeting
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