<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">시설관리 - 가스점검</h1>
  </div>
  <!-- 전기점검 영역 시작 -->
      <div class="table-responsive">
        <div class="d-flex justify-content-end">
          <button type="button" class="btn btn-sm btn-outline-secondary">작성</button>
          <router-link to="/seesul/list" class="btn btn-sm btn-outline-secondary">목록</router-link>
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
              <td rowspan="7">정압기</td>
              <td style="text-align:left;">1. 가스 누설 경보기 작동 상태는?</td>
              <td><input type="radio"  name="gas1_1result" value="양호" class="custom-input"/> 양호
              <input type="radio" name="gas1_1result" value="불량" class="custom-input"/> 불량</td>
              <td><input type="text" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">2. 가스 누설 유무는?</td>
              <td><input type="radio"  name="gas1_2result" value="양호" class="custom-input" /> 양호
              <input type="radio" name="gas1_2result" value="불량" class="custom-input" /> 불량</td>
              <td><input type="text" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">3. 이상압 통보 설비 작동 상태는?</td>
              <td><input type="radio"  name="gas1_3result" value="양호" class="custom-input" /> 양호
              <input type="radio" name="gas1_3result" value="불량" class="custom-input" /> 불량</td>
              <td><input type="text" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">4. 가스의 압력 측정 기록 및 게이지 작동 상태는?</td>
              <td><input type="radio"  name="gas1_4result" value="양호" class="custom-input" /> 양호
              <input type="radio" name="gas1_4result" value="불량" class="custom-input" /> 불량</td>
              <td><input type="text"  class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">5. 환기구 통풍상태는 양호한가?</td>
              <td><input type="radio"  name="gas1_5result" value="양호" class="custom-input" /> 양호
              <input type="radio" name="gas1_5result" value="불량" class="custom-input" /> 불량</td>
              <td><input type="text" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">6. 전기설비의 작동 유무(방폭 등, 히터트레스) 상태는?</td>
              <td><input type="radio"  name="gas1_6result" value="양호" class="custom-input" /> 양호
              <input type="radio" name="gas1_6result" value="불량" class="custom-input" /> 불량</td>
              <td><input type="text" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">7. 외부인의 출입은 없는가?</td>
              <td><input type="radio"  name="gas1_7result" value="양호" class="custom-input" /> 양호
              <input type="radio" name="gas1_7result" value="불량" class="custom-input" /> 불량</td>
              <td><input type="text" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="7">배관</td>
              <td style="text-align:left;">1. 가스계량기 작동 상태는?</td>
              <td><input type="radio"  name="gas2_1result" value="양호" class="custom-input" /> 양호
              <input type="radio" name="gas2_1result" value="불량" class="custom-input" /> 불량</td>
              <td><input type="text" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">2. 배관 도색 상태는?</td>
              <td><input type="radio"  name="gas2_2result" value="양호" class="custom-input" /> 양호
              <input type="radio" name="gas2_2result" value="불량" class="custom-input" /> 불량</td>
              <td><input type="text" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">3. 가스 누설 자동 차단기 및 누설 경보기 작동 상태는?</td>
              <td><input type="radio"  name="gas2_3result" value="양호" class="custom-input" /> 양호
              <input type="radio" name="gas2_3result" value="불량" class="custom-input" /> 불량</td>
              <td><input type="text" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">4. 가스 누설여부(비눗물 확인)는 확인되었는가?</td>
              <td><input type="radio"  name="gas2_4result" value="양호" class="custom-input" /> 양호
              <input type="radio" name="gas2_4result" value="불량" class="custom-input" /> 불량</td>
              <td><input type="text" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">5. 호스 길이(30cm 이내) 및 각 부위 연결 상태는?</td>
              <td><input type="radio"  name="gas2_5result" value="양호" class="custom-input" /> 양호
              <input type="radio" name="gas2_5result" value="불량" class="custom-input" /> 불량</td>
              <td><input type="text" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">6. 압력 표기 및 흐름 방향 표시 상태는?</td>
              <td><input type="radio"  name="gas2_6result" value="양호" class="custom-input" /> 양호
              <input type="radio" name="gas2_6result" value="불량" class="custom-input" /> 불량</td>
              <td><input type="text" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">7. 배관 고정 상태는 양호한가?</td>
              <td><input type="radio"  name="gas2_7result" value="양호" class="custom-input" /> 양호
              <input type="radio" name="gas2_7result" value="불량" class="custom-input" /> 불량</td>
              <td><input type="text" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="5">연소기</td>
              <td style="text-align:left;">1. 연소기의 급.배기 설치 상태는?</td>
              <td><input type="radio"  name="gas3_1result" value="양호" class="custom-input" /> 양호
              <input type="radio" name="gas3_1result" value="불량" class="custom-input" /> 불량</td>
              <td><input type="text" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">2. 배기통의 설치 상태는 이상이 없는가?</td>
              <td><input type="radio"  name="gas3_2result" value="양호" class="custom-input" /> 양호
              <input type="radio" name="gas3_2result" value="불량" class="custom-input" /> 불량</td>
              <td><input type="text"  class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">3. 압력조정기 및 각 부위 게이지 작동 상태는?</td>
              <td><input type="radio"  name="gas3_3result" value="양호" class="custom-input" /> 양호
              <input type="radio" name="gas3_3result" value="불량" class="custom-input" /> 불량</td>
              <td><input type="text" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">4. 연결부위 가스 누설 여부는?</td>
              <td><input type="radio"  name="gas3_4result" value="양호" class="custom-input" /> 양호
              <input type="radio" name="gas3_4result" value="불량" class="custom-input" /> 불량</td>
              <td><input type="text" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">5. 누설 경보기 작동 상태는?</td>
              <td><input type="radio"  name="gas3_5result" value="양호" class="custom-input" /> 양호
              <input type="radio" name="gas3_5result" value="불량" class="custom-input" /> 불량</td>
              <td><input type="text" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">기타</td>
              <td style="text-align:left;">1. 사고발생시 안전조치 사항은 숙지하고 있는가?</td>
              <td><input type="radio"  name="gas4_1result" value="양호" class="custom-input" /> 양호
              <input type="radio" name="gas4_1result" value="불량" class="custom-input" /> 불량</td>
              <td><input type="text"  class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">2. 소화기는 항상 비치되어 있는가?</td>
              <td><input type="radio"  name="gas4_2result" value="양호" class="custom-input" /> 양호
              <input type="radio" name="gas4_2result" value="불량" class="custom-input" /> 불량</td>
              <td><input type="text" class="custom-input" /></td>
              <td></td>
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