<!-- PageMyMinoneForm.vue 내민원 상세보기 -->


<template>
    <div class="background">
      <h1 style="text-align:left; font-size: 26px; font-family:TheJamsil5Bold;" >내 민원 보기</h1>
      <hr style="border-color: gray;"/>
  
      <div class="back-box rounded-1" >
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm1">종류</span>
                <input type="text" class="form-control" name="" value="카테고리명" readonly><br>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm1">제목</span>
                <input type="text" class="form-control" value="정말 불만이에요" readonly>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm2">내용</span>
                <input type="text" class="form-control" value="불만사항 작성되어있음" readonly>
            </div>

            <div class="input-group mb-3">
                <input type="file" class="form-control" id="inputGroupFile02" >
                <label class="input-group-text" for="inputGroupFile02">Upload</label>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm3">관리자 답변</span>
                <input type="text" class="form-control" value="빠르게 조치하겠습니다" readonly>
            </div>



            <div class="submit-button">
            <a href="/minone/PageMyMinone" class="btn" tabindex="-1" role="button" aria-disabled="true" 
                style="background-color: #EBC07F; color:rgb(36, 36, 36); text-align:center; font-family:TheJamsil5Bold; font-size: 15px; width: 760px; height: 32px; ">확인</a>
            </div>


        </div> <!-- back-box close-->
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
    height: 80vh;                 /* 폼 높이 */
    overflow: hidden;
    margin:auto;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left;
    position: absolute;
    }

    #inputGroup-sizing-sm2 {    /* 내용 */
    height: 30vh;
    }

    #inputGroup-sizing-sm3 {    /* 관리자 답변 */
    height: 20vh;
    }



    .minone-menu {      /*메뉴박스들*/ 
    margin: 45px;     /*박스 사이간격*/
    }

  
  </style>
  
  
  
  