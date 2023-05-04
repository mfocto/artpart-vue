<!-- PageAnno.vue -->


<template>
  <div class="background">
    <h1 style="text-align:left; font-size: 26px; font-family:TheJamsil5Bold;" >공지사항</h1>
    <hr style="border-color: gray;"/>

    <div class="board-list">
      <!-- <div class="common-buttons">
        <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnwrite">등록</button>
      </div> -->
      <table class="w3-table-all" style="width:800px; height:100px; font-weight: 100; border:1px solid gray; ">
        <thead>
        <tr>
          <th>No</th>
          <th>제목</th>
          <th>작성자</th>
          <th>조회수</th>
        </tr>
        </thead>
        <tbody style="font-family:Pretendard-Regular;">
        <tr v-for="(row, idx) in list" :key="idx">
          <td>{{ row.idx }}</td>
          <td><a v-on:click="fnView(`${row.idx}`)">{{ row.title }}</a></td>
          <td>{{ row.author }}</td>
          <td>{{ row.created_at }}</td>
        </tr>
        </tbody>
      </table>


      <div class="pagination w3-bar w3-padding-16 w3-small" v-if="paging.total_list_cnt > 0">
        <span class="pg">
        <a href="javascript:;" @click="fnPage(1)" class="first w3-button w3-border">&lt;&lt;</a>
        <a href="javascript:;" v-if="paging.start_page > 10" @click="fnPage(`${paging.start_page-1}`)"
          class="prev w3-button w3-border">&lt;</a>
        <template v-for=" (n,index) in paginavigation()">
            <template v-if="paging.page==n">
                <strong class="w3-button w3-border w3-green" :key="index">{{ n }}</strong>
            </template>
            <template v-else>
                <a class="w3-button w3-border" href="javascript:;" @click="fnPage(`${n}`)" :key="index">{{ n }}</a>
            </template>
        </template>
        <a href="javascript:;" v-if="paging.total_page_cnt > paging.end_page"
          @click="fnPage(`${paging.end_page+1}`)" class="next w3-button w3-border">&gt;</a>
        <a href="javascript:;" @click="fnPage(`${paging.total_page_cnt}`)" class="last w3-button w3-border">&gt;&gt;</a>
        </span>
      </div>
    </div>

    <br><br>
    <!-- 검색필드 추가 -->
    <div class="search" style="text-align:left;">
      <select v-model="search_key" 
          style="text-align:center; color: gray; font-family:TheJamsil5Bold; font-size: 12px; height: 30px; width: 100px; ">
        <option value="">- 선택 -</option>
        <option value="title">글제목</option>
        <option value="contents">글내용</option>
        <option value="title">제목+내용</option>
      </select>
        &nbsp;

      <input type="text" v-model="search_value" @keyup.enter="fnPage()" style=" width: 300px; height: 30px; border:1px solid gray;  ">
        &nbsp;

      <button @click="fnPage()" style="text-align:center; color: gray; font-family:TheJamsil5Bold; 
            font-size: 12px; width: 100px; height: 30px; border:1px solid gray; ">
            검색
      </button>
  </div>
</div> <!-- 백그라운드 설정 -->
</template>





<script>
export default {
  data() { //변수생성
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
  mounted() {
    this.fnGetList()
  },
  methods: {
    fnGetList() {
      
      //##################임시 데이터 출력 처리##################
      this.list = [
        {
            "idx":1,
            "title": "첫번째제목",
            "author": "관리자",
            "created_at": "131"
        },
        {
            "idx":2,
            "title": "두번째제목",
            "author": "관리자",
            "created_at": "121"
        },
        {
            "idx":3,
            "title": "세번째제목",
            "author": "관리자",
            "created_at": "1"
        },
        {
            "idx":4,
            "title": "네번째제목",
            "author": "관리자",
            "created_at": "2"
        },
        {
            "idx":5,
            "title": "열한번째제목",
            "author": "관리자",
            "created_at": "53"
        },
        {
            "idx":6,
            "title": "여섯번째제목",
            "author": "관리자",
            "created_at": "414"
        },
        {
            "idx":7,
            "title": "일곱번째제목",
            "author": "관리자",
            "created_at": "343"
        },
        {
            "idx":8,
            "title": "여덟번째제목",
            "author": "관리자",
            "created_at": "443"
        },
        {
            "idx":9,
            "title": "아홉번째제목",
            "author": "관리자",
            "created_at": "1212"
        },
        {
            "idx":10,
            "title": "열번째제목",
            "author": "관리자",
            "created_at": "76"
        },
  
      ]
      //##################임시 데이터 출력 처리 끝##################






      //##################db연동 데이터 출력 처리##################
      // // 스프링 부트에서 전송받은 데이터 출력 처리
      // this.requestBody = { // 데이터 전송

        
      //   //keyword: this.keyword,
      //   sk: this.search_key,
      //   sv: this.search_value,
      //   page: this.page,
      //   size: this.size
      // }

      // this.$axios.get(this.$serverUrl + "/board/list", {
      //   params: this.requestBody,
      //   headers: {}
      // }).then((res) => {      


      //  // this.list = res.data  //서버에서 데이터를 목록으로 보내므로 바로 할당하여 사용할 수 있다.
      // if (res.data.result_code === "OK") {
      // this.list = res.data.data
      // this.paging = res.data.pagination
      // this.no = this.paging.total_list_cnt - ((this.paging.page - 1) * this.paging.page_size)
      // }


      // }).catch((err) => {
      //   if (err.message.indexOf('Network Error') > -1) {
      //     alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
      //   }
      // })
      //##################db연동 데이터 출력 처리 끝##################

    },




    
    fnView(idx){
      this.requestBody.idx = idx
      this.$router.push({         // router 에게 요청할 정보, pathVariable 방식
        path: './detail',         // url(같은폴더에 있는 detail)
        query: this.requestBody   // parameter
      })
    },
    fnwrite() {
      this.$router.push({
        path: './write'
      })
    },
    fnPage(n) {
      if (this.page !== n) {
        this.page = n
        this.fnGetList()
      }
    }
    



  }//method close
}
</script>


<style scoped>

@font-face {
    font-family: 'TheJamsil5Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}


.background{ /*백그라운드*/
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin:auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}


.board-list {
   position: absolute;
}


.serch {
   position: relative; 
   top: 50%;
}


</style>



