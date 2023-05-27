<template>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">민원 수정</h1>
          
          
        </div>
  
        
  
        
        <div class="table-responsive">
          
          <table class="table table-striped table-sm">

            <thead class="boarder-0">
              <tr>
                <th scope style="text-align:left;">제목</th>
                <th scope="col" style="text-align:left;" colspan="3"><input type="text" style="width: 30%" v-model="mintitle" readonly/></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope style="text-align:left; width: 70%;">내용</th>
                <td colspan="4" style="text-align:left;">
                  <textarea  rows="10" style="width: 70%;"  v-model="mintype" readonly></textarea>
                </td>
              </tr>
            </tbody>

            <tr>
                <th scope="col" colspan="4" style="text-align:right;">
                    <button class="btn btn-sm btn-outline-secondary" v-on:click="fnList()" style="margin-left: 2%;">목록</button>
                    <button  class="btn btn-sm btn-outline-secondary" v-on:click="fnSave()">작성</button>
                </th>
            </tr>

          </table>
        </div>

  </template>
  
  <script>
  export default {
      data() {
          return {
              requestBody: this.$route.query,
              minidx: this.$route.query.minidx,
              memberidx : '',
              mintitle : '',
              mintype : '',
              minstatus : '',
              minres : '',
              minfile : '',
              minrename : '',
              mincategory : '',
          }
      },
      methods: {

          fetchMinone(){
              if(this.minidx !== undefined) {
                  this.$axios.get(this.$serverUrl + "/minone/" + this.minidx, {
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
                      })
              }
          },
          fnList(){
              delete this.requestBody.minidx
              this.$router.push({
                  path: './pagemyminone',      //리스트로 이동
                  query: this.requestBody
              })
          },
          fndetail(minidx){
              this.requestBody.minidx = minidx
              this.$router.push({
                  path: './pagemyminone',
                  query: this.requestBody
              })
          },
          fnSave() {
             // const test = JSON.parse(this.$cookie.get('emp'))
              let apiUrl = this.$serverUrl + '/minone'
              this.form = {
                  "minidx": this.minidx,
                  "memberidx": this.memberidx,
                  "mintitle": this.mintitle,
                  "mintype": this.mintype,
                  "minstatus": this.minstatus,
                  "minres": this.minres,
                  "minfile": this.minfile,
                  "minrename": this.minrename,
                  "mincategoty": this.mincategory
              }

                  //수정
                  this.$axios.patch(apiUrl, this.form)
                      .then((res) => {
                          alert('글이 저장되었습니다.')
                          this.fndetail(res.data.minidx)
                      }).catch((err) => {
                      if (err.message.indexOf('Network Error') > -1) {
                          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                      }
                  })

          },


      },
      mounted() {
          this.fetchMinone()
      },

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

  input[type="submit"], 
  button[type="submit"],
  .botton1,
  .btn
   {
    position: relative;
    font-size: 15px;
    width: 500px; 
    left: 2%; 
    background-color:Bisque; 
    color:black;
    /* margin: 50px; */
    padding: 10px;
    text-decoration-line: none; 
  }

  </style>
  