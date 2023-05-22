<template>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">민원 조회</h1>
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
                <th scope="col">이름</th>   <td scope="col">{{ memberidx.membername }}</td>        <td></td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">핸드폰번호</th>   <td scope="col">{{ memberidx.memberphone }}</td>        <td></td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">민원내용</th>   <td scope="col">{{ mintype }}</td>   <td></td>
              </tr>
            </thead>
              <thead>
              <tr>
                  <th scope="col">관리자 답변</th>   <td scope="col">{{ minres }}</td>   <td></td>
              </tr>
              </thead>
            <thead>
              <tr>      
                <th scope="col">처리여부</th>   <td scope="col">{{ minstatus }}</td>     <td></td>
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
              id: this.$route.query.minidx,
              memberidx : '',
              mintitle : '',
              mintype : '',
              minstatus : '',
              minres : '',
              minfile : '',
              minrename : '',
              mincategory : '',


          };
      },
      methods: {
          fetchMinone(){
              this.$axios.get(this.$serverUrl + "/minone/" + this.id, {
                  params: this.requestBody
              }).then(response => {
                  this.memberidx = response.data.memberidx;
                  this.mintitle = response.data.mintitle;
                  this.mintype = response.data.mintype;
                  this.minstatus = response.data.minstatus;
                  this.minres = response.data.minres;
                  this.minfile = response.data.minfile;
                  this.minrename = response.data.minrename;
                  this.mincategory = response.data.mincategory;
              })
                  .catch(error => {
                      console.error(error);
                  });
          },
          fnList(){
              delete this.requestBody.id
              this.$router.push({
                  path: './complaintlist',
                  query: this.requestBody
              })
          },
          fnUpdate(){
              this.$router.push({
                  path: './complaintupdate',
                  query: this.requestBody
              })
          },
          fnDelete(){
              if(!confirm("삭제하시겠습니까?")) return

              this.$axios.delete(this.$serverUrl + '/minone/' + this.id, {})
                  .then(() => {
                      alert('삭제되었습니다.')
                      this.fnList();
                  }).catch((err) => {
                  console.log(err);
              })
          },

      },
      mounted() {
          this.fetchMinone();

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
    color: #42b983;
  }
  </style>
  