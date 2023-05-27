<!-- PageMinoneForm.vue 민원글쓰기폼 양식-->


<template>
  <thead>
    <h1 style="text-align:left; font-size: 26px; font-family:TheJamsil5Bold;" >민원 접수</h1>
    <hr style="border-color: gray;"/>
  </thead>

  <tbody>
    <div class="background">
      <div class="back-box rounded-1" >
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm1">종류</span>
                <select class="form-select" 
                v-model="mincategory" required="true">
                  <option value="-기타-" selected>-기타-</option>
                  <option value="승강기">승강기</option>
                  <option value="소방">소방</option>
                  <option value="인터폰">인터폰</option>
                  <option value="물탱크">물탱크</option>
                  <option value="청소">청소</option>
                  <option value="전기">전기</option>
                  <option value="정화조">정화조</option>
                  <option value="센서등">센서등</option>
                  <option value="승강기">승강기</option>
                  <option value="자동문">자동문</option>
                  <option value="배관">배관</option>
                </select>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm1">제목</span>
                <input type="text" class="form-control" v-model="mintitle" required>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm2">내용</span>
                <input type="text" class="form-control" v-model="mintype" required>
            </div>

            <div class="input-group mb-3" >
                <span class="input-group-text" id="inputGroup-sizing-sm2" style=" height: 32px;" >처리 상황</span>
                <input type="text" class="form-control" v-model="minstatus" required style=" width: 15px; height: 32px;" placeholder="처리 예정입니다" >
            </div>

            <div class="input-group mb-3" >
                <span class="input-group-text" id="inputGroup-sizing-sm2" style=" height: 32px;" >관리 답변</span>
                <input type="text" class="form-control" v-model="minres" required style=" width: 15px; height: 32px;"  placeholder="처리 예정입니다" >
            </div>




            <div class="submit-button">
            <button class="btn" v-on:click="regMinone"
            style="background-color: #EBC07F; color:rgb(36, 36, 36); text-align:center; font-family:TheJamsil5Bold; font-size: 15px; width: 760px; height: 32px; ">
            Enter
            </button>        
            </div>


          </div> <!-- back-box close-->
        </div> <!--background close-->
      </tbody>
  </template>

  
  
  
<script>
export default {
name: 'PageMinoneForm',
data() {
    return {    //초기화
      requestBody: this.$route.query,

      memberidx: '',
      mintitle: '',
      mintype: '',
      minstatus: '',
      minres: '',
      mincategory: '',
    }
},

  methods: {


  regMinone() {
    const member = JSON.parse(this.$cookie.get('member'))
    let apiUrl = this.$serverUrl + '/newmin'

      this.form = {
        "memberidx":  member.member_idx,   //멤버idx
        "mintitle" : this.mintitle,         //민원제목
        "mintype" : this.mintype,           //민원내용
        "minstatus": this.minstatus,        //처리상황
        "minres" : this.minres,             //관리자답변
        "mincategory":this.mincategory,     //카테고리
      },

      console.log(this.form)

      //등록
      this.$axios.post(apiUrl, this.form)
        .then(() => {
            alert('글이 저장되었습니다.')
            this.fnList();
          }).catch((err) => {
            if (err.message.indexOf('Network Error') > -1) {
              alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
            }//if
          })
        },//regMinone

        fnList(){ //글 저장 후 리스트이동
        delete this.requestBody.id
        this.$router.push({
            path: './pagemyminone',   //리스트로 이동필요한 url 지정
            query: this.requestBody
        })
        },

      }//methods
    }//export default
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
    height: 150vh;                 /* 폼 높이 */
    overflow: hidden;
    margin:auto;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left;
    position: absolute;
    }

    #inputGroup-sizing-sm2 {
    height: 30vh;
    }



    .minone-menu {      /*메뉴박스들*/ 
    margin: 45px;     /*박스 사이간격*/
    }

  </style>
  
  
  
  