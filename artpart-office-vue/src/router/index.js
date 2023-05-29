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
import SlipReg from '@/views/account/SlipReg.vue'
import SlipList from '@/views/account/SlipList.vue'

//직원 정보 관리
import AdminList from '@/views/admin/adminListPage.vue'
import AdminDetail from '@/views/admin/adminDetailPage.vue'
import AdminSignUp from '@/views/admin/adminSignUpPage.vue'
import AdminChange from '@/views/admin/adminChangePage.vue'

//직원 개인 페이지
import AdminMyPage from "@/views/admin/adminMyPage.vue";
//직원 스케줄 관리
import ScheduleList from '@/views/admin/scheduleListPage.vue'
import ScheduleWrite from '@/views/admin/scheduleWrite.vue'
import ScheduleDetail from '@/views/admin/scheduleDetailPage.vue'
import ScheduleChangeAdmin from '@/views/admin/scheduleChangeAdminPage.vue'
import ScheduleChangeTime from '@/views/admin/scheduleChangTimePage.vue'

//차량 관리 페이지
import CarList from '@/views/car/carListPage.vue'
import CarDetail from '@/views/car/carDetailPage.vue'
import CarWrite from '@/views/car/carWritePage.vue'
import CarWriteAdmin from "@/views/car/carWriteAdmin.vue";
import CarWriteMember from "@/views/car/carWriteMember.vue";

import NoticeList from '@/views/notice/NoticeList.vue'
import NoticeDetail from '@/views/notice/NoticeDetail.vue'
import NoticeWrite from '@/views/notice/NoticeWrite.vue'
import ReadList from '@/views/apartment/ReadList.vue'
//시설 관리
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
    path: '/account/slip/reg',
    name: 'SlipReg',
    component: SlipReg
  },
  {
    path: '/account/slip/list',
    name: 'SlipList',
    component: SlipList
  },



  //직원 정보 등록
  {
    path: '/admin/list',
    name: 'AdminList',
    component: AdminList
  },
  {
    path: '/admin/detail',
    name: 'AdminDetail',
    component: AdminDetail
  },
  {
    path: '/admin/signUp',
    name: 'AdminSignUp',
    component: AdminSignUp
  },
  {
    path: '/admin/change',
    name: 'AdminChange',
    component: AdminChange
  },
  //직원 개인 페이지
  {
    path: '/mypage',
    name: 'AdminMyPage',
    component: AdminMyPage
  },
  //직원 스케줄 관리
  {
    path: '/schedule/list',
    name: 'ScheduleList',
    component: ScheduleList
  },
  {
    path: '/schedule/write',
    name: 'ScheduleWrite',
    component: ScheduleWrite
  },
  {
    path: '/schedule/detail',
    name: 'ScheduleDetail',
    component: ScheduleDetail
  },
  {
    path: '/schedule/change/admin',
    name: 'ScheduleChangeAdmin',
    component: ScheduleChangeAdmin
  },
  {
    path: '/schedule/change/time',
    name: 'ScheduleChangeTime',
    component: ScheduleChangeTime
  },
   
  //차량관리
  {
    path: '/car/list',
    name: 'CarList',
    component: CarList

  },
  {
    path: '/car/detail',
    name: 'CarDetail',
    component: CarDetail
  },
  {
    path: '/car/adminwrite',
    name: 'CarWriteAdmin',
    component: CarWriteAdmin
  },
  {
    path: '/car/memberwrite',
    name: 'CarWriteMember',
    component: CarWriteMember
  },
  {
    path: '/car/write',
    name: 'CarWrite',
    component: CarWrite
  },

  //공지사항
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
    path: '/read/list',
    name: 'ReadList',
    component: ReadList
  },
  {
    path: '/seesul/list',
    name: 'SeesulList',
    component: SeesulList
  },
  {
    path: '/seesul/electric',
    name: 'SeesulElectric',
    component: SeesulElectric
  },
  {
    path: '/seesul/gas',
    name: 'SeesulGas',
    component: SeesulGas
  },
  {
    path: '/seesul/elevator',
    name: 'SeesulElevator',
    component: SeesulElevator
  },
  {
    path: '/seesul/playground',
    name: 'SeesulPlayground',
    component: SeesulPlayground
  },
  {
    path: '/electric/write',
    name: 'ElectricWrite',
    component: ElectricWrite
  },
  {
    path: '/gas/write',
    name: 'GasWrite',
    component: GasWrite
  },
  {
    path: '/elevator/write',
    name: 'ElevatorWrite',
    component: ElevatorWrite
  },
  {
    path: '/playground/write',
    name: 'PlaygroundWrite',
    component: PlaygroundWrite
  },
  {
    path: '/company/list',
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