<template>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">입주민</h1>
          
        </div>
  
        
  
        
        <div class="table-responsive">
          
          <table class="table table-striped table-sm">
            <thead class="boarder-0">
              <tr>
                <th scope style="text-align:left;">동</th>
                <th scope="col" style="text-align:left;" colspan="3"><input type="text" style="width: 30%" v-model="memberdong" placeholder="동 입력" /></th>
              </tr>
              <tr>
                <th scope style="text-align:left;">호수</th>
                <th scope="col" style="text-align:left;" colspan="3"><input type="text" style="width: 30%" v-model="memberho" placeholder="호수 입력" ></th>
              </tr>
              <tr>
                <th scope style="text-align:left;">핸드폰번호</th>
                <th scope="col" style="text-align:left;" colspan="3"><input type="text" style="width: 30%" v-model="memberphone" placeholder="번호 입력" ></th>
              </tr>
              <tr>
                  <th scope style="text-align:left;">아이디</th>
                  <th scope="col" style="text-align:left;" colspan="3"><input type="text"  style="width: 30%" v-model="memberid" placeholder="아이디 입력" ></th>
              </tr>

              <tr>
                <th scope style="text-align:left;">비밀번호</th>
                <th scope="col" style="text-align:left;" colspan="3"><input type="passowrd" :readonly="isReadonly" style="width: 30%" v-model="memberpassword" placeholder="비밀번호 입력" ></th>
              </tr>

          
              <tr>
                <th scope style="text-align:left;">이름</th>
                <th scope="col" style="text-align:left;" colspan="3"><input type="text" style="width: 30%" v-model="membername" placeholder="이름 입력" ></th>
              </tr>
              <tr>
                <th scope style="text-align:left;">등록차량 1</th>
                <th scope="col" style="text-align:left;" colspan="3"><input type="text" style="width: 30%" v-model="membermycar1" placeholder="등록차량1 입력" ></th>
              </tr>
              <tr>
                <th scope style="text-align:left;">등록차량 2</th>
                <th scope="col" style="text-align:left;" colspan="3"><input type="text" style="width: 30%" v-model="membermycar2" placeholder="등록차량2 입력" ></th>
              </tr>
              <tr>
                <th scope style="text-align:left;">로그인 제한 여부</th>
                 <th scope style="text-align:left;"> <select id="category" v-model="memberloginok" style="width: 30%">

                      <option value="Y">Y</option>
                      <option value="N">N</option>

                  </select>
                 </th>
              </tr>





              <tr>
                <th scope="col" colspan="4" style="text-align:right;">
                    <button type="button" class="btn btn-sm btn-outline-secondary" @click="toggleReadonly">비밀번호 수정하기</button>
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
      isReadonly: true,
      selectedOption: 'selected' ,
        requestBody: this.$route.query,
        memberidx: this.$route.query.memberidx,
        memberdong : this.$route.query.memberdong,
        memberho : this.$route.query.memberho,
        memberid : this.$route.query.memberid,
        memberloginok : this.$route.query.memberloginok,
        membermycar1 : this.$route.query.membermycar1,
        membermycar2 : this.$route.query.membermycar2,
        membername : this.$route.query.membername,
        memberpassword : this.$route.query.memberpassword,
        memberphone : this.$route.query.memberphone,
        aptidx: this.$route.query.aptidx,
    }
  },
  methods: {
    toggleReadonly() {
      this.isReadonly = !this.isReadonly;
    },
      fetchMember(){
          if (this.memberidx !== undefined) {
              this.$axios.get(this.$serverUrl + "/member/" + this.memberidx, {
                  params: this.requestBody
              }).then((res) => {
                  this.memberdong = res.data.memberdong;
                  this.memberho = res.data.memberho;
                  this.memberid = res.data.memberid;
                  this.memberloginok = res.data.memberloginok;
                  this.membermycar1 = res.data.membermycar1;
                  this.membermycar2 = res.data.membermycar2;
                  this.membername = res.data.membername;
                  this.memberpassword = res.data.memberpassword;
                  this.memberphone = res.data.memberphone;
                  this.aptidx = res.data.aptidx;
              })
                  .catch((err) => {
                      console.log(err);
                  })
          }
      },
      fnList() {
          delete this.requestBody.memberidx
          this.$router.push({
              path: './memberlist',
              query: this.requestBody
          })
      },
      fndetail(memberidx){
          this.requestBody.memberidx = memberidx
          this.$router.push({
              path: './memberdetail',
              query: this.requestBody
          })
      },
      fnSave() {
          let apiUrl = this.$serverUrl + '/member'
          this.form = {
              "memberidx": this.memberidx,
              "memberdong": this.memberdong,
              "memberho": this.memberho,
              "memberid": this.memberid,
              "memberloginok": this.memberloginok,
              "membermycar1": this.membermycar1,
              "membermycar2": this.membermycar2,
              "membername": this.membername,
              "memberpassword": this.memberpassword,
              "memberphone": this.memberphone,
              "aptidx": {
                  "apt_idx":1
              }
          }

          if (this.memberidx === undefined) {
              //등록
              this.$axios.post(apiUrl, this.form)
                  .then((res) => {
                      alert('글이 저장되었습니다.')
                      this.fndetail(res.data.memberidx)
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
                      this.fndetail(res.data.memberidx)
                  }).catch((err) => {
                  if (err.message.indexOf('Network Error') > -1) {
                      alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                  }
              })
          }
      },


  },
      mounted() {
          this.fetchMember()
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
  