<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">시설관리 - 전기점검</h1>
  </div>
  <!-- 전기점검 영역 시작 -->
      <div class="table-responsive" id="electric">
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
              <th colspan="4" style="text-align:right;"> 점검일자 : <input type="text" value="2023-04-26" class="custom-input" /></th>
                            
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
                <td style="text-align:left;"> 케이블 헤드의 이상유무</td>
              <td><input type="radio"  name="electric1_1result" value="Y" class="custom-input" v-model="sresult[0]"/> 양호
              <input type="radio" name="electric1_1result" value="N" class="custom-input" v-model="sresult[0]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[0]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">칼과 칼받이의 접촉, 과열, 변색여부</td>
              <td><input type="radio"  name="electric1_2result" value="Y" class="custom-input" v-model="sresult[1]" /> 양호
              <input type="radio" name="electric1_2result" value="N" class="custom-input" v-model="sresult[1]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[1]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">음향, 진동, 이물부착여부</td>
              <td><input type="radio"  name="electric1_3result" value="Y" class="custom-input" v-model="sresult[2]" /> 양호
              <input type="radio" name="electric1_3result" value="N" class="custom-input" v-model="sresult[2]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[2]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="3">계기용 변성기</td>
              <td style="text-align:left;">외부접속부의 과열, 변색여부</td>
              <td><input type="radio"  name="electric2_1result" value="Y" class="custom-input" v-model="sresult[3]" /> 양호
              <input type="radio" name="electric2_1result" value="N" class="custom-input" v-model="sresult[3]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[3]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">유누설 및 유량부족여부</td>
              <td><input type="radio"  name="electric2_2result" value="Y" class="custom-input" v-model="sresult[4]" /> 양호
              <input type="radio" name="electric2_2result" value="N" class="custom-input" v-model="sresult[4]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[4]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">진동, 음향, 온도의 이상유무</td>
              <td><input type="radio"  name="electric2_3result" value="Y" class="custom-input" v-model="sresult[5]" /> 양호
              <input type="radio" name="electric2_3result" value="N" class="custom-input" v-model="sresult[5]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[5]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">차단기</td>
              <td style="text-align:left;">외부접속부의 과열, 변색여부</td>
              <td><input type="radio"  name="electric3_1result" value="Y" class="custom-input" v-model="sresult[6]" /> 양호
              <input type="radio" name="electric3_1result" value="N" class="custom-input" v-model="sresult[6]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[6]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">진동, 음향의 이상유무</td>
              <td><input type="radio"  name="electric3_2result" value="Y" class="custom-input" v-model="sresult[7]" /> 양호
              <input type="radio" name="electric3_2result" value="N" class="custom-input" v-model="sresult[7]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[7]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">콘덴사</td>
              <td style="text-align:left;">외부 접속부의 변형상태</td>
              <td><input type="radio"  name="electric4_1result" value="Y" class="custom-input" v-model="sresult[8]" /> 양호
              <input type="radio" name="electric4_1result" value="N" class="custom-input" v-model="sresult[8]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[8]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">누유의 이상유무</td>
              <td><input type="radio"  name="electric4_2result" value="Y" class="custom-input" v-model="sresult[9]" /> 양호
              <input type="radio" name="electric4_2result" value="N" class="custom-input" v-model="sresult[9]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[9]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="3">축전기</td>
              <td style="text-align:left;">외부 접속부 및 청소상태</td>
              <td><input type="radio"  name="electric5_1result" value="Y" class="custom-input" v-model="sresult[10]" /> 양호
              <input type="radio" name="electric5_1result" value="N" class="custom-input" v-model="sresult[10]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[10]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">충, 방전상태</td>
              <td><input type="radio"  name="electric5_2result" value="Y" class="custom-input" v-model="sresult[11]" /> 양호
              <input type="radio" name="electric5_2result" value="N" class="custom-input" v-model="sresult[11]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[11]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">비중 및 축전기액 누유상태</td>
              <td><input type="radio"  name="electric5_3result" value="Y" class="custom-input" v-model="sresult[12]" /> 양호
              <input type="radio" name="electric5_3result" value="N" class="custom-input" v-model="sresult[12]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[12]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="4">발전기</td>
              <td style="text-align:left;">연료, 윤활유, 냉각수의 이상상태</td>
              <td><input type="radio"  name="electric6_1result" value="Y" class="custom-input" v-model="sresult[13]" /> 양호
              <input type="radio" name="electric6_1result" value="N" class="custom-input" v-model="sresult[13]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[13]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">운전상태의 이상(진압상태)</td>
              <td><input type="radio"  name="electric6_2result" value="Y" class="custom-input" v-model="sresult[14]" /> 양호
              <input type="radio" name="electric6_2result" value="N" class="custom-input" v-model="sresult[14]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[14]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">진동, 음향, 과열, 가동상태</td>
              <td><input type="radio"  name="electric6_3result" value="Y" class="custom-input" v-model="sresult[15]" /> 양호
              <input type="radio" name="electric6_3result" value="N" class="custom-input" v-model="sresult[15]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[15]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">표시등 점등상태</td>
              <td><input type="radio"  name="electric6_4result" value="Y" class="custom-input" v-model="sresult[16]" /> 양호
              <input type="radio" name="electric6_4result" value="N" class="custom-input" v-model="sresult[16]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[16]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="3">분전반</td>
              <td style="text-align:left;">과열변색, 이완상태</td>
              <td><input type="radio"  name="electric7_1result" value="Y" class="custom-input" v-model="sresult[17]" /> 양호
              <input type="radio" name="electric7_1result" value="N" class="custom-input" v-model="sresult[17]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[17]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">청소, 전압조정기 안전상태</td>
              <td><input type="radio"  name="electric7_2result" value="Y" class="custom-input" v-model="sresult[18]" /> 양호
              <input type="radio" name="electric7_2result" value="N" class="custom-input" v-model="sresult[18]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[18]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">시근장치 및 보완상태</td>
              <td><input type="radio"  name="electric7_3result" value="Y" class="custom-input" v-model="sresult[19]" /> 양호
              <input type="radio" name="electric7_3result" value="N" class="custom-input" v-model="sresult[19]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[19]" /></td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">기타</td>
              <td style="text-align:left;">소방설비, 점등 동작상태</td>
              <td><input type="radio"  name="electric8_1result" value="Y" class="custom-input" v-model="sresult[20]" /> 양호
              <input type="radio" name="electric8_1result" value="N" class="custom-input" v-model="sresult[20]" /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[20]" /></td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">CAR 리프트의 동작운전상태</td>
              <td><input type="radio"  name="electric8_2result" value="Y" class="custom-input" v-model="sresult[21]" /> 양호
              <input type="radio" name="electric8_2result" value="N" class="custom-input" v-model="sresult[21]"  /> 불량</td>
              <td><input type="text" class="custom-input" v-model="sprocess[21]" /></td>
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
        sidx: '',
        sdate: '',
        swiriter: '',
        scategory: 'electric',
        scheckidx: '',
        sresult: [],
        sprocess: [],
        scheck: [],
        requestBody: {}
    };
  },
  methods: {
    async fnSave(){
        const test = JSON.parse(this.$cookie.get('emp'))
        let data = [];
        let sidx = 0;
        this.form = {
            "scategory": this.scategory,
            "swiriter": {
                "emp_idx": test.emp_idx
            }
        }
        for(let i=0; i < 22; i++){
            data.push({
                scheck: i+1,
                sresult: this.sresult[i],
                sprocess: this.sprocess[i]
            })
        }

        try {
            const res = await this.$axios.post(this.$serverUrl + '/seesul', this.form);
            sidx = res.data.sidx;
            console.log(data);
            await this.$axios.post(this.$serverUrl + '/scheck/' + sidx, data);
            alert('글이 저장되었습니다.');
            this.fnView(sidx);
        } catch(err) {
            if (err.message.indexOf('Network Error') > -1) {
                alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
            }
        }
    },
    fnView(sidx) {
        console.log(sidx);
        this.requestBody.sidx = sidx
        this.$router.push({
            path: '/seesul/electric',
            query: this.requestBody
        })
    },
    fnList(){
        delete this.requestBody.sidx
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