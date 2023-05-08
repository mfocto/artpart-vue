<template>
<div class="col-md-7 col-lg-8" style="margin:0 auto; width: 100%;">
  <h2 class="mb-3">일계표</h2>
  <form class="needs-validation" @submit.prevent="insertDReport">
    <div class="row g-3">
        <div class="col-sm-6">
        <label for="firstName" class="form-label">직급</label> &nbsp; &nbsp;
        <input type="text" name="permanentId" v-model="permanentId" required="true" readonly>
        </div>

        <div class="col-sm-6">
        <label for="firstName" class="form-label">성명</label> &nbsp;&nbsp;
        <input type="text" v-model="name" required="true" readonly>
      
      </div>
    </div>
    <hr class="my-4">
    <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr><th colspan="2">차변</th><th colspan="3" rowspan="2">계정과목</th><th colspan="2">대변</th></tr>
              <tr><th>입금</th><th>대체</th><th>입금</th><th>대체</th></tr>
          </thead>
          <tbody>
            <tr><td><input type="number" v-model="trial_daily_debit_in" min="0" ></td><td><input type="number" min="0" v-model="trial_daily_debit_out"></td><td colspan="3"><input type="text" v-model="trial_daily_account"></td><td><input type="number" min="0" v-model="trial_daily_credit_in"></td><td><input type="number" min="0" v-model="trial_daily_credit_out"></td></tr>
          </tbody>
        </table>
      </div>
    <button class="w-100 btn btn-primary btn-lg mt-4 mb-3" type="submit">등록</button>
  </form>
</div>
<hr>


<div class="input-group mt-5">
<div class="col-sm-2 me-2 ms-5">
  <select class="form-select form-select-md" aria-label=".form-select-sm example">
    <option selected>조회 목록</option>
    <option value="1">과목</option>
    <option value="2">일자</option>
  </select>
</div> &nbsp;
<div class="col-sm-7">
  <input type="text" class="form-control" id="searchDreport" placeholder="검색할 내용 입력">  
</div>
<div class="col-2 ">
  <button type="submit" class="btn btn-secondary">조회</button>
</div>
</div>

<br><br>
<div class="table-responsive">
  <table class="table table-striped table-sm">
    <thead>
      <tr><th rowspan="2">번호</th><th colspan="3">차변</th><th colspan="3" rowspan="2">계정과목</th><th colspan="3">대변</th></tr>
      <tr><th>입금</th><th>대체</th><th>합계</th><th>입금</th><th>대체</th><th>합계</th><th>일자</th></tr>
    </thead>
    <tbody>
      <tr>
          <td>0</td>
<td>100,000</td>
<td>0</td>
<td>100,000</td>
<td colspan="3">Cash</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>23-04-27</td>
</tr>
<tr>
    <td>0</td>
<td>0</td>
<td>50,000</td>
<td>50,000</td>
<td colspan="3">Accounts Receivable</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>23-04-26</td>
</tr>
<tr>
    <td>0</td>
<td>0</td>
<td>0</td>
<td>150,000</td>
<td colspan="3">Equity</td>
<td>0</td>
<td>150,000</td>
<td>0</td>
<td>23-04-25</td>
</tr>
<tr>
    <td>0</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td colspan="3">Accounts Payable</td>
<td>75,000</td>
<td>0</td>
<td>0</td>
<td>23-04-24</td>
</tr>
<tr>
    <td>0</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td colspan="3">Retained Earnings</td>
<td>0</td>
<td>75,000</td>
<td>0</td>
<td>23-04-23</td>
</tr>
<tr v-for="(item, trial_daily_idx) in list" :key="trial_daily_idx">
<td>{{item.trial_daily_idx}}</td>
<td>{{item.trial_daily_debit_in}}</td>
<td>{{item.trial_daily_debit_out}}</td>
<td>{{item.trial_daily_debit_total}}</td>
<td colspan="3">{{item.trial_daily_account}}</td>
<td>{{item.trial_daily_credit_in}}</td>
<td>{{item.trial_daily_credit_out}}</td>
<td>{{item.trial_daily_credit_total}}</td>
<td>{{item.trial_daily_date}}</td>
</tr>
    </tbody>
  </table>
</div>
</template>
<script>

export default {
  name: 'D-report',
    data() {
      return {
          permanentId: '',
          trial_daily_idx: '',
          name: '',
          trial_daily_debit_in: '',
          trial_daily_debit_out: '',
          trial_daily_debit_total: '',
          trial_daily_credit_in: '',
          trial_daily_credit_out: '',
          trial_daily_credit_total: '',
          trial_daily_account: '',
          list: {},
      }
    },
    mounted() {
      this.getSessionInfo();
      this.getDreportList();
    },
    methods: {
      getSessionInfo() {
        const emp = JSON.parse(sessionStorage.getItem('EmpDto'));
        this.permanentId = emp.emp_permanent_id;
        this.name = emp.emp_name;
      },
      getDreportList() {
        this.$axios.get(this.$serverUrl + '/account/daily-report')
            .then((res) => {
                console.log(res.data);
                if(res.data.result_code === 'OK'){
                    this.list = res.data.data;
                    console.log(this.list);
                }
            }).catch((err) => {
                console.log(err);
            })
      },
      insertDReport(event) {
          event.preventDefault();
          const formData = {
              trialDailyDebitIn: this.trial_daily_debit_in,
              trialDailyDebitOut: this.trial_daily_debit_out,
              trialDailyDebitTotal: parseInt(this.trial_daily_debit_in) - parseInt(this.trial_daily_debit_out),
              trialDailyCreditIn: this.trial_daily_credit_in,
              trialDailyCreditOut: this.trial_daily_credit_out,
              trialDailyCreditTotal: parseInt(this.trial_daily_credit_in) - parseInt(this.trial_daily_credit_out),
              trialDailyAccount: this.trial_daily_account,
          };
          console.log("formData : ", formData);
          this.$axios.post(this.$serverUrl + '/account/daily-report', formData)
              .then((res) => {
                  console.log(res);
                  alert('일계표가 등록되었습니다.');
                  this.getDreportList();
              }).catch((err) => {
                  console.log(err);
              })
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
</style>
