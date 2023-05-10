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

import MFee from '@/views/account/MFee.vue'
import CashJournal from '@/views/account/Cash-journal.vue'
import reportD from '@/views/account/D-report.vue'
import reportM from '@/views/account/M-report.vue'
import VoucherReg from '@/views/account/Voucher-reg.vue'
import VoucherInq from '@/views/account/Voucher-inquiry.vue'

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

//차량 관리 페이지
import cList from '@/views/car/carListPage.vue'
import cDeltail from '@/views/car/carDeltailPage.vue'
import cSignUp from '@/views/car/carSignUpPage.vue'
import cChange from '@/views/car/carChangePage.vue'

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


import MFeeList from '@/views/account/MFeeList.vue'



const routes = [
  {
    path: '/',
    name: 'PageHIntro',
    component: PageHIntro
  },
  {
    path: '/login',
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
    path: '/account/fee',
    name: 'MFee',
    component: MFee
  },
  {
    path: '/account/cash-journal',
    name: 'CashJournal',
    component: CashJournal
  },
  {
    path: '/account/daily-report',
    name: 'reportD',
    component: reportD
  },
  {
    path: '/account/monthly-report',
    name: 'reportM',
    component: reportM
  },
  {
    path: '/account/voucher-registration',
    name: 'VoucherReg',
    component: VoucherReg
  },
  {
    path: '/account/voucher-inquiry',
    name: 'VoucherInq',
    component: VoucherInq
  },

  // 공지사항


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
   
  //차량관리
  {
    path: '/carList',
    name: 'cList',
    component: cList

  },
  {
    path: '/carDeltail',
    name: 'cDeltail',
    component: cDeltail
  },
  {
    path: '/carSingUp',
    name: 'cSignUp',
    component: cSignUp

  },
  {
    path: '/carChange',
    name: 'cChange',
    component: cChange

  },
  {
    path: '/notice/list',
    name: 'NoticeList',
    component: NoticeList
  },
  {
    path: '/notice/detail',
    name: 'NoticeDetail',
    component: NoticeDetail
  },
  {
    path: '/notice/write',
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
    path: '/account/feelist',
    name: 'MFeeList',
    component: MFeeList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router