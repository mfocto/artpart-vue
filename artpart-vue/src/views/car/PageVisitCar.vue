<!-- PageVisitCar.vue-->

<template>
  <div class="background">

    <h1 style="text-align:left; font-size: 26px; font-family:TheJamsil5Bold;" >방문차량 등록 정보</h1>
    <hr style="border-color: gray;"/>

    <div class="back-box rounded-1" > 


        <div class="number1">
          <!-- car이미지 -->
          <div class="back-box-imagebox" style="width:170px; height:160px; float:left;">
            <img src="../../assets/images/car.png" width="170" height="170" class="d-inline-block align-top" alt="">
          </div>

          
          <div class="back-box-inputbox" style="width:300px; height:170px; float:left; margin:10px; font-size: 18px;">

            <div class="input-group mb-1" >
              <input type="text" class="form-control rounded-1" name="" placeholder="차량번호를 입력해주세요" style="font-size: 12px; height:37px; "><br>
            </div>

            <div class="input-group mb-1">
              <input type="text" class="form-control" name="" placeholder="차량종류를 입력해주세요" style="font-size: 12px; height:37px; ">
            </div>

            <div class="input-group mb-1">
              <input type="text" class="form-control" name="" placeholder="연락가능한 비상연락처를 입력해주세요(-제외)" style="font-size: 12px; height:37px; ">
            </div>

            <div class="input-group mb-1">
              <input type="text" class="form-control" name="" placeholder="방문사유를 입력해주세요" style="font-size: 12px; width:150px; height:37px; ">
            </div>

            <div class="input-group mb-1">
              <span style="text-align:center; font-size: 12px; color:Darkslategray margin:auto; padding: 5px;">방문 기간</span><br>
            </div>
            
            <div class="input-group mb-1 ">
              <input type="date" class="form-control rounded-1" name="" style="font-size: 12px; width:50px; height:37px; "> 
              <span style="text-align:center; font-size: 12px; color:Darkslategray margin:5px; padding: 10px;">~</span><br>
              <input type="date" class="form-control rounded-1" name="" style="font-size: 12px; width:50px; height:37px; ">
            </div>

            <div class="submit-button ">
              <a href="#" class="btn" tabindex="-1" role="button" aria-disabled="true" 
                  style="background-color: #EBC07F; color:rgb(36, 36, 36); text-align:center; font-family:TheJamsil5Bold; font-size: 15px; width: 300px; height: 32px; " >등록하기</a>
            </div>
          </div>  <!-- back-box-inputbox close-->





        </div> <!-- number1 close--> 




      <div class="number1">
        <!-- car이미지 -->
        <div class="back-box-imagebox" style="width:170px; height:170px; float:left;">
          <img src="../../assets/images/car.png" width="170" height="170" class="d-inline-block align-top" alt="">
          
        </div>

        <!-- 출력폼 -->
        <table style="border: solid 1px black; box-shadow: 1px 1px 5px gray;	 /* 박스 그림자색 지정 */">
            <thead>
              <div class="back-box-inputcar mb-1" style="width:300px; height:250px; float:left; margin:10px; font-size: 18px;">
                <div class="input-group mb-1" >
                  <p style="color:Darkslategray; font-size: 10pt; text-align:left; margin:auto; padding: 5px; width:85px;"  >차량 번호 : </p>
                  <input type="text" class="form-control rounded-1" name="" value="135오 1234" style="font-size: 12px; height:37px; color: red;" readonly><br>
                </div>

                <div class="input-group mb-1">
                  <p style="color:Darkslategray; font-size: 10pt; text-align:left; margin:auto; padding: 5px; width:85px;" >차량 종류 : </p>
                  <input type="text" class="form-control rounded-1" name="" value="아반떼" style="font-size: 12px; height:37px; color: red;" readonly>
                </div>

                <div class="input-group mb-1">
                  <p style="color:Darkslategray; font-size: 10pt; text-align:left; margin:auto; padding: 5px; width:85px;" >비상 연락처 : </p>
                  <input type="text" class="form-control rounded-1" name="" value="01075441234" style="font-size: 12px; height:37px; color: red;" readonly>
                </div>

                <div class="input-group mb-1">
                  <p style="color:Darkslategray; font-size: 10pt; text-align:left; margin:auto; padding: 5px; width:85px;" >방문 사유 : </p>
                  <input type="text" class="form-control rounded-1" name="" value="명절" style="font-size: 12px; height:37px; color: red;" readonly>
                </div>

                <div class="input-group mb-2">
                  <p style="color:Darkslategray; font-size: 10pt; text-align:left; margin:auto; padding: 5px; width:85px;" >방문 기간 : </p>
                  <input type="text" class="form-control rounded-1" name="" value="2023-04-27~2023-04-29" style="font-size: 12px; height:37px; color: red;" readonly>
                </div>

                <div class="delete-button">
                  <a href="#" class="btn mb-1" tabindex="-1" role="button" aria-disabled="true" 
                    style="background-color: #EBC07F; color:rgb(36, 36, 36); text-align:center; font-family:TheJamsil5Bold; font-size: 15px; width: 300px; height: 32px; " >삭제하기</a>
                </div>

              </div>  <!-- back-box-inputcar close--> 
            </thead>
        </table>



        
      </div> <!-- number1 close--> 
    


  





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
  width: 1100px;
  height: 60vh;
  overflow: hidden;
  padding: 20px;      /*안쪽여백 */
  margin:auto;        /*바깥여백 */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  position: absolute;
}




</style>


