<!-- PageMyMinone.vue-->

<template>
  <div class="background">
    <h1 style="text-align:left; font-size: 26px; font-family:TheJamsil5Bold;" >회원가입 정보</h1>
    <hr style="border-color: gray;"/>

    <form style="">			
      <input type="hidden" name="origin_user_pwd" value="${requestScope.user.user_pwd }">	
      
      <table class= "userInfo rounded-1" id= "tbl"  style="padding:'5' " >
        <tr><th class=endpoint colspan="2" width="261" height= "30px;" style="font-size: 12px;"> 주소&동호수 변경을 원하는 경우, 관리자에게 직접 문의 바랍니다. 02-123-1234</th></tr>
        
        <!-- 첫번째 폼 -->
        <div> 
          <tr>
            <th class="lefttext" width="261" height= "30px;" style=""> 동 </th>
            <h2 v-bind="MEMBER_DONG" name="MEMBER_DONG" type="text" class="inputetc mb-2" style="">가라아게동</h2>
          </tr>

          <tr>
            <th class="lefttext" width="261" height= "30px;" style=""> 호수 </th>
            <h2 v-bind="MEMBER_HO" name="MEMBER_HO" type="text" class="inputetc mb-2" style="">101호</h2>
          </tr>


          <tr>
            <th class="lefttext" width="261" height= "30px;" style=""> 입주완료여부 </th>
            <h2 v-bind="MEMBER_LOGINOK" name="MEMBER_LOGINOK" type="text" class="inputetc mb-2" style="">입주완료</h2>
          </tr>

          <tr>
            <th class="lefttext" width="261" height= "30px;" style=""> 등록차량1 </th>
            <h2 v-bind="MEMBERMYCAR1" name="MEMBERMYCAR1" type="text" class="inputetc mb-2" style="">123도7485</h2>
          </tr>

          <tr>
            <th class="lefttext" width="261" height= "30px;" style=""> 등록차량2 </th>
            <h2 v-bind="MEMBERMYCAR2" name="MEMBERMYCAR2" type="text" class="inputetc mb-2" style="">845파1234</h2>
          </tr>
        </div>
        <tr><th class=endpoint colspan="2" width="261" height= "30px;" ></th></tr>
        
        
        <!-- 두번째 폼 -->
        <div> 
          <tr>
            <th class="lefttext" height= "30px;" style=""> 아이디</th>
            <h2 v-bind="MEMBER_ID" name="MEMBER_ID" type="text" class="inputetc mb-2" style="">kimkim123</h2>
          </tr>		

          <tr>
            <th class="lefttext" width="261" height= "30px;" style=""> 이 름 </th>
            <h2 v-bind="MEMBER_NAME" name="MEMBER_NAME" type="text" class="inputetc " style="">김태희</h2>
          </tr>		

          <tr>
            <th class="lefttext" height= "30px;" style=""> 핸드폰번호</th>
            <td><input v-bind="MEMBER_PHONE" name="MEMBER_PHONE" class="inputupdate rounded-1" type="tel" style="padding-top:5px; margin-top:5px;"></td>
          </tr>		
        </div>
        <tr><th class=endpoint colspan="2" width="261" height= "30px;"></th></tr>
        

        <!-- 세번째 폼 -->
        <tr><th class=endpoint colspan="2" width="261" height= "30px;"> 비밀번호 변경 </th></tr>
        <div>
          <tr>
            <th class="lefttext" width="261" height= "30px;" style=""> 수정할 비밀번호 </th>
            <td> <input v-bind="MEMBER_PASSWORD" name="MEMBER_PASSWORD" id="PASSWORD1" class="inputupdate mb-2 rounded-1" type="password" > 	</td>
          </tr>
      
          <tr>
            <th class="lefttext" height= "30px;" style=""> 비밀번호확인 </th>
            <td> <input onblur="validate();" id="PASSWORD2" class="inputupdate mb-2 rounded-1" type="password"> 	</td>
          </tr>						
        </div>
        
        <tr>
            <th height= "100px;" colspan="2" >
                <input type="submit" class="thButton rounded-1" value="수정하기">&nbsp;
                <input type="button" class="thButton rounded-1" onclick="location.href = 'javascript:history.go(-1);'"  value="이전 페이지로">&nbsp;
                <input type="button" class="thButton rounded-1" onclick="location.href = '/'"  value="메인화면으로"><br>
            </th>
        </tr>	
          
      </table>
  </form>

  </div> <!--background close-->
</template>
  
  
  
  
  
  <script>
  
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

  .thButton {
    width: 200px;
  }

  .inputupdate {
    float: left;
  }

  .inputetc {
    width: 350px;
    color:black; 
    font-size: 14px; 
    text-align: left; 
    margin-top:5px;
  }

  </style>
  
  
  