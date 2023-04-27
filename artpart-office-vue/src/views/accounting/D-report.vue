<template>
<div class="col-md-7 col-lg-8" style="margin:0 auto; width: 100%;">
  <h2 class="mb-3">일계표</h2>
  <form class="needs-validation" novalidate="">
    <div class="row g-3">
        <div class="col-sm-6">
        <label for="firstName" class="form-label">직급</label> &nbsp; &nbsp;
        <input type="text" class="" id="" placeholder="" value="" required="">
        </div>

        <div class="col-sm-6">
        <label for="firstName" class="form-label">성명</label> &nbsp;&nbsp;
        <input type="text" class="" id="" placeholder="" value="" required="">
      
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
            <tr><td><input type="number" min="0" value="0"></td><td><input type="number" min="0" value="0"></td><td colspan="3"><input type="text"></td><td><input type="number" min="0" value="0"></td><td><input type="number" min="0" value="0"></td></tr>
          </tbody>
        </table>
      </div>
    <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
  </form>
</div>
<hr>


<br><br>
<div class="table-responsive">
  <table class="table table-striped table-sm">
    <thead>
      <tr><th colspan="3">차변</th><th colspan="3" rowspan="2">계정과목</th><th colspan="3">대변</th></tr>
      <tr><th>입금</th><th>대체</th><th>합계</th><th>입금</th><th>대체</th><th>합계</th><th>일자</th></tr>
    </thead>
    <tbody>
      <tr>
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
<td colspan="3">Retained Earnings</td>
<td>0</td>
<td>75,000</td>
<td>0</td>
<td>23-04-23</td>
</tr>

    </tbody>
  </table>
</div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
