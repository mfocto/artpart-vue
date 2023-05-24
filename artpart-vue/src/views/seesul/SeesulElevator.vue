<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">시설관리 - 승강기점검</h1>
  </div>
  <!-- 승강기점검 영역 시작 -->
      <div class="table-responsive" id="elevator">
        <div class="d-flex justify-content-end">
          <button class="btn btn-sm btn-outline-secondary" v-on:click="fnList">목록</button>
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
              <td rowspan="3">기계실</td>
              <td style="text-align:left;">유리창 파손</td>
              <td>{{ elevatorResults[0] === 'Y' ? '양호' : '불량' }}</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="elevatorProcess[0]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">우수침입 및 누수</td>
              <td>{{ elevatorResults[1] === 'Y' ? '양호' : '불량' }}</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="elevatorProcess[1]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">콘크리트 크랙</td>
              <td>{{ elevatorResults[2] === 'Y' ? '양호' : '불량' }}</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="elevatorProcess[2]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="3">권상기</td>
              <td style="text-align:left;">웜기어의 접촉상태</td>
              <td>{{ elevatorResults[3] === 'Y' ? '양호' : '불량' }}</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="elevatorProcess[3]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">도르레홈통의 마모</td>
              <td>{{ elevatorResults[4] === 'Y' ? '양호' : '불량' }}</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="elevatorProcess[4]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">드러스트베어링의 마모 및 파손</td>
              <td>{{ elevatorResults[5] === 'Y' ? '양호' : '불량' }}</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="elevatorProcess[5]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="3">전동기</td>
              <td style="text-align:left;">정류자 상태</td>
              <td>{{ elevatorResults[6] === 'Y' ? '양호' : '불량' }}</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="elevatorProcess[6]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">베어링축의 온도상승 및 급유</td>
              <td>{{ elevatorResults[7] === 'Y' ? '양호' : '불량' }}</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="elevatorProcess[7]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">소음 상태</td>
              <td>{{ elevatorResults[8] === 'Y' ? '양호' : '불량' }}</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="elevatorProcess[8]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">브레이크</td>
              <td style="text-align:left;">플랜저의 작동</td>
              <td>{{ elevatorResults[9] === 'Y' ? '양호' : '불량' }}</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="elevatorProcess[9]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">브레이크슈 라이닝의 마모</td>
              <td>{{ elevatorResults[10] === 'Y' ? '양호' : '불량' }}</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="elevatorProcess[10]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="5">전동발전기</td>
              <td style="text-align:left;">정유자 상태</td>
              <td>{{ elevatorResults[11] === 'Y' ? '양호' : '불량' }}</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="elevatorProcess[11]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">카본브러쉬 마모</td>
              <td>{{ elevatorResults[12] === 'Y' ? '양호' : '불량' }}</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="elevatorProcess[12]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">전압저하 여부</td>
              <td>{{ elevatorResults[13] === 'Y' ? '양호' : '불량' }}</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="elevatorProcess[13]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">브러쉬 홀더 상태</td>
              <td>{{ elevatorResults[14] === 'Y' ? '양호' : '불량' }}</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="elevatorProcess[14]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">자기음 상태</td>
              <td>{{ elevatorResults[15] === 'Y' ? '양호' : '불량' }}</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="elevatorProcess[15]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="3">기동반</td>
              <td style="text-align:left;">스위치, 휴즈 상태</td>
              <td>{{ elevatorResults[16] === 'Y' ? '양호' : '불량' }}</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="elevatorProcess[16]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">메터의 상태</td>
              <td>{{ elevatorResults[17] === 'Y' ? '양호' : '불량' }}</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="elevatorProcess[17]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">콘택터의 접촉</td>
              <td>{{ elevatorResults[18] === 'Y' ? '양호' : '불량' }}</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="elevatorProcess[18]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="5">제어반</td>
              <td style="text-align:left;">휴즈, 저항</td>
              <td>{{ elevatorResults[19] === 'Y' ? '양호' : '불량' }}</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="elevatorProcess[19]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">계전기의 트립상태</td>
              <td>{{ elevatorResults[20] === 'Y' ? '양호' : '불량' }}</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="elevatorProcess[20]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">정류기의 상태</td>
              <td>{{ elevatorResults[21] === 'Y' ? '양호' : '불량' }}</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="elevatorProcess[21]" /></td>
              <td></td>
            </tr>
             <tr>
              <td style="text-align:left;">이면배선의 접촉상태</td>
              <td>{{ elevatorResults[22] === 'Y' ? '양호' : '불량' }}</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="elevatorProcess[22]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">절연저항 측정</td>
              <td>{{ elevatorResults[23] === 'Y' ? '양호' : '불량' }}</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="elevatorProcess[23]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">릴레이</td>
              <td style="text-align:left;">가동콘텍트 마모</td>
              <td>{{ elevatorResults[24] === 'Y' ? '양호' : '불량' }}</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="elevatorProcess[24]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">스프링 이완</td>
              <td>{{ elevatorResults[25] === 'Y' ? '양호' : '불량' }}</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" v-model="elevatorProcess[25]" /></td>
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
      selectedOption: 'elevator', // 목록페이지에서 사용할 화면 전환용 카테고리
      list: [],
      originalResults: [],  // 원본 결과 데이터 리스트
      originalProcess: [] // 원본 처리상황 데이터 리스트
    };
  },
  methods: {
      // 수정 버튼 클릭시 실행 함수
      toggleReadonly() {
          if (this.isReadonly) {  // 읽기모드일 때
              // 현재 결과 및 처리상황을 원본 변수에 저장
              this.originalProcess = JSON.parse(JSON.stringify(this.elevatorProcess));
              this.originalResults = JSON.parse(JSON.stringify(this.elevatorResults));
              this.isReadonly = false;  // 수정모드로 전환
          } else {  // 수정모드일 때
              // 수정된 결과 및 처리상황을 requsetBody에 반영
              let requestBody = this.list.map((item, index) => {
                  return {
                      ...item,
                      sresult: this.elevatorResults[index],
                      sprocess: this.elevatorProcess[index]
                  };
              });

              //수정된 정보를 서버로 전송
              console.log(requestBody);
              this.$axios.patch((this.$serverUrl + '/scheck'), requestBody)
                  .then(() => {
                      // 서버로부터 응답을 받으면 다시 데이터 불러옴
                      this.fetchElevator();
                  })
                  .catch((error) => {
                      console.error(error);
                      // 에러 발생 시 원래 데이터로 복구
                      this.elevatorResults = this.originalResults;
                      this.elevatorProcess = this.originalProcess;
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
              this.$axios.patch(this.$serverUrl + '/seesul', this.form)
                  .then((res) => {
                      // 서버로부터 응답을 받으면 다시 데이터 불러옴
                      this.fetchElevator(res.data.sidx)
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
      async fetchElevator() {
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
          this.requestBody.selectedOption = this.selectedOption;  // 카테고리 정보 전달
          this.$router.push({
              path: './list',
              query: this.requestBody
          })
      }
  },
  mounted() {
      // 컴포넌트가 마운트될 때 데이터 불러옴
      this.fetchElevator();
  },
  computed: {
      // 데이터에서 점검결과만 추출하여 배열생성
      elevatorResults() {
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
      elevatorProcess(){
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