import { createRouter, createWebHistory } from 'vue-router'
import PageHIntro from '@/views/home/PageHIntro.vue'
//관리비 사용
import UsingList from '@/views/manageMent/UsingList.vue'
//관리비 납부
import PayMentList from '@/views/manageMent/PayMentList.vue'
//시설관리
import SeesulList from '@/views/seesul/SeesulList.vue'

//공지사항
import PageAnno from '@/views/announcement/PageAnno.vue'
import PageAnnoForm from '@/views/announcement/PageAnnoForm.vue'
//민원
import PageMinone from '@/views/minone/PageMinone.vue'
import PageMinoneForm from '@/views/minone/PageMinoneForm.vue'
import PageMyMinone from '@/views/minone/PageMyMinone.vue'
import PageMyMinoneForm from '@/views/minone/PageMyMinoneForm.vue'

//회의&투표&설문
import PageMeeting from '@/views/meeting/PageMeeting.vue'
import PageArchiveForm from '@/views/meeting/PageArchiveForm.vue'

//마이페이지
import MemberMypage from '@/views/member/MemberMypage.vue'

//메인페이지
import MemberMain from '@/views/member/MemberMain.vue'




const routes = [
  //관리비 납부 내역
  {
    path: '/payment/list',
    name: 'PayMentList',
    component: PayMentList
  },
  //관리비 사용 내역
  {
    path: '/using/list',
    name: 'UsingList',
    component: UsingList
  },
  //시설 관리
  {
    path: '/seesul/list',
    name: 'SeesulList',
    component: SeesulList
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
  {
    path: '/announcement/PageAnnoForm',
    name: 'PageAnnoForm',
    component: PageAnnoForm
  },
  //----------------------------------------------
  //회의&투표&설문
  {
    path: '/meeting/meetingpage',
    name: 'PageMeeting',
    component: PageMeeting
  },
  {
    path: '/meeting/pagearchiveform',
    name: 'PageArchiveForm',
    component: PageArchiveForm
  },


  //----------------------------------------------
  //민원

  //민원카테고리(메인)
  {
    path: '/minone/pageminone',
    name: 'PageMinone',
    component: PageMinone
  },
  //민원글쓰기
  {
    path: '/minone/pageminoneform',
    name: 'PageMinoneForm',
    component: PageMinoneForm
  },
  //내민원 목록
  {
    path: '/minone/pagemyminone',
    name: 'PageMyMinone',
    component: PageMyMinone
  },
  //내민원 상세보기
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