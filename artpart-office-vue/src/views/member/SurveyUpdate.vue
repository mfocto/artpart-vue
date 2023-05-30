<template>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">입주민</h1>
          
        </div>
  
        
  
        
        <div class="table-responsive">
          
          <table class="table table-striped table-sm">
            <thead class="boarder-0">
              <tr>
                <th scope style="text-align:left;">등록제목</th>
                <th scope="col" style="text-align:left;" colspan="3"><input type="text" style="width: 30%" v-model="title" placeholder="제목 입력" /></th>
              </tr>
              <tr>
                  <th scope style="text-align:left;">카테고리</th>
                  <th scope="col" style="text-align:left;" colspan="3"><input type="text" style="width: 30%" v-model="category" placeholder="카테고리 입력" /></th>
              </tr>
              <tr>
                <th scope style="text-align:left;">등록날짜</th>
                <th scope="col" style="text-align:left;" colspan="3"><input type="date" style="width: 30%" v-model="starttime"  ></th>
              </tr>
              <tr>
                <th scope style="text-align:left;">마감날짜</th>
                <th scope="col" style="text-align:left;" colspan="3"><input type="date" style="width: 30%" v-model="endtime"  ></th>
              </tr>
              
              <tr>
                <th scope style="text-align: left; vertical-align: top;" >내용</th>
                <td colspan="4" style="text-align:left;"  >
                     <textarea  rows="10" style="width: 30%;" v-model="content" placeholder="내용 입력"></textarea>
                </td>
              </tr>
          
          
              <tr>
                <th scope style="text-align:left;">답변1</th>
                <th scope="col" style="text-align:left;" colspan="3"><input type="text" style="width: 30%" v-model="answer1" placeholder="답변1 입력(필수)" required ></th>
              </tr>
              <tr>
                <th scope style="text-align:left;">답변2</th>
                <th scope="col" style="text-align:left;" colspan="3"><input type="text" style="width: 30%" v-model="answer2" placeholder="답변2 입력(필수)" required ></th>
              </tr>
              <tr>
                <th scope style="text-align:left;">답변3</th>
                <th scope="col" style="text-align:left;" colspan="3"><input type="text" style="width: 30%" v-model="answer3" placeholder="답변3 입력" ></th>
              </tr>
              <tr>
                <th scope style="text-align:left;">답변4</th>
                <th scope="col" style="text-align:left;" colspan="3"><input type="text" style="width: 30%" v-model="answer4" placeholder="답변4 입력" ></th>
              </tr>
              <tr>
                <th scope style="text-align:left;">답변5</th>
                <th scope="col" style="text-align:left;" colspan="3"><input type="text" style="width: 30%" v-model="answer5" placeholder="답변5 입력" ></th>
              </tr>
             
              <tr>
                <th scope style="text-align:left;">마감</th>
                <th scope="col" style="text-align:left;" colspan="3">
                    <select id="category" v-model="votingstart" style="width: 30%">

                        <option value="Y">Y</option>
                        <option value="N">N</option>

                    </select>
                </th>
              </tr>
             
              <tr>
                <th scope="col" colspan="4" style="text-align:right;">
                    <button class="btn btn-sm btn-outline-secondary" v-on:click="fnList()">목록</button>
                    <button  class="btn btn-sm btn-outline-secondary" v-on:click="fnSave()">작성</button>
                </th>
              </tr>
            </thead>
           
          </table>
        </div>
  </template>
  
  <script>
  export default {
      data() {
          return {
              requestBody: this.$route.query,
              votingidx: this.$route.query.votingidx,
              title : '',
              content : '',
              category: '',
              starttime: '',
              endtime: '',
              answer1: '',
              answer2: '',
              answer3: '',
              answer4: '',
              answer5: '',
              votingwriter: '',
              votingstart: ''
          }
      },
      methods: {

          fetchVoting(){
              if(this.votingidx !== undefined) {
                  this.$axios.get(this.$serverUrl + "/voting/" + this.votingidx, {
                      params: this.requestBody
                  }).then(response => {
                      this.category = response.data.category
                      this.content = response.data.content
                      this.title = response.data.title
                      this.starttime = response.data.starttime
                      this.endtime = response.data.endtime
                      this.answer1 = response.data.answer1
                      this.answer2 = response.data.answer2
                      this.answer3 = response.data.answer3
                      this.answer4 = response.data.answer4
                      this.answer5 = response.data.answer5
                      this.votingwriter = response.data.votingwriter
                      this.votingstart = response.data.votingstart
                  })
                      .catch(error => {
                          console.error(error);
                      })
              }
          },
          fnList(){
              delete this.requestBody.votingidx
              this.$router.push({
                  path: './surveylist',
                  query: this.requestBody
              })
          },
          fndetail(votingidx){
              this.requestBody.votingidx = votingidx
              this.$router.push({
                  path: './surveydetail',
                  query: this.requestBody
              })
          },
          fnSave() {
              const test = JSON.parse(this.$cookie.get('emp'))
              let apiUrl = this.$serverUrl + '/voting'
              this.form = {
                  "votingidx": this.votingidx,
                  "title": this.title,
                  "category": this.category,
                  "content": this.content,
                  "starttime": this.starttime,
                  "endtime": this.endtime,
                  "answer1": this.answer1,
                  "answer2": this.answer2,
                  "answer3": this.answer3,
                  "answer4": this.answer4,
                  "answer5": this.answer5,
                  "votingwriter": test.emp_name,
                  "votingstart": this.votingstart
              }

              if (this.votingidx === undefined) {
                  //등록
                  this.$axios.post(apiUrl, this.form)
                      .then((res) => {
                          alert('글이 저장되었습니다.')
                          this.fndetail(res.data.votingidx)
                      }).catch((err) => {
                      if (err.message.indexOf('Network Error') > -1) {
                          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                      }
                  })
              } else {
                  //수정
                  this.$axios.patch(apiUrl, this.form)
                      .then((res) => {
                          alert('글이 저장되었습니다.')
                          this.fndetail(res.data.votingidx)
                      }).catch((err) => {
                      if (err.message.indexOf('Network Error') > -1) {
                          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                      }
                  })
              }
          },


      },
      mounted() {
          this.fetchVoting()
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
  </style>
  