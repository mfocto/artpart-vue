import { createRouter, createWebHistory } from 'vue-router'
import PageHIntro from '@/views/home/PageHIntro.vue'
import ManageMentPay from '@/views/manageMent/ManageMentPay.vue'
import ManageMentUsing from '@/views/manageMent/ManageMentUsing.vue'
import FacilityManageMent from '@/views/facility/FacilityManageMent.vue'

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

//마이페이지
import MemberMypage from '@/views/member/MemberMypage.vue'
//메인페이지
import MemberMain from '@/views/member/MemberMain.vue'




const routes = [
  {
    path: '/pay',
    name: 'ManageMentPay',
    component: ManageMentPay
  },
  //관리비 사용 내역
  {
    path: '/using',
    name: 'ManageMentUsing',
    component: ManageMentUsing
  },
  //시설 관리
  {
    path: '/facility',
    name: 'FacilityManageMent',
    component: FacilityManageMent
  },
  //----------------------------------------------
  //인트로
  {
    path: '/',
    name: 'PageHIntro',
    component: PageHIntro
  },
  //----------------------------------------------
  //마이페이지
  {
    path: '/member/mypage',
    name: 'MemberMypage',
    component: MemberMypage
  },
  //----------------------------------------------
  //메인페이지
  {
    path: '/member/main',
    name: 'MemberMain',
    component: MemberMain
  },
  //----------------------------------------------
  //공지사항
  {
    path: '/announcement/pageanno',
    name: 'PageAnno',
    component: PageAnno
  },
  //----------------------------------------------
  //회의&투표&설문
  {
    path: '/meeting/pagemeeting',
    name: 'PageMeeting',
    component: PageMeeting
  },
  {
    path: '/meeting/pagearchiveform',
    name: 'PageArchiveForm',
    component: PageArchiveForm
  },
  {
    path: '/meeting/pagemeetingform',
    name: 'PageMeetingForm',
    component: PageMeetingForm
  },
  //----------------------------------------------
  //주차
  {
    path: '/car/pagevisitcar',
    name: 'PageVisitCar',
    component: PageVisitCar
  },
  {
    path: '/car/pagemycar',
    name: 'PageMyCar',
    component: PageMyCar
  },

  //----------------------------------------------
  //민원

  {
    path: '/minone/pageminone',
    name: 'PageMinone',
    component: PageMinone
  },
  {
    path: '/minone/pageminoneform',
    name: 'PageMinoneForm',
    component: PageMinoneForm
  },
  {
    path: '/minone/pagemyminone',
    name: 'PageMyMinone',
    component: PageMyMinone
  },
  {
    path: '/minone/pagemyminoneform',
    name: 'PageMyMinoneForm',
    component: PageMyMinoneForm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router