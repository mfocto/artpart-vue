<template>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">입주자 대표회의</h1>
          <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group me-2">
                <button class="btn btn-sm btn-outline-secondary" v-on:click="fnList">목록</button>
                <button class="btn btn-sm btn-outline-secondary" v-on:click="fnUpdate">수정</button>
                <button class="btn btn-sm btn-outline-secondary" v-on:click="fnDelete">삭제</button>
            </div>
            
          </div>
        </div>
  
        
        <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr>      
                <th scope="col">제목</th>   <td scope="col">{{ meetingtitle }}</td>        <td></td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">작성자</th>   <td scope="col">{{ meetingid.emp_name}}</td>        <td></td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col" style="vertical-align: top;">내용</th>   <td scope="col">{{meetingcontent}}</td>        <td></td>
              </tr>
            </thead>
              <thead>
              <tr>
                  <th scope="col" style="vertical-align: top;">공지여부</th>   <td scope="col">{{ meetingopen}}</td>        <td></td>
              </tr>
              </thead>
           
            
          </table>
        </div>
  </template>
  
  <script>
  export default {
      data(){
          return {
              requestBody: this.$route.query,
              id: this.$route.query.meetingidx,
              meetingtime : '',
              meetingtitle : '',
              meetingcontent :'',
              meetingid : '',
              meetingopen : ''
          };
      },
      methods: {
          fetchMeeting(){
              this.$axios.get(this.$serverUrl + "/meeting/" + this.id, {
                  params: this.requestBody
              }).then(response => {
                  this.meetingtime = response.data.meetingtime;
                  this.meetingtitle = response.data.meetingtitle;
                  this.meetingcontent = response.data.meetingcontent;
                  this.meetingid = response.data.meetingid;
                  this.meetingopen = response.data.meetingopen;
              })
                  .catch(error => {
                      console.error(error);
                  });
          },
          fnList(){
              delete this.requestBody.id
              this.$router.push({
                  path: './meetinglist',
                  query: this.requestBody
              })
          },
          fnUpdate(){
              this.$router.push({
                  path: './meetingupdate',
                  query: this.requestBody
              })
          },
          fnDelete(){
              if(!confirm("삭제하시겠습니까?")) return

              this.$axios.delete(this.$serverUrl + '/meeting/' + this.id, {})
                  .then(() => {
                      alert('삭제되었습니다.')
                      this.fnList();
                  }).catch((err) => {
                  console.log(err);
              })
          },

      },
      mounted() {
          this.fetchMeeting();

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
    color: #000000;
  }
  </style>
  