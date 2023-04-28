<!-- MemberMain.vue-->

<template>
  <div class="background">
    
    <!-- 백 이미지 -->
    <div class="backImg rounded-1">
      <img src="../../assets/images/apart/building.png" width="1500" height="600" class="d-inline-block align-top" alt="">
    </div>

    <!-- 팝업이미지 -->
    <div class="popup rounded-1">
      <span style="text-align:center; color:Darkslategray ;">청소</span>
      <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true"></button>
      
    </div>






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


  .backImg {
    position: relative; 
    float: left;
  }


  .popup {
    position: absolute;
    background-color: aqua;
    width: 400px;
    height: 400px;
    top: 270px;   /*숫자늘리면 박스가 밑으로 감 */
    left: 340px;  /*숫자늘리면 박스가 오른쪽으로 감 */
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
  
  
  
  </style>
  
  
  