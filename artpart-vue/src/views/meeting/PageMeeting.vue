<!-- PageMeeting.vue-->

<template>
  <div class="background">
    <h1 style="text-align:left; font-size: 26px; font-family:TheJamsil5Bold;" >투표/설문 접수</h1>
    <hr style="border-color: gray;"/>

    <div class="back-box">
      <div class="back-box-one">
        <router-link class="meeting-menu" to="/meeting/pagearchiveform"><img src="../../assets/images/meeting/archive.png" width="100" height="100" class="d-inline-block " alt="투표"><span style="text-align:center; color:Darkslategray ;">투표</span></router-link>
        <router-link class="meeting-menu" to="/meeting/pagearchiveform"><img src="../../assets/images/meeting/survey.png" width="100" height="100" class="d-inline-block " alt="설문"><span style="text-align:center; color:Darkslategray ;">설문</span></router-link>
        <br>
        <br>
        <hr style="border-color: gray; "/>
      </div>



    </div> <!-- back-box close-->

</div> <!--background close-->
</template>





<script>
export default {
  name: 'PageMeeting',
}
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
  height: 18vh;
  overflow: hidden;
  margin:auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  position: absolute;
}

.meeting-menu {      /*메뉴박스들*/
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




</style>



