<template>
  <br><br>
  <div class="col-md-3"></div>
  <div class="col-md-6" style="margin:0 auto">
    <h4 class="mb-3">전표</h4>
        <form class="needs-validation" @submit.prevent="regSlip">
          <div class="row g-3">
            <div class="col-sm-12">
              <label for="firstName" class="form-label">전표 종류</label>
                <select class="form-select" v-model="slip_type" required="true">
                  <option value="input">입금</option>
                  <option value="output">출금</option>
                </select>
            </div>
          
            <div class="col-sm-4">
              <label for="lastName" class="form-label">전표번호</label>
              <input type="text" class="form-control" v-model="slip_no">
            </div>
            <div class="col-sm-4">
              <label for="lastName" class="form-label">일자</label><br>
                {{ today }}
            </div>
            
            <div class="col-sm-6">
              <label for="lastName" class="form-label">과목</label>
              <input type="text" class="form-control" v-model="slip_item">
            </div>
            <div class="col-sm-6">
              <label for="lastName" class="form-label">항목</label>
              <input type="text" class="form-control" v-model="slip_comp">
            </div>

            <div class="col-8">
              <label for="username" class="form-label">적요</label>
              <div class="input-group has-validation">
                <input type="text" class="form-control" v-model="slip_brif">
              </div>
            </div>

            <div class="col-4">
                <label for="cash" class="form-label">금액</label>
                <div class="input-group has-validation">
              <input type="number" class="form-control" id="cash" v-model="slip_cash">
                </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">비고</label>
              <textarea class="form-control" v-model="slip_note" rows="3"></textarea>
            </div>
          </div>

          <hr class="my-4">

          <button class="w-100 btn btn-primary btn-lg" type="submit">전표 &nbsp; 등록</button>
        </form>
  </div>
  <div class="col-md-3"></div>
</template>

<script>
export default {
  name: 'SlipReg',
  data() {
      return {
          today: new Date().toISOString().substring(0, 10),
          // 전표 데이터
          slip_type: '',      // 전표종류
          slip_no: '',        // 전표번호
          slip_item: '',      // 과목
          slip_comp: '',      // 항목
          slip_brif: '',      // 적요
          slip_cash: 0,       // 금액
          slip_note: '',      // 비고
          slip_writer: '',    // 작성자
      }
  },
    methods: {
        regSlip() {
            const emp = JSON.parse(this.$cookie.get('emp'))
            let formData = {
                slip_type: this.slip_type,
                slip_no: this.slip_no,
                slip_item: this.slip_item,
                slip_comp: this.slip_comp,
                slip_brif: this.slip_brif,
                slip_cash: this.slip_cash,
                slip_note: this.slip_note,
                slip_writer: emp.emp_name
            }

            this.$axios.post(this.$serverUrl + '/account/slip/reg', formData)
                .then(() => {
                    alert('전표가 등록되었습니다.');
                    this.$router.push('/account/slip/list')
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    },
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
