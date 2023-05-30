<!-- PageMyMinoneForm.vue 내민원 상세보기 -->


<template>
    <div class="background">
      <h1 style="text-align:left; font-size: 26px; font-family:TheJamsil5Bold;" >내 민원 보기</h1>
      <hr style="border-color: gray;"/>
  
      <div class="back-box rounded-1" >
        <thead style="text-align: center;">
          <tr class="minone-menu" style="">      
            <td class="input-group-text" style="text-align: center; width: 100%;">종류</td>
            <td class="mintd" scope="col" style="text-align: left; padding:10px; width: 600px;">{{ mincategory }}</td> 
          </tr>
        </thead>

        <thead>
          <tr class="minone-menu">      
            <td class="input-group-text" style="text-align: center; width: 100%;">제목</td>
            <td class="mintd" scope="col" style="text-align: left; padding:10px; ">{{ mintitle }}</td>  
          </tr>
        </thead>

        <thead>
          <tr class="minone-menu">      
            <td class="input-group-text" style="text-align: center; width: 100%; height: 80px">내용</td>
            <td class="mintd" scope="col" style="text-align: left; padding:10px;">{{ mintype }}</td>  
          </tr>
        </thead>

        <thead>
          <tr class="minone-menu">      
            <td class="input-group-text" style="text-align: left; width: 100%;">관리자 답변</td>
            <td class="mintd" scope="col" style="text-align: left; padding:10px; ">{{ minres }}</td>  
          </tr>
        </thead>

        <thead>
          <tr class="minone-menu">      
            <td class="input-group-text" style="text-align: left; width: 100%;">처리여부</td>
            <td class="mintd" scope="col" style="text-align: left; padding:10px;">{{ minstatus }}</td>  
          </tr>
        </thead>
        
        <!-- button -->
        <thead>
          <tr class="minone-menu">
              <th height= "100px;" style="float: left; width: 100%;" >
                <button class="btn btn-sm btn-outline-secondary" v-on:click="fnUpdate" style="margin-top: 20px; width: 200px; ">글 수정하기</button>
                <button class="btn btn-sm btn-outline-secondary" v-on:click="fnDelete" style="margin-top: 30px; width: 200px; top: -5px; ">글 삭제하기</button>
                <button class="btn btn-sm btn-outline-secondary" v-on:click="fnList" style="margin-top: 10px; width: 400px;" >전체 목록으로 </button> 
              </th>
          </tr>	
        </thead>

        

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
  height: 500px;                 /* 폼 높이 */
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

  input[type="submit"], 
  button[type="submit"],
  .btn
   {
    position: relative;
    font-size: 15px;
    left: 10%; 
    background-color:Bisque; 
    color:black;
    /* margin: 50px; */
    padding: 10px;
    text-decoration-line: none; 
  }

.mintd {
  background-color: #ebe9e9;
}



  
  </style>
  
  
  
  