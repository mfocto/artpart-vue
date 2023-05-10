<template>
  <form>
    <div class="row mb-5">
      <div class="btn-group" role="group" aria-label="Basic outlined example">
        <button type="button" class="btn btn-outline-primary" @click="toggleSection('gongdong')">
          공동관리비
        </button>
        <button type="button" class="btn btn-outline-primary" @click="toggleSection('dongfee')">
          개별사용료
        </button>
        <button type="button" class="btn btn-outline-primary" @click="toggleSection('etc')">
          그 외
        </button>
      </div>
    </div>

    <h1 class="text-center mb-5 ">관리비 등록</h1>
    <label for="gongdat">회계년월</label>
    <input type="month" id="gongdate" class="mb-5">
    <div v-show="gongdongVisible">
    <table class="table" id="gongdong">
      <thead>
        <tr>
          <th scope="col" class="txCenter tdItem">대분류</th>
          <th scope="col" class="txCenter tdItem">중분류</th>
          <th scope="col" class="txCenter tdItem">소분류</th>
          <th scope="col" class="txCenter">세부항목</th>
          <th scope="col" class="txCenter tdItem">금액</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th rowspan="35" scope="row" class="bgGary bdR1px align-middle">공용관리비</th>
          <th rowspan="25" scope="row" class="bgGary bdR1px align-middle">일반관리비</th>
          <th rowspan="9" scope="row" class="bgGary bdR1px align-middle">인건비</th>
          <td class="txLeft align-middle">1 급여</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <td class="txLeft align-middle">2 제수당</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <td class="txLeft align-middle">3 상여금</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <td class="txLeft align-middle">4 퇴직금</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <td class="txLeft align-middle">5 산재보험료</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <td class="txLeft align-middle">6 고용보험료</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <td class="txLeft align-middle">7 국민연금</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <td class="txLeft align-middle">8 국민건강보험료</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <td class="txLeft align-middle">9 식대 등 복리후생비</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <th rowspan="3" scope="row" class="bgGary bdR1px align-middle">제사무비</th>
          <td class="txLeft align-middle">10 일반사무용품비</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <td class="txLeft align-middle">11 도서인쇄비</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <td class="txLeft align-middle">12 교통통신비 등</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <th rowspan="4" scope="row" class="bgGary bdR1px align-middle">제세공과금<br>(관리기구 사용)</th>
          <td class="txLeft align-middle">13 전기료</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <td class="txLeft align-middle">14 통신료</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <td class="txLeft align-middle">15 우편료</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <td class="txLeft align-middle">16 세금 등</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <td colspan="2" class="txLeft align-middle">17 피복비</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <td colspan="2" class="txLeft align-middle">18 교육훈련비</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <th rowspan="4" scope="row" class="bgGary bdR1px align-middle">차량유지비
            <br>(관리기구<br>사용)
          </th>
          <td class="txLeft align-middle">19 연료비</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <td class="txLeft align-middle">20 수리비</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <td class="txLeft align-middle">21 보험료</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <td class="txLeft align-middle">22 기타 차량유지비</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <th rowspan="3" scope="row" class="bgGary bdR1px align-middle">그밖의 부대비용</th>
          <td class="txLeft align-middle">23 관리용품 구입비</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <td class="txLeft align-middle">24 회계감사비</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <td class="txLeft align-middle">25 그 밖의 비용(잡비)</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <td colspan="3" class="txLeft align-middle">26 청소비</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <td colspan="3" class="txLeft align-middle">27 경비비</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <td colspan="3" class="txLeft align-middle">28 소독비</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <td colspan="3" class="txLeft align-middle">29 승강기유지비</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <td colspan="3" class="txLeft align-middle">30 지능형홈네트워크설비유지비</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <th rowspan="4" scope="row" class="bgGary bdR1px align-middle">수선유지비</th>
          <td colspan="2" class="txLeft align-middle">31 용역금액 또는 자재 및 인건비(수선비)</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <td colspan="2" class="txLeft align-middle">32 보수유지비 및 제반 검사비(시설유지비)</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <td colspan="2" class="txLeft align-middle">33 건축물의 안전점검비용(안전점검비)</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <td colspan="2" class="txLeft align-middle">34 재난 및 재해 등의 예방에 따른 비용(재해예방비)</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
        <tr>
          <td colspan="3" class="txLeft align-middle">35 위탁관리수수료</td>
          <td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
        </tr>
       <tr><td><button class="btn btn-primary btn-lg mt-4" type="submit">등록</button></td></tr> 
    </tbody>
    
  </table>
</div>
</form>



