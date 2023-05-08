<template>
  <br><br>
  <div class="col-md-3"></div>
  <div class="col-md-6" style="margin:0 auto">
    <h4 class="mb-3">전표</h4>
        <form class="needs-validation" novalidate="">
          <div class="row g-3">
            <div class="col-sm-12">
              <label for="firstName" class="form-label">전표 종류</label>
                <select class="form-select" id="" required="">
                  <option value="">입금</option>
                  <option>출금</option>
                </select>
            </div>
          
            <div class="col-sm-4">
              <label for="lastName" class="form-label">전표번호</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required="">
            </div>
            <div class="col-sm-4">
              <label for="lastName" class="form-label">등록번호</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required="">
            </div>
            <div class="col-sm-4">
              <label for="lastName" class="form-label">일자</label><br>
              2023-04-25
            </div>
            
            <div class="col-sm-6">
              <label for="lastName" class="form-label">과목</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required="">
            </div>
            <div class="col-sm-6">
              <label for="lastName" class="form-label">항목</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required="">
            </div>

            <div class="col-8">
              <label for="username" class="form-label">적요</label>
              <div class="input-group has-validation">
                <input type="text" class="form-control" id="username" placeholder="" required="">
              </div>
            </div>

            <div class="col-4">
              <label for="email" class="form-label">금액</label>
              <input type="email" class="form-control" id="email" placeholder="">
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">비고</label>
              <textarea class="form-control" id="" rows="3"></textarea>
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
