<template>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">민원 수정</h1>
          
          
        </div>
  
        
  
        
        <div class="table-responsive">
          
          <table class="table table-striped table-sm">
            <thead class="boarder-0">
              <tr>
                <th scope style="text-align:left;">제목</th>
                <th scope="col" style="text-align:left;" colspan="3"><input type="text" style="width: 30%" v-model="title" placeholder="제목" /></th>
              </tr>
              <tr>
                <th scope style="text-align:left;">첨부파일</th>
                <th scope="col" style="text-align:left;" colspan="3"><input type="file" style="width: 30%"  /></th>
              </tr>
              <tr>
                <th scope style="text-align:left;">처리여부</th>
                <th scope="col" style="text-align:left;" colspan="3"><input type="radio"  name="b" value="Y" />Y<input type="radio"  name="b" value="N" />N</th>
              </tr>
              
            </thead>
            <tbody>
              <tr>
                <th scope style="text-align:left;">내용</th>
                <td colspan="4" style="text-align:left;">
                  <textarea v-model="content" rows="10" style="width: 30%;" placeholder="공지사항 내용을 입력하세요."></textarea>
                </td>
              </tr>
            </tbody>
            <tr>
                <th scope="col" colspan="4" style="text-align:right;">
                  <button type="button" class="btn btn-sm btn-outline-secondary">목록</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">작성</button>
                </th>
              </tr>
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
    color: #42b983;
  }
  </style>
  