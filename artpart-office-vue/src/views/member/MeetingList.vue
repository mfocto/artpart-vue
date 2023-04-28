<template>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">입주민</h1>
          <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group me-2">
                <router-link to="/MeetingInsert">
                <button type="button" class="btn btn-sm btn-outline-secondary">작성</button>
                 </router-link>
            </div>
            
          </div>
        </div>
  
        <h2>대표자 회의</h2>
        <form>
              등록날짜<input type="date" style="width: 15%">  제목 <input type="text" style="width: 15%"> &nbsp;&nbsp;<button type="submit" name="ad"> 검색</button>     
        </form>
        <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr>   
                <th scope="col">작성자</th>
                <th scope="col">제목</th> 
                <th scope="col">등록날짜</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>김송이</td>
                
                <td><a href="/MeetingDetail">공사</a></td>
                <td>2020-01-01</td>
                
              </tr>
              <tr>
                <td>김송이</td>
                <td><a href="/MeetingDetail">공사</a></td>
                <td>2020-01-01</td>
                
                
              </tr>
              <tr>
                <td>김송이</td>
                <td><a href="/MeetingDetail">공사</a></td>
                <td>2020-01-01</td>
              </tr>
              <tr>
                <td>김송이</td>
                <td><a href="/MeetingDetail">공사</a></td>
                <td>2020-01-01</td>
              </tr>
              <tr>
                <td>김송이</td>
                <td><a href="/MeetingDetail">공사</a></td>
                <td>2020-01-01</td>
              </tr>
              <tr>
                <td>김송이</td>
                <td><a href="/MeetingDetail">공사</a></td>
                <td>2020-01-01</td>
              </tr>
              <tr>
                <td>김송이</td>
                <td><a href="/MeetingDetail">공사</a></td>
                <td>2020-01-01</td>
              </tr>
              <tr>
                <td>김송이</td>
                <td><a href="/MeetingDetail">공사</a></td>
                <td>2020-01-01</td>
              </tr>
              <tr>
                <td>김송이</td>
                <td><a href="/MeetingDetail">공사</a></td>
                <td>2020-01-01</td>
              </tr>
              <tr>
                <td>김송이</td>
                <td><a href="/MeetingDetail">공사</a></td>
                <td>2020-01-01</td>
              </tr>
              <tr>
                <td>김송이</td>
                <td><a href="/MeetingDetail">공사</a></td>
                <td>2020-01-01</td>
              </tr>
              <tr>
                <td>김송이</td>
                <td><a href="/MeetingDetail">공사</a></td>
                <td>2020-01-01</td>
              </tr>
              <tr>
                <td>김송이</td>
                <td><a href="/MeetingDetail">공사</a></td>
                <td>2020-01-01</td>
              </tr>
              <tr>
                <td>김송이</td>
                <td><a href="/MeetingDetail">공사</a></td>
                <td>2020-01-01</td>
              </tr>
              <tr>
                <td>김송이</td>
                <td><a href="/MeetingDetail">공사</a></td>
                <td>2020-01-01</td>
              </tr>
              <tr>
                <td>김송이</td>
                <td><a href="/MeetingDetail">공사</a></td>
                <td>2020-01-01</td>
              </tr>
            </tbody>
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
  