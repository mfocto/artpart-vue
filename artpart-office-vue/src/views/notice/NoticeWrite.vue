<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">공지사항</h1>
        
      </div>

      

      
      <div class="table-responsive">
        
        <table class="table table-striped table-sm">
          <thead class="boarder-0">
            <tr>
              <th scope style="text-align:left;">제목</th>
              <th scope="col" style="text-align:left;" colspan="3"><input type="text" style="width: 100%" v-model="title" placeholder="공지사항 제목" /></th>
            </tr>
            
            <tr>
              <th scope="col" colspan="4" style="text-align:right;">
                <router-link to="/notice-list" class="btn btn-sm btn-outline-secondary">목록</router-link>
                <button type="button" class="btn btn-sm btn-outline-secondary">작성</button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="4" style="text-align:left;">
                <textarea v-model="content" rows="10" style="width: 100%;" placeholder="공지사항 내용을 입력하세요."></textarea>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #0a0a0a;
}
</style>
