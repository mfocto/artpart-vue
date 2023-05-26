<!-- PageMyMinone.vue 내민원 목록 -->


<template>
  <div class="background">
    <h1 style="text-align:left; font-size: 26px; font-family:TheJamsil5Bold;" >내 민원 목록</h1>
    <hr style="border-color: gray;"/>


  <!--getMinoneByMember-->
    <div class="board-list">

      <table class="w3-table-all" style="width:800px; height:100px; font-weight: 100; border:1px solid gray; color:black;">
        <thead>
        <tr>
          <th scope="col" style="width:20%">No</th>
          <th scope="col" style="width:50%">제목</th>
          <th scope="col" style="width:30%;">처리상황</th>

        </tr>
        </thead>


        <tbody style="font-family:Pretendard-Regular;">

        <tr v-for="(row, minidx) in list" :key="minidx">
          <td>{{ row.minidx }}</td>
          <td><a v-on:click="fnView(row.minidx)">{{ row.mintitle}}</a></td>
          <td>{{ row.minstatus }}</td>
        </tr>
        </tbody>

      </table>
    </div>

</div> <!-- 백그라운드 설정 -->

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

  methods: {
    fetchNotice(){
        //스프링 부트에서 전송받은 데이터 출력 처리
      this.requestBody = { // 데이터 전송
        //keyword: this.keyword,
        sk: this.search_key,
        sv: this.search_value,
        page: this.page,
        size: this.size
      }

      this.$axios.get(this.$serverUrl + "/minone/list", {
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
      fnView(minidx) {
        console.log(minidx);
        this.requestBody.minidx = minidx
        this.$router.push({

          path: './read',
          query: this.requestBody
        })
      },

      fnPage(n) {
        if (this.page !== n) {
            this.page = n
        }

        this.fetchNotice()
      },

      formatDate: function(datetime) {
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
      }
  },

  mounted() {
  this.fetchNotice();
  }

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
   top: 40%;
}


</style>



