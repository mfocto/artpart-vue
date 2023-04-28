<template>
  <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
  <div></div>
  <div class="navbar-nav ml-auto">
    <div class="nav-item text-nowrap">
      <a class="nav-link px-3" href="/member/MemberMypage">마이페이지</a>
      <a class="nav-link px-3" href="/">로그아웃</a>
    </div>
  </div>
</header>
<hr style="clear:both; display: none;"/>
</template>

<script>
export default {

}
</script>

<style scoped>
header{
  position: fixed;
  left: 340px;
  right: 0;
  height: 120px;
  background-color: #f8f9fa !important;
 
  
}
.nav-link {
 float: right;
 color: rgb(36, 36, 36);    /* 글씨색 */
}

</style>