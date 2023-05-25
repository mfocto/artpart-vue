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
                <button class="btn btn-sm btn-outline-secondary" v-on:click="fnUpdate">수정</button>
                <button class="btn btn-sm btn-outline-secondary" v-on:click="fnDelete">삭제</button>
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
              <td colspan="3"><button type="button" class="btn btn-dark" v-on:click="speech(content)">안내 방송</button></td>
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
          }).then(()=>{
              alert("메세지 전송 완료")
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
          delete this.requestBody.id
          this.$router.push({
              path: './list',
              query: this.requestBody
          })
      },
      fnUpdate(){
          this.$router.push({
              path: './write',
              query: this.requestBody
          })
      },
      fnDelete(){
          if(!confirm("삭제하시겠습니까?")) return

          this.$axios.delete(this.$serverUrl + '/notice/' + this.id, {})
              .then(() => {
                  alert('삭제되었습니다.')
                  this.fnList();
              }).catch((err) => {
                  console.log(err);
          })
      },
      setVoiceList(){
          this.voices = window.speechSynthesis.getVoices();
      },
      speech(txt){
          if(!window.speechSynthesis){
              alert("음성 재생을 지원하지 않는 브라우저입니다. 크롬, 파이어폭스 등의 최신 브라우저를 이용하세요");
              return;
          }
          var lang = "ko-KR";
          var utterThis = new SpeechSynthesisUtterance(txt);
          utterThis.onend = function (event){
              console.log("end", event);
          };
          utterThis.onerror = function (event){
              console.log("error", event);
          };
          var voiceFound = false;
          for(var i = 0; i < this.voices.length; i++){
              if (
                  this.voices[i].lang.indexOf(lang) >= 0 ||
                  this.voices[i].lang.indexOf(lang.replace("-", "_")) >= 0
              ) {
                  utterThis.voice = this.voices[i];
                  voiceFound = true;
              }
          }
          if(!voiceFound){
              alert("voice not found");
              return;
          }
          utterThis.lang = lang;
          utterThis.pitch = 1;
          utterThis.rate = 1;
          window.speechSynthesis.speak(utterThis);
      }
    },
    mounted() {
      this.fetchNotice();
      this.setVoiceList();
      if(window.speechSynthesis.onvoiceschanged !== undefined){
          window.speechSynthesis.onvoiceschanged = this.setVoiceList;
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
