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
              <th colspan="4" style="text-align:right;"> 점검일자 : <input type="date" :readonly="isReadonly" class="custom-input" v-model="sdate" /></th>
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
              <td><input type="radio"  name="electric1result" value="양호" class="custom-input" :disabled="isReadonly" :checked="electricResults[0]=== 'Y'" /> 양호
              <input type="radio" name="electric1result" value="불량" class="custom-input" :disabled="isReadonly" :checked="electricResults[0] === 'N'" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[0]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">칼과 칼받이의 접촉, 과열, 변색여부</td>
              <td><input type="radio"  name="electric2result" value="양호" class="custom-input" :disabled="isReadonly" :checked="electricResults[1] === 'Y'" /> 양호
              <input type="radio" name="electric2result" value="불량" class="custom-input" :disabled="isReadonly" :checked="electricResults[1] === 'N'" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[1]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">음향, 진동, 이물부착여부</td>
              <td><input type="radio"  name="electric3result" value="양호" class="custom-input" :disabled="isReadonly" :checked="electricResults[2] === 'Y'" /> 양호
              <input type="radio" name="electric3result" value="불량" class="custom-input" :disabled="isReadonly" :checked="electricResults[2] === 'N'" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[2]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="3">계기용 변성기</td>
              <td style="text-align:left;">외부접속부의 과열, 변색여부</td>
              <td><input type="radio"  name="electric4result" value="양호" class="custom-input" :disabled="isReadonly" :checked="electricResults[3] === 'Y'" /> 양호
              <input type="radio" name="electric4result" value="불량" class="custom-input" :disabled="isReadonly" :checked="electricResults[3] === 'N'"/> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[3]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">유누설 및 유량부족여부</td>
              <td><input type="radio"  name="electric5result" value="양호" class="custom-input" :disabled="isReadonly" :checked="electricResults[4] === 'Y'" /> 양호
              <input type="radio" name="electric5result" value="불량" class="custom-input" :disabled="isReadonly" :checked="electricResults[4] === 'N'" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[4]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">진동, 음향, 온도의 이상유무</td>
              <td><input type="radio"  name="electric6result" value="양호" class="custom-input" :disabled="isReadonly" :checked="electricResults[5] === 'Y'" /> 양호
              <input type="radio" name="electric6result" value="불량" class="custom-input" :disabled="isReadonly" :checked="electricResults[5] === 'N'" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[5]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">차단기</td>
              <td style="text-align:left;">외부접속부의 과열, 변색여부</td>
              <td><input type="radio"  name="electric7result" value="양호" class="custom-input" :disabled="isReadonly" :checked="electricResults[6] === 'Y'" /> 양호
              <input type="radio" name="electric7result" value="불량" class="custom-input" :disabled="isReadonly" :checked="electricResults[6] === 'N'" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[6]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">진동, 음향의 이상유무</td>
              <td><input type="radio"  name="electric8result" value="양호" class="custom-input" :disabled="isReadonly" :checked="electricResults[7] === 'Y'" /> 양호
              <input type="radio" name="electric8result" value="불량" class="custom-input" :disabled="isReadonly" :checked="electricResults[7] === 'N'" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[7]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">콘덴사</td>
              <td style="text-align:left;">외부 접속부의 변형상태</td>
              <td><input type="radio"  name="electric9result" value="양호" class="custom-input" :disabled="isReadonly" :checked="electricResults[8] === 'Y'" /> 양호
              <input type="radio" name="electric9result" value="불량" class="custom-input" :disabled="isReadonly" :checked="electricResults[8] === 'N'" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[8]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">누유의 이상유무</td>
              <td><input type="radio"  name="electric10result" value="양호" class="custom-input" :disabled="isReadonly" :checked="electricResults[9] === 'Y'" /> 양호
              <input type="radio" name="electric10result" value="불량" class="custom-input" :disabled="isReadonly" :checked="electricResults[9] === 'N'" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[9]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="3">축전기</td>
              <td style="text-align:left;">외부 접속부 및 청소상태</td>
              <td><input type="radio"  name="electric11result" value="양호" class="custom-input" :disabled="isReadonly" :checked="electricResults[10] === 'Y'" /> 양호
              <input type="radio" name="electric11result" value="불량" class="custom-input" :disabled="isReadonly" :checked="electricResults[10] === 'N'" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[10]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">충, 방전상태</td>
              <td><input type="radio"  name="electric12result" value="양호" class="custom-input" :disabled="isReadonly" :checked="electricResults[11] === 'Y'" /> 양호
              <input type="radio" name="electric12result" value="불량" class="custom-input" :disabled="isReadonly" :checked="electricResults[11] === 'N'" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[11]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">비중 및 축전기액 누유상태</td>
              <td><input type="radio"  name="electric13result" value="양호" class="custom-input" :disabled="isReadonly" :checked="electricResults[12] === 'Y'" /> 양호
              <input type="radio" name="electric13result" value="불량" class="custom-input" :disabled="isReadonly" :checked="electricResults[12] === 'N'" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[12]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="4">발전기</td>
              <td style="text-align:left;">연료, 윤활유, 냉각수의 이상상태</td>
              <td><input type="radio"  name="electric14result" value="양호" class="custom-input" :disabled="isReadonly" :checked="electricResults[13] === 'Y'" /> 양호
              <input type="radio" name="electric14result" value="불량" class="custom-input" :disabled="isReadonly" :checked="electricResults[13] === 'N'" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[13]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">운전상태의 이상(진압상태)</td>
              <td><input type="radio"  name="electric15result" value="양호" class="custom-input" :disabled="isReadonly" :checked="electricResults[14] === 'Y'" /> 양호
              <input type="radio" name="electric15result" value="불량" class="custom-input" :disabled="isReadonly" :checked="electricResults[14] === 'N'" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[14]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">진동, 음향, 과열, 가동상태</td>
              <td><input type="radio"  name="electric16result" value="양호" class="custom-input" :disabled="isReadonly" :checked="electricResults[15] === 'Y'" /> 양호
              <input type="radio" name="electric16result" value="불량" class="custom-input" :disabled="isReadonly" :checked="electricResults[15] === 'N'" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[15]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">표시등 점등상태</td>
              <td><input type="radio"  name="electric17result" value="양호" class="custom-input" :disabled="isReadonly" :checked="electricResults[16] === 'Y'" /> 양호
              <input type="radio" name="electric17result" value="불량" class="custom-input" :disabled="isReadonly" :checked="electricResults[16] === 'N'" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[16]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="3">분전반</td>
              <td style="text-align:left;">과열변색, 이완상태</td>
              <td><input type="radio"  name="electric18result" value="양호" class="custom-input" :disabled="isReadonly" :checked="electricResults[17] === 'Y'" /> 양호
              <input type="radio" name="electric18result" value="불량" class="custom-input" :disabled="isReadonly" :checked="electricResults[17] === 'N'" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[17]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">청소, 전압조정기 안전상태</td>
              <td><input type="radio"  name="electric19result" value="양호" class="custom-input" :disabled="isReadonly" :checked="electricResults[18] === 'Y'" /> 양호
              <input type="radio" name="electric19result" value="불량" class="custom-input" :disabled="isReadonly" :checked="electricResults[18] === 'N'" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[18]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">시근장치 및 보완상태</td>
              <td><input type="radio"  name="electric20result" value="양호" class="custom-input" :disabled="isReadonly" :checked="electricResults[19] === 'Y'" /> 양호
              <input type="radio" name="electric20result" value="불량" class="custom-input" :disabled="isReadonly" :checked="electricResults[19] === 'N'" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[19]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">기타</td>
              <td style="text-align:left;">소방설비, 점등 동작상태</td>
              <td><input type="radio"  name="electric21result" value="양호" class="custom-input" :disabled="isReadonly" :checked="electricResults[20] === 'Y'" /> 양호
              <input type="radio" name="electric21result" value="불량" class="custom-input" :disabled="isReadonly" :checked="electricResults[20] === 'N'" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[20]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">CAR 리프트의 동작운전상태</td>
              <td><input type="radio"  name="electric22result" value="양호" class="custom-input" :disabled="isReadonly" :checked="electricResults[21] === 'Y'" /> 양호
              <input type="radio" name="electric22result" value="불량" class="custom-input" :disabled="isReadonly" :checked="electricResults[21] === 'N'" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[21]" /></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
