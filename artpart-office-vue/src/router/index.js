import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/views/home/PageHome.vue'
import PageHIntro from '@/views/home/PageHIntro.vue'
import MFee from '@/views/accounting/MFee.vue'
import CashJournal from '@/views/accounting/Cash-journal.vue'
import reportD from '@/views/accounting/D-report.vue'
import reportM from '@/views/accounting/M-report.vue'
import VoucherReg from '@/views/accounting/Voucher-reg.vue'
import VoucherInq from '@/views/accounting/Voucher-inquiry.vue'

//직원 정보 관리
import aList from '@/views/admin/adminListPage.vue'
import aDeltail from '@/views/admin/adminDeltailPage.vue'
import aSignUp from '@/views/admin/adminSignUpPage.vue'
import aChange from '@/views/admin/adminChangPage.vue'

//직원 스케줄 관리
import sList from '@/views/admin/scheduleListPage.vue'
import sSingUp from '@/views/admin/scheduleSignUpPage.vue'
import sDeltail from '@/views/admin/scheduleDeltailPage.vue'
import sChangeA from '@/views/admin/scheduleChangeAdminPage.vue'
import sChanget from '@/views/admin/scheduleChangTimePage.vue'

// 입주민 차량 관리 페이지
import mcList from '@/views/car/memberCarListPage.vue'
import mcDeltail from '@/views/car/memberCarDeltailPage.vue'
import mcSignUp from '@/views/car/memberCarSignUpPage.vue'
import mcChange from '@/views/car/memberCarChangePage.vue'
import mcCheck from '@/views/car/memberCarCheckPage.vue'

// 방문객 차량 관리 페이지
import vcList from '@/views/car/visitorCarListPage.vue'
import vcDeltail from '@/views/car/visitorCarDeltailPage.vue'
import vcSignUp from '@/views/car/visitorCarSignUpPage.vue'
import vcChange from '@/views/car/visitorCarChangePage.vue'
import vcCheck from '@/views/car/visitorCarCheckPage.vue'


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
  {
    path: '/fee',
    name: 'MFee',
    component: MFee
  },
  {
    path: '/cash-journal',
    name: 'CashJournal',
    component: CashJournal
  },
  {
    path: '/daily-report',
    name: 'reportD',
    component: reportD
  },
  {
    path: '/monthly-report',
    name: 'reportM',
    component: reportM
  },
  {
    path: '/voucher-registration',
    name: 'VoucherReg',
    component: VoucherReg
  },
  {
    path: '/voucher-inquiry',
    name: 'VoucherInq',
    component: VoucherInq
  },
  //직원 정보 등록
  {
    path: '/adminList',
    name: 'aList',
    component: aList
  },
  {
    path: '/adminDeltail',
    name: 'aDeltail',
    component: aDeltail
  },
  {
    path: '/adminSignUp',
    name: 'aSignUp',
    component: aSignUp
  },
  {
    path: '/adminChange',
    name: 'aChange',
    component: aChange
  },
  //직원 스케줄 관리
  {
    path: '/scheduleList',
    name: 'sList',
    component: sList
  },
  {
    path: '/scheduleSingUp',
    name: 'sSingUp',
    component: sSingUp
  },
  {
    path: '/scheduleDeltail',
    name: 'sDeltail',
    component: sDeltail
  },
  {
    path: '/scheduleChangeAdmin',
    name: 'sChangeA',
    component: sChangeA
  },
  {
    path: '/scheduleChangeTime',
    name: 'sChangeT',
    component: sChanget
  },
  // 입주민 차량 관리
  {
    path: '/memberCarList',
    name: 'mcList',
    component: mcList
  },
  {
    path: '/memberCarDeltail',
    name: 'mcDeltail',
    component: mcDeltail
  },
  {
    path: '/memberSingUp',
    name: 'mcSignUp',
    component: mcSignUp

  },
  {
    path: '/memberCarCheck',
    name: 'mcCheck',
    component: mcCheck
  },
  {
    path: '/memberCarChange',
    name: 'mcChange',
    component: mcChange
  },
  // 방문객 차량 관리
  {
    path: '/visitorCarList',
    name: 'vcList',
    component: vcList
  },
  {
    path: '/visitorCarDeltail',
    name: 'vcDeltail',
    component: vcDeltail
  },
  {
    path: '/visitorSingUp',
    name: 'vcSignUp',
    component: vcSignUp

  },
  {
    path: '/visitorCarCheck',
    name: 'vcCheck',
    component: vcCheck
  },
  {
    path: '/visitorCarChange',
    name: 'vcChange',
    component: vcChange
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router