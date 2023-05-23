<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">시설관리 - 놀이터점검</h1>
  </div>
  <!-- 놀이터점검 영역 시작 -->
      <div class="table-responsive" id="playground">
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
              <th scope="col" style="width: 10%"> 번호 </th>
              <th scope="col" style="width: 60%"> 점 검 사 항 </th>
              <th scope="col" style="width: 20%"> 결 과 </th>
              <th scope="col" style="width: 10%"> 처 리 </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> 1 </td>
              <td style="text-align:left;">안전표시 및 준수사항등의 안내는 되어 있는가</td>
              <td><input type="radio"  name="playground1result" value="Y" class="custom-input" :disabled="isReadonly" v-model="playgroundResults[0]" /> 양호
              <input type="radio" name="playground1result" value="N" class="custom-input" :disabled="isReadonly" v-model="playgroundResults[0]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="playgroundProcess[0]" /></td>
              <td></td>
            </tr>
            <tr>
              <td> 2 </td>
              <td style="text-align:left;">놀이시설의 파손, 고장, 훼손, 너트풀림등은 없는가</td>
              <td><input type="radio"  name="playground2result" value="Y" class="custom-input" :disabled="isReadonly" v-model="playgroundResults[1]" /> 양호
              <input type="radio" name="playground2result" value="N" class="custom-input" :disabled="isReadonly" v-model="playgroundResults[1]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="playgroundProcess[1]" /></td>
              <td></td>
            </tr>
            <tr>
              <td> 3 </td>
              <td style="text-align:left;">놀이시설의 작동부 주유상태는 양호한가</td>
              <td><input type="radio"  name="playground3result" value="Y" class="custom-input" :disabled="isReadonly" v-model="playgroundResults[2]" /> 양호
              <input type="radio" name="playground3result" value="N" class="custom-input" :disabled="isReadonly" v-model="playgroundResults[2]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="playgroundProcess[2]" /></td>
              <td></td>
            </tr>
            <tr>
              <td> 4 </td>
              <td style="text-align:left;">모래바닥에 깨진 유리, 돌등은 없는가</td>
              <td><input type="radio"  name="playground4result" value="Y" class="custom-input" :disabled="isReadonly" v-model="playgroundResults[3]" /> 양호
              <input type="radio" name="playground4result" value="N" class="custom-input" :disabled="isReadonly" v-model="playgroundResults[3]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="playgroundProcess[3]" /></td>
              <td></td>
            </tr>
            <tr>
              <td> 5 </td>
              <td style="text-align:left;">놀이터 CCTV는 정상 작동하는가</td>
              <td><input type="radio"  name="playground5result" value="Y" class="custom-input" :disabled="isReadonly" v-model="playgroundResults[4]" /> 양호
              <input type="radio" name="playground5result" value="N" class="custom-input" :disabled="isReadonly" v-model="playgroundResults[4]" /> 불량</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="playgroundProcess[4]" /></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 놀이터점검 영역 끝 -->
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
        selectedOption: 'playground', // 목록페이지에서 사용할 화면 전환용 카테고리
        list: [],
        originalResults: [],  // 원본 결과 데이터 리스트
        originalProcess: [] // 원본 처리상황 데이터 리스트
    };
  },
  methods: {
    // 수정 버튼 클릭시 실행 함수
    toggleReadonly() {
        if(this.isReadonly){ // 읽기모드일 때
            // 현재 결과 및 처리상황을 원본 변수에 저장
            this.originalProcess = JSON.parse(JSON.stringify(this.playgroundProcess));
            this.originalResults = JSON.parse(JSON.stringify(this.playgroundResults));
            this.isReadonly = false; // 수정모드로 전환
        }else{ // 수정모드일 때
            // 수정된 결과 및 처리상황을 requestBody에 반영
            let requestBody = this.list.map((item, index) => {
                return{
                    ...item,
                    sresult: this.playgroundResults[index],
                    sprocess: this.playgroundProcess[index]
                };
            });

            //수정된 정보를 서버로 전송
            console.log(requestBody);
            this.$axios.patch((this.$serverUrl+'/scheck'), requestBody)
                .then(() => {
                    //서버로부터 응답을 받으면 다시 데이터 불러옴
                    this.fetchPlayground();
                })
                .catch((error) => {
                    console.error(error);
                    // 에러 발생 시 원래 데이터로 복구
                    this.playgroundResults = this.originalResults;
                    this.playgroundProcess = this.originalProcess;
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
                    this.fetchPlayground(res.data.sidx)
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
    async fetchPlayground(){
        try {
            //서버에서 시설테이블 데이터 불러오기
            const res1 = await this.$axios.get(this.$serverUrl + "/seesul/" + this.sidx, {
                params: this.requestBody
            });
            this.sdate = res1.data.sdate;
            this.swiriter = res1.data.swiriter.emp_name;
            //서버에서 체크리스트 데이터 불러오기
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
        this.requestBody.selectedOption = this.selectedOption;  // 카테고리 정보 전달
        this.$router.push({
            path: './list',
            query: this.requestBody
        })
    }  
  },
  mounted() {
      // 컴포넌트가 마운트될 때 데이터 불러옴
      this.fetchPlayground();
  },
  computed: {
      // 데이터에서 점검결과만 추출하여 배열생성
      playgroundResults() {
          if (!Array.isArray(this.list)) return []; // 빈 배열로 초기화

          let results = [];
          this.list.forEach((val) => {
              if (val.sresult) { // 값이 존재하는 경우에만 추가
                  results.push(val.sresult);
              }
          });

          return results;
      },
      // 데이터에서 처리상황만 추출하여 배열생성
      playgroundProcess(){
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