<template>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">입주자 대표회의 수정</h1>
          
        </div>
  
        
  
        
        <div class="table-responsive">
          
          <table class="table table-striped table-sm">
            <thead class="boarder-0">
              <tr>
                <th scope style="text-align:left;">제목</th>
                <th scope="col" style="text-align:left;" colspan="3"><input type="text" style="width: 30%"  v-model="meetingtitle" placeholder="제목 입력" /></th>
              </tr>

            </thead>
            <tbody>
              <tr>
                <th scope style="text-align:left;">내용</th>
                <td colspan="4" style="text-align:left;">
                  <textarea  rows="10" style="width: 30%;"  v-model="meetingcontent" placeholder="내용 입력"></textarea>
                </td>
              </tr>
              <tr>
                  <th scope style="text-align:left;">공지 여부</th>
                  <th scope style="text-align:left;"> <select id="category" v-model="meetingopen" style="width: 30%">

                      <option value="Y">Y</option>
                      <option value="N">N</option>

                  </select>
                  </th>
              </tr>
            </tbody>
            <tr>
                <th scope="col" colspan="4" style="text-align:right;">
                    <button class="btn btn-sm btn-outline-secondary" v-on:click="fnList()">목록</button>
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
              meetingidx: this.$route.query.meetingidx,
              meetingtitle : '',
              meetingcontent : '',
              meetingid : '',
              meetingopen : '',
              meetingtime : ''
          }
      },
      methods: {

          fetchMeeting(){
              if(this.meetingidx !== undefined) {
                  this.$axios.get(this.$serverUrl + "/meeting/" + this.meetingidx, {
                      params: this.requestBody
                  }).then(response => {
                      this.meetingtitle = response.data.meetingtitle
                      this.meetingcontent = response.data.meetingcontent
                      this.meetingid = response.data.meetingid
                      this.meetingopen = response.data.meetingopen
                      this.meetingtime = response.data.meetingtime
                  })
                      .catch(error => {
                          console.error(error);
                      })
              }
          },
          fnList(){
              delete this.requestBody.meetingidx
              this.$router.push({
                  path: './meetinglist',
                  query: this.requestBody
              })
          },
          fndetail(meetingidx){
              this.requestBody.meetingidx = meetingidx
              this.$router.push({
                  path: './meetingdetail',
                  query: this.requestBody
              })
          },
          fnSave() {
              const test = JSON.parse(this.$cookie.get('emp'))
              let apiUrl = this.$serverUrl + '/meeting'
              this.form = {
                  "meetingidx": this.meetingidx,
                  "meetingtitle": this.meetingtitle,
                  "meetingcontent": this.meetingcontent,
                  "meetingid": {
                      "emp_idx": test.emp_idx
                  },
                  "meetingopen": this.meetingopen,

              }

              if (this.meetingidx === undefined) {
                  //등록
                  this.$axios.post(apiUrl, this.form)
                      .then((res) => {
                          alert('글이 저장되었습니다.')
                          this.fndetail(res.data.meetingidx)
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
                          this.fndetail(res.data.meetingidx)
                      }).catch((err) => {
                      if (err.message.indexOf('Network Error') > -1) {
                          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                      }
                  })
              }
          },


      },
      mounted() {
          this.fetchMeeting()
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
  