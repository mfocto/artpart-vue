<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">공지사항</h1>
        
      </div>

      

      
      <div class="table-responsive">
        
        <table class="table table-striped table-sm">
          <thead class="boarder-0">
            <tr>
              <th scope style="text-align:left;">제목</th>
              <th scope="col" style="text-align:left;" colspan="3">공지사항3</th>
            </tr>
            <tr>
              <th scope style="text-align:left;">작성자</th>
              <th scope="col" style="text-align:left;" colspan="3">작성자2</th>
            </tr>
            <tr>
              <th scope style="text-align:left;">작성일자</th>
              <th scope="col" style="text-align:left;" colspan="3">2023-04-07</th>
            </tr>

            <tr>
              <th scope="col" colspan="4" style="text-align:right;">
                <router-link to="/notice-list" class="btn btn-sm btn-outline-secondary">목록</router-link>
                <button type="button" class="btn btn-sm btn-outline-secondary">수정</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">삭제</button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="4" style="text-align:left;" >
                  <input type="text" readonly v-model="content"><br>
               <br><br><br><br><br><br><br><br><br>
              </td>
            </tr>
            <tr>
              <td><button type="button" class="btn btn-dark" @click="sendsms">메세지 발송</button></td>
              <td colspan="3"><button type="button" class="btn btn-dark">안내 방송</button></td>
            </tr>
           
            
          </tbody>
        </table>
      </div>
</template>

<script>
export default {
  data(){
      return {
          content: '2023년 4월 27일 공지사항입니다.'
      };
  },
    methods: {
      sendsms(){
          this.$axios.post(this.$serverUrl + "/sms/send/", null, {
              params: {
                  content: this.content
              }
          })
      }
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
