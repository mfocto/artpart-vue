<template>
  <div>
    <div  align="left" class="jb-header">
        <h1>직원 관리</h1>
    </div>
        
  </div>
      <br>
      <br>
      <div align="left" class="jb-header" ><h2>직원 목록&nbsp; 
      
          <div class="button1" style="float: right;" >
            <button type="button" class="btn btn-dark" v-on:click="fnSignUp">등록</button>
          </div></h2> 
      </div>

      <div  class="jb-header">
        직원 검색 &nbsp; &nbsp; &nbsp;
        <select v-model="search_key">
          <option selected>-선택-</option>
          <option value="emp_name">이름</option>
          <option value="emp_partmentid">직원구분</option>
          <option value="emp_departmentid">소속</option>
          <option value="emp_jobid">직위</option>
          <option value="emp_hiredate">입사일</option>
        </select> &nbsp; &nbsp;
        <input type="text" v-model="search_value" @keyup.enter="fnPage()"> &nbsp; &nbsp; 
        <button class="btn btn-dark" @click="fnPage()">검색</button>
      </div>
      <div>
        <table class="table table-striped table-sm">
          <thead class="thead1">
            <tr>
              <th scope="col">사원번호</th>
              <th scope="col">사원구분</th>
              <th scope="col">소속</th>
              <th scope="col">직위</th>
              <th scope="col">사원명</th>
              <th width="15%" scope="col">주소</th>
              <th width="15%" scope="col">연락처</th>
              <th scope="col">차량번호</th>
              <th width="10%" scope="col">입사일</th>
              <th width="10%" scope="col">퇴사일</th>
              <th scope="col">비고</th>
            </tr>
          </thead>
          <tbody class="tbody1">
            <tr v-for="(row, emp_idx) in list" :key="emp_idx">
                <td>{{ row.emp_id }}</td>
                <td>{{ row.emp_permanent_id }}</td><!--사원구분-->
                <td>{{ row.emp_department_id }}</td><!--소속-->
                <td>{{ row.emp_job_id }}</td><!--직급/직위-->
                <td><a v-on:click="fnView(row.emp_idx)">{{ row.emp_name}}</a></td><!--사원이름-->
                <td>{{ row.emp_address }}</td><!--주소-->
                <td>{{ row.emp_phone }}</td><!--연락처-->
                <td>{{ row.emp_car }}</td><!--차량번호-->
                <td>{{ formatDate(row.emp_hire_date) }}</td><!--입사일-->
                <td>{{ formatDate(row.emp_departure_date )}}</td><!--퇴사일-->
                <td>{{ row.emp_memo }}</td><!--비고-->
            </tr>
           </tbody>
         </table>
        <!-- 페이지 처리 해야 함 -->
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
export default {
  data() { //변수생성
    return {
      requestBody: {}, //리스트 페이지 데이터전송
      list: {}, //리스트 데이터
      no: '', //게시판 숫자처리
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
      search_key: this.$route.query.sk ? this.$route.query.sk : '',
      search_value: this.$route.query.sv ? this.$route.query.sv : '',

      paginavigation: function () { //페이징 처리 for문 커스텀
        let pageNumber = [] //;
        let start_page = this.paging.start_page;
        let end_page = this.paging.end_page;
        for (let i = start_page; i <= end_page; i++) pageNumber.push(i);
        return pageNumber;
      }
    };
  },
  mounted(){
    this.fnGetEmp()
  },
  methods: {
    fnGetEmp(){
      // 서버에서 갖고 온 데이터 출력
      this.requestBody = {//데이터 전송
        sk: this.search_key,
        sv: this.search_value,
        page: this.page,
        size: this.size
      }
      this.$axios.get(this.$serverUrl + "/admin/list",{
        params: this.requestBody,
        headers: {}

      }).then((res) => {
        if(res.data.result_code === "OK"){
          this.list = res.data.data
          this.paging = res.data.pagination
          this.no = this.paging.total_list_cnt - ((this.paging.page - 1) * this.paging.page_size)
        }
      }).catch(error => {
        if (error.response) {
          // 오류 응답을 받은 경우
          console.log(error.response.status);
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
    fnView(emp_idx) {
          console.log(emp_idx);
          this.requestBody.emp_idx = emp_idx
          this.$router.push({
              path: './detail',
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
    fnSignUp(){
      this.$router.push({
        path: './signUp'
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
jb-header.button2{
  float: right;
}


input #start {
    margin: 0.4rem 0;
}

</style>
