<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">시설관리 - 승강기점검</h1>
  </div>
  <!-- 승강기점검 영역 시작 -->
      <div class="table-responsive" id="elevator">
        <div class="d-flex justify-content-end">
          <router-link to="/seesul/list" class="btn btn-sm btn-outline-secondary">목록</router-link>
          <button type="button" class="btn btn-sm btn-outline-secondary" @click="toggleReadonly">수정</button>
        </div>
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th colspan="4" style="text-align:right;">

              </th>
            </tr>
            <tr>
              <th colspan="4" style="text-align:right;"> 점검일자 : <input type="text" :readonly="isReadonly" value="2023-04-26" class="custom-input" /></th>
                            
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
              <td rowspan="3">기계실</td>
              <td style="text-align:left;">유리창 파손</td>
              <td><input type="radio"  name="elevator1_1result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="elevator1_1result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">우수침입 및 누수</td>
              <td><input type="radio"  name="elevator1_2result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="elevator1_2result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">콘크리트 크랙</td>
              <td><input type="radio"  name="elevator1_3result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="elevator1_3result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="3">권상기</td>
              <td style="text-align:left;">웜기어의 접촉상태</td>
              <td><input type="radio"  name="elevator2_1result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="elevator2_1result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">도르레홈통의 마모</td>
              <td><input type="radio"  name="elevator2_2result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="elevator2_2result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">드러스트베어링의 마모 및 파손</td>
              <td><input type="radio"  name="elevator2_3result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="elevator2_3result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="3">전동기</td>
              <td style="text-align:left;">정류자 상태</td>
              <td><input type="radio"  name="elevator3_1result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="elevator3_1result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">베어링축의 온도상승 및 급유</td>
              <td><input type="radio"  name="elevator3_2result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="elevator3_2result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">소음 상태</td>
              <td><input type="radio"  name="elevator3_3result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="elevator3_3result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">브레이크</td>
              <td style="text-align:left;">플랜저의 작동</td>
              <td><input type="radio"  name="elevator4_1result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="elevator4_1result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">브레이크슈 라이닝의 마모</td>
              <td><input type="radio"  name="elevator4_2result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="elevator4_2result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="5">전동발전기</td>
              <td style="text-align:left;">정유자 상태</td>
              <td><input type="radio"  name="elevator5_1result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="elevator5_1result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">카본브러쉬 마모</td>
              <td><input type="radio"  name="elevator5_2result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="elevator5_2result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">전압저하 여부</td>
              <td><input type="radio"  name="elevator5_3result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="elevator5_3result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">브러쉬 홀더 상태</td>
              <td><input type="radio"  name="elevator5_4result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="elevator5_2result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">자기음 상태</td>
              <td><input type="radio"  name="elevator5_5result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="elevator5_3result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="3">기동반</td>
              <td style="text-align:left;">스위치, 휴즈 상태</td>
              <td><input type="radio"  name="elevator6_1result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="elevator6_1result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">메터의 상태</td>
              <td><input type="radio"  name="elevator6_2result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="elevator6_2result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">콘택터의 접촉</td>
              <td><input type="radio"  name="elevator6_3result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="elevator6_3result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="5">제어반</td>
              <td style="text-align:left;">휴즈, 저항</td>
              <td><input type="radio"  name="elevator7_1result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="elevator7_1result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">계전기의 트립상태</td>
              <td><input type="radio"  name="elevator7_2result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="elevator7_2result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">정류기의 상태</td>
              <td><input type="radio"  name="elevator7_3result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="elevator7_3result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
             <tr>
              <td style="text-align:left;">이면배선의 접촉상태</td>
              <td><input type="radio"  name="elevator7_4result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="elevator7_2result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">절연저항 측정</td>
              <td><input type="radio"  name="elevator7_5result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="elevator7_5result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">릴레이</td>
              <td style="text-align:left;">가동콘텍트 마모</td>
              <td><input type="radio"  name="elevator8_1result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="elevator8_1result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">스프링 이완</td>
              <td><input type="radio"  name="elevator8_2result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="elevator8_2result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
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
      isReadonly: true,
      
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
  color: #212529;
}
.custom-input {
    border: none;
    background: transparent;
    text-align: center;
  }
</style>