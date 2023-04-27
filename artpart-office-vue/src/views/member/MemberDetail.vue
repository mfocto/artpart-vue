<template>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">입주민</h1>
          <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group me-2">
                <router-link to="/MemberUpdate">
              <button type="button" class="btn btn-sm btn-outline-secondary">수정</button>
            </router-link>
              <button type="button" class="btn btn-sm btn-outline-secondary">삭제</button>
              <button type="button" class="btn btn-sm btn-outline-secondary">목록</button>
            </div>
            
          </div>
        </div>
  
        
        <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr>      
                <th scope="col">동</th>   <td scope="col">1001</td>           
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">호수</th>   <td scope="col">101</td>          
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">입주날짜</th>   <td scope="col">2020-01-01</td>   
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">핸드폰번호</th>   <td scope="col">010-8896-4808</td>   
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">등록차량1</th>   <td scope="col">12하 1234</td>   
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">등록차량2</th>   <td scope="col">34하 5678</td>   
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">아이디</th>   <td scope="col">gud4808</td>   
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">이름</th>   <td scope="col">송지형</td>   
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">입주여부</th>   <td scope="col">Y</td>   
              </tr>
            </thead>
            
          </table>
        </div>
  </template>
  
  <script>
  export default {
   
  
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #000000;
  }
  </style>
  