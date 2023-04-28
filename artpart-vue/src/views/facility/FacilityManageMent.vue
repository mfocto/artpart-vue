<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">시설관리</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="input-group">
          <label for="month" class="input-group-text">항목:</label>
          <select class="form-select" id="category" v-model="selectedOption">
            <option value="selected">선택</option>
            <option value="electric">전기</option>
            <option value="gas">가스</option>
            <option value="elevator">승강기</option>
            <option value="playground">놀이터</option>
          </select>
        </div>
        
      </div>   
  </div>
  <!-- 전기점검 영역 시작 -->
      <div class="table-responsive" id="electric" v-if="selectedOption === 'electric'">
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
              <th scope="col" style="width: 10%"> 처 리 상 태</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="3">인입선로<br>및<br>단로기</td>
              <td style="text-align:left;">케이블 헤드의 이상유무</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">칼과 칼받이의 접촉, 과열, 변색여부</td>              
              <td>불량</td>
              <td>처리 중</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">음향, 진동, 이물부착여부</td>
              <td>불량</td>
              <td>처리 중</td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="3">계기용 변성기</td>
              <td style="text-align:left;">외부접속부의 과열, 변색여부</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">유누설 및 유량부족여부</td>
              <td>불량</td>
              <td>처리 중</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">진동, 음향, 온도의 이상유무</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">차단기</td>
              <td style="text-align:left;">외부접속부의 과열, 변색여부</td>
              <td>불량</td>
              <td>처리 중</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">진동, 음향의 이상유무</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">콘덴사</td>
              <td style="text-align:left;">외부 접속부의 변형상태</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">누유의 이상유무</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="3">축전기</td>
              <td style="text-align:left;">외부 접속부 및 청소상태</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">충, 방전상태</td>
              <td>불량</td>
              <td>처리 중</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">비중 및 축전기액 누유상태</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="4">발전기</td>
              <td style="text-align:left;">연료, 윤활유, 냉각수의 이상상태</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">운전상태의 이상(진압상태)</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">진동, 음향, 과열, 가동상태</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">표시등 점등상태</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="3">분전반</td>
              <td style="text-align:left;">과열변색, 이완상태</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">청소, 전압조정기 안전상태</td>
              <td>불량</td>
              <td>처리 중</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">시근장치 및 보완상태</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">기타</td>
              <td style="text-align:left;">소방설비, 점등 동작상태</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">CAR 리프트의 동작운전상태</td>
              <td>양호</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 전기점검 영역 끝 -->

      <!-- 가스점검 영역 시작 -->
      <div class="table-responsive" id="gas" v-if="selectedOption === 'gas'">
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
              <td rowspan="7">정압기</td>
              <td style="text-align:left;">1. 가스 누설 경보기 작동 상태는?</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">2. 가스 누설 유무는?</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">3. 이상압 통보 설비 작동 상태는?</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">4. 가스의 압력 측정 기록 및 게이지 작동 상태는?</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">5. 환기구 통풍상태는 양호한가?</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">6. 전기설비의 작동 유무(방폭 등, 히터트레스) 상태는?</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">7. 외부인의 출입은 없는가?</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="7">배관</td>
              <td style="text-align:left;">1. 가스계량기 작동 상태는?</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">2. 배관 도색 상태는?</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">3. 가스 누설 자동 차단기 및 누설 경보기 작동 상태는?</td>
              <td>불량</td>
              <td>처리 중</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">4. 가스 누설여부(비눗물 확인)는 확인되었는가?</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">5. 호스 길이(30cm 이내) 및 각 부위 연결 상태는?</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">6. 압력 표기 및 흐름 방향 표시 상태는?</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">7. 배관 고정 상태는 양호한가?</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="5">연소기</td>
              <td style="text-align:left;">1. 연소기의 급.배기 설치 상태는?</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">2. 배기통의 설치 상태는 이상이 없는가?</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">3. 압력조정기 및 각 부위 게이지 작동 상태는?</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">4. 연결부위 가스 누설 여부는?</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">5. 누설 경보기 작동 상태는?</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">기타</td>
              <td style="text-align:left;">1. 사고발생시 안전조치 사항은 숙지하고 있는가?</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">2. 소화기는 항상 비치되어 있는가?</td>
              <td>불량</td>
              <td>처리 중</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 가스점검 영역 끝 -->

      <!-- 승강기점검 영역 시작 -->
      <div class="table-responsive" id="elevator" v-if="selectedOption === 'elevator'">
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
              <td rowspan="3">기계실</td>
              <td style="text-align:left;">유리창 파손</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">우수침입 및 누수</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">콘크리트 크랙</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="3">권상기</td>
              <td style="text-align:left;">웜기어의 접촉상태</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">도르레홈통의 마모</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">드러스트베어링의 마모 및 파손</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="3">전동기</td>
              <td style="text-align:left;">정류자 상태</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">베어링축의 온도상승 및 급유</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">소음 상태</td>
              <td>불량</td>
              <td>처리 중</td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">브레이크</td>
              <td style="text-align:left;">플랜저의 작동</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">브레이크슈 라이닝의 마모</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="5">전동발전기</td>
              <td style="text-align:left;">정유자 상태</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">카본브러쉬 마모</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">전압저하 여부</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">브러쉬 홀더 상태</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">자기음 상태</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="3">기동반</td>
              <td style="text-align:left;">스위치, 휴즈 상태</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">메터의 상태</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">콘택터의 접촉</td>
              <td>불량</td>
              <td>처리 중</td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="5">제어반</td>
              <td style="text-align:left;">휴즈, 저항</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">계전기의 트립상태</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">정류기의 상태</td>
              <td>양호</td>
              <td></td>
            </tr>
             <tr>
              <td style="text-align:left;">이면배선의 접촉상태</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">절연저항 측정</td>
              <td>불량</td>
              <td>처리 중</td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">릴레이</td>
              <td style="text-align:left;">가동콘텍트 마모</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td style="text-align:left;">스프링 이완</td>
              <td>양호</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 승강기점검 영역 끝 -->

      <!-- 놀이터점검 영역 시작 -->
      <div class="table-responsive" id="playground" v-if="selectedOption === 'playground'">
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
              <td>불량</td>
              <td>처리 중</td>
              <td></td>
            </tr>
            <tr>
              <td> 2 </td>
              <td style="text-align:left;">놀이시설의 파손, 고장, 훼손, 너트풀림등은 없는가</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td> 3 </td>
              <td style="text-align:left;">놀이시설의 작동부 주유상태는 양호한가</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td> 4 </td>
              <td style="text-align:left;">모래바닥에 깨진 유리, 돌등은 없는가</td>
              <td>양호</td>
              <td></td>
            </tr>
            <tr>
              <td> 5 </td>
              <td style="text-align:left;">놀이터 CCTV는 정상 작동하는가</td>
              <td>양호</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 놀이터점검 영역 끝 -->
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
      selectedOption: 'selected' 
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
  color: #42b983;
}
.custom-input {
    border: none;
    background: transparent;
    text-align: center;
  }
</style>
