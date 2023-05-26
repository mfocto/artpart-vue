<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">시설관리 - 가스점검</h1>
  </div>
  <!-- 전기점검 영역 시작 -->
      <div class="table-responsive">
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
              <td rowspan="7">정압기</td>
              <td style="text-align:left;">1. 가스 누설 경보기 작동 상태는?</td>
              <td><input type="radio"  name="gas1_1result" value="Y" class="form-check-input" v-model="sresult[0]"/> 양호
              <input type="radio" name="gas1_1result" value="N" class="form-check-input" v-model="sresult[0]"/> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[0]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">2. 가스 누설 유무는?</td>
              <td><input type="radio"  name="gas1_2result" value="Y" class="form-check-input" v-model="sresult[1]" /> 양호
              <input type="radio" name="gas1_2result" value="N" class="form-check-input" v-model="sresult[1]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[1]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">3. 이상압 통보 설비 작동 상태는?</td>
              <td><input type="radio"  name="gas1_3result" value="Y" class="form-check-input" v-model="sresult[2]" /> 양호
              <input type="radio" name="gas1_3result" value="N" class="form-check-input" v-model="sresult[2]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[2]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">4. 가스의 압력 측정 기록 및 게이지 작동 상태는?</td>
              <td><input type="radio"  name="gas1_4result" value="Y" class="form-check-input" v-model="sresult[3]" /> 양호
              <input type="radio" name="gas1_4result" value="N" class="form-check-input" v-model="sresult[3]" /> 불량</td>
              <td><input type="text"  class="custom-input" v-model="sprocess[3]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">5. 환기구 통풍상태는 양호한가?</td>
              <td><input type="radio"  name="gas1_5result" value="Y" class="form-check-input" v-model="sresult[4]" /> 양호
              <input type="radio" name="gas1_5result" value="N" class="form-check-input" v-model="sresult[4]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[4]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">6. 전기설비의 작동 유무(방폭 등, 히터트레스) 상태는?</td>
              <td><input type="radio"  name="gas1_6result" value="Y" class="form-check-input" v-model="sresult[5]" /> 양호
              <input type="radio" name="gas1_6result" value="N" class="form-check-input" v-model="sresult[5]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[5]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">7. 외부인의 출입은 없는가?</td>
              <td><input type="radio"  name="gas1_7result" value="Y" class="form-check-input" v-model="sresult[6]" /> 양호
              <input type="radio" name="gas1_7result" value="N" class="form-check-input" v-model="sresult[6]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[6]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="7">배관</td>
              <td style="text-align:left;">1. 가스계량기 작동 상태는?</td>
              <td><input type="radio"  name="gas2_1result" value="Y" class="form-check-input" v-model="sresult[7]" /> 양호
              <input type="radio" name="gas2_1result" value="N" class="form-check-input" v-model="sresult[7]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[7]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">2. 배관 도색 상태는?</td>
              <td><input type="radio"  name="gas2_2result" value="Y" class="form-check-input" v-model="sresult[8]" /> 양호
              <input type="radio" name="gas2_2result" value="N" class="form-check-input" v-model="sresult[8]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[8]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">3. 가스 누설 자동 차단기 및 누설 경보기 작동 상태는?</td>
              <td><input type="radio"  name="gas2_3result" value="Y" class="form-check-input" v-model="sresult[9]" /> 양호
              <input type="radio" name="gas2_3result" value="N" class="form-check-input" v-model="sresult[9]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[9]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">4. 가스 누설여부(비눗물 확인)는 확인되었는가?</td>
              <td><input type="radio"  name="gas2_4result" value="Y" class="form-check-input" v-model="sresult[10]" /> 양호
              <input type="radio" name="gas2_4result" value="N" class="form-check-input" v-model="sresult[10]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[10]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">5. 호스 길이(30cm 이내) 및 각 부위 연결 상태는?</td>
              <td><input type="radio"  name="gas2_5result" value="Y" class="form-check-input" v-model="sresult[11]" /> 양호
              <input type="radio" name="gas2_5result" value="N" class="form-check-input" v-model="sresult[11]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[11]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">6. 압력 표기 및 흐름 방향 표시 상태는?</td>
              <td><input type="radio"  name="gas2_6result" value="Y" class="form-check-input" v-model="sresult[12]" /> 양호
              <input type="radio" name="gas2_6result" value="N" class="form-check-input" v-model="sresult[12]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[12]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">7. 배관 고정 상태는 양호한가?</td>
              <td><input type="radio"  name="gas2_7result" value="Y" class="form-check-input" v-model="sresult[13]" /> 양호
              <input type="radio" name="gas2_7result" value="N" class="form-check-input" v-model="sresult[13]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[13]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="5">연소기</td>
              <td style="text-align:left;">1. 연소기의 급.배기 설치 상태는?</td>
              <td><input type="radio"  name="gas3_1result" value="Y" class="form-check-input" v-model="sresult[14]" /> 양호
              <input type="radio" name="gas3_1result" value="N" class="form-check-input" v-model="sresult[14]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[14]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">2. 배기통의 설치 상태는 이상이 없는가?</td>
              <td><input type="radio"  name="gas3_2result" value="Y" class="form-check-input" v-model="sresult[15]" /> 양호
              <input type="radio" name="gas3_2result" value="N" class="form-check-input" v-model="sresult[15]" /> 불량</td>
              <td><input type="text"  class="custom-input" v-model="sprocess[15]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">3. 압력조정기 및 각 부위 게이지 작동 상태는?</td>
              <td><input type="radio"  name="gas3_3result" value="Y" class="form-check-input" v-model="sresult[16]" /> 양호
              <input type="radio" name="gas3_3result" value="N" class="form-check-input" v-model="sresult[16]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[16]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">4. 연결부위 가스 누설 여부는?</td>
              <td><input type="radio"  name="gas3_4result" value="Y" class="form-check-input" v-model="sresult[17]" /> 양호
              <input type="radio" name="gas3_4result" value="N" class="form-check-input" v-model="sresult[17]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[17]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">5. 누설 경보기 작동 상태는?</td>
              <td><input type="radio"  name="gas3_5result" value="Y" class="form-check-input" v-model="sresult[18]" /> 양호
              <input type="radio" name="gas3_5result" value="N" class="form-check-input" v-model="sresult[18]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[18]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">기타</td>
              <td style="text-align:left;">1. 사고발생시 안전조치 사항은 숙지하고 있는가?</td>
              <td><input type="radio"  name="gas4_1result" value="Y" class="form-check-input" v-model="sresult[19]" /> 양호
              <input type="radio" name="gas4_1result" value="N" class="form-check-input" v-model="sresult[19]" /> 불량</td>
              <td><input type="text"  class="custom-input" v-model="sprocess[19]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">2. 소화기는 항상 비치되어 있는가?</td>
              <td><input type="radio"  name="gas4_2result" value="Y" class="form-check-input" v-model="sresult[20]" /> 양호
              <input type="radio" name="gas4_2result" value="N" class="form-check-input" v-model="sresult[20]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[20]" /></td>
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
          scategory: 'gas', // 카테고리
          selectedOption: 'gas',  // 목록페이지에서 사용할 화면 전환용 카테고리
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
                    "emp_idx": test.emp_idx   // 작성자 정보 저장
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
                path: '/seesul/gas',
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