<template>
    
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">입주민</h1>
          <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group me-2">

            </div>
            
          </div>
        </div>
  
        <h2>민원 조회</h2>

              민원내용 <input type="text" style="width: 10%" v-model="search_value"> 처리여부 <select id="category" v-model="search_value1" style="width: 5%">
            <option value="처리완료">처리완료</option>
            <option value="처리예정">처리예정</option>
        </select> &nbsp;&nbsp;<button @click="fnPage()"> 검색</button>

        <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">동수</th>
                <th scope="col">호수</th>
                <th scope="col">민원내용</th>
                <th scope="col">이름</th>
                <th scope="col">핸드폰번호</th>
                <th scope="col">처리여부</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, minidx) in list" :key="minidx">
                <td>{{ row.memberidx.memberdong }}</td>
                <td>{{ row.memberidx.memberho }}</td>
                  <td><a v-on:click="fnView(row.minidx)">{{row.mintitle}}</a></td>
                <td>{{ row.memberidx.membername }}</td>
                <td>{{ row.memberidx.memberphone }}</td>
                <td>{{ row.minstatus }}</td>
              </tr>

            </tbody>
          </table>
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
              size: this.$route.query.size ? this.$route.query.size : 30,
              //keyword: this.$route.query.keyword,
              search_value: this.$route.query.sv ? this.$route.query.sv : '',
              search_value1: this.$route.query.sv1 ? this.$route.query.sv1 : '',


              paginavigation: function () { //페이징 처리 for문 커스텀
                  let pageNumber = [] //;
                  let start_page = this.paging.start_page;
                  let end_page = this.paging.end_page;
                  for (let i = start_page; i <= end_page; i++) pageNumber.push(i);
                  return pageNumber;
              }
          }
      },

      methods:{
          fetchMinone(){
              this.requestBody = { // 데이터 전송
                  //keyword: this.keyword,

                  sv: this.search_value,
                  sv1: this.search_value1,
                  page: this.page,
                  size: this.size
              }
              this.$axios.get(this.$serverUrl+"/minone/list",{
                  params: this.requestBody,
                  headers: {}
              }).then((res) => {

                  if(res.data.result_code === "OK"){
                      this.list = res.data.data
                      this.paging = res.data.pagination
                      this.no = this.paging.total_list_cnt - ((this.paging.page - 1) * this.paging.page_size)
                  }
              }).catch( error => {
                  console.error(error);
              })
          },
          fnPage(n) {
              if (this.page !== n) {
                  this.page = n

              }
              this.fetchMinone()
          },
          fnView(minidx){
              this.requestBody.minidx = minidx
              this.$router.push({
                  path: './complaintdetail',
                  query: this.requestBody
              })
          },
          fnWrite(){
              this.$router.push({
                  path: './complaintUpdate',
              })
          },
      },
      mounted(){
          this.fetchMinone();
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
    color: #000000;
  }
  </style>
  