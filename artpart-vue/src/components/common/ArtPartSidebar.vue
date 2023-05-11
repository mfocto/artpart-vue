<template>  

  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-body-tertiary sidebar collapse ">
    <router-link class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" to="/member/main">
      <img src="../../assets/images/rogo/ArtPart_navy.png" width="150" height="100" class="d-inline-block align-top" alt="">
    </router-link>
    <hr>
    <div class="flex-shrink-0 p-3" style="width: 280px;">
      <ul class="list-unstyled ps-0">
        <li class="mb-1">
          <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
            관리비
          </button>
          <div class="collapse" id="home-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><router-link to="/using/list" class="link-dark d-inline-flex text-decoration-none rounded">관리비 사용 내역</router-link></li>
              <li><router-link to="/payment/list" class="link-dark d-inline-flex text-decoration-none rounded">관리비 납부 내역</router-link></li>
            </ul>
          </div>
        </li>
        <li class="mb-1">
          <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
            시설관리현황(월)
          </button>
          <div class="collapse" id="dashboard-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><router-link to="/seesul/list" class="link-body-emphasis d-inline-flex text-decoration-none rounded">시설관리현황</router-link></li>
            </ul>
          </div>
        </li>
        <li class="mb-1">
          <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
            아파트공지
          </button>
          <div class="collapse" id="orders-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><router-link to="/announcement/pageanno" class="link-body-emphasis d-inline-flex text-decoration-none rounded">공지사항</router-link></li>
            </ul>
          </div>
        </li>
        <!-- <li class="border-top my-3"></li> -->
        <li class="mb-1">
          <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#resident-collapse" aria-expanded="false">
            민원
          </button>
          <div class="collapse" id="resident-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><router-link to="/minone/pageminone" class="link-dark d-inline-flex text-decoration-none rounded">민원신청</router-link></li>
              <li><router-link to="/minone/pagemyminone" class="link-dark d-inline-flex text-decoration-none rounded">내 민원 조회</router-link></li>
            </ul>
          </div>
        </li>
        <li class="mb-1">
          <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#member-collapse" aria-expanded="false">
            회의/투표/설문
          </button>
          <div class="collapse" id="member-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><router-link to="/meeting/meetingpage" class="link-dark d-inline-flex text-decoration-none rounded">회의/투표/설문</router-link></li>
            </ul>
          </div>
        </li>
        <li class="mb-1">
          <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#car-collapse" aria-expanded="false">
            주차
          </button>
          <div class="collapse" id="car-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><router-link to="/car/pagemycar" class="link-dark d-inline-flex text-decoration-none rounded">내 차량 등록</router-link></li>
              <li><router-link to="/car/pagevisitcar" class="link-dark d-inline-flex text-decoration-none rounded">방문차량 등록</router-link></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <hr>
    <br><br><br><br><br><br><br><br>
  
  
    <!-- footer -->
  <footer class="py-5" style="background-color: shadow; color: #gray;">     
      <hr style="border-color: gray;"/>
      <br/>
    <div class="footer-wt">
    Seoul Mapo-gu Baekbeom-ro 23, 3층 <br>
    고객센터 : 02-739-7235 | https://ictedu.co.kr
    <br>
    팀장 : 김낙현 | 팀원 : 이혜연 송영욱 김경환 송지형 김수경
    <br><br>
    (주)ArtPart사이트 내 정보, 콘텐츠, UI 등에 대한 <br>무단복제, 전송, 배포, 스크래핑 등의 행위는 저작권법, 콘텐츠산업 진흥법 등 관련법령에 의하여 엄격히 금지됩니다.
    <br><br>
    Copyright © 023 ArtPart Inc.<br>TEAM 0040. Project ArtPart. All rights reserved.
    </div>

    <hr style="border-color: gray;"/>
  </footer>
  </nav>
  
    </template>
    <script>
    export default {
    
    }
    </script>
  
  
  
  
  
  
    <style scoped>
    .footer-wt{
      font-size:x-small;
    }
  
    #sidebarMenu {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1000;
    text-align: center !important;
    width: 340px;
  }
    
    .col-md-3{
      background-color: #f8f9fa  !important;  /* 배경색 */
    }
    .btn {
      color:  rgb(36, 36, 36) !important;   /* 글씨색 */
    }
    .link-body-emphasis, .link-dark{
      color: #aa879e !important;
    }
    .btn-toggle::after {
    display: inline-block;
    margin-left: .5rem;
    content: "\25B6"; /* This is the Unicode for the right-pointing arrow */
    font-family: Arial, sans-serif; /* Use a font that supports the Unicode character */
    transform: rotate(-90deg);
    transition: transform 0.15s ease-in-out;
  }
  
  .btn-toggle.collapsed::after {
    transform: rotate(90deg);
  }
  
  
    </style>