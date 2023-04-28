<template>
  <div>
    <div  align="left" class="jb-header">
        <h1>직원 관리</h1>
    </div>
        
  </div>
      <br>
      <br>
      <div align="left" class="jb-header" ><h2>직원 목록&nbsp; 
      
          <div class="button1" style="float: right;" >
            <button type="button" class="btn btn-dark"><router-link to="/adminSignUp">등록</router-link></button>
          </div></h2> 
      </div>

      <div  class="jb-header">
            <table>
              <th> &nbsp; 직원 검색 &nbsp; <select name="car" id="car">
                <option value="member">전체</option>
                <option value="member">이름</option>
                <option value="noentry">소속</option>
                <option value="noentry">직위</option>
                <option value="noentry">입사일</option>
              </select> &nbsp; </th>
              <th> &nbsp; &nbsp; <input type="text" size=10></th>
              <th> &nbsp; <button class="btn btn-dark">검색</button></th>
            </table>
      </div>
      <div>
        <table class="table table-striped table-sm">
          <thead class="thead1">
            <tr>
              <th scope="col">사원번호 <button>&and;</button><button>&or;</button> </th>
              <th scope="col">사원구분 <button>&and;</button><button>&or;</button> </th>
              <th scope="col">소속 <button>&and;</button><button>&or;</button> </th>
              <th scope="col">직위 <button>&and;</button><button>&or;</button> </th>
              <th scope="col">사원명 <button>&and;</button><button>&or;</button> </th>
              <th width="15%" scope="col">주소 <button>&and;</button><button>&or;</button></th>
              <th width="15%" scope="col">연락처 <button>&and;</button><button>&or;</button> </th>
              <th width="10%" scope="col">입사일 <button>&and;</button><button>&or;</button></th>
              <th width="10%" scope="col">퇴사일 <button>&and;</button><button>&or;</button> </th>
              <th scope="col">차량번호 <button>&and;</button><button>&or;</button> </th>
              <th scope="col">비고</th>
            </tr>
          </thead>
          <tbody class="tbody1">
            <tr style="text-align: center; vertical-align: middle;">
              <td>11</td>
              <td>정규직</td>
              <td>관리</td>
              <td>반장</td>
              <td>김반장</td>
              <td>서울시 강서구</td>
              <td width="15%" >010-5678-3456</td>
              <td>22.04.26</td>
              <td></td>
              <td>34가9897</td>
              <td></td>
            </tr>
            
            <tr style="text-align: center; vertical-align: middle;">
              <td>12</td>
              <td>정규직</td>
              <td>관리</td>
              <td>과장</td>
              <td>이과장</td>
              <td>서울시 강서구</td>
              <td>010-2878-0090</td>
              <td>22.04.26</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr style="text-align: center; vertical-align: middle;">
              <td>13</td>
              <td>정규직</td>
              <td>관리</td>
              <td>소장</td>
              <td>박소장</td>
              <td>서울시 강서구</td>
              <td>010-3424-2344</td>
              <td>22.04.26</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr style="text-align: center; vertical-align: middle;">
              <td>14</td>
              <td>정규직</td>
              <td>관리</td>
              <td>기사</td>
              <td>장기사</td>
              <td>서울시 강서구</td>
              <td>010-4654-6788</td>
              <td>22.04.26</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr style="text-align: center; vertical-align: middle;">
              <td>15</td>
              <td>정규직</td>
              <td>관리</td>
              <td>사무원</td>
              <td><router-link to="/adminDeltail">차사원</router-link></td>
              <td>서울시 강서구</td>
              <td>010-9283-0293</td>
              <td>22.04.26</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr style="text-align: center; vertical-align: middle;">
              <td>16</td>
              <td>계약직</td>
              <td>경비원</td>
              <td>반장</td>
              <td>이반장</td>
              <td>서울시 강서구</td>
              <td>010-7657-3245</td>
              <td>22.04.26</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr style="text-align: center; vertical-align: middle;">
              <td>17</td>
              <td>계약직</td>
              <td>경비원</td>
              <td>관리원</td>
              <td>김관리</td>
              <td>서울시 강서구</td>
              <td>010-9283-0293</td>
              <td>22.04.26</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr style="text-align: center; vertical-align: middle;">
              <td>18</td>
              <td>계약직</td>
              <td>경비원</td>
              <td>관리원</td>
              <td>오리원</td>
              <td>서울시 강서구</td>
              <td>010-5466-2344</td>
              <td>22.04.26</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr style="text-align: center; vertical-align: middle;">
              <td>19</td>
              <td>계약직</td>
              <td>청소원</td>
              <td>반장</td>
              <td>박반장</td>
              <td>서울시 강서구</td>
              <td>010-5644-2342</td>
              <td>22.04.26</td>
              <td></td>
              <td>34구7878</td>
              <td></td>
            </tr>
            <tr style="text-align: center; vertical-align: middle;">
              <td>20</td>
              <td>계약직</td>
              <td>청소원</td>
              <td>미화원</td>
              <td>송미화</td>
              <td>서울시 강서구</td>
              <td>010-67544-3244</td>
              <td>22.04.26</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>


      </div>
      
      <br>
      <br>
      <br>
      <div style="position: absolute; left: 50%; transform: translateX(-50%);">
      <table>
        <th style="border : 1px solid black; border-collapse : collapse; width: 30px; height: 30px; color:white; background-color:black;" >&lt;&lt;</th>
        <th style="border : 1px solid black; border-collapse : collapse; width: 30px; height: 30px; color:white; background-color:black;" >&lt;</th>
        <th style="border : 1px solid black; border-collapse : collapse; width: 30px; height: 30px;" >1</th>
        <th style="border : 1px solid black; border-collapse : collapse; width: 30px; height: 30px; color:white; background-color:black;" >2</th>
        <th style="border : 1px solid black; border-collapse : collapse; width: 30px; height: 30px;" >3</th>
        <th style="border : 1px solid black; border-collapse : collapse; width: 30px; height: 30px;" >4</th>
        <th style="border : 1px solid black; border-collapse : collapse; width: 30px; height: 30px;" >5</th>
        <th style="border : 1px solid black; border-collapse : collapse; width: 30px; height: 30px;" >6</th>
        <th style="border : 1px solid black; border-collapse : collapse; width: 30px; height: 30px;" >7</th>
        <th style="border : 1px solid black; border-collapse : collapse; width: 30px; height: 30px;" >8</th>
        <th style="border : 1px solid black; border-collapse : collapse; width: 30px; height: 30px;" >9</th>
        <th style="border : 1px solid black; border-collapse : collapse; width: 30px; height: 30px;" >10</th>
        <th style="border : 1px solid black; border-collapse : collapse; width: 30px; height: 30px; color:white; background-color:black;" >&gt;</th>
        <th style="border : 1px solid black; border-collapse : collapse; width: 30px; height: 30px; color:white; background-color:black;" >&gt;&gt;</th>
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
