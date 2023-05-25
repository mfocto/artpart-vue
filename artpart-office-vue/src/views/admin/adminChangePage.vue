<template>
  <div>
    <div  align="left" class="jb-header">
        <h1>직원 관리</h1>
    </div>
        
  </div>
      <br>
      <br>
      <div align="left" class="jb-header" ><h2>직원 정보 수정</h2> 
      </div>
      <div>
        <img src = "../../assets/images/차사원.jpeg" />
      </div>
      <div>
         <table style="width:100%; border : 1px solid #000 ;">
          <!--<tr style="border : 1px solid #000 ;">
          <td><font size="5">수정 할 파일 </font></td>
          <td>
              <input id="customFile" type="file" @change="handleFileChange"/>
               <label class="custom-file-label" for="customFile">{{file_name}}</label>
          </td> 
        </tr>-->
        
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">사원아이디</font></td>
          <td>
            <font size="5">{{emp_id}}</font>
          </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td> <font size="5">사원구분 </font></td>
          <td>
            <h3 style="margin: 0; padding: 0; vertical-align:middle;">
            <input style="width:20px; height:20px;" type="radio" id="emp_permanent_id" name="정규직" v-model="emp_permanent_id" value="정규직"> &nbsp; 정규직 &nbsp; 
            <input style="width:20px; height:20px " type="radio" id="emp_permanent_id" name="계약직" v-model="emp_permanent_id" value="계약직"> &nbsp; 계약직 &nbsp; 
            <input style="width:20px; height:20px " type="radio" id="emp_permanent_id" name="알바" v-model="emp_permanent_id" value="알바"> &nbsp; 알바
            </h3>
          </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">소속 </font></td>
          <td>
            <select style="width: 250px; height: 30px;" id="emp_department_id" v-model="emp_department_id">
                <option selected>소속을 선택하시오</option>
                <option value="관리직-행정직">관리직-행정직</option>
                <option value="관리직-경비직">관리직-경비직</option>
                <option value="관리직-청소직">관리직-청소직</option>
                <option value="기술직-전기">기술직-전기</option>
                <option value="기술직-설비">기술직-설비</option>
                <option value="기술직-열선">기술직-열선</option>
              </select>

          </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">직위</font></td>
          <td style="margin: 0; padding: 0; vertical-align:middle;">
            <select style="width: 250px; height: 30px;" id="emp_job_id" v-model="emp_job_id">
                <option selected>직급을 선택 하시오</option>
                <option value="반장" >반장</option>
                <option value="소장">소장</option><!--v-if="emp_department_id == '기술직-전기' || emp_department_id == '기술직-설비' || emp_department_id == '기술직-열선'" -->
                <option value="기사" >기사</option>
                <option value="사무원" >사무원</option>
                <option value="관리원" >관리원</option>
                <option value="미화원" >미화원</option>
              </select>
          </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">사원명</font></td>
          <td><input style="width:250px;height:30px;" id="emp_name" type="text"  v-model="emp_name" placeholder="사원 이름을 입력 하시오"></td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">이메일</font></td>
          <td><input style="width:250px;height:30px;" id="emp_email" type="text" v-model="emp_email" placeholder="사원 이메일을 입력 하시오"></td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">주소</font></td>
          <td><input style="width:250px;height:30px;" id="emp_address" type="text" v-model="emp_address" placeholder="사원 주소를 입력 하시오"></td>
        </tr>

        <tr style="border : 1px solid #000 ;">
          <td><font size="5">연락처</font></td>
          <td><input style="width:250px;height:30px;" id="emp_phone" type="tel" v-model="emp_phone" placeholder="사원 전화 번호를 입력 하시오"></td>
        </tr>

        <tr style="border : 1px solid #000 ;">
          <td><font size="5">차량번호</font></td>
          <td><input style="width:250px;height:30px;" type="text" id="emp_car" v-model="emp_car" placeholder="사원 차량 번호를 입력 하시오"></td>
        </tr>

        <tr style="border : 1px solid #000 ;">
          <th><font size="5">입사일</font></th>
          <th><input style="width:250px;height:30px;font-size: 20px;"  type="date" v-model="emp_hire_date" id="emp_hire_date" min="2018-01-01" max="2050-12-31"></th>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <th><font size="5">퇴사일</font></th>
          <th><input style="width:250px;height:30px;font-size: 20px;"  type="date" v-model="emp_departure_date" id="emp_departure_date" min="2018-01-01" max="2050-12-31"></th>
        </tr>

        <tr style="border : 1px solid #000 ;">
          <td><font size="5">비고</font></td>
          <td>
            <input style="width:250px;height:30px;" type="text" v-model="emp_memo" id="emp_memo" placeholder="특이 사항이 있으면 적어 주세요*^^*">
          </td>
        </tr>
        
        </table>
      </div>
      <br>
      <br>
      <div class="button1">
            <button style="float: center;" class="btn btn-dark" v-on:click="fnSave">등록</button>  &nbsp;
            <button style="float: right;" type="button" class="btn btn-dark" v-on:click="fnList">목록</button>
      </div>
  
        
