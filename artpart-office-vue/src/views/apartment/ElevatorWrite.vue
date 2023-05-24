<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">시설관리 - 승강기점검</h1>
  </div>
      <div class="table-responsive" id="elevator">
        <div class="d-flex justify-content-end">
            <button class="btn btn-sm btn-outline-secondary" v-on:click="fnSave">작성</button>
            <button class="btn btn-sm btn-outline-secondary" v-on:click="fnList">목록</button>
        </div>
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th colspan="4" style="text-align:right;">

              </th>
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
              <td><input type="radio"  name="elevator1_1result" value="Y" class="custom-input" v-model="sresult[0]"/> 양호
              <input type="radio" name="elevator1_1result" value="N" class="custom-input" v-model="sresult[0]"/> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[0]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">우수침입 및 누수</td>
              <td><input type="radio"  name="elevator1_2result" value="Y" class="custom-input" v-model="sresult[1]" /> 양호
              <input type="radio" name="elevator1_2result" value="N" class="custom-input" v-model="sresult[1]" /> 불량</td>
              <td><input type="text"  class="custom-input" v-model="sprocess[1]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">콘크리트 크랙</td>
              <td><input type="radio"  name="elevator1_3result" value="Y" class="custom-input" v-model="sresult[2]" /> 양호
              <input type="radio" name="elevator1_3result" value="N" class="custom-input" v-model="sresult[2]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[2]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="3">권상기</td>
              <td style="text-align:left;">웜기어의 접촉상태</td>
              <td><input type="radio"  name="elevator2_1result" value="Y" class="custom-input" v-model="sresult[3]" /> 양호
              <input type="radio" name="elevator2_1result" value="N" class="custom-input" v-model="sresult[3]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[3]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">도르레홈통의 마모</td>
              <td><input type="radio"  name="elevator2_2result" value="Y" class="custom-input" v-model="sresult[4]" /> 양호
              <input type="radio" name="elevator2_2result" value="N" class="custom-input" v-model="sresult[4]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[4]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">드러스트베어링의 마모 및 파손</td>
              <td><input type="radio"  name="elevator2_3result" value="Y" class="custom-input" v-model="sresult[5]" /> 양호
              <input type="radio" name="elevator2_3result" value="N" class="custom-input" v-model="sresult[5]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[5]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="3">전동기</td>
              <td style="text-align:left;">정류자 상태</td>
              <td><input type="radio"  name="elevator3_1result" value="Y" class="custom-input" v-model="sresult[6]" /> 양호
              <input type="radio" name="elevator3_1result" value="N" class="custom-input" v-model="sresult[6]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[6]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">베어링축의 온도상승 및 급유</td>
              <td><input type="radio"  name="elevator3_2result" value="Y" class="custom-input" v-model="sresult[7]" /> 양호
              <input type="radio" name="elevator3_2result" value="N" class="custom-input" v-model="sresult[7]" /> 불량</td>
              <td><input type="text"  class="custom-input" v-model="sprocess[7]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">소음 상태</td>
              <td><input type="radio"  name="elevator3_3result" value="Y" class="custom-input" v-model="sresult[8]" /> 양호
              <input type="radio" name="elevator3_3result" value="N" class="custom-input" v-model="sresult[8]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[8]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">브레이크</td>
              <td style="text-align:left;">플랜저의 작동</td>
              <td><input type="radio"  name="elevator4_1result" value="Y" class="custom-input" v-model="sresult[9]" /> 양호
              <input type="radio" name="elevator4_1result" value="N" class="custom-input" v-model="sresult[9]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[9]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">브레이크슈 라이닝의 마모</td>
              <td><input type="radio"  name="elevator4_2result" value="Y" class="custom-input" v-model="sresult[10]" /> 양호
              <input type="radio" name="elevator4_2result" value="N" class="custom-input" v-model="sresult[10]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[10]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="5">전동발전기</td>
              <td style="text-align:left;">정유자 상태</td>
              <td><input type="radio"  name="elevator5_1result" value="Y" class="custom-input" v-model="sresult[11]" /> 양호
              <input type="radio" name="elevator5_1result" value="N" class="custom-input" v-model="sresult[11]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[11]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">카본브러쉬 마모</td>
              <td><input type="radio"  name="elevator5_2result" value="Y" class="custom-input" v-model="sresult[12]" /> 양호
              <input type="radio" name="elevator5_2result" value="N" class="custom-input" v-model="sresult[12]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[12]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">전압저하 여부</td>
              <td><input type="radio"  name="elevator5_3result" value="Y" class="custom-input" v-model="sresult[13]" /> 양호
              <input type="radio" name="elevator5_3result" value="N" class="custom-input" v-model="sresult[13]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[13]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">브러쉬 홀더 상태</td>
              <td><input type="radio"  name="elevator5_4result" value="Y" class="custom-input" v-model="sresult[14]" /> 양호
              <input type="radio" name="elevator5_4result" value="N" class="custom-input" v-model="sresult[14]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[14]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">자기음 상태</td>
              <td><input type="radio"  name="elevator5_5result" value="Y" class="custom-input" v-model="sresult[15]" /> 양호
              <input type="radio" name="elevator5_5result" value="N" class="custom-input" v-model="sresult[15]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[15]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="3">기동반</td>
              <td style="text-align:left;">스위치, 휴즈 상태</td>
              <td><input type="radio"  name="elevator6_1result" value="Y" class="custom-input" v-model="sresult[16]" /> 양호
              <input type="radio" name="elevator6_1result" value="N" class="custom-input" v-model="sresult[16]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[16]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">메터의 상태</td>
              <td><input type="radio"  name="elevator6_2result" value="Y" class="custom-input" v-model="sresult[17]" /> 양호
              <input type="radio" name="elevator6_2result" value="N" class="custom-input" v-model="sresult[17]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[17]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">콘택터의 접촉</td>
              <td><input type="radio"  name="elevator6_3result" value="Y" class="custom-input" v-model="sresult[18]" /> 양호
              <input type="radio" name="elevator6_3result" value="N" class="custom-input" v-model="sresult[18]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[18]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="5">제어반</td>
              <td style="text-align:left;">휴즈, 저항</td>
              <td><input type="radio"  name="elevator7_1result" value="Y" class="custom-input" v-model="sresult[19]" /> 양호
              <input type="radio" name="elevator7_1result" value="N" class="custom-input" v-model="sresult[19]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[19]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">계전기의 트립상태</td>
              <td><input type="radio"  name="elevator7_2result" value="Y" class="custom-input" v-model="sresult[20]" /> 양호
              <input type="radio" name="elevator7_2result" value="N" class="custom-input" v-model="sresult[20]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[20]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">정류기의 상태</td>
              <td><input type="radio"  name="elevator7_3result" value="Y" class="custom-input" v-model="sresult[21]" /> 양호
              <input type="radio" name="elevator7_3result" value="N" class="custom-input" v-model="sresult[21]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[21]" /></td>
              <td></td>
            </tr>
             <tr>
              <td style="text-align:left;">이면배선의 접촉상태</td>
              <td><input type="radio"  name="elevator7_4result" value="Y" class="custom-input" v-model="sresult[22]" /> 양호
              <input type="radio" name="elevator7_4result" value="N" class="custom-input" v-model="sresult[22]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[22]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">절연저항 측정</td>
              <td><input type="radio"  name="elevator7_5result" value="Y" class="custom-input" v-model="sresult[23]" /> 양호
              <input type="radio" name="elevator7_5result" value="N" class="custom-input" v-model="sresult[23]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[23]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">릴레이</td>
              <td style="text-align:left;">가동콘텍트 마모</td>
              <td><input type="radio"  name="elevator8_1result" value="Y" class="custom-input" v-model="sresult[24]" /> 양호
              <input type="radio" name="elevator8_1result" value="N" class="custom-input" v-model="sresult[24]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[24]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">스프링 이완</td>
              <td><input type="radio"  name="elevator8_2result" value="Y" class="custom-input" v-model="sresult[25]" /> 양호
              <input type="radio" name="elevator8_2result" value="N" class="custom-input" v-model="sresult[25]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[25]" /></td>
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
        sidx: '', // 글번호
        sdate: '',  // 작성날짜
        swiriter: '', // 작성자
        scategory: 'elevator',  // 카테고리
        selectedOption: 'elevator', // 목록페이지에서 사용할 화면 전환용 카테고리
        scheckidx: '',  // 체크리스트 인덱스
        sresult: [],  // 결과 리스트
        sprocess: [], // 처리상황 리스트
        scheck: [], // 체크리스트
        requestBody: {}
    };
  },
  methods: {
      // 데이터 저장하는 함수
      async fnSave(){
          const test = JSON.parse(this.$cookie.get('emp'))  // 쿠키로부터 작성자 정보 가져오기
          let data = [];
          let sidx = 0;
          this.form = {
              "scategory": this.scategory,  // 카테고리 정보 저장
              "swiriter": {
                  "emp_idx": test.emp_idx // 작성자 정보 저장
              }
          }
          for(let i=0; i < this.sresult.length; i++){
              // 결과 및 처리상황 정보를 데이터에 저장
              data.push({
                  scheck: i+1,
                  sresult: this.sresult[i],
                  sprocess: this.sprocess[i]
              })
          }

          try {
              // 시설테이블 데이터 서버로 전송
              const res = await this.$axios.post(this.$serverUrl + '/seesul', this.form);
              sidx = res.data.sidx;
              console.log(data);
              // 체크리스트 데이터 서버로 전송
              await this.$axios.post(this.$serverUrl + '/scheck/' + sidx, data);
              alert('글이 저장되었습니다.');
              this.fnView(sidx);  // 저장된 글 상세보기
          } catch(err) {
              if (err.message.indexOf('Network Error') > -1) {
                  alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
              }
          }
      },
      // 상세보기 페이지 이동 함수
      fnView(sidx) {
          console.log(sidx);
          this.requestBody.sidx = sidx
          this.$router.push({
              path: '/seesul/elevator',
              query: this.requestBody
          })
      },
      // 목록 페이지 이동 함수
      fnList(){
          delete this.requestBody.sidx
          this.requestBody.selectedOption = this.selectedOption;  // 카테고리 정보 전달
          this.$router.push({
              path: '/seesul/list',
              query: this.requestBody
          })
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