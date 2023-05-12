<!-- PageMyMinone.vue -->


<template>
  <div class="background">
    <h1 style="text-align:left; font-size: 26px; font-family:TheJamsil5Bold;" >내 민원 조회</h1>
    <hr style="border-color: gray;"/>


    <!--################################################ getMinoneByMember ################################################ -->
    <form @submit.prevent="getMinoneByMember">
      <div class="board-list">

        <table class="w3-table-all" style="width:800px; height:100px; font-weight: 100; border:1px solid gray; color:black;">
          <thead>
          <tr>
            <th style="width:10%">No</th>
            <th style="width:70%">제목</th>
            <th style="width:20%">처리상황</th>
          </tr>
          </thead>


          <tbody style="font-family:Pretendard-Regular;">
          <tr v-for="(row, memberIdx) in list" :key="memberIdx">
            <td>{{ row.memberIdx }}</td>
            <td><router-link to="/minone/pagemyminoneform">{{ row.minTitle }}</router-link></td>
            <!-- <td><a v-on:click="fnView(`${row.memberIdx}`)">{{ row.minTitle }}</a></td> -->
            <td>{{ row.minStatus }}</td>
          </tr>
          </tbody>


        </table>
      </div>
    </form>



    <br><br>
    <!-- 검색필드 추가 -->
    <div class="serch" style="text-align:left;">
      <select v-model="search_key" 
          style="text-align:center; color: gray; font-family:TheJamsil5Bold; font-size: 12px; height: 30px; width: 100px; ">
        <option value="" selected>- 선택 -</option>
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
import axios from 'axios';


export default {

  //##################[[ data ]]##################
  data() { //변수생성
    return {
      requestBody: {}, //리스트 페이지 데이터전송
      minoneList: [],
      memberIdx: '',
      minoneByMemberList: null,
    };

  },

  //##################[[ mounted ]]##################
  mounted() {
    this.fnGetList();
    this.getMinoneList();
  },


  //##################[[ methods ]]##################
  methods: {
    fnGetList() {
      
      //####임시 데이터 출력 처리####
      this.list = [
        {
            "idx":1,
            "title": "민원제목",
            "author": "2023-04-27",
            "created_at": "확인 중"
        },
        {
            "idx":2,
            "title": "민원제목",
            "author": "2023-04-27",
            "created_at": "확인 중"
        },
      ]
      //####임시 데이터 출력 처리 끝####


    },

    getMinoneList() {
      axios.get('/minone/pagemyminone')
        .then(response => {
          this.minoneList = response.data;
        })
        .catch(error => {
          console.error(error);
        });
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



