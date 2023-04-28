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

import NoticeList from '@/views/notice/NoticeList.vue'
import NoticeDetail from '@/views/notice/NoticeDetail.vue'
import NoticeWrite from '@/views/notice/NoticeWrite.vue'
import Read from '@/views/apartment/Read.vue'
import Seesul from '@/views/apartment/Seesul.vue'
import CompanyList from '@/views/company/CompanyList.vue'


import MFeeList from '@/views/accounting/MFeeList.vue'



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
   },
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
  {
    path: '/read',
    name: 'Read',
    component: Read
  },
  {
    path: '/seesul',
    name: 'Seesul',
    component: Seesul
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