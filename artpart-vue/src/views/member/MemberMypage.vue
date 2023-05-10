<!-- PageMyMinone.vue-->

<template>
    <div class="background">
      <h1 style="text-align:left; font-size: 26px; font-family:TheJamsil5Bold;" >회원가입 정보</h1>
      <hr style="border-color: gray;"/>
  
      <form style="">			
          <input type="hidden" name="origin_user_pwd" value="${requestScope.user.user_pwd }">	
          
          
          <table class= "userInfo rounded-1" id= "tbl"  style="padding:'5' " >
            <tr >
                <th width="261" height= "30px;" style=""> 주소 </th>
                    <td><input class="inputetc mb-2" type="text"  name="user_name" value="경기도 광역시 심심한구 그린아파트" readonly>  </td>		
            </tr>
            <tr>
                <th width="261" height= "30px;" style=""> 동 </th>
                    <td><input class="inputetc mb-2" type="text"  name="user_name" value="가라아게동" readonly>  </td>		
            </tr>
            <tr>
                <th width="261" height= "30px;" style=""> 호수 </th>
                    <td><input class="inputetc mb-2" type="text"  name="user_name" value="101호" readonly>  </td>		
            </tr>
            <tr>
              <th colspan="2" width="261" height= "30px;" style="font-size: 12px; color: Firebrick;"> 주소&동호수 변경을 원하는 경우, 관리자에게 직접 문의 바랍니다. 02-123-1234 </th> 
            </tr>

            <hr style="border-color: gray;" />

            <tr>
                <th width="261" height= "30px;" style=""> 이 름 </th>
                    <td><input class="inputetc mb-2" type="text"  name="user_name" value="김태희" readonly>  </td>		
            </tr>					
            <tr>
                <th height= "30px;" style=""> 아이디</th>
                    <td> <input class="inputetc mb-2" type="text"  name="user_id" value="12345" readonly>	</td>
            </tr>		
            <tr>
                <th height= "30px;" style=""> 핸드폰번호</th>
                    <td> <input class="inputetc mb-2" type="tel"  name="user_id">	</td>
                    <!-- <input type="tel" pattern="[0-9]{3}-[0-9]{3,4}-[0-9]{4}" /> -->
            </tr>		

            <hr style="border-color: gray;"/>

            <tr>
                <th height= "30px;" style=""> 수정할 비밀번호 </th>
                    <td> <input class="inputetc mb-2" type="password" name="user_pwd" id="user_pwd1" > 	</td>
            </tr>					
            <tr>
                <th height= "30px;" style=""> 비밀번호확인 </th>
                    <td> <input class="inputetc mb-2" type="password" id="user_pwd2" onblur="validate();" > 	</td>
            </tr>						

            
            <tr>
                <th height= "100px;" colspan="2" >
                    <input type="submit" class="thButton" value="수정하기">&nbsp;
                    <input type="button" class="thButton" onclick="location.href = 'javascript:history.go(-1);'"  value="이전 페이지로">&nbsp;
                    <input type="button" class="thButton" onclick="location.href = '/'"  value="메인화면으로"><br>
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
  
  .back-box { /*back-box*/
    padding-top: 20px;
    background-color: #ebe9e9;
    width: 800px;
    height: 60vh;
    overflow: hidden;
    margin:auto;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left;
    position: absolute;
  }
  
  .minone-menu {      /*메뉴박스들*/
    position: relative;
    margin: 45px;     /*박스 사이간격*/
  
  }
  
  span {
    position:absolute; 
    top:400%; 
    left:50%; 
    color:#666; 
    line-height:1.462em; 
    white-space:nowrap; 
    transform:translate(-50%, 0)
  }
  
  .thButton {
    width: 200px;
  }

  .inputetc {
    width: 350px;
  }
  
  tr td {
    font-size: 12px;

  }
  
  </style>
  
  
  