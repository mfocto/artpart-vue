<TimePicker :hour="selectedHour" :minute="selectedMinute" />
<template>
    <div>
    <div  align="left" class="jb-header">
        <h1>직원 관리</h1>
    </div>
        
    </div>
      <br>
      <br>
      <div align="left" class="jb-header" >
        <h2>직원 스케줄 정보&nbsp; </h2>
      </div>

<!--      <div>-->
<!--        <img src = "../../assets/images/차사원.jpeg" />-->
<!--      </div>-->

      <div>
        <table style="width:100%; border : 1px solid #000 ;">
          <tr style="border : 1px solid #000 ;">
            <td> <span>사원이름</span></td>
            <td>
              <span>{{ title }}</span>
            </td>
         </tr>

          <tr style="border : 1px solid #000 ;">
            <td> <span>근무 시작 시간</span></td>
            <td>
              <span>{{ formatDate(start) }}</span>
            </td>
          </tr>

          <tr style="border : 1px solid #000 ;">
            <td> <span>근무 종료 시간</span></td>
            <td>
              <span>{{ formatDate(end) }}</span>
            </td>
          </tr>

          <tr style="border : 1px solid #000 ;">
            <td> <span>지정색</span></td>
            <td>
              <span>{{ background_color }}</span>
            </td>
          </tr>
          <tr style="border : 1px solid #000 ;">
            <td> <span>설명</span></td>
            <td>
              <span>{{ description }}</span>
            </td>
          </tr>
        
      </table>
      </div>
      <div class="button1">
        <button  type="button" class="btn btn-dark" v-on:click="fnUpdate">수정</button>
        <button  type="button" class="btn btn-dark" v-on:click="fnDelete">삭제</button>
        <button style="float: right;" type="button" class="btn btn-dark" v-on:click="fnList">목록</button>

      </div>
</template>
<script>

export default {
  data(){
    return{
      requestBody: this.$route.query,
      id: this.$route.query.event_id,

      title: '',
      description: '',
      start: '',
      end: '',
      background_color: ''

    };
  },
  mounted() {
    this.fnGetEvent()
  },
  methods:{
    fnGetEvent(){
      this.$axios.get(this.$serverUrl +"/schedule/"+this.id,{
        params: this.requestBody
    }).then(response =>{
      this.title = response.data.title;
      this.description = response.data.description;
      this.start = response.data.start;
      this.end = response.data.end;
      this.background_color = response.data.background_color;
      console.log(typeof response.data.title)
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },
    fnList(){
      delete this.requestBody.id
      this.$router.push({
        path: './list',
        query: this.requestBody
      })
    },
    fnDelete(){
      if (!confirm("삭제하겠습니까?")) return

      this.$axios.delete( this.$serverUrl + '/schedule/' +this.id,{})
          .then(() => {
            alert('삭제되었습니다')
            this.fnList();
          }).catch(error => {
        if (error.response) {
          // 오류 응답을 받은 경우
          console.log(error.response.status);
          console.log(error.response.data);
        } else if (error.request) {
          // 요청이 전송되지 않은 경우
          console.log(error.request);
        } else {
          // 오류가 발생한 경우
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
    },
    fnUpdate(){
      this.$router.push({
        path: './write',
        query: this.requestBody
      })
    },
    formatDate: function(datetime){
      let date = new Date(datetime);
      let year = date.getFullYear();
      let month = ('0' + (date.getMonth()+1)).slice(-2); // Months are zero based
      let day = ('0' + date.getDate()).slice(-2);
      return `${year}년${month}월${day}일`;

    }
  }
}

</script>
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
table.table1 {
  border: "4" ;
}
.thead1{
  padding: 20px;
  margin-bottom: 20px;
  border: 4px solid #bcbcbc;
}
tbody.tbody1 {
  padding: 20px;
  margin-bottom: 20px;
  border: 4px solid #bcbcbc;
}

*.jb-header {
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #bcbcbc;

}
jb-header.button2{
  float: right;
}


input #start {
  margin: 0.4rem 0;
}

</style>
    