</template>
<script>
export default {
  data() {
    return {
      isReadonly: true,
      requestBody: {},
      sidx: this.$route.query.sidx,
      sdate: '',
      swiriter: '',
      list: []
    };
  },
  methods: {
    toggleReadonly() {
      this.isReadonly = !this.isReadonly;
    },
      fetchElectric() {
          this.$axios.get(this.$serverUrl + "/seesul/" + this.sidx, {
              params: this.requestBody
          }).then(response => {
              this.sdate = response.data.sdate;
              this.swiriter = response.data.swiriter.emp_name;
          }).catch(error => {
              console.error(error);
          });

          
          this.$axios.get(this.$serverUrl + "/scheck/" + this.sidx, {
              params: this.requestBody,
              headers: {}
          }).then((res) => {
              if (res.data.result_code === "OK") {
                  this.list = res.data.data;
                  console.log(this.list); // 이 위치에서 console.log 실행
              }
          }).catch(error => {
              console.error(error);
              console.log(this.list); // 이 위치에서 console.log 실행
          });
      }
  },
  mounted() {
      this.fetchElectric();
  },
    computed: {
        electricResults() {
            if (!Array.isArray(this.list)) return []; // 빈 배열로 초기화

            let results = [];
            this.list.forEach((val) => {
                if (val.sresult) { // 요소가 존재하는 경우에만 추가
                    results.push(val.sresult);
                }
            });

            return results;
        },
        electricProcess(){
            if (!Array.isArray(this.list)) return []; // 빈 배열로 초기화

            let process = [];
            this.list.forEach((val) => {
                process.push(val.sprocess);
            });

            return process;
        }
    },
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