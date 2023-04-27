<template>
<h2>전표 조회</h2>
<br><br>
<div class="input-group mb-3 border rounded">
          <input type="text" class="form-control" placeholder="전표 번호 조회">
          <button type="submit" class="btn btn-secondary">조회</button>
        </div>
<div class="table-responsive">
  
      <table class="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col">등록번호</th>
            <th scope="col">전표번호</th>              
            <th scope="col">일자</th>
            <th scope="col">작성자</th>
            <th scope="col">과목</th>
            <th scope="col">항목</th>
            <th scope="col">적요</th>
            <th scope="col">금액</th>
            <th scope="col">비고</th>
          </tr>
        </thead>
        <tbody>
<tr>
  <td>1</td>
  <td>SL1001</td>
  <td>2023-04-25</td>
  <td>Jane Doe</td>
  <td>인건비</td>
  <td>급여</td>
  <td>4월 급여 지급</td>
  <td>1,000,000원</td>
  <td></td>
</tr>
<tr>
  <td>2</td>
  <td>SL1002</td>
  <td>2023-04-25</td>
  <td>John Doe</td>
  <td>지급수수료</td>
  <td>판매수수료</td>
  <td>3월 판매 수수료</td>
  <td>500,000원</td>
  <td></td>
</tr>
<tr>
  <td>3</td>
  <td>SL1003</td>
  <td>2023-04-26</td>
  <td>Jane Doe</td>
  <td>임대료</td>
  <td>건물임대료</td>
  <td>4월 건물임대료 지급</td>
  <td>2,000,000원</td>
  <td></td>
</tr>
<tr>
  <td>4</td>
  <td>SL1004</td>
  <td>2023-04-26</td>
  <td>John Doe</td>
  <td>매출</td>
  <td>제품판매</td>
  <td>4월 제품 판매 대금 수령</td>
  <td>3,000,000원</td>
  <td></td>
</tr>
<tr>
  <td>5</td>
  <td>SL1005</td>
  <td>2023-04-26</td>
  <td>Jane Doe</td>
  <td>이자비용</td>
  <td>대출이자</td>
  <td>3월 대출 이자 지급</td>
  <td>100,000원</td>
  <td></td>
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
