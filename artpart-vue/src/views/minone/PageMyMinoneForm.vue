<!-- PageMyMinoneForm.vue 내민원 상세보기 -->


<template>
    <div class="background">
      <h1 style="text-align:left; font-size: 26px; font-family:TheJamsil5Bold;" >내 민원 보기</h1>
      <hr style="border-color: gray;"/>
  
      <div class="back-box rounded-1" >
      <thead>
        <tr>      
          <span class="input-group-text" id="inputGroup-sizing-sm1">종류</span>
          <td scope="col">{{ mincategory }}</td>   <td></td>
        </tr>
      </thead>

      <thead>
        <tr>      
          <span class="input-group-text" id="inputGroup-sizing-sm1">제목</span>
          <td scope="col">{{ mintitle }}</td>   <td></td>
        </tr>
      </thead>

      <thead>
        <tr>      
          <span class="input-group-text" id="inputGroup-sizing-sm1">내용</span>
          <td scope="col">{{ mintype }}</td>   <td></td>
        </tr>
      </thead>

      <thead>
        <tr>      
          <span class="input-group-text" id="inputGroup-sizing-sm1">관리자 답변</span>
          <td scope="col">{{ minres }}</td>   <td></td>
        </tr>
      </thead>

      <thead>
        <tr>      
          <span class="input-group-text" id="inputGroup-sizing-sm1">처리여부</span>
          <td scope="col">{{ minstatus }}</td>   <td></td>
        </tr>
      </thead>

      <div class="btn-group me-2">
        <button class="btn btn-sm btn-outline-secondary" v-on:click="fnList">목록</button>
        <button class="btn btn-sm btn-outline-secondary" v-on:click="fnUpdate">수정</button>
        <button class="btn btn-sm btn-outline-secondary" v-on:click="fnDelete">삭제</button>
      </div>

      </div> <!-- back-box close-->
  </div> <!--background close-->
  </template>
  
  
  
  
  
  <script>
  export default {
      data(){
          return {
              requestBody: this.$route.query,
              id: this.$route.query.minidx,
              memberidx : '',
              mintitle : '',
              mintype : '',
              minstatus : '',
              minres : '',
              minfile : '',
              minrename : '',
              mincategory : '',


          };
      },
      methods: {
          fetchMinone(){
              this.$axios.get(this.$serverUrl + "/minone/" + this.id, {
                  params: this.requestBody
              }).then(response => {
                  this.memberidx = response.data.memberidx;
                  this.mintitle = response.data.mintitle;
                  this.mintype = response.data.mintype;
                  this.minstatus = response.data.minstatus;
                  this.minres = response.data.minres;
                  this.minfile = response.data.minfile;
                  this.minrename = response.data.minrename;
                  this.mincategory = response.data.mincategory;
              })
                  .catch(error => {
                      console.error(error);
                  });
          },
          fnList(){
              delete this.requestBody.id
              this.$router.push({
                  path: './pagemyminone',   //리스트로 이동
                  query: this.requestBody
              })
          },
          fnUpdate(){
              this.$router.push({
                  path: './pageminupdate', //업데이트페이지로 이동
                  query: this.requestBody
              })
          },
          fnDelete(){
              if(!confirm("삭제하시겠습니까?")) return

              this.$axios.delete(this.$serverUrl + '/minone/' + this.id, {})
                  .then(() => {
                      alert('삭제되었습니다.')
                      this.fnList();
                  }).catch((err) => {
                  console.log(err);
              })
          },

      },
      mounted() {
          this.fetchMinone();

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


    .background{ /*background*/
    width: 100%;
    height: 100vh;
    overflow: hidden;
    margin:auto;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    }

    .back-box { /*back-box*/
    padding: 20px;                /* 안쪽여백 */
    padding-top: 20px;
    background-color: #ebe9e9;
    width: 800px;
    height: 80vh;                 /* 폼 높이 */
    overflow: hidden;
    margin:auto;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left;
    position: absolute;
    }

    #inputGroup-sizing-sm2 {    /* 내용 */
    height: 30vh;
    }

    #inputGroup-sizing-sm3 {    /* 관리자 답변 */
    height: 20vh;
    }



    .minone-menu {      /*메뉴박스들*/ 
    margin: 45px;     /*박스 사이간격*/
    }

  
  </style>
  
  
  
  