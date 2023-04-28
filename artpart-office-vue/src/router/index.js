import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/views/home/PageHome.vue'
import PageHIntro from '@/views/home/PageHIntro.vue'

//입주민 관리 
import MemberList from '@/views/member/MemberList'
import MemberDetail from '@/views/member/MemberDetail'
import MemberUpdate from '@/views/member/MemberUpdate'
//대표자회의 
import MeetingList from '@/views/member/MeetingList'
import MeetingInsert from '@/views/member/MeetingInsert'
import MeetingDetail from '@/views/member/MeetingDetail'
import MeetingUpdate from '@/views/member/MeetingUpdate'
//설문조사
import SurveyList from '@/views/member/SurveyList'
import SurveyInsert from '@/views/member/SurveyInsert'
import SurveyUpdate from '@/views/member/SurveyUpdate'
import SurveyDetail from '@/views/member/SurveyDetail'
//민원관리
import ComplaintList from '@/views/member/ComplaintList'
import ComplaintInsert from '@/views/member/ComplaintInsert.vue'
import ComplaintUpdate from '@/views/member/ComplaintUpdate'
import ComplaintDetail from '@/views/member/ComplaintDetail'

import MFee from '@/views/accounting/MFee.vue'
import CashJournal from '@/views/accounting/Cash-journal.vue'
import reportD from '@/views/accounting/D-report.vue'
import reportM from '@/views/accounting/M-report.vue'
import VoucherReg from '@/views/accounting/Voucher-reg.vue'
import VoucherInq from '@/views/accounting/Voucher-inquiry.vue'

import NoticeList from '@/views/notice/NoticeList.vue'
import NoticeDetail from '@/views/notice/NoticeDetail.vue'
import NoticeWrite from '@/views/notice/NoticeWrite.vue'
import Read from '@/views/apartment/Read.vue'
import SeesulList from '@/views/apartment/SeesulList.vue'
import SeesulElectric from '@/views/apartment/SeesulElectric.vue'
import SeesulGas from '@/views/apartment/SeesulGas.vue'
import SeesulElevator from '@/views/apartment/SeesulElevator.vue'
import SeesulPlayground from '@/views/apartment/SeesulPlayground.vue'
import ElectricWrite from '@/views/apartment/ElectricWrite.vue'
import GasWrite from '@/views/apartment/GasWrite.vue'
import ElevatorWrite from '@/views/apartment/ElevatorWrite.vue'
import PlaygroundWrite from '@/views/apartment/PlaygroundWrite.vue'
import CompanyList from '@/views/company/CompanyList.vue'


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
//----------------------------------------------
  //대표자 회의
  {
    path: '/MeetingList',
    name: 'MeetingList',
    component: MeetingList
  },
  //대표자 화의 작성폼
  {
    path: '/MeetingInsert',
    name: 'MeetingInsert',
    component: MeetingInsert
  },
  //대표자 화의 상세보기
  {
  path: '/MeetingDetail',
  name: 'MeetingDetail',
  component: MeetingDetail
  },
 
  //대표자 화의 수정폼
  {
    path: '/MeetingUpdate',
    name: 'MeetingUpdate',
    component: MeetingUpdate
  },


//----------------------------------------
  //입주민 관리
  {
    path: '/MemberList',
    name: 'MemberList',
    component: MemberList
  },
  {
    path: '/MemberDetail',
    name: 'MemberDetail',
    component: MemberDetail
  },
  {
    path: '/MemberUpdate',
    name: 'MemberUpdate',
    component: MemberUpdate
  },
//-----------------------------------------------
//설문조사
  {
  path: '/SurveyList',
  name: 'SurveyList',
  component: SurveyList
  },
  {
    path: '/SurveyInsert',
    name: 'SurveyInsert',
    component: SurveyInsert
  },
  {
    path: '/SurveyUpdate',
    name: 'SurveyUpdate',
    component: SurveyUpdate
  },
  {
    path: '/SurveyDetail',
    name: 'SurveyDetail',
    component: SurveyDetail
  },
//----------------------------------------------------
//민원관리
{
  path: '/ComplaintList',
  name: 'ComplaintList',
  component: ComplaintList
},
{
  path: '/ComplaintInsert',
  name: 'ComplaintInsert',
  component: ComplaintInsert
},
{
  path: '/ComplaintUpdate',
  name: 'ComplaintUpdate',
  component: ComplaintUpdate
},
{
  path: '/ComplaintDetail',
  name: 'ComplaintDetail',
  component: ComplaintDetail
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
  // 공지사항
  {
    path: '/notice-list',
    name: 'NoticeList',
    component: NoticeList
  },
  {
    path: '/notice-detail',
    name: 'NoticeDetail',
    component: NoticeDetail
  },
  {
    path: '/notice-write',
    name: 'NoticeWrite',
    component: NoticeWrite
  },
  // 아파트관리
  {
    path: '/read',
    name: 'Read',
    component: Read
  },
  {
    path: '/seesul-list',
    name: 'SeesulList',
    component: SeesulList
  },
  {
    path: '/seesul-electric',
    name: 'SeesulElectric',
    component: SeesulElectric
  },
  {
    path: '/seesul-gas',
    name: 'SeesulGas',
    component: SeesulGas
  },
  {
    path: '/seesul-elevator',
    name: 'SeesulElevator',
    component: SeesulElevator
  },
  {
    path: '/seesul-playground',
    name: 'SeesulPlayground',
    component: SeesulPlayground
  },
  {
    path: '/electric-write',
    name: 'ElectricWrite',
    component: ElectricWrite
  },
  {
    path: '/gas-write',
    name: 'GasWrite',
    component: GasWrite
  },
  {
    path: '/elevator-write',
    name: 'ElevatorWrite',
    component: ElevatorWrite
  },
  {
    path: '/playground-write',
    name: 'PlaygroundWrite',
    component: PlaygroundWrite
  },
  {
    path: '/company-list',
    name: 'CompanyList',
    component: CompanyList
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