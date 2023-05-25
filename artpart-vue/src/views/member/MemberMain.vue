<!-- MemberMain.vue-->

<template>
  <div class="background">
    
    <!-- 백 이미지 -->
    <div class="backImg rounded-1" >
      <img src="../../assets/images/apart/building.png" width="1500" height="600" class="d-inline-block align-top" alt="">
    </div>

    <!-- 팝업이미지 -->
    <div class="popup1 rounded-1" align="left" style="">
      <div class="popup2 rounded-1">
        
        <div class="popup1-1" style="margin-top: 20px;">
        <span style="text-align:center; color:Darkslategray; font-size: 12px;" onclick="#">1</span>
        <span style="text-align:center; color:Darkslategray; font-size: 12px; margin-left: 20px;" onclick="#">2</span>
        <span style="text-align:center; color:Darkslategray; font-size: 12px; margin-left: 20px;" onclick="#">3</span>
        </div>

        <div class="popup1-1" style="margin-top: 50px;">
        <h1 style="font-family: 'TheJamsil5Bold'; color: rgb(36, 36, 36);"> 101동대표 투표</h1>
        <span style="text-align:center; color:Darkslategray; font-size: 12px;">투표기간 : 2023.04.01 ~ 2023.04.15</span>
        </div>

        <div class="popup1-2" style="margin-top: 80px;">
          <router-link to="/meetingpage" class="btn" tabindex="-1" role="button" aria-disabled="true" 
              style="background-color: rgb(36, 36, 36); color:Antiquewhite; text-align:center; font-family:TheJamsil5Bold; font-size: 13px; width: 250px; height: 32px; " >MORE VIEW ▶</router-link>
        </div>

      </div>  <!-- popup2 close -->
    </div> <!-- popup1 close -->


      <!-- 하단 공지 -->
      <div class="anno rounded-1" v-for="(item, index) in noticeList" :key="index">

      <!-- 공지 제목과 내용 -->
      <div class="anno1 rounded-1" style="float:left; margin:10px; font-size: 18px;">
        <div class="anno1-1" style="margin-top: 10px;">
          <input type="hidden" :value="item.noticeidx">
          <h1 style="font-family: 'TheJamsil5Bold'; color: rgb(36, 36, 36); font-size: 18px;">{{ item.title }}</h1>
          <span style="text-align:center; color:Darkslategray; font-size: 12px;">{{ item.content }}</span>
        </div>

        <div class="anno1-2" style="margin-top: 10px;">
          <a v-on:click="noticeDetail(item.noticeidx)" class="btn" tabindex="-1" role="button" :aria-disabled="true"
            style="background-color: rgb(36, 36, 36); color:Antiquewhite; text-align:center; margin-top: 60px; font-family:TheJamsil5Bold; font-size: 10px; width: 100px; height: 32px;">
            MORE VIEW ▶
          </a>
        </div>
      </div>

      </div> <!-- anno close -->




  </div> <!--background close-->
  </template>
  
  
  
  
  
  <script>
  export default {
    data(){
      return {
        noticeList: {},
        query: '',
        path: '',

      }
    },
      mounted() {
          this.checkinfo();
      },
      methods:{
          checkinfo() {
              const info = JSON.parse(this.$cookie.get('member'));
              console.log(info.member_name);
              this.top3List();
          },
          top3List(){
            this.$axios.get(this.$serverUrl + "/member/main", {
            }).then((res) => {
                this.noticeList = res.data;
            
            }).catch( error => {
                console.error(error);
            })
          },
          noticeDetail(noticeidx) {
          this.$router.push({
            path: '/notice/detail',
            query: {
              sk: '',
              sv: '',
              page: 1,
              size: 10,
              noticeidx: noticeidx
            }
          });
        }
      },
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

  popup2 {
    border-color: black;
  }



  .backImg {
    position: relative; 
    float: left;
  }


  .popup1 {
    position: absolute;
    background-color: #EBC07F;
    width: 350px;
    height: 350px;
    top: 270px;   /*숫자늘리면 박스가 밑으로 감 */
    left: 340px;  /*숫자늘리면 박스가 오른쪽으로 감 */
    opacity: 0.85;  /*투명도 */
    padding:20px;
    
    }


  .anno1 {
    position: relative;
    left: -10px;
    width: 270px;
    height: 190px;
    padding: 10px;
    opacity: 0.85;  /*투명도 */
    background-color: #cccccc;
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
  
  
  