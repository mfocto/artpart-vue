<!-- PageMyMinone.vue -->


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

            <!--
            <tr v-for="(minone, memberIdx) in list" :key="memberIdx">
              <td>{{ minone.memberIdx }}</td>
              <router-link :to="`/minone/pagemyminone/${minone.idx}`">{{ minone.minTitle }}</router-link>
              <td>{{ minone.minStatus }}</td>
            </tr>  
          -->


          <tr>
            <td>1</td>
            <td>청소상태불량</td>
            <td style="width:20%; color:red;">확인 중</td>
          </tr>

          <tr>
            <td>2</td>
            <td>맘에안듬</td>
            <td style="width:20%; color:red;">확인 중</td>
          </tr>

          <tr>
            <td>3</td>
            <td>어쨌든불만</td>
            <td>답변 완료</td>
          </tr>

          <tr>
            <td>4</td>
            <td>마지막가짜제목</td>
            <td>답변 완료</td>
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

      <input type="text" v-model="search_value" class="selectedoption rounded-1" 
        @keyup.enter="fnPage()" style=" width: 300px; height: 30px; border:1px solid gray;  ">
        &nbsp;

      <button class="submitbutton rounded-1" @click="fnPage()" style="text-align:center; color: gray; font-family:TheJamsil5Bold; 
            font-size: 12px; width: 100px; height: 30px; border:1px solid gray; ">
            검색
      </button>
  </div>
</div> <!-- 백그라운드 설정 -->


<!-- searchKey === 글제목 -->
<!-- searchKey === 글제목 -->
<!-- searchKey === 글제목 -->






</template>





<script>
import axios from 'axios';


export default {
  
  //##################[[ data ]]##################
  data() { //변수생성
    return {
      requestBody: {}, //리스트 페이지 데이터전송
      list: [],
      memberIdx: '',
      minoneByMemberList: null,
      selectedOption: 'selected' 
    };

  },

  //##################[[ mounted ]]##################
  mounted() {
    this.getMinoneList();
  },


  //##################[[ methods ]]##################
  methods: {

    getMinoneList() {
      axios.get('/minone/pagemyminone', {
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



