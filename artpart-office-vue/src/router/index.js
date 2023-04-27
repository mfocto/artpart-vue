import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/views/home/PageHome.vue'
import PageHIntro from '@/views/home/PageHIntro.vue'
import MFee from '@/views/accounting/MFee.vue'
import CashJournal from '@/views/accounting/Cash-journal.vue'
import reportD from '@/views/accounting/D-report.vue'
import reportM from '@/views/accounting/M-report.vue'
import VoucherReg from '@/views/accounting/Voucher-reg.vue'
import VoucherInq from '@/views/accounting/Voucher-inquiry.vue'
import MFeeList from '@/views/accounting/MFeeList.vue'

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
  {
    path: '/feelist',
    name: 'MFeeList',
    component: MFeeList
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router