<br><br>
<form>
<div v-show="dongfeeVisible" class="row" id="dongfee">
  <div class="col-2">
    <h3>동/호수</h3>
    <select class="form-select form-select-md" aria-label=".form-select-sm example">
    <option selected>동 선택</option>
    <option value="1">101동</option>
    <option value="2">102동</option>
    <option value="3">103동</option>
    <option value="4">104동</option>
  </select>
    <div class="form-check pt-5">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
      <label class="form-check-label" for="flexCheckDefault">
        101호
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >
      <label class="form-check-label" for="flexCheckChecked">
        102호
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
      <label class="form-check-label" for="flexCheckDefault">
        201호
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >
      <label class="form-check-label" for="flexCheckChecked">
        202호
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
      <label class="form-check-label" for="flexCheckDefault">
        301호
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >
      <label class="form-check-label" for="flexCheckChecked">
        302호
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
      <label class="form-check-label" for="flexCheckDefault">
        401호
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >
      <label class="form-check-label" for="flexCheckChecked">
        402호
      </label>
    </div>
  </div>
  <div class="col-9">
    <table class="table ms-5">
      <thead>
        <tr>
          <th scope="col" class="txCenter tdItem">대분류</th>
          <th scope="col" class="txCenter tdItem">중분류</th>
          <th scope="col" class="txCenter tdItem">소분류</th>
          <th scope="col" class="txCenter">세부항목</th>
          <th scope="col" class="txCenter tdItem">금액</th>
        </tr>
      </thead>
      <tbody>
        <tr>
	<th rowspan="10" scope="row" class="bgGary bdR1px align-middle">개별사용료</th>
	<td colspan="3" class="txLeft align-middle">36 난방비</td><td class="txRight"><input type="number" class="form-control text-end" min="0" /></td>
  </tr>
  <tr><td colspan="3" class="txLeft align-middle">37 급탕비</td><td class="txRight"><input type="number" class="form-control text-end" min="0" /></td></tr>
  <tr><td colspan="3" class="txLeft align-middle">38 가스사용료</td><td class="txRight"><input type="number" class="form-control text-end" min="0" /></td></tr>
  <tr><td colspan="3" class="txLeft align-middle">39 전기료</td><td class="txRight"><input type="number" class="form-control text-end" min="0" /></td></tr>
  <tr><td colspan="3" class="txLeft align-middle">40 수도료</td><td class="txRight"><input type="number" class="form-control text-end" min="0" /></td></tr>
  <tr><td colspan="3" class="txLeft align-middle">41 정화조오물수수료</td><td class="txRight"><input type="number" class="form-control text-end" min="0" /></td></tr>
  <tr><td colspan="3" class="txLeft align-middle">42 생활폐기물수수료</td><td class="txRight"><input type="number" class="form-control text-end" min="0" /></td></tr>
  <tr><td colspan="3" class="txLeft align-middle">43 관리위원회운영비</td><td class="txRight"><input type="number" class="form-control text-end" min="0" /></td></tr>
  <tr><td colspan="3" class="txLeft align-middle">44 건물보험료</td><td class="txRight"><input type="number" class="form-control text-end" min="0" /></td></tr>
  <tr><td colspan="3" class="txLeft align-middle">45 선거관리위원회 운영비기타</td><td class="txRight"><input type="number" class="form-control text-end" min="0" /></td></tr>
  <tr><td><button class="btn btn-primary btn-lg mt-4" type="submit">등록</button></td></tr> 
      </tbody>
    </table>
  </div>
</div>
</form>
<form>
<div v-show="etcVisible">
  <table class="table">
    <thead>
      <tr>
        <th scope="col" class="txCenter tdItem">대분류</th>
        <th scope="col" class="txCenter">세부항목</th>
        <th scope="col" class="txCenter tdItem">금액</th>
      </tr>
    </thead>
    <tbody>
      <tr><th rowspan="4" class="txLeft align-middle">46.장기수선충당금</th><th class="txLeft align-middle">월부가액</th><td class="txRight"><input type="number" class="form-control text-end" min="0" /></td></tr>
      <tr><th class="txLeft align-middle">월사용금액</th><td class="txRight"><input type="number" class="form-control text-end" min="0" /></td></tr>
      <tr><th class="txLeft align-middle">충당금잔액</th><td class="txRight"><input type="number" class="form-control text-end" min="0" /></td></tr>
      <tr><th class="txLeft align-middle">적립율(%)</th><td class="txRight"><input type="number" class="form-control text-end" min="0" /></td></tr>
      <tr><th rowspan="3" class="txLeft align-middle">47.잡수입</th><th class="txLeft align-middle">월수입금액</th><td class="txRight"><input type="number" class="form-control text-end" min="0" /></td></tr>
      <tr><th class="txLeft align-middle">월사용금액</th><td class="txRight"><input type="number" class="form-control text-end" min="0" /></td></tr>
      <tr><th class="txLeft align-middle">잔액</th><td class="txRight"><input type="number" class="form-control text-end" min="0" /></td></tr>
      <tr><td><button class="btn btn-primary btn-lg mt-4" type="submit">등록</button></td></tr> 
    </tbody>
  </table>
</div>
</form>
</template>
  
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      gongdongVisible: true,
      dongfeeVisible: false,
      etcVisible: false,
    };
  },
  methods: {
    toggleSection(section) {
      if (section === "gongdong") {
        this.gongdongVisible = !this.gongdongVisible;
        this.dongfeeVisible = false;
        this.etcVisible = false;
      } else if (section === "dongfee") {
        this.gongdongVisible = false;
        this.dongfeeVisible = !this.dongfeeVisible;
        this.etcVisible = false;
      } else {
        this.gongdongVisible = false;
        this.dongfeeVisible = false;
        this.etcVisible = !this.etcVisible;
      }
    },
  },
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>h3 {
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
}</style>
  