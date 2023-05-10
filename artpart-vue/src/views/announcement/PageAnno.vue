<!-- PageAnno.vue -->


<template>
  <div class="background">
    <h1 style="text-align:left; font-size: 26px; font-family:TheJamsil5Bold;" >공지사항</h1>
    <hr style="border-color: gray;"/>

    <div class="board-list">
      <!-- <div class="common-buttons">
        <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnwrite">등록</button>
      </div> -->
      <table class="w3-table-all rounded-1" style="width:800px; height:100px; font-weight: 100; border:1px solid rgb(56, 56, 56); color:black; ">
        <thead>
        <tr>
          <th>No</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일자</th>
          <th>조회수</th>
        </tr>
        </thead>
  <!--
  "idx":1,
  "title": "",
  "author": "",
  "created_at": "" 
  -->

        <tbody class="table-text mb-3 " 
        style="vertical-align:top; ; 
        font-family:Pretendard-Regular; width:800px; height:100px; font-weight: 100; border:1px solid rgb(56, 56, 56); color:black;">

        
        <tr style="">
        <th>3</th>
        <th>세번째제목</th>
        <th>관리자</th>
        <th>2023-05-05</th>
        <th>11</th>
        </tr>

        <tr style="">
        <th>2</th>
        <th>두번째제목</th>
        <th>관리자</th>
        <th>2023-05-05</th>
        <th>21</th>
        </tr>


        <tr style="">
        <th>1</th>
        <th>첫번째제목</th>
        <th>관리자</th>
        <th>2023-05-05</th>
        <th>213</th>
        </tr>

        <tr v-for="(item, nptice_Idx) in list" :key="nptice_Idx">
          <td>{{ item.nptice_Idx }}</td>
          <td><a v-on:click="fnView(`${item.nptice_Idx}`)">{{ item.NOTICE_TITLE }}</a></td>
          <td>{{ item.NOTICE_WRITER }}</td>
          <td>{{ item.NOTICE_TITLE }}</td>
          <td>{{ item.NOTICE_CONTENT }}</td>
          <td>{{ item.NOTICE_DATE }}</td>

        </tr>
        </tbody>
        
      </table>

    </div>

    <br><br>

  
  
  <!-- 검색필드 추가 -->
  <div class="search" style="text-align:left; ">
    <select v-model="search_key" 
        style="text-align:center; color: gray; font-family:TheJamsil5Bold; font-size: 12px; height: 30px; width: 100px; ">
      <option value="">- 선택 -</option>
      <option value="title">글제목</option>
      <option value="contents">글내용</option>
      <option value="ticon">제목+내용</option>
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
    // return {
    //       permanentId: '',
    //       trial_daily_idx: '',
    //       name: '',
    //       trial_daily_debit_in: '',
    //       trial_daily_debit_out: '',
    //       trial_daily_debit_total: '',
    //       trial_daily_credit_in: '',
    //       trial_daily_credit_out: '',
    //       trial_daily_credit_total: '',
    //       trial_daily_account: '',
    //       list: {},
    //   }
  },    //data close



  //페이지열릴때 자동실행
  mounted() {
    this.fnGetList(),
    this.getDreportList()
  },



  methods: {
    fnGetList() {
        // 스프링 부트에서 전송받은 데이터 출력 처리
        this.requestBody = { // 데이터 전송
        //keyword: this.keyword,
        sk: this.search_key,
        sv: this.search_value,
        page: this.page,
        size: this.size
      }

      this.$axios.get(this.$serverUrl + "/announcement/anno-list", {
        params: this.requestBody,
        headers: {}

      }).then((res) => {      
       // this.list = res.data  //서버에서 데이터를 목록으로 보내므로 바로 할당하여 사용할 수 있다.
      if (res.data.result_code === "OK") {
      this.list = res.data.data
      // this.paging = res.data.pagination
      // this.no = this.paging.total_list_cnt - ((this.paging.page - 1) * this.paging.page_size)
      }


      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('공지사항 네트워크가 원활하지 않습니다ㅠㅠ\n잠시 후 다시 시도해주세요.')
        }
      })
    },




    
    fnView(nptice_Idx){
      this.requestBody.nptice_Idx = nptice_Idx
      this.$router.push({         // router 에게 요청할 정보, pathVariable 방식
        path: './PageAnnoForm',         // url(같은폴더에 있는 뷰 실행)
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


.search {
   position: relative; 
   top:35%; 
   
}


</style>



