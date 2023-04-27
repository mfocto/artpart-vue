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

const routes = [
  {
    path: '/PageHome',
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



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router