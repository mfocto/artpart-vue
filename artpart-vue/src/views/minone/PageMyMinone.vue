<!-- PageMyMinone.vue 내민원 목록 -->


<template>
  <div class="background">
    <h1 style="text-align:left; font-size: 26px; font-family:TheJamsil5Bold;" >내 민원 조회</h1>
    <hr style="border-color: gray;"/>


    <!--################################################ getMinoneByMember ################################################ -->
    <form >
      <div class="board-list">

        <table class="w3-table-all" style="width:800px; height:100px; font-weight: 100; border:1px solid gray; color:black;">
          <thead>
          <tr>
            <th style="width:10%">No</th>
            <th style="width:70%">제목</th>
            <th style="width:20%;">처리상황</th>
          </tr>
          </thead>


          <tbody style="font-family:Pretendard-Regular;">

          <tr v-for="minone in list" :key="minone.memberIdx">
            <td>{{ minone.memberIdx }}</td>
            <td><router-link :to="`/minone/pagemyminone/${minone.idx}`">{{ minone.minTitle }}</router-link></td>
            <td>{{ minone.minStatus }}</td>
          </tr>




          </tbody>


        </table>
      </div>
    </form>



    <br><br>
    <!-- 검색필드 추가 -->
    <div class="serch" style="text-align:left;">
      <select v-model="searchKey" class="selectedoption rounded-1"
          style="text-align:center; color: gray; font-family:TheJamsil5Bold; font-size: 12px; height: 30px; width: 100px; ">
        
        <option value="" selected >- 선택 -</option>
        <option value="title">글제목</option>
        <option value="contents">글내용</option>

      </select>
        &nbsp;


  </div>
</div> <!-- 백그라운드 설정 -->


<!-- searchKey === 글제목 -->





</template>





<script>

export default {
  
  //##################[[ data ]]##################
  data() { //변수생성
    return {
      requestBody: {}, //리스트 페이지 데이터전송
      list: [],
      memberIdx: '',
      minoneByMemberList: null,
      selectedOption: 'selected',
      minidx: this.$route.query.minidx,
    };

  },

  //##################[[ mounted ]]##################
  mounted() {
    this.getMinoneList();
  },


  //##################[[ methods ]]##################
  methods: {
  // 데이터 넣기
    getMinoneList() {
      
      this.$axios.post("/minone?pagemyminone=" + this.memberidx + "&memberpassword=" + this.memberpassword, {
      this.axios.get('/minone/pagemyminone', {
        memberIdx: this.memberIdx,
        minTitle: this.minTitle,
        minStatus: this.minStatus,
        
      })
      .then(response => {
        this.list = response.data
      })
      .catch(error => {
        console.error(error);
      });
    },

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
   top: 40%;
}


</style>



