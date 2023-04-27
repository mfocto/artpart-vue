<template>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">입주민</h1>
          
        </div>
  
        
  
        
        <div class="table-responsive">
          
          <table class="table table-striped table-sm">
            <thead class="boarder-0">
              <tr>
                <th scope style="text-align:left;">동</th>
                <th scope="col" style="text-align:left;" colspan="3"><input type="text" style="width: 30%" value="101" /></th>
              </tr>
              <tr>
                <th scope style="text-align:left;">호수</th>
                <th scope="col" style="text-align:left;" colspan="3"><input type="text" style="width: 30%" value="101" ></th>
              </tr>
              <tr>
                <th scope style="text-align:left;">입주날짜</th>
                <th scope="col" style="text-align:left;" colspan="3"><input type="text" style="width: 30%" value="2020-01-01" ></th>
              </tr>
              <tr>
                <th scope style="text-align:left;">핸드폰번호</th>
                <th scope="col" style="text-align:left;" colspan="3"><input type="text" style="width: 30%" value="010-1234-5678" ></th>
              </tr>
              
              <tr>
                <th scope style="text-align:left;">비밀번호</th>
                <th scope="col" style="text-align:left;" colspan="3"><input type="passowrd" :readonly="isReadonly" style="width: 30%" value="*******" ></th>
              </tr>
              <tr>
                <th scope style="text-align:left;">비밀번호 확인</th>
                <th scope="col" style="text-align:left;" colspan="3"><input type="passowrd" :readonly="isReadonly" style="width: 30%" value="*******"></th>
                
                
             
            </tr>
          
              <tr>
                <th scope style="text-align:left;">이름</th>
                <th scope="col" style="text-align:left;" colspan="3"><input type="text" style="width: 30%" value="송지형" ></th>
              </tr>
              <tr>
                <th scope style="text-align:left;">등록차량 1</th>
                <th scope="col" style="text-align:left;" colspan="3"><input type="text" style="width: 30%" value="12하 1234" ></th>
              </tr>
              <tr>
                <th scope style="text-align:left;">등록차량 2</th>
                <th scope="col" style="text-align:left;" colspan="3"><input type="text" style="width: 30%" value="34하 5678" ></th>
              </tr>
              <tr>
                <th scope style="text-align:left;">입주여부</th>
                <th scope="col" style="text-align:left;" colspan="3"><input type="text" style="width: 30%" value="Y" ></th>
              </tr>
             
              <tr>
                <th scope="col" colspan="4" style="text-align:right;">
                    <button type="button" class="btn btn-sm btn-outline-secondary" @click="toggleReadonly">비밀번호 수정하기</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">목록</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">작성</button>
                  
                </th>
              </tr>
            </thead>
           
          </table>
        </div>
  </template>
  
  <script>
  export default {
    data() {
    return {
      isReadonly: true,
      selectedOption: 'selected' 
    };
  },
  methods: {
    toggleReadonly() {
      this.isReadonly = !this.isReadonly;
    }
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
  