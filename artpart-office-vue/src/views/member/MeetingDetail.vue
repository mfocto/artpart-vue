<template>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">입주자 대표회의</h1>
          <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group me-2">
                <router-link to="/MeetingUpdate">
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
                <th scope="col">제목</th>   <td scope="col">공사</td>        <td></td>    
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">작성자</th>   <td scope="col">김송이</td>        <td></td>    
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col" style="vertical-align: top;">내용</th>   <td scope="col">우아루알ㅇ러ㅜㄹㄴㅁㅇ룽리ㅏㄴㅇ라ㅣㅇㄴ런아림넝라우왕<br/>asdsadasdasdsadasdasd<br/>asdasdasdasdasd</td>        <td></td>    
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
  