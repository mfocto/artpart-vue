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
            <font size="5">{{member_carid}}</font>
            <font size="5">{{emp_carid}}</font>
            <font size="5">혹쉬 되나??{{carid}}</font>
          </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">차량 전화 번호 </font></td>
          <td>
            <font size="5">{{ car_phone }}</font>
          </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">차량구분</font></td>
          <td>
            <font size="5">{{ car_division_id }}</font>
          </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">차량번호</font></td>
          <td>
            <font size="5">{{ car_number }}</font>
          </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">차종</font></td>
          <td>
            <font size="5">{{ car_type }}</font>
          </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">비고</font></td>
          <td><font size="5">{{ car_note }}</font></td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <th><font size="5">등록일시</font></th>
          <th>
            <font size="5">{{ car_enrolldate }}</font>
          </th>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <th><font size="5">방문시간</font></th>
          <th>
            <font size="5">{{ car_startdate }} ~ {{ car_enddate }}</font>
            <font size="5">혹쉬이것두??{{ cardate }}</font>
          </th>
        </tr>
        </table>
      </div>
      <br>
      <br>
      <div class="button1">
            <button style="float: center;" type="button" class="btn btn-dark" v-on:click="fnUpdate">수정</button>  &nbsp; 
            <button style="float: center;" type="button" class="btn btn-dark" v-on:click="fnDelete">삭제</button> 
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
      carid:'',
      car_phone:'',
      car_division_id:'',
      car_number:'',
      car_type:'',
      car_note:'',
      car_enrolldate:'',
      car_startdate:'',
      car_enddate:'',
      cardate:''
    };

  },
  mounthed(){
    this.fnGetCar();
  },
  methods:{
    fnGetCar(){
      this.$axios.get(this.$serverUrl+"/car/"+this.id,{
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
        this.member_carid = response.data.member_carid.memberdong + " - " +response.data.carid.member_carid.memberho;
        this.emp_carid = response.data.emp_carid.emp_name;
        this.cardate = response.data.car_startdate + " ~ " + response.data.car_enddate;

        if(response.data.member_carid !== 'null'){
          this.carid = response.data.carid.member_carid.memberdong +'-'+response.data.carid.member_carid.memberho
        }else if(response.data.member_carid === 'null'){
          this.carid = response.data.carid.emp_carid.emp_name
        }else{
          this.carid = response.data.carid
        }
      }).catch(err => {
        console.error(err);
      });
    },
    fnList(){
      delete this.requestBody.id
      this.$route.push({
        path:'./list',
        quer:this.requestBody
      })
    },
    fnUpdate(){
      this.$router.push({
        path:'./write',
        query: this.requestBody
      })
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
