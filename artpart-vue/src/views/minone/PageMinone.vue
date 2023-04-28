<!-- PageMinone.vue -->

<template>
  <div class="background">
    <h1 style="text-align:left; font-size: 26px; font-family:TheJamsil5Bold;" >민원 접수</h1>
    <hr style="border-color: gray;"/>

    <div class="back-box">
      <div class="back-box-one">
        <a class="minone-menu" href="/minone/PageMinoneForm"><img src="../../assets/images/minone/elevator.png" width="100" height="100" class="d-inline-block " alt="승강기"><span style="text-align:center; color:Darkslategray ;">승강기</span></a>
        <a class="minone-menu" href="/minone/PageMinoneForm"><img src="../../assets/images/minone/fire.png" width="100" height="100" class="d-inline-block " alt="소방"><span style="text-align:center; color:Darkslategray ;">소방</span></a>
        <a class="minone-menu" href="/minone/PageMinoneForm"><img src="../../assets/images/minone/intercom.png" width="100" height="100" class="d-inline-block " alt="인터폰"><span style="text-align:center; color:Darkslategray ;">인터폰</span></a>
        <a class="minone-menu" href="/minone/PageMinoneForm"><img src="../../assets/images/minone/automatic-doors.png" width="100" height="100" class="d-inline-block " alt="물탱크"><span style="text-align:center; color:Darkslategray ;">물탱크</span></a><h2></h2>
        <br>
      </div>
      <hr style="border-color: gray; "/>


      <div class="back-box-one">
        <a class="minone-menu" href="/minone/PageMinoneForm"><img src="../../assets/images/minone/cleaning.png" width="100" height="100" class="d-inline-block " alt="청소"><span style="text-align:center; color:Darkslategray ;">청소</span></a>
        <a class="minone-menu" href="/minone/PageMinoneForm"><img src="../../assets/images/minone/electricity.png" width="100" height="100" class="d-inline-block " alt="전기"><span style="text-align:center; color:Darkslategray ;">전기</span></a>
        <a class="minone-menu" href="/minone/PageMinoneForm"><img src="../../assets/images/minone/water-filter.png" width="100" height="100" class="d-inline-block align-top" alt="정화조"><span style="text-align:center; color:Darkslategray ;">정화조</span></a>
        <a class="minone-menu" href="/minone/PageMinoneForm"><img src="../../assets/images/minone/Sensors.png" width="100" height="100" class="d-inline-block align-top" alt="센서등"><span style="text-align:center; color:Darkslategray ;">센서등</span></a><h2></h2>
        <br>
      </div>
      <hr style="border-color: gray;"/>

      <div class="back-box-one" >
        <a class="minone-menu" href="/minone/PageMinoneForm"><img src="../../assets/images/minone/quarantine.png" width="100" height="100" class="d-inline-block align-top" alt="방역"><span class="spanee" style="text-align:center; color:Darkslategray ;">승강기</span></a>
        <a class="minone-menu" href="/minone/PageMinoneForm"><img src="../../assets/images/minone/automatic-doors.png" width="100" height="100" class="d-inline-block align-top" alt="자동문"><span class="spanee" style="text-align:center; color:Darkslategray ;">자동문</span></a>
        <a class="minone-menu" href="/minone/PageMinoneForm"><img src="../../assets/images/minone/piping.png" width="100" height="100" class="d-inline-block align-top" alt="배관"><span class="spanee" style="text-align:center; color:Darkslategray ;">배관</span></a>
        <a class="minone-menu" href="/minone/PageMinoneForm"><img src="../../assets/images/minone/etc.png" width="100" height="100" class="d-inline-block align-top" alt="기타"><span class="spanee" style="text-align:center; color:Darkslategray ;">기타</span></a><h2></h2>
        <br>
      </div>


    </div> <!-- back-box close-->

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
  height: 65vh;
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

.spanee {
  position:absolute; 
  top:620%; 
  
}



</style>



