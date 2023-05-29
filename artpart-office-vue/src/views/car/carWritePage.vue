<template>
  <div>
    <div  align="left" class="jb-header">
      <h1>차량 관리</h1>
    </div>

  </div>
  <br>
  <br>
  <div left class="jb-header" ><h2>차량 등록</h2>
  </div>

  <div>
    <table style="width:100%; border : 1px solid #000 ;">
      <tr style="border : 1px solid #000 ;">
        <td>차량구분</td>
        <td style="margin: 0; padding: 0; vertical-align:middle;">
          <h1 style="margin: 0; padding: 0; vertical-align:middle;">
            <input style="width:40px; height:60px;" type="radio" name="입주민" value="입주민" v-model="car_division_id"> &nbsp; 입주민 &nbsp;
            <input style="width:40px; height:60px " type="radio" name="직원" value="직원" v-model="car_division_id"> &nbsp; 직원 &nbsp;
            <input style="width:40px; height:60px;" type="radio" name="방문객" value="방문객" v-model="car_division_id"> &nbsp; 방문객 &nbsp;
            <input style="width:40px; height:60px " type="radio" name="출입체한" value="출입제한" v-model="car_division_id"> &nbsp; 출입제한
          </h1>
        </td>
      </tr>
      <tr style="border : 1px solid #000 ;" v-if="car_division_id === '입주민'">
        <td>입주민차량</td>
        <span><td v-for="member in members" :key="member.memberidx">
            <input type="radio" :value="member.memberidx" id="member_carid" v-model="member_carid" >
            {{ member.memberidx || ' '}} || {{ member.memberdong || ' '}} || {{ member.memberho || ' '}} || {{ member.membername || ' '}}||{{member.memberloginok || ' '}} <br>
            </td></span>
      </tr>
      <tr style="border : 1px solid #000 ;" v-else-if="car_division_id === '방문객'">
        <td>방문차량</td>
        <td v-for="member in members" :key="member.memberidx">
          <input type="radio" :value="member.memberidx" id="member_carid" v-model="member_carid" >
          {{ member.memberidx || ' '}} || {{ member.memberdong || ' '}} || {{ member.memberho || ' '}} || {{ member.membername || ' '}}||{{member.memberloginok || ' '}}<br>
        </td>
        <input style="width:250px;height:30px;font-size: 20px;"  type="date" v-model="car_startdate" id="car_startdate" min="2018-01-01" max="2050-12-31"> &nbsp; ~ &nbsp;
        <input style="width:250px;height:30px;font-size: 20px;"  type="date" v-model="car_enddate" id="car_enddate" min="2018-01-01" max="2050-12-31">

      </tr>
      <tr style="border : 1px solid #000 ;" v-else-if="car_division_id === '직원'">
        <td>직원차량</td>
        <td v-for="(emp,emp_idx) in emps" :key="emp_idx">
          <input type="radio" :value="emp.emp_idx" id="emp_carid" v-model="emp_carid" >
          <span>{{emp.emp_idx || ' '}} &nbsp; {{emp.emp_id || ' '}} &nbsp; {{emp.emp_name || ' '}}</span>
          <span>{{emp.emp_permanent_id || ' '}} &nbsp; {{emp.emp_department_id || ' '}} &nbsp; {{emp.emp_job_id || ' '}} &nbsp; {{emp.emp_auth || ' '}}</span>
        </td>
      </tr>
      <tr style="border : 1px solid #000 ;" v-else-if="car_division_id === '출입제한'">
        <td>출입제한차량<br>
          ***입주민이 아닌 경우 작성하지 않아도 됩니다 **
        </td>
        <td v-for="member in members" :key="member.memberidx">
              <span>
              <input type="radio" :value="member.memberidx" id="member_carid" v-model="member_carid" >
              {{ member.memberidx || ' '}} || {{ member.memberdong || ' '}} || {{ member.memberho || ' '}} || {{ member.membername || ' '}}||{{member.memberloginok || ' '}}<br>
              </span></td>
      </tr>
      <tr style="border : 1px solid #000 ;" v-else>
        <td>기타</td>
        <td>
          동 : &nbsp; <input style="width:500px;height:50px;" type="text" v-model="memberdong" placeholder="동을 입력 하시오"> &nbsp;<br>
          호수 : &nbsp; <input style="width:500px;height:50px;" type="text" v-model="memberho" placeholder="호수를 입력 하시오"> &nbsp;
        </td>
      </tr>

      <tr style="border : 1px solid #000 ;">
        <td><font size="5">차량번호</font></td>
        <td><input style="width:500px;height:50px;" type="text" v-model="car_number" placeholder="차량 번호를 입력 하시오"></td>
      </tr>
      <tr style="border : 1px solid #000 ;">
        <td>차량 주인 전화 번호 </td>
        <td><input style="width:500px;height:50px;" type="text" v-model="car_phone" placeholder="차량주인 전화번호를 입력하시오"></td>
      </tr>
      <tr style="border : 1px solid #000 ;">
        <td><font size="5">차종</font></td>
        <td><input style="width:500px;height:50px;" type="text" v-model="car_type" placeholder="차량 종류를 입력하시오"></td>
      </tr>
      <tr style="border : 1px solid #000 ;">
        <td><font size="5">비고</font></td>
        <td><input style="width:500px;height:50px;" type="text" v-model="car_note" placeholder="기타 사항이 있다면 입력히시오"></td>
      </tr>
      <!--        <tr style="border : 1px solid #000 ;">-->
      <!--          <th><font size="5">방문시간</font></th>-->
      <!--          <th>-->
      <!--            <input style="width:250px;height:30px;font-size: 20px;"  type="date" v-model="car_startdate" id="car_startdate" min="2018-01-01" max="2050-12-31"> &nbsp; ~ &nbsp; -->
      <!--            <input style="width:250px;height:30px;font-size: 20px;"  type="date" v-model="car_enddate" id="car_enddate" min="2018-01-01" max="2050-12-31">-->
      <!--          </th>-->
      <!--        </tr>-->
    </table>
  </div>
  <br>
  <br>
  <div class="button1">
    <button type="button" class="btn btn-dark" v-on:click="fnSave">등록</button>
    <button style="float: right;"  type="button" class="btn btn-dark" v-on:click="fnList">목록</button>
  </div>


