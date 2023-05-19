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
              <h2 v-text="member.memberdong" name="member_dong" type="text" class="inputetc mb-2" style=""></h2>
            </td>
          </tr>

          <tr>
            <th class="lefttext" width="261" height= "30px;" style=""> 호수 </th>
            <h2 v-text="member.memberdong" name="member_ho" type="text" class="inputetc mb-2" style=""></h2>
          </tr>


          <tr>
            <th class="lefttext" width="261" height= "30px;" style=""> 입주완료여부 </th>
            <h2 v-text="member.memberloginok" name="member_loginok" type="text" class="inputetc mb-2" style=""></h2>
          </tr>

          <tr>
            <th class="lefttext" width="261" height= "30px;" style=""> 등록차량1 </th>
            <h2 v-text="member.membermycar1" name="member_mycar1" type="text" class="inputetc mb-2" style=""></h2>
          </tr>

          <tr>
            <th class="lefttext" width="261" height= "30px;" style=""> 등록차량2 </th>
            <h2 v-text="member.membermycar2" name="member_mycar2" type="text" class="inputetc mb-2" style=""></h2>
          </tr>
        </div>
        <tr><th class=endpoint colspan="2" width="261" height= "30px;" ></th></tr>
        
        
        <!-- 두번째 폼 -->
        <div> 
          <tr>
            <th class="lefttext" height= "30px;" style=""> 아이디</th>
            <h2 v-text="member.memberid" name="member_id" type="text" class="inputetc mb-2" style=""></h2>
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
  },

  methods: {
    fetchMemberInfo() {

      // ###################쿠키 데이터가 없을 때 임의의 데이터로 회원 정보 설정###################
      // 쿠키 데이터가 없을 때 임의의 데이터로 회원 정보 설정
      this.member = {
        memberidx: 1,
        aptidx: 1,
        memberdong: '가라아게동',
        memberho: '101호',
        membername: '한예슬',
        memberid: 'hellomember',
        memberpassword: 'password',
        memberphone: '010-1234-5678',
        memberloginok: true,
        membermycar1: '123차번호456',
        membermycar2: '789차번호123',
      }// if close ############################################################################



      // 서버로부터 회원 정보를 조회하는 API 호출
      // API 호출 시 memberId와 memberPassword 값을 사용하여 서버에 요청할 수 있습니다.
      // 이 예시에서는 가정상의 비동기 동작으로 회원 정보를 가져온다고 가정합니다.
      // 실제 구현에서는 실제 API 호출이나 데이터베이스 조회 등의 로직을 구현해야 합니다.

      // 비동기 (setTimeout을 사용하여 1초 후에 가상의 회원 정보를 설정합니다.)
      setTimeout(() => {
        console.log(memberInfo(this.memberidx));
        // 가상의 회원 정보
        const memberInfo = {
          memberidx: this.memberidx,
          aptidx: this.aptidx,
          memberdong: this.memberdong,
          memberho: this.memberho,
          membername: this.membername,
          memberid: this.memberid,
          memberpassword: this.memberpassword,
          memberphone: this.memberphone,
          memberloginok: this.memberloginok,
          membermycar1: this.membermycar1,
          membermycar2: this.membermycar2,
        };

        // 회원 정보를 가져왔을 때 member 데이터에 할당합니다.
        this.member = memberInfo;
      }, 1000);
    },
    getCookieValue(name) {
      const value = `; ${document.cookie}`; 
      //문자열의 앞에 세미콜론(;)을 추가하여 쿠키 값(문자열) 사이에 공백이 생기는 것을 방지 후 value 변수에 할당
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    }
  }
};
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
  
  
  