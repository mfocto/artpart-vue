<!-- PageMeeting.vue-->

<template>
  <div class="background">

    <h1 style="text-align:left; font-size: 26px; font-family:TheJamsil5Bold;" >회의/투표/설문</h1>
    <hr style="border-color: gray;"/>

    <div class="back-box rounded-1" >
      <div class="input-group mb-3" >
          <input type="text" class="form-control" name="" placeholder="차량번호를 입력해주세요"><br>
      </div>

      <div class="input-group mb-3">
          <input type="text" class="form-control" name="" placeholder="차량번호를 입력해주세요">
      </div>

      <div class="input-group mb-3">
          <input type="text" class="form-control" name="" placeholder="차량번호를 입력해주세요">
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
  height: 50vh;
  overflow: hidden;
  padding: 20px;      /*안쪽여백 */
  margin:auto;        /*바깥여백 */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  position: absolute;
}






</style>