</template>

<script>
export default {
  data(){
    return {
      members:[],
      emps:[],
      requestBody: this.$route.query,
      car_idx: this.$route.query.car_idx,

      car_division_id: '',
      car_number: '',
      member_carid:'',
      emp_carid: '',

      car_phone: '',
      car_enrolldate: '',
      car_type: '',
      car_note: ''

    }
  },
  mounted(){
    this.fnGetCar()
    this.fnGetMember()
    this.fnGetEmp()
  },
  methods: {

    fnGetCar() {
      if (this.car_idx !== undefined) {
        this.$axios.get(this.$serverUrl + '/car/' + this.car_idx, {
          params: this.requestBody
        }).then((res) => {
          this.car_division_id = res.data.car_division_id
          this.car_number = res.data.car_number
          this.member_carid = res.data.member_carid
          this.emp_carid = res.data.emp_carid
          this.car_phone = res.data.car_phone
          this.car_enrolldate = res.data.car_enrolldate
          this.car_type = res.data.car_type
          this.car_note = res.data.car_note
          this.car_startdate = res.data.car_startdate
          this.car_enddate = res.data.car_enddate

        }).catch((err) => {
          console.log(err)
        })
      }
    },
    fnGetMember(){
      this.members = []
      this.$axios.get(this.$serverUrl +"/memberForCar/list",{
        params:this.members,
        headers:{}
      }).then(response => {
        if(response.data.result_code === "OK"){
          this.members = response.data.data || [];
        }else {
          this.members = [];
        }
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
    valuesMemberIdx(member, value){
      member.memberidx = value;
    },
    fnGetEmp(){
      this.emps = []
      this.$axios.get(this.$serverUrl+"/empForCar/list",{params: this.emps})
          .then(response => {
            this.emps = response.data.data; // 데이터는 response.data.data에 있을 수 있습니다. 실제 데이터 구조에 따라서 적절하게 수정하세요.
          })
          .catch(error => {
            console.error(error);
          });
    },
    fnList() {
      delete this.requestBody.car_idx
      this.$router.push({
        path: './list',
        query: this.requestBody
      })
    },
    fnView(car_idx) {
      this.requestBody.car_idx = car_idx
      this.$router.push({
        path: './detail',
        query: this.requestBody
      })
    },
    fnSave() {

      let apiUrl = this.$serverUrl + '/car';
      const emp_carid = {
        emp_idx: this.emp_carid,
      }
      const member_carid = {
        memberidx: this.member_carid,
      }
      const cardata = {
        car_idx: this.car_idx,
        car_number: this.car_number,
        car_division_id: this.car_division_id,
        car_phone: this.car_phone,
        car_enrolldate: this.car_enrolldate,
        car_type: this.car_type,
        car_note: this.car_note,
        emp_carid,
        member_carid
      };


      if (this.car_idx === undefined) {
        // 등록

        this.$axios.post(apiUrl, cardata)
            .then((res)=>{
              alert('차량이 등록되었습니다.');
              this.fnView(res.data.car_idx);
            }).catch((err) => {
          if (err.message.indexOf('Network Error') > -1) {
            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.');
          }
        })
            .catch((err)=>{
              if (err.message.indexOf('Network Error') > -1) {
                alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.');
              }
            })
      } else {
        // 수정
        this.$axios.patch(apiUrl, this.form)
            .then((res) => {
              alert('차량 정보가 수정되었습니다.');
              this.fnView(res.data.car_idx);
            }).catch((err) => {
          if (err.message.indexOf('Network Error') > -1) {
            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.');
          }
        });
      }

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