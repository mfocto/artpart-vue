<template>
  <div>
    <div  align="left" class="jb-header">
        <table ><h1 class="h2">방문객 차량 관리</h1></table>
        </div>
      </div>
      <br>
      <br>
      <div align="left" class="jb-header" ><h2>차량 조회&nbsp; 
      
          <div class="button1" style="float: right;" >
            <button type="button" class="btn btn-dark" v-on:click="fnWrite">등록</button>  &nbsp;
          </div></h2> 
      </div>
      <br>
      <br>
      <div  class="jb-header">
            차량 검색 &nbsp; &nbsp; &nbsp;
            <select v-model="search_key">
              <option value="">-선택-</option>
              <option value="car_mumber">차량번호</option>
              <option value="car_division_id">차량구분</option>
              <option value="member_memberdong">입주민 동</option>
              <option value="member_memberho">입주민 호수</option>
              <option value="emp_name">직원이름</option>
            </select> &nbsp; &nbsp; 
            <input type="text" v-model="search_value" @keyup.enter="fnPage()"> &nbsp; &nbsp; 
            <button class="btn btn-dark" @click="fnPage()">검색</button>
      </div>
      <br>
      <br>
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead class="thead1">
            <tr>
              <th width="10%" scope="col">동호수 OR 사원 이름 <button>&and;</button><button>&or;</button> </th>
              <th width="10%" scope="col">차량구분 <button>&and;</button><button>&or;</button> </th>
              <th width="10%" scope="col">차량번호 <button>&and;</button><button>&or;</button> </th>
              <th width="10%" scope="col">차종 <button>&and;</button><button>&or;</button> </th>
              <th width="10%" scope="col">비고 <button>&and;</button><button>&or;</button></th>
              <th width="10%" scope="col">등록일시 <button>&and;</button><button>&or;</button> </th>
              <th width="20%" scope="col">방문 기간 <button>&and;</button><button>&or;</button> </th>
              <th width="5%" scope="col"></th>
              <th width="5%" scope="col"></th>
            </tr>
          </thead>
          <tbody class="tbody1">
            <tr v-for="(row, car_idx) in list" :key="car_idx">
              <td>
                <p v-if="(row.member_carid) !== 'null'">if문 적용{{ row.member_carid.memberdong}} &nbsp; - {{ row.member_carid.memberho}} </p>
                <p v-else-if="(row.emp_carid) !== 'null'">{{row.emp_carid.emp_name}}</p>
                <p>if문 적용 X {{ row.member_carid.memberdong}} &nbsp; - {{ row.member_carid.memberho}} </p>
                <p>if문 적용 X{{row.emp_carid.emp_name}}</p>
                
              </td>
              <td>{{ row.car_division_id}}</td>
              <td><a v-on:click="fnView(row.car_idx)">{{ row.car_number }}</a></td>
              <td>{{ row.car_type }}</td>
              <td>{{ row.car_note }}</td>
              <td>{{ row.car_enrolldate }}</td>
              <td>{{ row.car_startdate }} ~ {{row.car_enddate}}</td>
              <td><a v-on:click="fnUpdate(row.car_idx)" type="button" class="btn btn-dark">a태그수정</a>
                  <button class="btn btn-sm btn-outline-secondary" v-on:click="fnUpdateBu">button수정</button>
              </td>
              <td><a v-on:click="fnDelete(row.car_idx)" type="button" class="btn btn-dark">a태그삭제</a>
                <button class="btn btn-sm btn-outline-secondary" v-on:click="fnDeleteBu">button삭제</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br>
      <br>
      <br>
      <div v-if="paging.total_list_cnt > 0" style="margin: 0 auto !important;">
            <span >
            <a href="javascript:;" @click="fnPage(1)" class="page-item"  >&lt;&lt;</a>
            <a class="page-item" href="javascript:;" v-if="paging.page > 10" @click="fnPage(`${paging.start_page-1}`)">&lt;</a>
      <template v-for=" (n,emp_idx) in paginavigation()">
          <template v-if="paging.page==n">
              <strong class="w3-button w3-border w3-green" :key="emp_idx">{{ n }}</strong>
          </template>
          <template v-else>
              <a class="w3-button w3-border" href="javascript:;" @click="fnPage(`${n}`)" :key="emp_idx">{{ n }}</a>
          </template>
          
      </template>
      <a href="javascript:;" v-if="paging.total_page_cnt > paging.end_page"
         @click="fnPage(`${paging.end_page+1}`)" class="next w3-button w3-border">&gt;</a>
      <a href="javascript:;" @click="fnPage(`${paging.total_page_cnt}`)" class="last w3-button w3-border">&gt;&gt;</a>
      </span>
    </div>
