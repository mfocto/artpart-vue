<template>
   <div class="col-md-7 col-lg-8" style="margin: 0 auto;">
    <br><br>
        <h4 class="mb-3">관리비 입력</h4>
        <form class="needs-validation" novalidate="">
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">동</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">호</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required="">
            </div>

            <div class="col-md-3">
              <label for="zip" class="form-label">일반관리비</label>
              <input type="text" class="form-control" id="zip" placeholder="" required="">
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div>
            <div class="col-md-3">
              <label for="zip" class="form-label">청소비</label>
              <input type="text" class="form-control" id="zip" placeholder="" required="">
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div>
            <div class="col-md-3">
              <label for="zip" class="form-label">경비비</label>
              <input type="text" class="form-control" id="zip" placeholder="" required="">
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div>
            <div class="col-md-3">
              <label for="zip" class="form-label">소독비</label>
              <input type="text" class="form-control" id="zip" placeholder="" required="">
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div>
            <div class="col-md-3">
              <label for="zip" class="form-label">승강기유지비</label>
              <input type="text" class="form-control" id="zip" placeholder="" required="">
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div>
            <div class="col-md-3">
              <label for="zip" class="form-label">지능형홈네트워크유지비</label>
              <input type="text" class="form-control" id="zip" placeholder="" required="">
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div>
            <div class="col-md-3">
              <label for="zip" class="form-label">수선비</label>
              <input type="text" class="form-control" id="zip" placeholder="" required="">
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div>
            <div class="col-md-3">
              <label for="zip" class="form-label">위탁관리수수료</label>
              <input type="text" class="form-control" id="zip" placeholder="" required="">
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div>
            <div class="col-md-3">
              <label for="zip" class="form-label">난방비</label>
              <input type="text" class="form-control" id="zip" placeholder="" required="">
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div>
            <div class="col-md-3">
              <label for="zip" class="form-label">급탕비</label>
              <input type="text" class="form-control" id="zip" placeholder="" required="">
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div>
           
          </div>

          <br>

          <button class="w-100 btn btn-primary btn-lg" type="submit">입력</button>
        </form>
      </div>
<br><br>
<div class="col-md-5 offset-md-1 mb-3" style="margin: 0 auto;">
        <form>
          <h5>동/호수로 검색</h5>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <input id="newsletter1" type="text" class="form-control" placeholder="ooo동 ooo호">
            <button class="btn btn-primary" type="button">검색</button>
          </div>
        </form>
      </div>
      <hr>
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">동</th>
              <th scope="col">호</th>
              <th scope="col">일반관리비</th>
              <th scope="col">청소비</th>
              <th scope="col">경비비</th>
              <th scope="col">소독비</th>
              <th scope="col">승강기유지비</th>
              <th scope="col">지능형홈네트워크유지비</th>
              <th scope="col">수선비</th>
              <th scope="col">위탁관리수수료</th>
              <th scope="col">난방비</th>
              <th scope="col">급탕비</th>
              <th scope="col">총계</th>
            </tr>
          </thead>
          <tbody>
            <tr>
  <td>1</td>
  <td>101</td>
  <td>100,000</td>
  <td>20,000</td>
  <td>30,000</td>
  <td>10,000</td>
  <td>50,000</td>
  <td>20,000</td>
  <td>10,000</td>
  <td>5,000</td>
  <td>70,000</td>
  <td>20,000</td>
  <td>385,000</td>
</tr>

<tr>
  <td>1</td>
  <td>102</td>
  <td>110,000</td>
  <td>25,000</td>
  <td>35,000</td>
  <td>12,000</td>
  <td>55,000</td>
  <td>22,000</td>
  <td>12,000</td>
  <td>6,000</td>
  <td>75,000</td>
  <td>22,000</td>
  <td>379,000</td>
</tr>

<tr>
  <td>2</td>
  <td>201</td>
  <td>90,000</td>
  <td>15,000</td>
  <td>25,000</td>
  <td>8,000</td>
  <td>45,000</td>
  <td>18,000</td>
  <td>8,000</td>
  <td>4,000</td>
  <td>60,000</td>
  <td>18,000</td>
  <td>311,000</td>
</tr>

<tr>
  <td>3</td>
  <td>301</td>
  <td>120,000</td>
  <td>30,000</td>
  <td>40,000</td>
  <td>15,000</td>
  <td>60,000</td>
  <td>25,000</td>
  <td>15,000</td>
  <td>7,000</td>
  <td>80,000</td>
  <td>25,000</td>
  <td>457,000</td>
</tr>

<tr>
  <td>4</td>
  <td>401</td>
  <td>95,000</td>
  <td>18,000</td>
  <td>27,000</td>
  <td>9,000</td>
  <td>50,000</td>
  <td>20,000</td>
  <td>9,000</td>
  <td>4,500</td>
  <td>65,000</td>
  <td>20,000</td>
  <td>318,500</td>
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
  