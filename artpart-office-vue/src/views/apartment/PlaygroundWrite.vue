<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">시설관리 - 놀이터점검</h1>
  </div>
      <div class="table-responsive" id="playground">
        <div class="d-flex justify-content-end">
          <button type="button" class="btn btn-sm btn-outline-secondary">작성</button>
          <router-link to="/seesul-list" class="btn btn-sm btn-outline-secondary">목록</router-link>
        </div>
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th colspan="4" style="text-align:right;">

              </th>
            </tr>
            <tr>
              <th colspan="4" style="text-align:right;"> 점검일자 : <input type="text" value="2023-04-26" class="custom-input" /></th>
                            
            </tr>
            <tr>
              <th scope="col" style="width: 10%"> 구 분 </th>
              <th scope="col" style="width: 60%"> 점 검 사 항 </th>
              <th scope="col" style="width: 20%"> 결 과 </th>
              <th scope="col" style="width: 10%"> 처 리 </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> 1 </td>
              <td style="text-align:left;">안전표시 및 준수사항등의 안내는 되어 있는가</td>
              <td><input type="radio"  name="playground1result" value="양호" class="custom-input"/> 양호
              <input type="radio" name="playground1result" value="불량" class="custom-input"/> 불량</td>
              <td><input type="text" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td> 2 </td>
              <td style="text-align:left;">놀이시설의 파손, 고장, 훼손, 너트풀림등은 없는가</td>
              <td><input type="radio"  name="playground2result" value="양호" class="custom-input" /> 양호
              <input type="radio" name="playground2result" value="불량" class="custom-input" /> 불량</td>
              <td><input type="text"  class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td> 3 </td>
              <td style="text-align:left;">놀이시설의 작동부 주유상태는 양호한가</td>
              <td><input type="radio"  name="playground3result" value="양호" class="custom-input" /> 양호
              <input type="radio" name="playground3result" value="불량" class="custom-input" /> 불량</td>
              <td><input type="text" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td> 4 </td>
              <td style="text-align:left;">모래바닥에 깨진 유리, 돌등은 없는가</td>
              <td><input type="radio"  name="playground4result" value="양호" class="custom-input" /> 양호
              <input type="radio" name="playground4result" value="불량" class="custom-input" /> 불량</td>
              <td><input type="text" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td> 5 </td>
              <td style="text-align:left;">놀이터 CCTV는 정상 작동하는가</td>
              <td><input type="radio"  name="playground5result" value="양호" class="custom-input" /> 양호
              <input type="radio" name="playground5result" value="불량" class="custom-input" /> 불량</td>
              <td><input type="text" class="custom-input" /></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 놀이터점검 영역 끝 -->
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {      
    };
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
  color: #212529;
}
.custom-input {
    border: none;
    background: transparent;
    text-align: center;
  }
</style>