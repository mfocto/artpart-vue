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
              <h2 v-text="memberdong" name="member_dong" type="text" class="inputetc mb-2" style=""></h2>
            </td>
          </tr>

          <tr>
            <th class="lefttext" width="261" height= "30px;" style=""> 호수 </th>
            <h2 v-text="memberho" name="member_ho" type="text" class="inputetc mb-2" style=""></h2>
          </tr>


          <tr>
            <th class="lefttext" width="261" height= "30px;" style=""> 입주완료여부 </th>
            <h2 v-text="memberloginok" name="member_loginok" type="text" class="inputetc mb-2" style=""></h2>
          </tr>

          <tr>
            <th class="lefttext" width="261" height= "30px;" style=""> 등록차량1 </th>
            <h2 v-text="membermycar1" name="member_mycar1" type="text" class="inputetc mb-2" style=""></h2>
          </tr>

          <tr>
            <th class="lefttext" width="261" height= "30px;" style=""> 등록차량2 </th>
            <h2 v-text="membermycar2" name="member_mycar2" type="text" class="inputetc mb-2" style=""></h2>
          </tr>
        </div>
        <tr><th class=endpoint colspan="2" width="261" height= "30px;" ></th></tr>
        
        
        <!-- 두번째 폼 -->
        <div> 
          <tr>
            <th class="lefttext" height= "30px;" style=""> 아이디</th>
            <h2 v-text="memberid" name="member_id" type="text" class="inputetc mb-2" style=""></h2>
          </tr>		

          <tr>
            <th class="lefttext" width="261" height= "30px;" style=""> 이 름 </th>
            <h2 v-bind="membername" name="member_name" type="text" class="inputetc " style="">김태희</h2>
          </tr>		

          <tr>
            <th class="lefttext" height= "30px;" > 핸드폰번호</th>
            <input v-bind="memberphone" name="member_phone" class="inputetc rounded-1" type="tel" style="">
          </tr>		
        </div>
        <tr><th class=endpoint colspan="2" width="261" height= "30px;"></th></tr>
        

        <!-- 세번째 폼 -->
        <tr><th class=endpoint colspan="2" width="261" height= "30px;" style="">비밀번호 변경하기</th></tr>
        <div>
          <tr>
            <th class="lefttext" width="261" height= "30px;" style=""> 수정할 비밀번호 </th>
            <input v-bind="memberpassword" name="member_password" id="password1" class="inputetc mb-2 rounded-1" type="password" >
          </tr>
      
          <tr>
            <th class="lefttext" height= "30px;" style=""> 비밀번호확인 </th>
            <input onblur="validate();" id="password2" class="inputetc mb-2 rounded-1" type="password">
          </tr>						
        </div>
        
        <!-- button -->
        <tr>
            <th height= "100px;" colspan="2" style="float: left; left: 50px; width: 245px;" >
              <input type="submit" class="botton1 rounded-1" value="수정하기" style="background-color: Coral;">
              <input type="button" class="botton1 rounded-1" onclick="location.href = 'javascript:history.go(-1);'" style="margin-top: 2%;" value="이전 페이지로" >
              <router-link to="/member/main" class="botton1 rounded-1" style="float: left; left: 2%; width: 500px;  margin-top: 2%; border: 1px solid;">메인화면으로</router-link>
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
  name: 'MemberMyPage',

  data() {
    return {
    member: null,
    memberidx: null,
    memberdong: null,
    memberho: null,
    memberid: '',
    memberloginok: false,
    membermycar1: null,
    membermycar2: null,
    membername: '',
    memberpassword: '',
    memberphone: '',
    aptidx: null
    };
  },

  mounted() { //폼 제출 전, 자동으로 회원 정보를 가져와 표시
    this.fetchMemberInfo();
  },  //mounted

  methods: {
  // 데이터 넣기

    fetchMemberInfo() {
      
      this.$axios.post("/member?memberidx=" + this.memberidx + "&memberpassword=" + this.memberpassword, {
      memberIdx: this.memberIdx,
      memberpassword: this.memberpassword,
      }) //axios

      .then((res) => {
          if (res.headers.authorization != null) {
              this.$cookie.set('token', res.headers.authorization.substring(7))
              this.$axios.defaults.headers.common.Authorization = "Bearer " + this.$cookie.get('token');
              this.$axios.get(this.$serverUrl + "/member/"+ this.memberidx)
                  .then((res2) => {
                      const str = JSON.stringify(res2.data.data)
                      this.$cookie.set('member', str);
                      this.$router.push({
                          path: '/notice/list',
                      }); //push
                  })
          } //if

        if (res.headers.authorization == null) {
            alert("접속할 수 없습니다.");
            this.$router.push({
                path: "/",
            })  //push
        } //if

        }).catch((err) => {
          if (err.message.indexOf('Network Error') > -1) {
              alert('서버와 통신이 불안정합니다.');
          } //if

      });  //catch    

    }, //fetchMemberInfo
  } //methods
}; //export default (document ready)
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
  
  
  