</template>

<script>

export default{
  data(){
    return{
      requestBody:{},//리스트 페이지에 데이터 전송
      list:{},//리스트 데이터
      no: '',//숫자 처리
      paging: { //페이징
        block: 0,
        end_page: 0,
        next_block: 0,
        page: 0,
        page_size: 0,
        prev_block: 0,
        start_index: 0,
        start_page: 0,
        total_block_cnt: 0,
        total_list_cnt: 0,
        total_page_cnt: 0,
      }, //페이징 데이터
      page: this.$route.query.page ? this.$route.query.page : 1,
      size: this.$route.query.size ? this.$route.query.size : 10,
      // keyword: this.$route.query.keyword,
      search_key: this.$route.query.sk ? this.$route.query.sk : '',
      search_value: this.$route.query.sv ? this.$route.query.sv : '',

      paginavigation: function () { //페이징 처리 for문 커스텀
        let pageNumber = [] //;
        let start_page = this.paging.start_page;
        let end_page = this.paging.end_page;
        for (let i = start_page; i <= end_page; i++) pageNumber.push(i);
        return pageNumber;
      }
    }
  },
  mounted(){
    this.fnGetCar()
  },
  methods:{
    fnGetCar(){
      //서버에서 갖고온 데이터
      this.requestBody = {//데이터 전송
        sk: this.search_key,
        sv: this.search_value,
        page: this.page,
        size: this.size
      }
      this.$axios.get(this.$serverUrl + "/car/list",{
        params: this.requestBody,
        headers: {}

      }).then((res) => {
        if(res.data.result_code == "OK"){
          this.list = res.data.data
          this.paging = res.data.pagination
          this.no = this.paging.total_list_cnt - ((this.paging.page - 1) * this.paging.page_size)
        }
      }).catch(
        (err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },
    fnView(car_idx){
      this.requestBody.car_idx = car_idx
      this.$route.push({
        path: './deltail',
        query: this.requestBody
      })
    },
    fnPage(n) {
      if (this.page !== n) {
        this.page = n       
      }
      this.fnGetEmp() 
    },
    formatDate: function(datetime){
      let date = new Date(datetime);
      let year = date.getFullYear();
      let month = ('0' + (date.getMonth()+1)).slice(-2); // Months are zero based
      let day = ('0' + date.getDate()).slice(-2);
      return `${year}년${month}월${day}일`;

    },
    fnWrite(){
      this.$route.push({
        path: './write',
        query: this.requestBody
      })
    },
    fnUpdate(car_idx){
      this.requestBody.car_idx = car_idx
      this.$route.push({
        path: './write',
        query: this.requestBody
      })
     },
    fnDelete(car_idx){
      this.requestBody.car_idx = car_idx
      if(!confirm("삭제하시겠습니까?")) return

          this.$axios.delete(this.$serverUrl + '/admin/' + this.car_idx, {})
              .then(() => {
                  alert('삭제되었습니다.')
                  this.fnList();
              }).catch((err) => {
                  console.log(err);
          })

    },
    fnUpdateBu(){
      this.$router.push({
        path:'./write',
        query:this.requestBody
      })
    },
    fnDeleteBu(){
      if(!confirm("삭제하시겠습니까?")) return

          this.$axios.delete(this.$serverUrl + '/admin/' + this.car_idx, {})
              .then(() => {
                  alert('삭제되었습니다.')
                  this.fnList();
              }).catch((err) => {
                  console.log(err);
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
  color: #42b983;
}
table.table1 {
 border: "4" ;
}
.thead1{
  padding: 20px;
        margin-bottom: 20px;
        border: 4px solid #bcbcbc;
}
tbody.tbody1 {
  padding: 20px;
        margin-bottom: 20px;
        border: 4px solid #bcbcbc;
}

*.jb-header {
        padding: 20px;
        margin-bottom: 20px;
        border: 1px solid #bcbcbc;
        
      }
jb-header.button1{
  float: right;
}
</style>
