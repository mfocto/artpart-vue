<template>
  <br><br>
  <h2>현금출납부</h2>
  <br><br>
  <div class="table-responsive">
    <table class="table table-striped table-sm">
      <thead>
        <tr>       
          <th scope="col">적요</th>              
          <th scope="col">수입</th>
          <th scope="col">지출</th>
          <th scope="col">차인잔액</th>
          <th scope="col">비고</th>
          <th scope="col">작성자</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="text" class="form-control"></td>              
          <td><input type="text" class="form-control"></td>
          <td><input type="text" class="form-control"></td>
          <td><input type="text" class="form-control"></td>
          <td><input type="text" class="form-control"></td>
          <td><input type="text" class="form-control"></td>
        </tr>
      </tbody>
      
    </table>
    <button class="btn btn-outline-secondary" type="button">&nbsp; &nbsp; 등록 &nbsp; &nbsp; </button>
  </div>
  <br><br><hr><br><br>
  
  <div class="table-responsive">
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th scope="col">일자</th>
          <th scope="col">적요</th>              
          <th scope="col">수입</th>
          <th scope="col">지출</th>
          <th scope="col">차인잔액</th>
          <th scope="col">비고</th>
          <th scope="col">작성자</th>
        </tr>
      </thead>
      <tbody>
  <tr>
    <td>2023-04-01</td>
    <td>임대료 수입</td>
    <td>2,000,000원</td>
    <td>-</td>
    <td>2,000,000원</td>
    <td>아파트 101호 임대료 수입</td>
    <td>김철수</td>
  </tr>
  <tr>
    <td>2023-04-05</td>
    <td>인건비 지급</td>
    <td>-</td>
    <td>500,000원</td>
    <td>1,500,000원</td>
    <td>아르바이트생 인건비 지급</td>
    <td>이영희</td>
  </tr>
  <tr>
    <td>2023-04-10</td>
    <td>광고비 지출</td>
    <td>-</td>
    <td>200,000원</td>
    <td>1,300,000원</td>
    <td>아파트 광고비 지출</td>
    <td>홍길동</td>
  </tr>
  <tr>
    <td>2023-04-15</td>
    <td>전기세 지출</td>
    <td>-</td>
    <td>100,000원</td>
    <td>1,200,000원</td>
    <td>아파트 전기세 지출</td>
    <td>이지은</td>
  </tr>
  <tr>
    <td>2023-04-20</td>
    <td>시설유지비 지출</td>
    <td>-</td>
    <td>300,000원</td>
    <td>900,000원</td>
    <td>아파트 시설유지비 지출</td>
    <td>박수현</td>
  </tr>
</tbody>
    </table>
    <div class="input-group">
      <input type="text" class="form-control" placeholder="일자별 조회">
      <button type="submit" class="btn btn-secondary">조회</button>
    </div>
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
