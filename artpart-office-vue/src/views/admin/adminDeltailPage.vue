<template>
  <div>
    <div  align="left" class="jb-header">
        <h1>직원 관리</h1>
    </div>
        
  </div>
      <br>
      <br>
      <div align="left" class="jb-header" ><h2>직원 상세 정보</h2> 
      </div>
      <div>
        <img src = "../../assets/images/차사원.jpeg" /><!--db에 이미지 파일로 변경해야 함-->
      </div>
      <div>
        <table style="width:100%; border : 1px solid #000 ;">
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">사원아이디</font></td>
          <td>
            <font size="5">{{emp_id}}</font>
          </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td> <font size="5">사원구분 </font></td>
          <td>
          <font size="5"> {{emp_permanent_id}} </font>
          </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">소속 </font></td>
          <td>
              <font size="5"> {{emp_department_id}} </font>

          </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">직급</font></td>
          <td style="margin: 0; padding: 0; vertical-align:middle;">
              <font size="5"> {{emp_job_id}} </font>
          </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">사원명</font></td>
          <td>
            <font size="5">{{emp_name}}</font>
          </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">주소</font></td>
          <td>
            <font size="5">{{emp_address}}</font>
          </td>
        </tr>

        <tr style="border : 1px solid #000 ;">
          <td><font size="5">연락처</font></td>
          <td>
            <font size="5">{{emp_phone}}</font>
          </td>
        </tr>

        <tr style="border : 1px solid #000 ;">
          <td><font size="5">차량번호</font></td>
          <td>
            <font size="5">{{emp_car}}</font>
          </td>
        </tr>

        <tr style="border : 1px solid #000 ;">
          <th><font size="5">입사일</font></th>
          <th>
            <font size="5">{{formatDate(emp_hire_date)}}</font>
          </th>
        </tr>

        <tr style="border : 1px solid #000 ;">
          <th><font size="5">퇴사일</font></th>
          <th>
            <font size="5">{{formatDate(emp_departure_date)}}</font>
          </th>
        </tr>

        <tr style="border : 1px solid #000 ;">
          <td><font size="5">비고</font></td>
          <td>
            <font size="5">{{emp_memo}}</font>
          </td>
        </tr>
        
        </table>
      </div>
      <br>
      <br>
      <div class="button1">
            <button style="float: center;" type="button" class="btn btn-dark" v-on:click="fnUpdateEmp">수정</button>  &nbsp; <!--/admin/change"-->
            <button style="float: center;" type="button" class="btn btn-dark" v-on:click="fnUpdateEmpDepartureDate">직원퇴사</button>  &nbsp; <!--/admin/departureDate-->
            <button style="float: right;" type="button" class="btn btn-dark" v-on:click="fnList">목록</button><!--/admin/list-->
      </div>
  
        
</template>


<script>
export default {
  data(){
    return{
      requestBody: this.$route.query,
      id: this.$route.query.emp_idx,

      emp_id: '',
      emp_permanent_id: '',
      emp_department_id:'',
      emp_job_id:'',
      emp_name:'',
      emp_email:'',
      emp_address:'',
      emp_phone:'',
      emp_car:'',
      emp_hire_date:'',
      emp_departure_date:'',
      emp_img:'',
      emp_img_up:'',
      emp_memo:''
    };
  },
  mounted(){
    this.fnGetEmp()
  },
  methods: {
    fnGetEmp(){
      this.$axios.get(this.$serverUrl + "/admin/" + this.id, {
              params: this.requestBody
      }).then(res => {
        this.emp_id = res.data.emp_id
        this.emp_permanent_id = res.data.emp_permanent_id
        this.emp_department_id = res.data.emp_department_id
        this.emp_job_id = res.data.emp_job_id
        this.emp_name = res.data.emp_name
        this.emp_address = res.data.emp_address
        this.emp_phone = res.data.emp_phone
        this.emp_car = res.data.emp_car
        this.emp_hire_date = res.data.emp_hire_date
        this.emp_departure_date = res.data.emp_departure_date
        this.emp_img = res.data.emp_img
        this.emp_img_up = res.data.emp_img_up
        this.emp_memo = res.data.emp_memo
        this.emp_email = res.data.emp_email
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
    fnUpdateEmp(){
      this.$router.push({
        path: './change',
        query: this.requestBody
      })
    },
    fnUpdateEmpDepartureDate(){
      this.$router.push({
        path: './fnUpdateEmpDepartureDate',
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
