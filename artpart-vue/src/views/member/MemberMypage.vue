<!-- PageMyMinone.vue-->

<template>
  <div class="background">
    <h1 style="text-align:left; font-size: 26px; font-family:TheJamsil5Bold;" >회원가입 정보</h1>
    <hr style="border-color: gray;"/>

    <!-- form -->
    <form method="POST" @submit.prevent="fetchMemberInfo">	
      
      <table class= "userInfo rounded-1" id= "tbl" style="padding:'5' " >
        <tr><th class=endpoint colspan="2" width="261" height= "30px;" style="font-size: 12px;"> ※ 주소&동호수 변경을 원하는 경우, 관리자에게 직접 문의 바랍니다. 02-123-1234</th></tr>
        
        <!-- 첫번째 폼 -->
        <div> 
          <tr>
            <th class="lefttext" width="261" height= "30px;" style=""> 동 </th>
            <td>
              <h2 name="member_dong" type="text" class="inputetc mb-2" style="">{{ memberdong }}</h2>
            </td>
          </tr>

          <tr>
            <th class="lefttext" width="261" height= "30px;" style=""> 호수 </th>
            <h2 type="text" class="inputetc mb-2" style="">{{memberho}}</h2>
          </tr>


          <tr>
            <th class="lefttext" width="261" height= "30px;" style=""> 입주완료여부 </th>
            <h2  type="text" class="inputetc mb-2" style="">{{ memberloginok }}</h2>
          </tr>

          <tr>
            <th class="lefttext" width="261" height= "30px;" style=""> 등록차량1 </th>
            <h2 type="text" class="inputetc mb-2" style="">{{membermycar1}}</h2>
          </tr>

          <tr>
            <th class="lefttext" width="261" height= "30px;" style=""> 등록차량2 </th>
            <h2 type="text" class="inputetc mb-2" style="">{{membermycar2}}</h2>
          </tr>
        </div>
        <tr><th class=endpoint colspan="2" width="261" height= "30px;" ></th></tr>
        
        
        <!-- 두번째 폼 -->
        <div> 
          <tr>
            <th class="lefttext" height= "30px;" style=""> 아이디</th>
            <h2 type="text" class="inputetc mb-2" style="">{{memberid}}</h2>
          </tr>		

          <tr>
            <th class="lefttext" width="261" height= "30px;" style=""> 이 름 </th>
            <h2 v-bind="membername" type="text" class="inputetc " style="">{{ membername }}</h2>
          </tr>		

          <tr>
            <th class="lefttext" height= "30px;" > 전화번호</th>
            <h2 v-bind="memberphone"  type="text" class="inputetc " style="">{{ memberphone }}</h2>
            <!-- <input v-bind="memberphone" class="inputetc rounded-1" type="tel" style=""> -->
          </tr>		

        </div>
        <tr><th class=endpoint colspan="2" width="261" height= "30px;"></th></tr>
        
        <!-- button -->
        <tr>
            <th height= "100px;" colspan="2" style="float: left; left: 50px; width: 245px;" >
              <input type="button" class="botton1 rounded-1" value="전화번호&비밀번호 변경하기" v-on:click="fnUpdate" style="background-color: Coral;">
              <input type="button" class="botton1 rounded-1" onclick="location.href = 'javascript:history.go(-1);'" style="margin-top: 2%;" value="이전 페이지로" >
              <router-link to="/member/main" class="botton1 rounded-1" style="float: left; left: 2%; width: 500px;  margin-top: 2%; border: 1px solid;">메인 화면으로</router-link>
            </th>
        </tr>	
          
        <tr>
            <th height= "1px;" colspan="2" style="float: left; left: 105px; width: 245px;">
            </th>
        </tr>	
          
      </table>
  </form> <!-- form close -->

  </div> <!--background close-->
</template>
  
  
<script>
export default {
name: 'PageMinoneForm',
  data(){
    return {
        requestBody: this.$route.query,
        id: this.$route.query.memberidx,
        memberdong : this.$route.query.memberdong,
        memberho : this.$route.query.memberho,
        memberid : this.$route.query.memberid,
        memberloginok : this.$route.query.memberloginok,
        membermycar1 : this.$route.query.membermycar1,
        membermycar2 : this.$route.query.membermycar2,
        membername : this.$route.query.membername,
        memberpassword : this.$route.query.memberpassword,
        memberphone : this.$route.query.memberphone,
        aptidx : this.$route.query.aptidx

    };
},
methods: {
    fetchMember(){
        this.$axios.get(this.$serverUrl + "/member/" + this.id, {
            params: this.requestBody
        }).then(response => {
            this.memberdong = response.data.memberdong;
            this.memberho = response.data.memberho;
            this.memberid = response.data.memberid;
            this.memberloginok = response.data.memberloginok;
            this.membermycar1 = response.data.membermycar1;
            this.membermycar2 = response.data.membermycar2;
            this.membername = response.data.membername;
            this.memberpassword = response.data.memberpassword;
            this.memberphone = response.data.memberphone;
            this.aptidx = response.data.aptidx;
        })
            .catch(error => {
                console.error(error);
            });
    },

    fnUpdate(){
        this.$router.push({
            path: './memberupdate',
            query: this.requestBody
        })
    },


},
mounted() {
    this.fetchMember();

}
  
  }
  </script>
  
  
  <style scoped>
  h2 {
    width: 80px;
    position: absolute;
  }
    
  tr td {
    font-size: 12px;
  }
    
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

  .endpoint {  
    border-bottom:1px solid #dcdac2; 
    font-size: 18px; 
    color: Firebrick; 
    text-align: left; 
    padding-left:13%; 
    padding-bottom:2%;
    padding-top:2%;
  }

  .minone-menu {      /*메뉴박스들*/
    position: relative;
    margin: 45px;     /*박스 사이간격*/
  }
  
  .lefttext, input {
    padding: 5px;
    
  }


  .inputetc {
    width: 245px;
    color:black; 
    font-size: 14px; 
    text-align: left; 
    margin-top:5px;
  }

  input[type="submit"], 
  button[type="submit"],
  .botton1
   {
    position: relative;
    font-size: 15px;
    width: 500px; 
    left: 2%; 
    background-color:Bisque; 
    color:black;
    /* margin: 50px; */
    padding: 10px;
    text-decoration-line: none; 
  }

  </style>
  
  
  