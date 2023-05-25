<!-- PageMinoneForm.vue 민원글쓰기폼 양식-->


<template>
    <div class="background">
      <h1 style="text-align:left; font-size: 26px; font-family:TheJamsil5Bold;" >민원 접수</h1>
      <hr style="border-color: gray;"/>
  
    <form class="" @submit.prevent="regMinone">
      <div class="back-box rounded-1" >
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm1">종류</span>
                <select class="form-select" 
                v-model="mincatecory" required="true">
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
                <span class="input-group-text" id="inputGroup-sizing-sm2" style=" height: 32px;" >상태</span>
                <input type="text" class="form-control" v-model="minstatus" required style=" height: 32px;" readonly placeholder="처리예정">
            </div>

            <div class="submit-button">
            <button class="btn" type="submit" v-on="regMinone"
            style="background-color: #EBC07F; color:rgb(36, 36, 36); text-align:center; font-family:TheJamsil5Bold; font-size: 15px; width: 760px; height: 32px; ">
            Enter
            </button>        
            </div>


        </div> <!-- back-box close-->
    </form>
    </div> <!--background close-->
  </template>

  
  
  
  <script>
  export default {
  name: 'PageMinoneForm',
  data() {
      return {
        requestBody: this.$route.query,
        
        list: [],
        minoneidx: this.$route.query.minoneidx,
        memberidx: '',
        mincatecory: '',     // 민원종류
        mintitle: '',        // 제목
        mintype: '',         // 내용
        minstatus: '',
      }
  },
  
    methods: {
        regMinone() {
            //const minone = JSON.parse(this.$cookie.get('minone'))
            const member = JSON.parse(this.$cookie.get('member'))
            let formData = {
                memberidx: member.memberidx,  //민원idx
                minidx: this.minidx,  //민원idx
                mincatecory: this.mincatecory,
                mintitle: this.mintitle,
                mintype: this.mintype,
                minstatus: this.minstatus
            }
            
            console.log(formData)

            this.$axios.post('/pageminoneform/newMin', formData)    //formData보낸다는 뜻
                .then(() => {
                    alert('민원등록 완료!');
                    this.$router.push('/minone/pagemyminone')   //내 민원 목록으로 리다이렉트
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    },
}
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
    height: 60vh;                 /* 폼 높이 */
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
  
  
  
  