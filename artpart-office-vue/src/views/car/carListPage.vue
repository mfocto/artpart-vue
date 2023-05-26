<template>
  <div>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">차량 관리</h1>
    </div>
    <br>
    <br>
    <div class="jb-header" >
      <h2>차량 조회&nbsp;
        <button class="btn btn-dark" v-on:click="fnWrite">등록</button>
      </h2>
    </div>
    <br>
    <br>
    <div>
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

      <table class="table table-striped table-sm">
        <thead class="thead1">
        <tr>
          <th width="10%" scope="col">동호수 OR 사원 이름 </th>
          <th width="10%" scope="col">차량구분 </th>
          <th width="10%" scope="col">차량번호 </th>
          <th width="10%" scope="col">차종 </th>
          <th width="10%" scope="col">비고 </th>
          <th width="10%" scope="col">등록일시 </th>
          <th width="20%" scope="col">방문 기간 </th>
          <th width="5%" scope="col"></th>
          <th width="5%" scope="col"></th>
        </tr>
        </thead>
        <tbody class="tbody1">
        <tr v-for="(row, car_idx) in list" :key="car_idx">
          <td>
            <span v-if="row.member_carid.memberdong === '직원'">{{row.emp_carid.emp_name}} </span>
            <span v-else-if="row.emp_carid.emp_name === '입주민'">{{ row.member_carid.memberdong}} &nbsp; - {{ row.member_carid.memberho}}</span>
            <span v-else>---</span>

          </td>
          <td><span v-if="row.car_division_id === undefined">---</span>
            <span v-else>{{ row.car_division_id}}</span>
          </td>
          <td><span v-if="row.car_number === undefined">---</span>
            <span v-else><a v-on:click="fnView(row.car_idx)">{{ row.car_number }}</a></span>
          </td>
          <td><span v-if="row.car_type === undefined">---</span>
              <span v-else>{{ row.car_type }}</span>
          </td>
          <td><span v-if="row.car_note === undefined">---</span>
              <span v-else>{{ row.car_note }}</span>
          </td>
          <td>{{ row.car_enrolldate }}</td>
          <td><span v-if="row.car_startdate === undefined || row.car_enddate === undefined">--</span>
              <span v-else>{{ row.car_startdate }} ~ {{row.car_enddate}}</span>
          </td>
          <td><button class="btn btn-dark" v-on:click="fnUpdate(row.car_idx)">수정</button>
          </td>
          <td><button class="btn btn-dark" v-on:click="fnDelete(row.car_idx)">삭제</button>
          </td>
        </tr>
        </tbody>
      </table>
      <div v-if="paging.total_list_cnt > 0" style="margin: 0 auto !important;">
                    <span >
                    <a  class="page-item" href="javascript:;" @click="fnPage(1)" >&lt;&lt;</a>
                    <a class="page-item" href="javascript:;" v-if="paging.page > 10" @click="fnPage(`${paging.start_page-1}`)" >&lt;</a>
              <template v-for=" (n,car_idx) in paginavigation()">
                  <template v-if="paging.page==n">
                      <strong class="w3-button w3-border w3-green" :key="car_idx">{{ n }}</strong>
                  </template>
                  <template v-else>
                      <a class="w3-button w3-border" href="javascript:;" @click="fnPage(`${n}`)" :key="car_idx">{{ n }}</a>
                  </template>

              </template>
              <a href="javascript:;" v-if="paging.total_page_cnt > paging.end_page"
                 @click="fnPage(`${paging.end_page+1}`)" class="next w3-button w3-border">&gt;</a>
              <a href="javascript:;" @click="fnPage(`${paging.total_page_cnt}`)" class="last w3-button w3-border">&gt;&gt;</a>
              </span>
      </div>



    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      requestBody: {}, //리스트 페이지 데이터전송
      list: {}, //리스트 데이터
      no: '', //게시판 숫자처리
      paging: {
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
      //keyword: this.$route.query.keyword,
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
  mounted() {
    this.fnGetCarList();
  },
  methods:{
    fnGetCarList(){
      //스프링 부트에서 전송받은 데이터 출력 처리
      this.requestBody = { // 데이터 전송
        sk: this.search_key,
        sv: this.search_value,
        page: this.page,
        size: this.size
      };

      this.$axios.get(this.$serverUrl + "/car/list", {
        params: this.requestBody,
        headers: {}
      }).then((res) => {
        //this.list = res.data  //서버에서 데이터를 목록으로 보내므로 바로 할당하여 사용할 수 있다.
        if (res.data.result_code === "OK") {
          this.list = res.data.data
          this.paging = res.data.pagination
          this.no = this.paging.total_list_cnt - ((this.paging.page - 1) * this.paging.page_size)
        }
      }).catch(error => {
        if (error.response) {
          // 오류 응답을 받은 경우
          console.log(error.response.pagination);
          console.log(error.response.data);
        } else if (error.request) {
          // 요청이 전송되지 않은 경우
          console.log(error.request);
        } else {
          // 오류가 발생한 경우
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
    },
    fnView(car_idx){
      console.log(car_idx);
      this.requestBody.car_idx = car_idx
      this.$router.push({
        path: './detail',
        query: this.requestBody
      })
    },
    fnPage(n) {
      if (this.page !== n) {
        this.page = n
      }
      this.fnGetCarList()
    },
    formatDate: function(datetime){
      let date = new Date(datetime);
      let year = date.getFullYear();
      let month = ('0' + (date.getMonth()+1)).slice(-2); // Months are zero based
      let day = ('0' + date.getDate()).slice(-2);
      return `${year}년${month}월${day}일`;

    },
    fnWrite(){
      this.$router.push({
        path: './write'
      })
    },
    fnUpdate(car_idx){
      this.requestBody.car_idx = car_idx
      this.$router.push({
        path: './write',
        query: this.requestBody
      })
    },
    fnDelete(car_idx){
      this.requestBody.car_idx = car_idx
      if(!confirm("삭제하시겠습니까?")) return

      this.$axios.delete(this.$serverUrl + '/car/' + this.car_idx, {})
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
  color: #0a0a0a;
  text-decoration: none;
}
.page-item {
  min-width:32px;
  padding:2px 6px;
  text-align:center;
  margin:0 3px;
  border-radius: 6px;
  border:1px solid #eee;
  color:#666;
}
.page-item-fn{
  min-width:32px;
  padding:2px 6px;
  text-align:center;
  margin:0 3px;
  border-radius: 6px;
  border:1px solid #eee;
  color:#666;
}
.page-item:hover {
  background: #E4DBD6;
}
.page-item a {
  color:#666;
}
.page-item-fn {
  background-color : #E7AA8D;
  color:#fff;
}
.page-item-fn a {
  color:#fff;
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