<template>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">입주민</h1>
          <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group me-2">
                <router-link to="/SurveyInsert">
              <button type="button" class="btn btn-sm btn-outline-secondary">작성</button>
                </router-link>
            </div>
            
          </div>
        </div>
  
        <h2>설문조사</h2>
        <form>
              등록날짜 <input type="text" style="width: 15%">  마감여부 <input type="text" style="width: 5%"> &nbsp;&nbsp;<button type="submit" name="ad"> 검색</button>     
        </form>
        <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">등록날짜</th>
                <th scope="col">마감날짜</th>
                <th scope="col">등록내용</th>
                <th scope="col">마감여부</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="col">2020-01-01</th>
                <th scope="col">2020-01-11</th>
                <th scope="col"><a href="/SurveyDetail">공사</a></th>
                <th scope="col">Y</th>
              </tr>
              <tr>
                <th scope="col">2020-01-01</th>
                <th scope="col">2020-01-11</th>
                <th scope="col"><a href="/SurveyDetail">공사</a></th>
                <th scope="col">Y</th>
              </tr>
              <tr>
                <th scope="col">2020-01-01</th>
                <th scope="col">2020-01-11</th>
                <th scope="col"><a href="/SurveyDetail">공사</a></th>
                <th scope="col">Y</th>
              </tr>
              <tr>
                <th scope="col">2020-01-01</th>
                <th scope="col">2020-01-11</th>
                <th scope="col"><a href="/SurveyDetail">공사</a></th>
                <th scope="col">Y</th>
              </tr>
              <tr>
                <th scope="col">2020-01-01</th>
                <th scope="col">2020-01-11</th>
                <th scope="col"><a href="/SurveyDetail">공사</a></th>
                <th scope="col">Y</th>
              </tr>
              <tr>
                <th scope="col">2020-01-01</th>
                <th scope="col">2020-01-11</th>
                <th scope="col"><a href="/SurveyDetail">공사</a></th>
                <th scope="col">Y</th>
              </tr>
              <tr>
                <th scope="col">2020-01-01</th>
                <th scope="col">2020-01-11</th>
                <th scope="col"><a href="/SurveyDetail">공사</a></th>
                <th scope="col">Y</th>
              </tr>
              <tr>
                <th scope="col">2020-01-01</th>
                <th scope="col">2020-01-11</th>
                <th scope="col"><a href="/SurveyDetail">공사</a></th>
                <th scope="col">Y</th>
              </tr>
              <tr>
                <th scope="col">2020-01-01</th>
                <th scope="col">2020-01-11</th>
                <th scope="col"><a href="/SurveyDetail">공사</a></th>
                <th scope="col">Y</th>
              </tr>
              <tr>
                <th scope="col">2020-01-01</th>
                <th scope="col">2020-01-11</th>
                <th scope="col"><a href="/SurveyDetail">공사</a></th>
                <th scope="col">Y</th>
              </tr>
              <tr>
                <th scope="col">2020-01-01</th>
                <th scope="col">2020-01-11</th>
                <th scope="col"><a href="/SurveyDetail">공사</a></th>
                <th scope="col">Y</th>
              </tr>
              <tr>
                <th scope="col">2020-01-01</th>
                <th scope="col">2020-01-11</th>
                <th scope="col"><a href="/SurveyDetail">공사</a></th>
                <th scope="col">Y</th>
              </tr>
              <tr>
                <th scope="col">2020-01-01</th>
                <th scope="col">2020-01-11</th>
                <th scope="col"><a href="/SurveyDetail">공사</a></th>
                <th scope="col">Y</th>
              </tr>
              <tr>
                <th scope="col">2020-01-01</th>
                <th scope="col">2020-01-11</th>
                <th scope="col"><a href="/SurveyDetail">공사</a></th>
                <th scope="col">Y</th>
              </tr>
              <tr>
                <th scope="col">2020-01-01</th>
                <th scope="col">2020-01-11</th>
                <th scope="col"><a href="/SurveyDetail">공사</a></th>
                <th scope="col">Y</th>
              </tr>
              <tr>
                <th scope="col">2020-01-01</th>
                <th scope="col">2020-01-11</th>
                <th scope="col"><a href="/SurveyDetail">공사</a></th>
                <th scope="col">Y</th>
              </tr>
            </tbody>
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
    color: #000000;
  }
  </style>
  