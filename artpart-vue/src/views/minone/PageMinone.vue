<!-- PageMinone.vue 민원카테고리(메인) -->

<template>
  <div class="background">
    <h1 style="text-align:left; font-size: 26px; font-family:TheJamsil5Bold;" >민원 접수</h1>
    <hr style="border-color: gray;"/>


    <form class="back-box" @submit.prevent="insertMinone">

        <div class="back-box-one">
          <router-link class="minone-menu" :to="{path: '/minone/pageminoneform', query: {name: 'PageMinone', num: 1}}"><img src="../../assets/images/minone/elevator.png" width="100" height="100" class="d-inline-block " alt="승강기">
            <span style="text-align:center; color:Darkslategray;" :data-text="'승강기'">승강기</span>
          </router-link>

          <router-link class="minone-menu" :to="{path: '/minone/pageminoneform', query: {name: 'PageMinone', num: 2}}"><img src="../../assets/images/minone/fire.png" width="100" height="100" class="d-inline-block " alt="소방">
            <span style="text-align:center; color:Darkslategray ;" :data-text="'소방'">소방</span>
          </router-link>

          <router-link class="minone-menu" :to="{path: '/minone/pageminoneform', query: {name: 'PageMinone', num: 3}}"><img src="../../assets/images/minone/intercom.png" width="100" height="100" class="d-inline-block " alt="인터폰">
            <span style="text-align:center; color:Darkslategray ;" :data-text="'인터폰'">인터폰</span>
          </router-link>

          <router-link class="minone-menu" :to="{path: '/minone/pageminoneform', query: {name: 'PageMinone', num: 4}}"><img src="../../assets/images/minone/automatic-doors.png" width="100" height="100" class="d-inline-block " alt="물탱크">
            <span style="text-align:center; color:Darkslategray ;" :data-text="'물탱크'">물탱크</span>
          </router-link>
          <br><br>
          <hr style="border-color: gray; "/>

          <router-link class="minone-menu" :to="{path: '/minone/pageminoneform', query: {name: 'PageMinone', num: 5}}"><img src="../../assets/images/minone/cleaning.png" width="100" height="100" class="d-inline-block " alt="청소">
            <span style="text-align:center; color:Darkslategray ;" :data-text="'청소'">청소</span></router-link>

          <router-link class="minone-menu" :to="{path: '/minone/pageminoneform', query: {name: 'PageMinone', num: 6}}"><img src="../../assets/images/minone/electricity.png" width="100" height="100" class="d-inline-block " alt="전기">
            <span style="text-align:center; color:Darkslategray ;" :data-text="'전기'">전기</span></router-link>

          <router-link class="minone-menu" :to="{path: '/minone/pageminoneform', query: {name: 'PageMinone', num: 7}}"><img src="../../assets/images/minone/water-filter.png" width="100" height="100" class="d-inline-block align-top" alt="정화조">
            <span style="text-align:center; color:Darkslategray ;" :data-text="'정화조'">정화조</span></router-link>

          <router-link class="minone-menu" :to="{path: '/minone/pageminoneform', query: {name: 'PageMinone', num: 8}}"><img src="../../assets/images/minone/Sensors.png" width="100" height="100" class="d-inline-block align-top" alt="센서등">
            <span style="text-align:center; color:Darkslategray ;" :data-text="'센서등'">센서등</span></router-link><h2></h2>
          <br><br>
          <hr style="border-color: gray;"/>

          <router-link class="minone-menu" :to="{path: '/minone/pageminoneform', query: {name: 'PageMinone', num: 9}}"><img src="../../assets/images/minone/quarantine.png" width="100" height="100" class="d-inline-block align-top" alt="방역">
            <span class="spanee" style="text-align:center; color:Darkslategray ;" :data-text="'승강기'">승강기</span></router-link>

          <router-link class="minone-menu" :to="{path: '/minone/pageminoneform', query: {name: 'PageMinone', num: 10}}"><img src="../../assets/images/minone/automatic-doors.png" width="100" height="100" class="d-inline-block align-top" alt="자동문">
            <span class="spanee" style="text-align:center; color:Darkslategray ;" :data-text="'자동문'">자동문</span></router-link>

          <router-link class="minone-menu" :to="{path: '/minone/pageminoneform', query: {name: 'PageMinone', num: 11}}"><img src="../../assets/images/minone/piping.png" width="100" height="100" class="d-inline-block align-top" alt="배관">
            <span class="spanee" style="text-align:center; color:Darkslategray ;" :data-text="'배관'">배관</span></router-link>

          <router-link class="minone-menu" :to="{path: '/minone/pageminoneform', query: {name: 'PageMinone', num: 12}}"><img src="../../assets/images/minone/etc.png" width="100" height="100" class="d-inline-block align-top" alt="기타">
            <span class="spanee" style="text-align:center; color:Darkslategray ;" :data-text="'기타'">기타</span></router-link><h2></h2>
          <br>
        </div>
      </form> <!-- back-box close-->

</div> <!--background close-->
</template>





<script>


export default {
  name: 'PageMinone',

  
  //##################[[ mounted ]]##################
  mounted() { //페이지열릴때 자동실행
    this.getSessionInfo();
    this.getDreportList();
  },
  

  //##################[[ methods ]]##################
  methods: {
    clickList() {
      const queries = [];
      const children = document.querySelectorAll('.minone-menu');
      
      for (let i = 0; i < children.length; i++) {
        const text = children[i].querySelector('span').getAttribute('data-text');

        queries.push({
          name: 'Query',
          query: {
            name: 'PageMinone',
            num: i + 1,
            text: text
          }
        }); //queries.push
      } //for

      for (let i = 0; i < queries.length; i++) {
        this.$router.push(queries[i]);
      } //for
    }, //clickList method close


  }, //methods close



} //export default close
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

h2 {width: 80px;}

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



