<template>
  <div>
    <div  align="left" class="jb-header">
        <h1>방문 차량 관리</h1>
    </div>
        
  </div>
      <br>
      <br>
      <div align="left" class="jb-header" ><h2>방문 차량 등록</h2> 
      </div>
      
      <div>
        <table style="width:100%; border : 1px solid #000 ;">
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">차량구분</font></td>
          <td style="margin: 0; padding: 0; vertical-align:middle;">
            <h1 style="margin: 0; padding: 0; vertical-align:middle;">
              <input style="width:40px; height:60px;" type="radio" id="car_division_id" name="입주민" value="입주민" v-model="car_division_id"> &nbsp; 입주민 &nbsp; 
              <input style="width:40px; height:60px " type="radio" id="car_division_id" name="직원" value="직원" v-model="car_division_id"> &nbsp; 직원 &nbsp; 
              <input style="width:40px; height:60px;" type="radio" id="car_division_id" name="방문객" value="방문객" v-model="car_division_id"> &nbsp; 방문객 &nbsp; 
              <input style="width:40px; height:60px " type="radio" id="car_division_id" name="출입체한" value="출입체한" v-model="car_division_id"> &nbsp; 출입체한
            </h1> 
          </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td> <font size="5">동호수 or 직원이름 </font></td>
          <td><input style="width:500px;height:50px;" type="text" v-model="member_carid" placeholder="입주민이면 입력하시오">
              <input style="width:500px;height:50px;" type="text" v-model="emp_carid" placeholder="직원이면 입력하시오">
          </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">차량번호</font></td>
          <td><input style="width:500px;height:50px;" type="text" v-model="car_number" placeholder="차량 번호를 입력 하시오"></td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">차량 주인 전화 번호 </font></td>
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
        <tr style="border : 1px solid #000 ;">
          <th><font size="5">등록일시</font></th>
          <th><input style="width:250px;height:30px;font-size: 20px;"  type="date" v-model="car_enrolldate" id="car_enrolldate" min="2018-01-01" max="2050-12-31"></th>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <th><font size="5">방문시간</font></th>
          <th>
            <input style="width:250px;height:30px;font-size: 20px;"  type="date" v-model="car_startdate" id="car_startdate" min="2018-01-01" max="2050-12-31"> &nbsp; ~ &nbsp; 
            <input style="width:250px;height:30px;font-size: 20px;"  type="date" v-model="car_enddate" id="car_enddate" min="2018-01-01" max="2050-12-31">
          </th>
        </tr>
        </table>
      </div>
      <br>
      <br>
      <div class="button1">
            <button style="float: center;" type="button" class="btn btn-dark" v-on:click="fnSave">등록</button>
            <button style="float: right;"  type="button" class="btn btn-dark" v-on:click="fnList">목록</button>
      </div>
  
        
</template>

<script>
export default {
  data(){
    return {
      requestBody: this.$rout.query,
      car_idx: this.$route.query.car_idx,

      car_division_id: '',
      car_number: '',
      member_carid: '',
      emp_carid: '',
      car_phone: '',
      car_enrolldate: '',
      car_type: '',
      car_note: '',
      car_startdate: '',
      car_enddate: ''
      
    }
  },
  mounted(){
    this.fnGetCar()
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
            const emp = JSON.parse(this.$cookie.get('emp'))
            const member = JSON.parse(this.$cookie.get('member'))
            let apiUrl = this.$serverUrl + '/car'
            this.form = {
                "car_idx": this.car_idx,
                "car_number": this.car_number,
                "car_division_id": this.car_division_id,
                "car_phone": this.car_phone,
                "car_enrolldate":this.car_enrolldate,
                "car_type":this.car_type,
                "car_note":this.car_note,
                "car_startdate":this.car_startdate,
                "car_enddate":this.car_enddate,
                "member_carid":  member.memberidx,
                "emp_carid": emp.emp_idx
            }

            if (this.car_idx === undefined) {
                //등록
                this.$axios.post(apiUrl, this.form)
                    .then((res) => {
                        alert('차량 등록 되었습니다.')
                        this.fnView(res.data.car_idx)
                    }).catch((err) => {
                    if (err.message.indexOf('Network Error') > -1) {
                        alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                    }
                })
            } else {
                //수정
                this.$axios.patch(apiUrl, this.form)
                    .then((res) => {
                        alert('차량 등록이 수정 되었습니다.')
                        this.fnView(res.data.car_idx)
                    }).catch((err) => {
                    if (err.message.indexOf('Network Error') > -1) {
                        alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                    }
                })
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
