<template>
  <PageHeader/> <!-- 헤더 컴포넌트 -->
    <div class="container-fluid">
     <div class="row"> 
    <ASidebar/>
     <main style="margin-left: 340px !important; width: calc(100% - 340px);" class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <router-view/>  <!-- 페이지 이동이 표시될 곳 -->
   </main> 
  </div>
  </div>
</template>




<script>
import PageHeader from './components/common/PageHeader-member.vue';
import ASidebar from './components/common/ArtPartSidebar.vue';



export default {
  name: 'App',
  components: { 
    //HelloWorld
    PageHeader,
    ASidebar
   
    
  }
}
</script>





<style>
@font-face {
    font-family: 'TheJamsil5Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}

#app {
  font-family: TheJamsil5Bold, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: gray;
  margin-top: 60px;
}

.container-fluid{
  height: 100%;
  margin-top: 120px !important;
}
.row{
  height: 100%;
}
.col-md-9{
  background-color: #f8f9fa;
  
  
}
</style>