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
                <th scope="col">등록제목</th>   <td scope="col">{{ title }}</td>         <td></td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">작성자</th>   <td scope="col">{{ votingwriter }}</td>          <td></td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">등록날짜</th>   <td scope="col">{{starttime}}</td>   <td></td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">마감날짜</th>   <td scope="col">{{ endtime }}</td>   <td></td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">답변1</th>   <td scope="col">{{ answer1 }}</td>   <td>10명</td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">답변2</th>   <td scope="col">{{ answer2 }}</td>   <td>15명</td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">답변3</th>   <td scope="col">{{ answer3 }}</td>   <td>11명</td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">답변4</th>   <td scope="col">{{ answer4 }}</td>   <td></td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">답변5</th>   <td scope="col">{{ answer5 }}</td>   <td></td>
              </tr>
            </thead>

            <thead>
              <tr>      
                <th scope="col">마감여부</th>   <td scope="col">{{ votingstart }}</td>   <td></td>
              </tr>
            </thead>
            <thead>
              <tr>      
                <th scope="col">인원</th>   <td scope="col">{{ membercount }}</td>   <td> 36명참여</td>
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
              id: this.$route.query.votingidx,
              category : '',
              title : '',
              content : '',
              starttime : '',
              endtime : '',
              answer1 : '',
              answer2 : '',
              answer3 : '',
              answer4 : '',
              answer5 : '',
              membercount : ''
          };
      },
      methods: {
          fetchVoting(){
              this.$axios.get(this.$serverUrl + "/voting/" + this.id, {
                  params: this.requestBody
              }).then(response => {
                  this.category = response.data.category;
                  this.title = response.data.title;
                  this.content = response.data.content;
                  this.starttime = response.data.starttime;
                  this.endtime = response.data.endtime;
                  this.answer1 = response.data.answer1;
                  this.answer2 = response.data.answer2;
                  this.answer3 = response.data.answer3;
                  this.answer4 = response.data.answer4;
                  this.answer5 = response.data.answer5;
                  this.votingwriter = response.data.votingwriter;
                  this.votingstart = response.data.votingstart;
                  this.membercount = response.data.membercount;
              })
                  .catch(error => {
                      console.error(error);
                  });
          },
          fnList(){
              delete this.requestBody.id
              this.$router.push({
                  path: './surveylist',
                  query: this.requestBody
              })
          },
          fnUpdate(){
              this.$router.push({
                  path: './surveyupdate',
                  query: this.requestBody
              })
          },
          fnDelete(){
              if(!confirm("삭제하시겠습니까?")) return

              this.$axios.delete(this.$serverUrl + '/voting/' + this.id, {})
                  .then(() => {
                      alert('삭제되었습니다.')
                      this.fnList();
                  }).catch((err) => {
                  console.log(err);
              })
          },

      },
      mounted() {
          this.fetchVoting();

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
  