import { createRouter, createWebHistory } from 'vue-router'
import PageHIntro from '@/views/home/PageHIntro.vue'

//공지사항
import PageAnno from '@/views/announcement/PageAnno.vue'
//민원
import PageMinone from '@/views/minone/PageMinone.vue'
import PageMinoneForm from '@/views/minone/PageMinoneForm.vue'
import PageMyMinone from '@/views/minone/PageMyMinone.vue'
import PageMyMinoneForm from '@/views/minone/PageMyMinoneForm.vue'
//주차
import PageMyCar from '@/views/car/PageMyCar.vue'
import PageVisitCar from '@/views/car/PageVisitCar.vue'
//회의&투표&설문
import PageMeeting from '@/views/meeting/PageMeeting.vue'
import PageMeetingForm from '@/views/meeting/PageMeetingForm.vue'
import PageArchiveForm from '@/views/meeting/PageArchiveForm.vue'



const routes = [
  //----------------------------------------------
  //인트로
  {
    path: '/',
    name: 'PageHIntro',
    component: PageHIntro
  },
  //----------------------------------------------
  //공지사항
  {
    path: '/announcement/PageAnno',
    name: 'PageAnno',
    component: PageAnno
  },
  //----------------------------------------------
  //회의&투표&설문
  {
    path: '/meeting/PageMeeting',
    name: 'PageMeeting',
    component: PageMeeting
  },
  {
    path: '/meeting/PageArchiveForm',
    name: 'PageArchiveForm',
    component: PageArchiveForm
  },
  {
    path: '/meeting/PageMeetingForm',
    name: 'PageMeetingForm',
    component: PageMeetingForm
  },
  //----------------------------------------------
  //주차
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
  //----------------------------------------------
  //민원
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
  //----------------------------------------------
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router