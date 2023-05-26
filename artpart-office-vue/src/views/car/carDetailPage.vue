<template>
  <div>
    <div  align="left" class="jb-header">
        <h1>차량 관리</h1>
    </div>
        
  </div>
      <br>
      <br>
      <div align="left" class="jb-header" ><h2>차량 상세 조회</h2> 
      </div>

  <div>
    <table style="width:100%; border : 1px solid #000 ;">
      <tr style="border : 1px solid #000 ;">
        <td> <font size="5">동호수 or 직원번호 </font></td>
        <td>
          <span v-if="member_carid.memberdong === '직원'"> {{emp_carid}} </span>
          <span v-else-if="emp_carid.emp_name === '입주민'">{{member_carid}}</span>
          <span v-else>왜 이따구로 출력돼??</span>

        </td>
      </tr>
      <tr style="border : 1px solid #000 ;">
        <td>차량 전화 번호 </td>
        <td>{{ car_phone }}
        </td>
      </tr>
      <tr style="border : 1px solid #000 ;">
        <td>차량구분</td>
        <td>{{ car_division_id }}</td>
      </tr>
      <tr style="border : 1px solid #000 ;">
        <td>차량번호</td>
        <td>{{ car_number }}</td>
      </tr>
      <tr style="border : 1px solid #000 ;">
        <td>차종</td>
        <td>{{ car_type }}</td>
      </tr>
      <tr style="border : 1px solid #000 ;">
        <td>비고</td>
        <td>{{ car_note }}</td>
      </tr>
      <tr style="border : 1px solid #000 ;">
        <th>등록일시</th>
        <th>{{ car_enrolldate }}</th>
      </tr>
      <tr style="border : 1px solid #000 ;">
        <th>방문시간</th>
        <th>{{ car_startdate }} ~ {{ car_enddate }}</th>
      </tr>
    </table>
  </div>
  <br>
  <br>
  <div class="button1">
    <button type="button" class="btn btn-dark" v-on:click="fnUpdate">수정</button>  &nbsp;
    <button type="button" class="btn btn-dark" v-on:click="fnDelete">삭제</button>
    <button style="float: right;" type="button" class="btn btn-dark" v-on:click="fnList">목록</button>
  </div>
  
        
</template>
<script>
export default {
  data(){
    return{
      requestBody: this.$route.query,
      id:this.$route.query.car_idx,

      member_carid:'',
      emp_carid:'',
      car_phone:'',
      car_division_id:'',
      car_number:'',
      car_type:'',
      car_note:'',
      car_enrolldate:'',
      car_startdate:'',
      car_enddate:''
    };

  },
  mounthed(){
    this.fnGetCar();
  },
  methods:{
    fnGetCar(){
      this.$axios.get(this.$serverUrl +"/car/"+this.id,{
        params: this.requestBody
      }).then(response => {
        this.car_phone = response.data.car_phone;
        this.car_division_id = response.data.car_division_id;
        this.car_number = response.data.car_number;
        this.car_type = response.data.car_type;
        this.car_note = response.data.car_note;
        this.car_enrolldate = response.data.car_enrolldate;
        this.car_startdate = response.data.car_startdate;
        this.car_enddate = response.data.car_enddate;
        this.member_carid = response.data.member_carid.memberdong + " - " +response.data.member_carid.memberho;
        this.emp_carid = response.data.emp_carid.emp_name;
      }).catch(err => {
        console.error(err);
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
      if(this.member_carid === 1){
      this.$router.push({
        path: './adminwrite',
        query: this.requestBody})
      }else if(this.emp_carid === 1){
        this.$router.push({
          path: './memberwrite',
          query: this.requestBody})
      }else{
        this.$router.push({
          path: './write',
          query: this.requestBody})
      }
    },
    fnDelete(){
      if(!confirm("삭제하시겠습니까?")) return

      this.$axios.delete(this.$serverUrl + '/car/' + this.id, {})
          .then(() => {
            alert('삭제되었습니다.')
            this.fnList();
          }).catch((err) => {
        console.log(err);
      })
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
