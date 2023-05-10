<!-- PageMyMinoneForm.vue -->


<template>
    <div class="background">
      <h1 style="text-align:left; font-size: 26px; font-family:TheJamsil5Bold;" >공지사항</h1>
      <hr style="border-color: gray;"/>
  
      <div class="back-box rounded-1" >
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm1" style="width: 100%; color:#ec981a;">공지사항1</span>
                <!-- <input type="text" class="form-control" name="" value="" readonly><br> -->
            </div>


        <table class="w3-table-all" style="width:100%; height:100px; font-weight: 100; color:black;">
            <!-- header -->
            <thead>
            <tr>
                <th><span class="input-group-text" id="inputGroup-sizing-sm1">No</span></th>
                <th><span class="input-group-text" id="inputGroup-sizing-sm1">제목</span></th>
                <th><span class="input-group-text" id="inputGroup-sizing-sm1">작성자</span></th>
                <th><span class="input-group-text" id="inputGroup-sizing-sm1">내용</span></th>
                <th><span class="input-group-text" id="inputGroup-sizing-sm1">작성일</span></th>
            </tr>
            </thead>

            <!-- body -->
            <tbody style="font-family:Pretendard-Regular;">
            <tr v-for="(anno, NOTICE_IDX) in list" :key="NOTICE_IDX">
                <td>{{ anno.NOTICE_IDX }}</td>
                <td>{{ anno.NOTICE_WRITER }}</td>
                <td>{{ anno.NOTICE_TITLE }}</td>
                <td>{{ anno.NOTICE_CONTENT }}</td>
                <td>{{ anno.NOTICE_DATE }}</td>
            </tr>
            </tbody>
      </table>


            <div class="submit-button">
            <a href="/minone/PageMyMinone" class="btn" tabindex="-1" role="button" aria-disabled="true" 
                style="background-color: #EBC07F; color:rgb(36, 36, 36); text-align:center; font-family:TheJamsil5Bold; font-size: 15px; width: 760px; height: 32px; " >확인</a>
            </div>


        </div> <!-- back-box close-->
    </div> <!--background close-->
  </template>
  
  
  
  
  
  <script>
  export default {
        mounted() {
        this.fnGetList()
        },

        methods: {
            fnGetList() {         
            //##################임시 데이터 출력 처리##################
            this.list = [
                {
                    "NOTICE_IDX":1,
                    "NOTICE_WRITER": "so여물",
                    "NOTICE_TITLE": "첫번째공지",
                    "NOTICE_CONTENT": "첫번째공지",
                    "NOTICE_DATE": "2023-05-08"
                },
            ]
            //##################임시 데이터 출력 처리 끝##################

            
            },  //fnGetList close
        }   //methods close


    
    } //export default close (document ready)
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
  
  
  
  