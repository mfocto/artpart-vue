<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">시설관리</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="input-group">
          <label for="month" class="input-group-text">항목:</label>
          <select class="form-select" id="category" v-model="selectedOption">
            
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
        <div class="d-flex justify-content-end">
            <button class="btn btn-sm btn-outline-secondary" v-on:click="fnWrite">작성</button>
        </div>
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">번호</th>
              <th scope="col">제목</th>
              <th scope="col">작성자</th>
              <th scope="col">일자</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, sidx) in filteredRows" :key="sidx">
                <td>{{ row.sidx }}</td>
                <td><a v-on:click="fnView(row.sidx)">{{ formatDate(row.sdate) }} 전기점검</a></td>
                <td>{{ row.swiriter.emp_name }}</td>
                <td>{{ row.sdate }} </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 전기점검 영역 끝 -->

      <!-- 가스점검 영역 시작 -->
      <div class="table-responsive" id="gas" v-if="selectedOption === 'gas'">
        <div class="d-flex justify-content-end">
            <button class="btn btn-sm btn-outline-secondary" v-on:click="fnWrite">작성</button>
        </div>
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">번호</th>
              <th scope="col">제목</th>
              <th scope="col">작성자</th>
              <th scope="col">일자</th>
            </tr>
          </thead>
            <tbody>
            <tr v-for="(row, sidx) in filteredRows" :key="sidx">
                <td>{{ row.sidx }}</td>
                <td><a v-on:click="fnView(row.sidx)">{{ formatDate(row.sdate) }} 가스점검</a></td>
                <td>{{ row.swiriter.emp_name }}</td>
                <td>{{ row.sdate }} </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 가스점검 영역 끝 -->

      <!-- 승강기점검 영역 시작 -->
      <div class="table-responsive" id="elevator" v-if="selectedOption === 'elevator'">
        <div class="d-flex justify-content-end">
            <button class="btn btn-sm btn-outline-secondary" v-on:click="fnWrite">작성</button>
        </div>
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">번호</th>
              <th scope="col">제목</th>
              <th scope="col">작성자</th>
              <th scope="col">일자</th>
            </tr>
          </thead>
            <tbody>
            <tr v-for="(row, sidx) in filteredRows" :key="sidx">
                <td>{{ row.sidx }}</td>
                <td><a v-on:click="fnView(row.sidx)">{{ formatDate(row.sdate) }} 승강기점검</a></td>
                <td>{{ row.swiriter.emp_name }}</td>
                <td>{{ row.sdate }} </td>
            </tr>
            </tbody>
        </table>
      </div>
      <!-- 승강기점검 영역 끝 -->

      <!-- 놀이터점검 영역 시작 -->
      <div class="table-responsive" id="playground" v-if="selectedOption === 'playground'">
        <div class="d-flex justify-content-end">
            <button class="btn btn-sm btn-outline-secondary" v-on:click="fnWrite">작성</button>
        </div>
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">번호</th>
              <th scope="col">제목</th>
              <th scope="col">작성자</th>
              <th scope="col">일자</th>
            </tr>
          </thead>
            <tbody>
            <tr v-for="(row, sidx) in filteredRows" :key="sidx">
                <td>{{ row.sidx }}</td>
                <td><a v-on:click="fnView(row.sidx)">{{ formatDate(row.sdate) }} 놀이터점검</a></td>
                <td>{{ row.swiriter.emp_name }}</td>
                <td>{{ row.sdate }} </td>
            </tr>
            </tbody>
        </table>
      </div>
    <div>
        <div></div>
        <div v-if="paging.total_list_cnt > 0" style="margin: 0 auto !important;">
            <span >
            <a  class="page-item" href="javascript:;" @click="fnPage(1)" >&lt;&lt;</a>
            <a class="page-item" href="javascript:;" v-if="paging.page > 7" @click="fnPage(`${paging.start_page-1}`)"
            >&lt;</a>
            <template v-for=" (n,index) in paginavigation()">
                <template v-if="paging.page==n">
                    <strong class="page-item-fn" :key="index">{{ n }}</strong>
                </template>
                <template v-else>
                    <a class="page-item" href="javascript:;" @click="fnPage(`${n}`)" :key="index">{{ n }}</a>
                </template>
            </template>
            <a  class="page-item" href="javascript:;" v-if="paging.total_page_cnt > paging.end_page"
                @click="fnPage(`${paging.end_page+1}`)" >&gt;</a>
            <a  class="page-item" href="javascript:;" @click="fnPage(`${paging.total_page_cnt}`)" >&gt;&gt;</a>
            </span>
        </div>
    </div>
      <!-- 놀이터점검 영역 끝 -->
</template>

<script>
export default {
  data() {
    return {
      selectedOption: 'electric',
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
      search_key: this.$route.query.sk ? this.$route.query.sk : ' ',
      search_value: this.$route.query.sv ? this.$route.query.sv : 'electric',

      paginavigation: function () { //페이징 처리 for문 커스텀
          let pageNumber = [] //;
          let start_page = this.paging.start_page;
          let end_page = this.paging.end_page;
          for (let i = start_page; i <= end_page; i++) pageNumber.push(i);
          return pageNumber;
      }
    };
  },
  watch: {
    selectedOption(newVal) {
        this.search_value = newVal;
        this.fetchSeesul();
    }
  },
  methods: {
    toggleReadonly() {
      this.isReadonly = !this.isReadonly;
    },
    fetchSeesul(){
      //스프링 부트에서 전송받은 데이터 출력 처리
      this.requestBody = { // 데이터 전송
          //keyword: this.keyword,
          sk: 'scategory',
          sv: this.search_value,
          page: this.page,
          size: this.size
      }

      this.$axios.get(this.$serverUrl + "/seesul/list", {
          params: this.requestBody,
          headers: {}
      }).then((res) => {

          //this.list = res.data  //서버에서 데이터를 목록으로 보내므로 바로 할당하여 사용할 수 있다.
          if (res.data.result_code === "OK") {
              this.list = res.data.data
              this.paging = res.data.pagination
              this.no = this.paging.total_list_cnt - ((this.paging.page - 1) * this.paging.page_size)
          }
      }).catch( error => {
          console.error(error);
      })
    },
    formatDate: function(datetime) {
        let date = new Date(datetime);
        let year = date.getFullYear();
        let month = ('0' + (date.getMonth()+1)).slice(-2); // Months are zero based
        let day = ('0' + date.getDate()).slice(-2);
        return `${year}년${month}월${day}일`;
    },
    fnView(sidx){
      console.log(sidx);
      this.requestBody.sidx = sidx
      this.$router.push({
          path: `./${this.selectedOption}`,
          query: this.requestBody
      })
    },
    fnPage(n) {
      if (this.page !== n) {
          this.page = n
      }
      this.fetchSeesul()
    },
    fnWrite(){
        this.$router.push({
            path: `/${this.selectedOption}/write`,
            query: this.requestBody
        })
    }
  },
  mounted() {
      this.fetchSeesul();
  },
  computed: {
    filteredRows() {
        if (Array.isArray(this.list)) {
            return this.list.filter(row => row.scategory === this.selectedOption);
        } else {
            return [];
        }
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
</style>
