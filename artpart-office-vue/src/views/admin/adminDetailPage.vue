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
<!--      <div>-->
<!--        <img src = "../../assets/images/차사원.jpeg" />&lt;!&ndash;db에 이미지 파일로 변경해야 함&ndash;&gt;-->
<!--      </div>-->
      <div>
        <table style="width:100%; border : 1px solid #000 ;">
        <tr style="border : 1px solid #000 ;">
          <td>사원아이디</td>
          <td>{{emp_id || " "}}
          </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td>사원구분</td>
          <td>{{emp_permanent_id || " "}}
          </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td>소속</td>
          <td> {{emp_department_id || " "}}

          </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td>직급</td>
          <td style="margin: 0; padding: 0; vertical-align:middle;">
            {{emp_job_id || " "}}
          </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td>사원명</td>
          <td>{{emp_name || " "}}
          </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td>주소</td>
          <td>{{emp_address || " "}}
          </td>
        </tr>

        <tr style="border : 1px solid #000 ;">
          <td>연락처</td>
          <td>{{emp_phone || " "}}
          </td>
        </tr>

        <tr style="border : 1px solid #000 ;">
          <td>차량번호</td>
          <td>{{emp_car || " "}}
          </td>
        </tr>

        <tr style="border : 1px solid #000 ;">
          <th>입사일</th>
          <th>{{formatDate(emp_hire_date) || " "}}
          </th>
        </tr>

        <tr style="border : 1px solid #000 ;">
          <th>퇴사일</th>
          <th>{{formatDate(emp_departure_date) || " "}}
          </th>
        </tr>

        <tr style="border : 1px solid #000 ;">
          <td>비고</td>
          <td>{{emp_memo}}
          </td>
        </tr>
        
        </table>
      </div>
      <br>
      <br>
      <div class="button1">
            <button  type="button" class="btn btn-dark" v-on:click="fnUpdateEmp">수정</button>
            <button style="float: right;" type="button" class="btn btn-dark" v-on:click="fnList">목록</button>
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
        this.emp_id = res.data.emp_id || ' '
        this.emp_permanent_id = res.data.emp_permanent_id || ' '
        this.emp_department_id = res.data.emp_department_id || ' '
        this.emp_job_id = res.data.emp_job_id || ' '
        this.emp_name = res.data.emp_name || ' '
        this.emp_address = res.data.emp_address || ' '
        this.emp_phone = res.data.emp_phone || ' '
        this.emp_car = res.data.emp_car || ' '
        this.emp_hire_date = res.data.emp_hire_date || ' '
        if(!this.emp_departure_date){
          this.emp_departure_date = ''
        }else (
            this.emp_departure_date = res.data.emp_departure_date
        )
        this.emp_img = res.data.emp_img || ' '
        this.emp_img_up = res.data.emp_img_up || ' '
        this.emp_memo = res.data.emp_memo || ' '
        this.emp_email = res.data.emp_email || ' '
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
    formatDate: function (datetime) {
      if (datetime) {
        let date = new Date(datetime);
        let year = date.getFullYear();
        let month = ('0' + (date.getMonth() + 1)).slice(-2);
        let day = ('0' + date.getDate()).slice(-2);
        return `${year}년${month}월${day}일`;
      } else {
        return '';
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
