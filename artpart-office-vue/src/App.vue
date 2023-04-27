<template>
  <PageHeader v-if="$route.name && !$route.name.startsWith('PageHIntro')"/> <!-- 헤더 컴포넌트 -->
  <div class="container-fluid">
  <div class="row">
  <ASidebar v-if="$route.name && !$route.name.startsWith('PageHIntro')"/>
  <main style="margin-left: 340px !important; margin-top: 120px !important; width: calc(100% - 340px);" class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
  <router-view/>  <!-- 페이지 이동이 표시될 곳 -->
  </main>
  </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import PageHeader from './components/common/PageHeader.vue';
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
}
.row{
  height: 100%;
}
.col-md-9{
  background-color: #f8f9fa;
}
</style>