</template>


<script>
export default{

  data(){
    return {
      requestBody: this.$route.query,
      id: this.$route.query.emp_idx,

      emp_id: '',
      emp_permanent_id: '',
      emp_department_id:'',
      emp_job_id:'',
      emp_name:'',
      emp_email: '',
      emp_address:'',
      emp_phone:'',
      emp_car:'',
      emp_hire_date:'',
      emp_departure_date:'',
      emp_img:'',
      emp_img_up:'',
      emp_memo:''
    }
  },
  mounted(){
    this.fnGetEmp()
  },
  methods:{
    fnGetEmp(){ 
      if(this.id !== undefined){
          this.$axios.get(this.$serverUrl + '/admin/' + this.id, {
            params: this.requestBody
          }).then((res) => {
            this.emp_id = res.data.emp_id
            this.emp_permanent_id = res.data.emp_permanent_id
            this.emp_department_id = res.data.emp_department_id
            this.emp_job_id = res.data.emp_job_id
            this.emp_name = res.data.emp_name
            this.emp_address = res.data.emp_address
            this.emp_email = res.data.emp_email
            this.emp_phone = res.data.emp_phone
            this.emp_car = res.data.emp_car
            this.emp_hire_date = res.data.emp_hire_date
            this.emp_departure_date = res.data.emp_departure_date
            this.emp_img = res.data.emp_img
            this.emp_img_up = res.data.emp_img_up
            this.emp_memo = res.data.emp_memo
          }).catch((err) => {
            console.log(err)
          })
        }
    },
    fnList(){
      delete this.requestBody.id
        this.$router.push({
          path: './list',
          query: this.requestBody
        })
    },
    fnEmp(id){
      this.requestBody.id = id
      this.$router.push({
        path: './detail',
        query: this.requestBody
      })


    },
    fnSave(){
      let apiUrl = this.$serverUrl + '/admin'
      this.form = {
      "emp_id": this.emp_id,
      "emp_permanent_id": this.emp_permanent_id,
      "emp_department_id": this.emp_department_id,
      "emp_job_id": this.emp_job_id,
      "emp_name": this.emp_name,
      "emp_address": this.emp_address,
      "emp_email": this.emp_email,
      "emp_phone": this.emp_phone,
      "emp_car": this.emp_car,
      "emp_hire_date": this.emp_hire_date,
      "emp_departure_date": this.emp_departure_date,
      "emp_img": this.emp_img,
      "emp_img_up":this.emp_img_up,
      "emp_memo": this.emp_memo
      }
      this.$axios.patch(apiUrl, this.form).then((res) => {alert('직원정보가 수정 되었습니다.')
        this.fnEmp(res.data.id)}
      ).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
                        alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
      }
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
