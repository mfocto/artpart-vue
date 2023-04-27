<template>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">민원 조회</h1>
          <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group me-2">
                <router-link to="/ComplaintUpdate">
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
                <th scope="col">이름</th>   <td scope="col">송지형</td>        <td></td>    
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">날짜</th>   <td scope="col">2020-01-01</td>        <td></td>    
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">핸드폰번호</th>   <td scope="col">010-8896-4808</td>        <td></td>    
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">민원내용</th>   <td scope="col">101동 1번엘베고장이슈</td>   <td></td>         
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">처리여부</th>   <td scope="col">Y</td>     <td></td>       
              </tr>
            </thead>
            
            
          </table>
        </div>
  </template>
  
  <script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
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
    color: #42b983;
  }
  </style>
  