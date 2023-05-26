<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">시설관리 - 전기점검</h1>
  </div>
  <!-- 전기점검 영역 시작 -->
      <div class="table-responsive" id="electric">
        <div class="d-flex justify-content-end">
          <button class="btn btn-sm btn-outline-secondary" v-on:click="fnList">목록</button>
          <button class="btn btn-sm btn-outline-secondary" @click="toggleReadonly">수정</button>
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
              <td><input type="radio"  name="electric1result" value="Y" class="form-check-input" :disabled="isReadonly"  v-model="electricResults[0]" /> 양호
              <input type="radio" name="electric1result" value="N" class="form-check-input" :disabled="isReadonly"  v-model="electricResults[0]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[0]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">칼과 칼받이의 접촉, 과열, 변색여부</td>
              <td><input type="radio"  name="electric2result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="electricResults[1]" /> 양호
              <input type="radio" name="electric2result" value="N" class="form-check-input" :disabled="isReadonly" v-model="electricResults[1]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[1]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">음향, 진동, 이물부착여부</td>
              <td><input type="radio"  name="electric3result" value="Y" class="form-check-input" :disabled="isReadonly"  v-model="electricResults[2]" /> 양호
              <input type="radio" name="electric3result" value="N" class="form-check-input" :disabled="isReadonly"  v-model="electricResults[2]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[2]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="3">계기용 변성기</td>
              <td style="text-align:left;">외부접속부의 과열, 변색여부</td>
              <td><input type="radio"  name="electric4result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="electricResults[3]" /> 양호
              <input type="radio" name="electric4result" value="N" class="form-check-input" :disabled="isReadonly" v-model="electricResults[3]"/> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[3]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">유누설 및 유량부족여부</td>
              <td><input type="radio"  name="electric5result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="electricResults[4]" /> 양호
              <input type="radio" name="electric5result" value="N" class="form-check-input" :disabled="isReadonly" v-model="electricResults[4]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[4]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">진동, 음향, 온도의 이상유무</td>
              <td><input type="radio"  name="electric6result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="electricResults[5]" /> 양호
              <input type="radio" name="electric6result" value="N" class="form-check-input" :disabled="isReadonly" v-model="electricResults[5]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[5]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">차단기</td>
              <td style="text-align:left;">외부접속부의 과열, 변색여부</td>
              <td><input type="radio"  name="electric7result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="electricResults[6]" /> 양호
              <input type="radio" name="electric7result" value="N" class="form-check-input" :disabled="isReadonly" v-model="electricResults[6]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[6]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">진동, 음향의 이상유무</td>
              <td><input type="radio"  name="electric8result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="electricResults[7]" /> 양호
              <input type="radio" name="electric8result" value="N" class="form-check-input" :disabled="isReadonly" v-model="electricResults[7]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[7]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">콘덴사</td>
              <td style="text-align:left;">외부 접속부의 변형상태</td>
              <td><input type="radio"  name="electric9result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="electricResults[8]" /> 양호
              <input type="radio" name="electric9result" value="N" class="form-check-input" :disabled="isReadonly" v-model="electricResults[8]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[8]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">누유의 이상유무</td>
              <td><input type="radio"  name="electric10result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="electricResults[9]" /> 양호
              <input type="radio" name="electric10result" value="N" class="form-check-input" :disabled="isReadonly" v-model="electricResults[9]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[9]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="3">축전기</td>
              <td style="text-align:left;">외부 접속부 및 청소상태</td>
              <td><input type="radio"  name="electric11result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="electricResults[10]" /> 양호
              <input type="radio" name="electric11result" value="N" class="form-check-input" :disabled="isReadonly" v-model="electricResults[10]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[10]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">충, 방전상태</td>
              <td><input type="radio"  name="electric12result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="electricResults[11]" /> 양호
              <input type="radio" name="electric12result" value="N" class="form-check-input" :disabled="isReadonly" v-model="electricResults[11]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[11]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">비중 및 축전기액 누유상태</td>
              <td><input type="radio"  name="electric13result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="electricResults[12]" /> 양호
              <input type="radio" name="electric13result" value="N" class="form-check-input" :disabled="isReadonly" v-model="electricResults[12]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[12]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="4">발전기</td>
              <td style="text-align:left;">연료, 윤활유, 냉각수의 이상상태</td>
              <td><input type="radio"  name="electric14result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="electricResults[13]" /> 양호
              <input type="radio" name="electric14result" value="N" class="form-check-input" :disabled="isReadonly" v-model="electricResults[13]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[13]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">운전상태의 이상(진압상태)</td>
              <td><input type="radio"  name="electric15result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="electricResults[14]" /> 양호
              <input type="radio" name="electric15result" value="N" class="form-check-input" :disabled="isReadonly" v-model="electricResults[14]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[14]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">진동, 음향, 과열, 가동상태</td>
              <td><input type="radio"  name="electric16result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="electricResults[15]" /> 양호
              <input type="radio" name="electric16result" value="N" class="form-check-input" :disabled="isReadonly" v-model="electricResults[15]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[15]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">표시등 점등상태</td>
              <td><input type="radio"  name="electric17result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="electricResults[16]" /> 양호
              <input type="radio" name="electric17result" value="N" class="form-check-input" :disabled="isReadonly" v-model="electricResults[16]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[16]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="3">분전반</td>
              <td style="text-align:left;">과열변색, 이완상태</td>
              <td><input type="radio"  name="electric18result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="electricResults[17]" /> 양호
              <input type="radio" name="electric18result" value="N" class="form-check-input" :disabled="isReadonly" v-model="electricResults[17]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[17]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">청소, 전압조정기 안전상태</td>
              <td><input type="radio"  name="electric19result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="electricResults[18]" /> 양호
              <input type="radio" name="electric19result" value="N" class="form-check-input" :disabled="isReadonly" v-model="electricResults[18]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[18]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">시근장치 및 보완상태</td>
              <td><input type="radio"  name="electric20result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="electricResults[19]" /> 양호
              <input type="radio" name="electric20result" value="N" class="form-check-input" :disabled="isReadonly" v-model="electricResults[19]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[19]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">기타</td>
              <td style="text-align:left;">소방설비, 점등 동작상태</td>
              <td><input type="radio"  name="electric21result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="electricResults[20]" /> 양호
              <input type="radio" name="electric21result" value="N" class="form-check-input" :disabled="isReadonly" v-model="electricResults[20]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="electricProcess[20]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">CAR 리프트의 동작운전상태</td>
              <td><input type="radio"  name="electric22result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="electricResults[21]" /> 양호
              <input type="radio" name="electric22result" value="N" class="form-check-input" :disabled="isReadonly" v-model="electricResults[21]" /> 불량</td>
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
      sidx: this.$route.query.sidx, // 글번호
      sdate: '',  // 작성 날짜
      swiriter: '', // 작성자
      list: [],
      originalResults: [],  // 원본 결과 데이터 리스트
      originalProcess: []   // 원본 처리상황 데이터 리스트
    };
  },
  methods: {
    // 수정 버튼 클릭시 실행 함수
    toggleReadonly() {
      if(this.isReadonly){  // 읽기모드일 때
          // 현재 결과 및 처리상황을 원본 변수에 저장
          this.originalProcess = JSON.parse(JSON.stringify(this.electricProcess));
          this.originalResults = JSON.parse(JSON.stringify(this.electricResults));
          this.isReadonly = false;  // 수정모드로 전환
      }else{  // 수정모드일 때
          // 수정된 결과 및 처리상황을 requestBody에 반영
          let requestBody = this.list.map((item, index) => {
              return{
                  ...item,
                  sresult: this.electricResults[index],
                  sprocess: this.electricProcess[index]
              };
          });

          // 수정된 정보를 서버로 전송
          console.log(requestBody);
          this.$axios.patch((this.$serverUrl+'/scheck'), requestBody)
              .then(() => {
                  // 서버로부터 응답을 받으면 다시 데이터 불러옴
                  this.fetchElectric();
              })
              .catch((error) => {
                  console.error(error);
                  // 에러 발생 시 원래 데이터로 복구
                  this.electricResults = this.originalResults;
                  this.electricProcess = this.originalProcess;
              });
          const test = JSON.parse(this.$cookie.get('emp'))
          this.form = {
              "sidx": this.sidx,
              "sdate": this.sdate,
              "swiriter": {
                  "emp_idx": test.emp_idx
              }
          }
          // 수정된 정보를 서버로 전송
          this.$axios.patch(this.$serverUrl+'/seesul', this.form)
              .then((res) => {
                  // 서버로부터 응답을 받으면 다시 데이터 불러옴
                  this.fetchElectric(res.data.sidx)
              }).catch((err) => {
              if (err.message.indexOf('Network Error') > -1) {
                  alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
              }
          })

          // 수정 모드 종료하고 다시 읽기모드로 전환
          this.isReadonly = true;
      }
    },
    // 데이터 불러오는 함수
    async fetchElectric() {
       try {
           // 서버에서 시설테이블 데이터 불러오기
            const res1 = await this.$axios.get(this.$serverUrl + "/seesul/" + this.sidx, {
                params: this.requestBody
            });
            this.sdate = res1.data.sdate;
            this.swiriter = res1.data.swiriter.emp_name;
            // 서버에서 체크리스트 데이터 불러오기
            const res2 = await this.$axios.get(this.$serverUrl + "/scheck/" + this.sidx, {
                params: this.requestBody,
                headers: {}
            });
            if (res2.data.result_code === "OK") {
                //scheck 값을 기준으로 정렬
                this.list = res2.data.data.sort((a, b) => a.scheck - b.scheck);
                console.log(this.list);
                await this.$nextTick(); // 데이터 업데이트 된 후 실행되도록 설정
            }
        } catch (error) {
            console.error(error);
            console.log(this.list);
        }
    },
      // 목록 페이지 이동 함수
      fnList(){
          delete this.requestBody.sidx
          this.$router.push({
              path: './list',
              query: this.requestBody
          })
      }
  },
  mounted() {
      // 컴포넌트가 마운트될 때 데이터 불러옴
      this.fetchElectric();
  },
    computed: {
        // 데이터에서 점검결과만 추출하여 배열생성
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
        // 데이터에서 처리상황만 추출하여 배열생성
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