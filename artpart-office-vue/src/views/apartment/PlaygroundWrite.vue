<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">시설관리 - 놀이터점검</h1>
  </div>
      <div class="table-responsive" id="playground">
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
              <td> 1 </td>
              <td style="text-align:left;">안전표시 및 준수사항등의 안내는 되어 있는가</td>
              <td><input type="radio"  name="playground1result" value="Y" class="custom-input" v-model="sresult[0]"/> 양호
              <input type="radio" name="playground1result" value="N" class="custom-input" v-model="sresult[0]"/> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[0]" /></td>
              <td></td>
            </tr>
            <tr>
              <td> 2 </td>
              <td style="text-align:left;">놀이시설의 파손, 고장, 훼손, 너트풀림등은 없는가</td>
              <td><input type="radio"  name="playground2result" value="Y" class="custom-input" v-model="sresult[1]" /> 양호
              <input type="radio" name="playground2result" value="N" class="custom-input" v-model="sresult[1]" /> 불량</td>
              <td><input type="text"  class="custom-input" v-model="sprocess[1]" /></td>
              <td></td>
            </tr>
            <tr>
              <td> 3 </td>
              <td style="text-align:left;">놀이시설의 작동부 주유상태는 양호한가</td>
              <td><input type="radio"  name="playground3result" value="Y" class="custom-input" v-model="sresult[2]" /> 양호
              <input type="radio" name="playground3result" value="N" class="custom-input" v-model="sresult[2]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[2]" /></td>
              <td></td>
            </tr>
            <tr>
              <td> 4 </td>
              <td style="text-align:left;">모래바닥에 깨진 유리, 돌등은 없는가</td>
              <td><input type="radio"  name="playground4result" value="Y" class="custom-input" v-model="sresult[3]" /> 양호
              <input type="radio" name="playground4result" value="N" class="custom-input" v-model="sresult[3]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[3]" /></td>
              <td></td>
            </tr>
            <tr>
              <td> 5 </td>
              <td style="text-align:left;">놀이터 CCTV는 정상 작동하는가</td>
              <td><input type="radio"  name="playground5result" value="Y" class="custom-input" v-model="sresult[4]" /> 양호
              <input type="radio" name="playground5result" value="N" class="custom-input" v-model="sresult[4]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[4]" /></td>
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
          sidx: '', // 글번호
          sdate: '',  // 작성날짜
          swiriter: '', // 작성자
          scategory: 'playground',  // 카테고리
          selectedOption: 'playground', // 목록페이지에서 사용할 화면 전환용 카테고리
          scheckidx: '',  // 체크리스트 인덱스
          sresult: [],  // 결과 리스트
          sprocess: [], // 처리상황 리스트
          scheck: [], // 체크리스트
          requestBody: {}
      };
  },
  methods: {
      //데이터 저장하는 함수
      async fnSave(){
          const test = JSON.parse(this.$cookie.get('emp')) // 쿠키로부터 작성자 정보 가져오기
          let data = [];
          let sidx = 0;
          this.form = {
            "scategory": this.scategory,  //카테고리 정보 저장
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
              await this.fnView(sidx);  //저장된 글 상세보기
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
              path: '/seesul/playground',
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