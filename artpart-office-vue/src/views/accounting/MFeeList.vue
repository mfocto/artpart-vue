<template>
  <h2>관리비 조회</h2>
  <br><br>
  <div class="col-md-5 offset-md-1 mb-3" style="margin: 0 auto;">
        <form>
          <h5>동/호수로 검색</h5>
          <div class="d-flex flex-column  gap-2">
            <input type="month" id="gongdate">
            <select class="form-select form-select-md" aria-label=".form-select-sm example">
              <option selected>동</option>
              <option value="1">101</option>
              <option value="2">102</option>
              <option value="1">103</option>
              <option value="2">104</option>
            </select>
            <select class="form-select form-select-md" aria-label=".form-select-sm example">
              <option selected>호</option>
              <option value="1">101</option>
              <option value="2">102</option>
              <option value="1">201</option>
              <option value="2">202</option>
            </select>
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
  <td>101</td>
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
  <td>101</td>
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
  <td>101</td>
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
  <td>101</td>
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
  <td>101</td>
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
  