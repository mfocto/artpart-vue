<template>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">입주민</h1>
          <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group me-2">
                <router-link to="/SurveyUpdate">
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
                <th scope="col">등록제목</th>   <td scope="col">동대표 투표</td>         <td></td>  
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">작성자</th>   <td scope="col">김송이</td>          <td></td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">등록날짜</th>   <td scope="col">2020-01-01</td>   <td></td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">마감날짜</th>   <td scope="col">2020-01-11</td>   <td></td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">답변1</th>   <td scope="col">송지형</td>   <td>10명</td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">답변2</th>   <td scope="col">송지형</td>   <td>15명</td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">답변3</th>   <td scope="col">송지형</td>   <td>11명</td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">답변4</th>   <td scope="col">송지형</td>   <td></td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">답변5</th>   <td scope="col">송지형</td>   <td></td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">답변6</th>   <td scope="col"></td>   <td></td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">답변7</th>   <td scope="col"></td>   <td></td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">답변8</th>   <td scope="col"></td>   <td></td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">답변9</th>   <td scope="col"></td>   <td></td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">답변10</th>   <td scope="col"></td>   <td></td>
              </tr>
            </thead>

            <thead>
              <tr>      
                <th scope="col">마감여부</th>   <td scope="col">Y</td>   <td></td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">인원</th>   <td scope="col">총 300명</td>   <td> 36명참여</td>
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
  