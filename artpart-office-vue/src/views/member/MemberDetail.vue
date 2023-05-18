<template>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">입주민</h1>
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
                <th scope="col">동</th>   <td scope="col">{{ memberdong }}</td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">호수</th>   <td scope="col">{{memberho}}</td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">핸드폰번호</th>   <td scope="col">{{ memberphone }}</td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">등록차량1</th>   <td scope="col">{{membermycar1}}</td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">등록차량2</th>   <td scope="col">{{membermycar2}}</td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">아이디</th>   <td scope="col">{{memberid}}</td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">이름</th>   <td scope="col">{{ membername }}</td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">로그인 여부</th>   <td scope="col">{{ memberloginok }}</td>
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
              id: this.$route.query.memberidx,
              memberdong : this.$route.query.memberdong,
              memberho : this.$route.query.memberho,
              memberid : this.$route.query.memberid,
              memberloginok : this.$route.query.memberloginok,
              membermycar1 : this.$route.query.membermycar1,
              membermycar2 : this.$route.query.membermycar2,
              membername : this.$route.query.membername,
              memberpassword : this.$route.query.memberpassword,
              memberphone : this.$route.query.memberphone,
              aptidx : this.$route.query.aptidx

          };
      },
      methods: {
          fetchMember(){
              this.$axios.get(this.$serverUrl + "/member/" + this.id, {
                  params: this.requestBody
              }).then(response => {
                  this.memberdong = response.data.memberdong;
                  this.memberho = response.data.memberho;
                  this.memberid = response.data.memberid;
                  this.memberloginok = response.data.memberloginok;
                  this.membermycar1 = response.data.membermycar1;
                  this.membermycar2 = response.data.membermycar2;
                  this.membername = response.data.membername;
                  this.memberpassword = response.data.memberpassword;
                  this.memberphone = response.data.memberphone;
                  this.aptidx = response.data.aptidx;
              })
                  .catch(error => {
                      console.error(error);
                  });
          },
          fnList(){
              delete this.requestBody.id
              this.$router.push({
                  path: './memberlist',
                  query: this.requestBody
              })
          },
          fnUpdate(){
              this.$router.push({
                  path: './memberupdate',
                  query: this.requestBody
              })
          },
          fnDelete(){
              if(!confirm("삭제하시겠습니까?")) return

              this.$axios.delete(this.$serverUrl + '/member/' + this.id, {})
                  .then(() => {
                      alert('삭제되었습니다.')
                      this.fnList();
                  }).catch((err) => {
                  console.log(err);
              })
          },

      },
      mounted() {
          this.fetchMember();

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
  