<!-- PageMyMinone.vue 내민원 목록 -->


<template>
  <div class="background">
    <h1 style="text-align:left; font-size: 26px; font-family:TheJamsil5Bold;" >내 민원 목록</h1>
    <hr style="border-color: gray;"/>


    <!--getMinoneByMember-->
    <form >
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
    </form>





</div> <!-- 백그라운드 설정 -->


<!-- searchKey === 글제목 -->


3


</template>





<script>

export default {
  
  //##################[[ data ]]##################
  data() { //변수생성
    return {

      requestBody: {}, //리스트 페이지 데이터전송
      minidx: this.$route.query.minidx,

      list: [],
      memberidx: '',
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
    const member = JSON.parse(this.$cookie.get('member'))
      let formData = {
        memberidx: member.memberidx,  //민원idx
        mintitle: this.mintitle,    //민원제목
        minstatus: this.minstatus,  //민원상태

      }
      console.log(formData)


      this.$axios.post('/pageminoneform/all/list')
                .then(() => {
                    alert('민원조회 완료');
                    this.$router.push('/pageminoneform/list')
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    },
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



