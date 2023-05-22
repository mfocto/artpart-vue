<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">시설관리 - 전기점검</h1>
  </div>
  <!-- 전기점검 영역 시작 -->
      <div class="table-responsive" id="electric">
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
              <td rowspan="3">인입선로<br>및<br>단로기</td>
              <td style="text-align:left;">케이블 헤드의 이상유무</td>
              <td><input type="radio"  name="electric1_1result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="electric1_1result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">칼과 칼받이의 접촉, 과열, 변색여부</td>
              <td><input type="radio"  name="electric1_2result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="electric1_2result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">음향, 진동, 이물부착여부</td>
              <td><input type="radio"  name="electric1_3result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="electric1_3result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="3">계기용 변성기</td>
              <td style="text-align:left;">외부접속부의 과열, 변색여부</td>
              <td><input type="radio"  name="electric2_1result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="electric2_1result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">유누설 및 유량부족여부</td>
              <td><input type="radio"  name="electric2_2result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="electric2_2result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">진동, 음향, 온도의 이상유무</td>
              <td><input type="radio"  name="electric2_3result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="electric2_3result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">차단기</td>
              <td style="text-align:left;">외부접속부의 과열, 변색여부</td>
              <td><input type="radio"  name="electric3_1result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="electric3_1result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">진동, 음향의 이상유무</td>
              <td><input type="radio"  name="electric3_2result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="electric3_2result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">콘덴사</td>
              <td style="text-align:left;">외부 접속부의 변형상태</td>
              <td><input type="radio"  name="electric4_1result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="electric4_1result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">누유의 이상유무</td>
              <td><input type="radio"  name="electric4_2result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="electric4_2result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="3">축전기</td>
              <td style="text-align:left;">외부 접속부 및 청소상태</td>
              <td><input type="radio"  name="electric5_1result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="electric5_1result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">충, 방전상태</td>
              <td><input type="radio"  name="electric5_2result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="electric5_2result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">비중 및 축전기액 누유상태</td>
              <td><input type="radio"  name="electric5_3result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="electric5_3result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="4">발전기</td>
              <td style="text-align:left;">연료, 윤활유, 냉각수의 이상상태</td>
              <td><input type="radio"  name="electric6_1result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="electric6_1result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">운전상태의 이상(진압상태)</td>
              <td><input type="radio"  name="electric6_2result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="electric6_2result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">진동, 음향, 과열, 가동상태</td>
              <td><input type="radio"  name="electric6_3result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="electric6_3result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">표시등 점등상태</td>
              <td><input type="radio"  name="electric6_4result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="electric6_4result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="3">분전반</td>
              <td style="text-align:left;">과열변색, 이완상태</td>
              <td><input type="radio"  name="electric7_1result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="electric7_1result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">청소, 전압조정기 안전상태</td>
              <td><input type="radio"  name="electric7_2result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="electric7_2result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">시근장치 및 보완상태</td>
              <td><input type="radio"  name="electric7_3result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="electric7_3result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">기타</td>
              <td style="text-align:left;">소방설비, 점등 동작상태</td>
              <td><input type="radio"  name="electric8_1result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="electric8_1result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">CAR 리프트의 동작운전상태</td>
              <td><input type="radio"  name="electric8_2result" value="양호" class="custom-input" :disabled="isReadonly" checked /> 양호
              <input type="radio" name="electric8_2result" value="불량" class="custom-input" :disabled="isReadonly" /> 불량</td>
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