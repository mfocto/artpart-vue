<!-- PageArchiveForm.vue -->


<template>
    <div class="background">
        <h1 style="text-align:left; font-size: 26px; font-family:TheJamsil5Bold;" >투표 & 설문 접수</h1>
        <hr style="border-color: gray;"/>
        
        <form @submit.prevent="fnLogin">
            <div class="back-box rounded-1" >
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-sm1" style=" width: 100%; color:Firebrick; font-size: 18px;">투표 & 설문 접수</span>
                
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-sm1">제목</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-sm2">설명</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                </div>

                <!-- //////////////체크박스/////////////////// -->
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked> 
                        <input class="form-control-1 rounded-1" type="text"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                </div>  
                
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >
                        <input class="form-control-1 rounded-1" type="text"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                </div>

                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >
                        <input class="form-control-1 rounded-1" type="text"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                </div>

                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >
                        <input class="form-control-1 rounded-1" type="text"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                </div>

                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >
                        <input class="form-control-1 rounded-1" type="text"  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                </div>

                <!-- //////////////////////////////////////// -->



                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupFile02">종료 시간</label>
                    <input type="date" class="form-control" id="inputGroupFile02">
                </div>


                <div class="submit-button" mb-3>
                <router-link to="/meeting/meetingpage" class="btn" tabindex="-1" role="submit" @keyup.enter="submit()" aria-disabled="true"
                    style="background-color: #EBC07F; color:rgb(36, 36, 36); text-align:center; font-family:TheJamsil5Bold; font-size: 15px; width: 760px; height: 32px; " >Enter</router-link>
                </div> 


            </div> <!-- back-box close-->
        </form>
    </div> <!--background close-->
  </template>
  
  
  
  
  
  <script>
  
  </script>
  
  
  <style scoped>

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
    padding: 20px;                /* 안쪽여백 */
    padding-top: 20px;
    background-color: #ebe9e9;
    width: 800px;
    height: 70vh;                 /* 폼 높이 */
    overflow: hidden;
    margin:auto;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left;
    position: absolute;
    }

    #inputGroup-sizing-sm2 {
    height: 10vh;
    }



    .minone-menu {      /*메뉴박스들*/ 
    margin: 45px;     /*박스 사이간격*/
    }

    .form-check-input {
        width: 30px; 
        height: 30px;
        margin-right: 40px;     /*박스 사이간격*/
        position: relative; 
    }
    
    .form-control-1 {  /*체크박스 안에 text input */
        width: 680px; 
        height: 30px;
        
        position: relative; 
        border: none;
    }

    input[type=checkbox] {

        position: relative; 
        bottom: 4px;
    }

  </style>
  
  
  
  