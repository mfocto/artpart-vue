<template>
  <div>
    <div  align="left" class="jb-header">
      <h1>직원 스케줄 관리</h1>
    </div>

  </div>
  <br>
  <br>
  <div align="left" class="jb-header" ><h2>스케줄 등록</h2>
  </div>

  <div>
    <table style="width:100%; border : 1px solid #000 ;">
      <tr style="border : 1px solid #000 ;">
        <td><font size="5">사원이름을 입력하시오</font></td>
        <td>
          <input style="width:250px;height:30px;" id="title" type="text"  v-model="title" placeholder="사원 이름을 입력하시오">
        </td>
      </tr>
      <tr style="border : 1px solid #000 ;">
        <td><font size="5">근무 시작 날짜</font></td>
        <td>
          <input style="width:250px;height:30px;" id="start" type="datetime-local"  v-model="start" >
        </td>
      </tr>
      <tr style="border : 1px solid #000 ;">
        <td><font size="5">근무 종료 날짜</font></td>
        <td>
          <input style="width:250px;height:30px;" id="end" type="datetime-local"  v-model="end" >
        </td>
      </tr>
      <tr style="border : 1px solid #000 ;">
        <td><font size="5">지정 색</font></td>
        <td>
          <input style="width:250px;height:30px;" id="background_color" type="color"  v-model="background_color" >
        </td>
      </tr>
      <tr style="border : 1px solid #000 ;">
        <td><font size="5">설명</font></td>
        <td>
          <input style="width:250px;height:30px;" id="description" type="text"  v-model="description" placeholder="설명을 작성하세요">
        </td>
      </tr>


    </table>
  </div>
  <br>
  <br>
  <div class="button1">
    <button  class="btn btn-dark" v-on:click="fnSave">등록</button>  &nbsp;
    <button style="float: right;" type="button" class="btn btn-dark" v-on:click="fnList">목록</button>
  </div>



</template>

<script>
export default {
  data() {
    return {
      requestBody: this.$route.query,

      event_id: this.$route.query.event_id,
      title:'',
      description:'',
      background_color:'',
      start:'',
      end:''

    }
  },
  mounted() {
    this.fnGetView()
  },
  methods:{
    fnGetView(){
      if (this.event_id !== undefined) {
        this.$axios.get(this.$serverUrl + '/schedule/' + this.event_id, {
          params: this.requestBody
        }).then((res) => {
          this.title = res.data.title
          this.description = res.data.description
          this.background_color = res.data.background_color
          this.start = res.data.start
          this.end = res.data.end
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    fnList(){
      delete this.requestBody.event_id
      this.$router.push({
        path: './list',
        query: this.requestBody
      })
    },
    fnView(event_id){
      this.requestBody.event_id = event_id
      this.$router.push({
        path: './detail',
        query: this.requestBody
      })

    },
    fnSave(){
      let apiUrl = this.$serverUrl+'/schedule'
      this.form = {
        "event_id" : this.event_id,
        "title" : this.title,
        "description" : this.description,
        "background_color" : this.background_color,
        "start" : this.start,
        "end" : this.end

      }
      if(this.event_id === undefined){
        this.$axios.post(apiUrl, this.form)
            .then((res) =>{
              alert('직원 스케줄 등록이 완료 되었습니다!')
              this.fnView(res.data.event_id)
            }).eatch((err) =>{
          if (err.message.indexOf('Networt Erro')>-1){
            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해 주세요')
          }
        })
      } else {
        this.$axios.patch(apiUrl, this.form)
            .then((res) => {
              alert('직원 스케줄이 수정 되었습니다.')
              this.fnView(res.data.event_id)
            }).catch((err) => {
          if (err.message.indexOf('Network Error') > -1) {
            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
          }
        })
      }
    },
    formatDate: function(datetime){
      let date = new Date(datetime);
      let year = date.getFullYear();
      let month = ('0' + (date.getMonth()+1)).slice(-2); // Months are zero based
      let day = ('0' + date.getDate()).slice(-2);
      return `${year}년${month}월${day}일`;

    }


  }}
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
