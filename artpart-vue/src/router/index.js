import { createRouter, createWebHistory } from 'vue-router'
import PageHIntro from '@/views/home/PageHIntro.vue'

//관리비 
import UsingList from '@/views/manageMent/UsingList.vue'
import PayMentList from '@/views/manageMent/PayMentList.vue'

//시설관리
import SeesulList from '@/views/seesul/SeesulList.vue'
import SeesulElectric from '@/views/seesul/SeesulElectric.vue'
import SeesulGas from '@/views/seesul/SeesulGas.vue'
import SeesulElevator from '@/views/seesul/SeesulElevator.vue'
import SeesulPlayground from '@/views/seesul/SeesulPlayground.vue'

//공지사항
import NoticeList from '@/views/notice/NoticeList.vue'
import NoticeDetail from '@/views/notice/NoticeDetail.vue'

//민원 
import PageMinUpdate from '@/views/minone/PageMinUpdate.vue'
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
  // --------------------------------
  //시설 관리
  {
    path: '/seesul/list',
    name: 'SeesulList',
    component: SeesulList
  },
  //전기
  {
    path: '/seesul/electric',
    name: 'SeesulElectric',
    component: SeesulElectric
  },
  //가스
  {
    path: '/seesul/gas',
    name: 'SeesulGas',
    component: SeesulGas
  },
  //엘베
  {
    path: '/seesul/elevator',
    name: 'SeesulElevator',
    component: SeesulElevator
  },
  //놀이터
  {
    path: '/seesul/playground',
    name: 'SeesulPlayground',
    component: SeesulPlayground
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
    path: '/notice/list',
    name: 'NoticeList',
    component: NoticeList
  },
  {
    path: '/notice/detail',
    name: 'NoticeDetail',
    component: NoticeDetail
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

  //민원카테고리(리스트로 이동)
  {
    path: '/minone/pageminone',  
    name: 'PageMinone',
    component: PageMinone
  },
  //민원업데이트
  {
    path: '/minone/pageminupdate',  
    name: 'PageMinUpdate',
    component: PageMinUpdate
  },
  //글쓰기로 이동
  {
    path: '/minone/pageminoneform', 
    name: 'PageMinoneForm',
    component: PageMinoneForm
  },
  //리스트로 이동
  {
    path: '/minone/pagemyminone', 
    name: 'PageMyMinone',
    component: PageMyMinone
  },
  //글 상세정보 조회
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