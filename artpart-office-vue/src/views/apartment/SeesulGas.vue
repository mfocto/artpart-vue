<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">시설관리 - 가스점검</h1>
  </div>
  <!-- 가스점검 영역 시작 -->
      <div class="table-responsive">
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
              <th colspan="4" style="text-align:right;"> 점검일자 : <input type="text" :readonly="isReadonly" class="custom-input" v-model="sdate" /></th>
                            
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
              <td><input type="radio"  name="gas1_1result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="gasResults[0]" /> 양호
              <input type="radio" name="gas1_1result" value="N" class="form-check-input" :disabled="isReadonly" v-model="gasResults[0]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="gasProcess[0]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">2. 가스 누설 유무는?</td>
              <td><input type="radio"  name="gas1_2result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="gasResults[1]" /> 양호
              <input type="radio" name="gas1_2result" value="N" class="form-check-input" :disabled="isReadonly" v-model="gasResults[1]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="gasProcess[1]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">3. 이상압 통보 설비 작동 상태는?</td>
              <td><input type="radio"  name="gas1_3result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="gasResults[2]" /> 양호
              <input type="radio" name="gas1_3result" value="N" class="form-check-input" :disabled="isReadonly" v-model="gasResults[2]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="gasProcess[2]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">4. 가스의 압력 측정 기록 및 게이지 작동 상태는?</td>
              <td><input type="radio"  name="gas1_4result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="gasResults[3]" /> 양호
              <input type="radio" name="gas1_4result" value="N" class="form-check-input" :disabled="isReadonly" v-model="gasResults[3]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="gasProcess[3]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">5. 환기구 통풍상태는 양호한가?</td>
              <td><input type="radio"  name="gas1_5result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="gasResults[4]" /> 양호
              <input type="radio" name="gas1_5result" value="N" class="form-check-input" :disabled="isReadonly" v-model="gasResults[4]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="gasProcess[4]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">6. 전기설비의 작동 유무(방폭 등, 히터트레스) 상태는?</td>
              <td><input type="radio"  name="gas1_6result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="gasResults[5]" /> 양호
              <input type="radio" name="gas1_6result" value="N" class="form-check-input" :disabled="isReadonly" v-model="gasResults[5]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="gasProcess[5]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">7. 외부인의 출입은 없는가?</td>
              <td><input type="radio"  name="gas1_7result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="gasResults[6]" /> 양호
              <input type="radio" name="gas1_7result" value="N" class="form-check-input" :disabled="isReadonly" v-model="gasResults[6]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="gasProcess[6]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="7">배관</td>
              <td style="text-align:left;">1. 가스계량기 작동 상태는?</td>
              <td><input type="radio"  name="gas2_1result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="gasResults[7]" /> 양호
              <input type="radio" name="gas2_1result" value="N" class="form-check-input" :disabled="isReadonly" v-model="gasResults[7]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="gasProcess[7]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">2. 배관 도색 상태는?</td>
              <td><input type="radio"  name="gas2_2result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="gasResults[8]" /> 양호
              <input type="radio" name="gas2_2result" value="N" class="form-check-input" :disabled="isReadonly" v-model="gasResults[8]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="gasProcess[8]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">3. 가스 누설 자동 차단기 및 누설 경보기 작동 상태는?</td>
              <td><input type="radio"  name="gas2_3result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="gasResults[9]" /> 양호
              <input type="radio" name="gas2_3result" value="N" class="form-check-input" :disabled="isReadonly" v-model="gasResults[9]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="gasProcess[9]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">4. 가스 누설여부(비눗물 확인)는 확인되었는가?</td>
              <td><input type="radio"  name="gas2_4result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="gasResults[10]" /> 양호
              <input type="radio" name="gas2_4result" value="N" class="form-check-input" :disabled="isReadonly" v-model="gasResults[10]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="gasProcess[10]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">5. 호스 길이(30cm 이내) 및 각 부위 연결 상태는?</td>
              <td><input type="radio"  name="gas2_5result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="gasResults[11]" /> 양호
              <input type="radio" name="gas2_5result" value="N" class="form-check-input" :disabled="isReadonly" v-model="gasResults[11]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="gasProcess[11]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">6. 압력 표기 및 흐름 방향 표시 상태는?</td>
              <td><input type="radio"  name="gas2_6result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="gasResults[12]" /> 양호
              <input type="radio" name="gas2_6result" value="N" class="form-check-input" :disabled="isReadonly" v-model="gasResults[12]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="gasProcess[12]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">7. 배관 고정 상태는 양호한가?</td>
              <td><input type="radio"  name="gas2_7result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="gasResults[13]" /> 양호
              <input type="radio" name="gas2_7result" value="N" class="form-check-input" :disabled="isReadonly" v-model="gasResults[13]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="gasProcess[13]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="5">연소기</td>
              <td style="text-align:left;">1. 연소기의 급.배기 설치 상태는?</td>
              <td><input type="radio"  name="gas3_1result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="gasResults[14]" /> 양호
              <input type="radio" name="gas3_1result" value="N" class="form-check-input" :disabled="isReadonly" v-model="gasResults[14]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="gasProcess[14]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">2. 배기통의 설치 상태는 이상이 없는가?</td>
              <td><input type="radio"  name="gas3_2result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="gasResults[15]" /> 양호
              <input type="radio" name="gas3_2result" value="N" class="form-check-input" :disabled="isReadonly" v-model="gasResults[15]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="gasProcess[15]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">3. 압력조정기 및 각 부위 게이지 작동 상태는?</td>
              <td><input type="radio"  name="gas3_3result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="gasResults[16]" /> 양호
              <input type="radio" name="gas3_3result" value="N" class="form-check-input" :disabled="isReadonly" v-model="gasResults[16]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="gasProcess[16]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">4. 연결부위 가스 누설 여부는?</td>
              <td><input type="radio"  name="gas3_4result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="gasResults[17]" /> 양호
              <input type="radio" name="gas3_4result" value="N" class="form-check-input" :disabled="isReadonly" v-model="gasResults[17]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="gasProcess[17]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">5. 누설 경보기 작동 상태는?</td>
              <td><input type="radio"  name="gas3_5result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="gasResults[18]" /> 양호
              <input type="radio" name="gas3_5result" value="N" class="form-check-input" :disabled="isReadonly" v-model="gasResults[18]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="gasProcess[18]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">기타</td>
              <td style="text-align:left;">1. 사고발생시 안전조치 사항은 숙지하고 있는가?</td>
              <td><input type="radio"  name="gas4_1result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="gasResults[19]" /> 양호
              <input type="radio" name="gas4_1result" value="N" class="form-check-input" :disabled="isReadonly" v-model="gasResults[19]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="gasProcess[19]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">2. 소화기는 항상 비치되어 있는가?</td>
              <td><input type="radio"  name="gas4_2result" value="Y" class="form-check-input" :disabled="isReadonly" v-model="gasResults[20]" /> 양호
              <input type="radio" name="gas4_2result" value="N" class="form-check-input" :disabled="isReadonly" v-model="gasResults[20]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="gasProcess[20]" /></td>
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
      sidx: this.$route.query.sidx, //글번호
      sdate: '',  // 작성 날짜
      swiriter: '', // 작성자
      selectedOption: 'gas',  // 목록페이지에서 사용할 화면 전환용 카테고리
      list: [],
      originalResults: [], // 원본 결과 데이터 리스트
      originalProcess: [] // 원본 처리상황 데이터 리스트
    };
  },
  methods: {
    // 수정 버튼 클릭시 실행 함수
    toggleReadonly() {
        if(this.isReadonly){  // 읽기모드일 때
            // 현재 결과 및 처리상황을 원본 변수에 저장
            this.originalProcess = JSON.parse(JSON.stringify(this.gasProcess));
            this.originalResults = JSON.parse(JSON.stringify(this.gasResults));
            this.isReadonly = false;  // 수정모드로 전환
        }else{  // 수정모드일 때
            // 수정된 결과 및 처리상황을 requestBody에 반영
            let requestBody = this.list.map((item, index) => {
                return{
                    ...item,
                    sresult: this.gasResults[index],
                    sprocess: this.gasProcess[index]
                };
            });

            //수정된 정보를 서버로 전송
            console.log(requestBody);
            this.$axios.patch((this.$serverUrl+'/scheck'), requestBody)
                .then(() => {
                    // 서버로부터 응답을 받으면 다시 데이터 불러옴
                    this.fetchGas();
                })
                .catch((error) => {
                    console.error(error);
                    // 에러 발생 시 원래 데이터로 복구
                    this.gasResults = this.originalResults;
                    this.gasProcess = this.originalProcess;
                });
            const test = JSON.parse(this.$cookie.get('emp'))
            this.form = {
                "sidx": this.sidx,
                "sdate": this.sdate,
                "swiriter": {
                    "emp_idx": test.emp_idx
                }
            }
            //수정된 정보를 서버로 전송
            this.$axios.patch(this.$serverUrl+'/seesul', this.form)
                .then((res) => {
                    // 서버로부터 응답을 받으면 다시 데이터 불러옴
                    this.fetchGas(res.data.sidx)
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
    async fetchGas(){
        try {
            // 서버에서 시설테이블 데이터 가져오기
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
                await this.$nextTick(); //데이터 업데이트 된 후 실행되도록 설정
            }
        } catch (error) {
            console.error(error);
            console.log(this.list);
        }
    },
    // 목록 페이지 이동 함수
    fnList(){
        delete this.requestBody.sidx
        this.requestBody.selectedOption = this.selectedOption; // 카테고리 정보 전달
        this.$router.push({
            path: './list',
            query: this.requestBody
        })
    }  
  },
  mounted() {
      // 컴포넌트가 마운트될 때 데이터 불러옴
      this.fetchGas();
  },
  computed: {
      // 데이터에서 점검결과만 추출하여 배열생성
      gasResults() {
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
      gasProcess(){
          if (!Array.isArray(this.list)) return []; // 빈 배열로 초기화

          let process = [];
          this.list.forEach((val) => {
              process.push(val.sprocess);
          });

          return process;
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