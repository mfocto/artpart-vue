<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">공지사항</h1>
      </div>
      <div class="table-responsive">
        
        <table class="table table-striped table-sm">
          <thead class="boarder-0">
            <tr>
              <th scope style="text-align:left;">제목</th>
              <th scope="col" style="text-align:left;" colspan="3">{{ title }}</th>
            </tr>
            <tr>
              <th scope style="text-align:left;">작성자</th>
              <th scope="col" style="text-align:left;" colspan="3">{{ writer }}</th>
            </tr>
            <tr>
              <th scope style="text-align:left;">작성일자</th>
              <th scope="col" style="text-align:left;" colspan="3">{{ noticedate }}</th>
            </tr>

            <tr>
              <th scope="col" colspan="4" style="text-align:right;">
                  <button class="btn btn-sm btn-outline-secondary" v-on:click="fnList">목록</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">수정</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">삭제</button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td colspan="4" style="text-align:left; height: 300px; width: 200px; overflow: auto;" v-text="content">
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
          requestBody: this.$route.query,
          id: this.$route.query.noticeidx,
          title: '',
          content: '',
          noticedate: '',
          writer:''
      };
  },
    methods: {
      sendsms(){
          this.$axios.post(this.$serverUrl + "/sms/send/", null, {
              params: {
                  content: this.content
              }
          })
      },
      fetchNotice(){
          this.$axios.get(this.$serverUrl + "/notice/" + this.id, {
              params: this.requestBody
          }).then(response => {
                  this.title = response.data.title;
                  this.content = response.data.content;
                  this.noticedate = response.data.noticedate;
                  this.writer = response.data.writer.emp_name;
              })
              .catch(error => {
                  console.error(error);
              });
      },
      fnList(){
          delete this.requestBody.noticeidx
          this.$router.push({
              path: './list',
              query: this.requestBody
          })
      }
    },
    mounted() {
      this.fetchNotice();
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
