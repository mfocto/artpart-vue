<template>
  <div>
    <div  align="left" class="jb-header">
        <table ><h1 class="h2">방문객 차량 관리</h1></table>
        </div>
        <!-- <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group me-2">
            <button type="button" class="btn btn-sm btn-outline-secondary">등록</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">신청 확인</button>
          </div>
           <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar align-text-bottom" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            This week
          </button>
        </div> -->
      </div>
      <br>
      <br>
      <div align="left" class="jb-header" ><h2>차량 조회&nbsp; 
      
          <div class="button1" style="float: right;" >
            <button type="button" class="btn btn-dark"><router-link to="/visitorSingUp">등록</router-link></button>  &nbsp; 
            <button type="button" class="btn btn-dark"><router-link to="/visitorCarCheck">신청 확인</router-link></button>
          </div></h2> 
      </div>
      <br>
      <br>
      <div  class="jb-header">
            <table>
              <th>동호 &nbsp; <input type="text" size=10 > &nbsp; - &nbsp; <input type="text" size=10 ></th>
              <th> &nbsp; 챠량구분 &nbsp; <select name="car" id="car">
                <option value="member">방문객</option>
                <option value="noentry">출입제한</option>
              </select> &nbsp; </th>
              <th> &nbsp; 차량번호 &nbsp; <input type="text" size=10></th>
              <th> &nbsp; <button class="btn btn-dark">검색</button></th>
            </table>
      </div>
      <br>
      <br>
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead class="thead1">
            <tr>
              <th width="10%" scope="col">아파트명 <button>&and;</button><button>&or;</button> </th>
              <th width="10%" scope="col">동호수 <button>&and;</button><button>&or;</button> </th>
              <th width="10%" scope="col">차량구분 <button>&and;</button><button>&or;</button> </th>
              <th width="10%" scope="col">차량번호 <button>&and;</button><button>&or;</button> </th>
              <th width="10%" scope="col">차종 <button>&and;</button><button>&or;</button> </th>
              <th width="10%" scope="col">비고 <button>&and;</button><button>&or;</button></th>
              <th width="10%" scope="col">등록일시 <button>&and;</button><button>&or;</button> </th>
              <th width="20%" scope="col">방문 기간 <button>&and;</button><button>&or;</button> </th>
              <th width="5%" scope="col"></th>
              <th width="5%" scope="col"></th>
            </tr>
          </thead>
          <tbody class="tbody1">
            <tr style="text-align: center; vertical-align: middle;">
              <td>ict 2차 아파트</td>
              <td>101-101</td>
              <td>방문객</td>
              <td><router-link to="/visitorCarDeltail">12구4544</router-link></td>
              <td>미니벤</td>
              <td></td>
              <td>2022-04-25</td>
              <td>2022-04-25 ~ 2022-04-25</td>
              <td width="100px"><button class="btn btn-dark" >삭제</button></td>
              <td><button class="btn btn-dark" ><router-link to="/visitorCarChange">수정</router-link></button></td>
            </tr>

            <tr style="text-align: center; vertical-align: middle;">
              <td>ict 2차 아파트</td>
              <td>101-102</td>
              <td style="background:#ff0000;">출입 제한</td>
              <td>23구8981</td>
              <td></td>
              <td></td>
              <td>2022-04-26</td>
              <td>2022-04-25 ~ 2022-04-25</td>
              <td><button class="btn btn-dark" >삭제</button></td>
              <td><button class="btn btn-dark" >수정</button></td>
            </tr>

            <tr style="text-align: center; vertical-align: middle;">
              <td>ict 2차 아파트</td>
              <td>101-103</td>
              <td>방문객</td>
              <td>23구8980</td>
              <td></td>
              <td>방문차량_1</td>
              <td>2022-04-26</td>
              <td>2022-04-25 ~ 2022-04-25</td>
              <td><button class="btn btn-dark" >삭제</button></td>
              <td><button class="btn btn-dark" >수정</button></td>
            </tr>

            <tr style="text-align: center; vertical-align: middle;">
              <td>ict 2차 아파트</td>
              <td>101-103</td>
              <td>방문객</td>
              <td>23구8982</td>
              <td></td>
              <td>방문차량_2</td>
              <td>2022-04-26</td>
              <td>2022-04-25 ~ 2022-04-25</td>
              <td><button class="btn btn-dark" >삭제</button></td>
              <td><button class="btn btn-dark" >수정</button></td>
            </tr>

            <tr style="text-align: center; vertical-align: middle;">
              <td>ict 2차 아파트</td>
              <td>101-105</td>
              <td>방문객</td>
              <td>23구8983</td>
              <td></td>
              <td></td>
              <td>2022-04-26</td>
              <td>2022-04-25 ~ 2022-04-25</td>
              <td><button class="btn btn-dark" >삭제</button></td>
              <td><button class="btn btn-dark" >수정</button></td>
            </tr>
            
            <tr style="text-align: center; vertical-align: middle;">
              <td>ict 2차 아파트</td>
              <td>101-106</td>
              <td>방문객</td>
              <td>23구8984</td>
              <td></td>
              <td></td>
              <td>2022-04-26</td>
              <td>2022-04-25 ~ 2022-04-25</td>
              <td><button class="btn btn-dark" >삭제</button></td>
              <td><button class="btn btn-dark" >수정</button></td>
            </tr>

            <tr style="text-align: center; vertical-align: middle;">
              <td>ict 2차 아파트</td>
              <td>101-201</td>
              <td>방문객</td>
              <td>23구8985</td>
              <td></td>
              <td></td>
              <td>2022-04-26</td>
              <td>2022-04-25 ~ 2022-04-25</td>
              <td><button class="btn btn-dark" >삭제</button></td>
              <td><button class="btn btn-dark" >수정</button></td>
            </tr>

            <tr style="text-align: center; vertical-align: middle;">
              <td>ict 2차 아파트</td>
              <td>101-203</td>
              <td>방문객</td>
              <td>23구8985</td>
              <td></td>
              <td></td>
              <td>2022-04-26</td>
              <td>2022-04-25 ~ 2022-04-25</td>
              <td><button class="btn btn-dark" >삭제</button></td>
              <td><button class="btn btn-dark" >수정</button></td>
            </tr>

            <tr style="text-align: center; vertical-align: middle;">
              <td>ict 2차 아파트</td>
              <td>101-204</td>
              <td style="background:#ff0000;">출입 제한</td>
              <td>12구8986</td>
              <td></td>
              <td></td>
              <td>2022-04-26</td>
              <td>2022-04-25 ~ 2022-04-25</td>
              <td><button class="btn btn-dark" >삭제</button></td>
              <td><button class="btn btn-dark" >수정</button></td>
            </tr>

            <tr style="text-align: center; vertical-align: middle;">
              <td>ict 2차 아파트</td>
              <td>101-205</td>
              <td>방문객</td>
              <td>12구8986</td>
              <td></td>
              <td></td>
              <td>2022-04-26</td>
              <td>2022-04-25 ~ 2022-04-25</td>
              <td><button class="btn btn-dark" >삭제</button></td>
              <td><button class="btn btn-dark" >수정</button></td>
            </tr>

            <tr style="text-align: center; vertical-align: middle;">
              <td>ict 2차 아파트</td>
              <td>101-206</td>
              <td>방문객</td>
              <td>23구8987</td>
              <td></td>
              <td></td>
              <td>2022-04-26</td>
              <td>2022-04-25 ~ 2022-04-25</td>
              <td><button class="btn btn-dark" >삭제</button></td>
              <td><button class="btn btn-dark" >수정</button></td>
            </tr>

            <tr style="text-align: center; vertical-align: middle;">
              <td>ict 2차 아파트</td>
              <td>101-301</td>
              <td>방문객</td>
              <td>23구8988</td>
              <td></td>
              <td></td>
              <td>2022-04-26</td>
              <td>2022-04-25 ~ 2022-04-25</td>
              <td><button class="btn btn-dark" >삭제</button></td>
              <td><button class="btn btn-dark" >수정</button></td>
            </tr>

            <tr style="text-align: center; vertical-align: middle;">
              <td>ict 2차 아파트</td>
              <td>101-302</td>
              <td>방문객</td>
              <td>23구8989</td>
              <td></td>
              <td></td>
              <td>2022-04-26</td>
              <td>2022-04-25 ~ 2022-04-25</td>
              <td><button class="btn btn-dark" >삭제</button></td>
              <td><button class="btn btn-dark" >수정</button></td>
            </tr>

            <tr style="text-align: center; vertical-align: middle;">
              <td>ict 2차 아파트</td>
              <td>101-406</td>
              <td>방문객</td>
              <td>23구8990</td>
              <td></td>
              <td></td>
              <td>2022-04-26</td>
              <td>2022-04-25 ~ 2022-04-25</td>
              <td><button class="btn btn-dark" >삭제</button></td>
              <td><button class="btn btn-dark" >수정</button></td>
            </tr>

            <tr style="text-align: center; vertical-align: middle;">
              <td>ict 2차 아파트</td>
              <td>101-501</td>
              <td>방문객</td>
              <td>12구8991</td>
              <td></td>
              <td></td>
              <td>2022-04-26</td>
              <td>2022-04-25 ~ 2022-04-25</td>
              <td><button class="btn btn-dark" >삭제</button></td>
              <td><button class="btn btn-dark" >수정</button></td>
            </tr>

            <tr style="text-align: center; vertical-align: middle;">
              <td>ict 2차 아파트</td>
              <td>101-601</td>
              <td>방문객</td>
              <td>23구8991</td>
              <td></td>
              <td></td>
              <td>2022-04-26</td>
              <td>2022-04-25 ~ 2022-04-25</td>
              <td><button class="btn btn-dark" >삭제</button></td>
              <td><button class="btn btn-dark" >수정</button></td>
            </tr>

            <tr style="text-align: center; vertical-align: middle;">
              <td>ict 2차 아파트</td>
              <td>101-602</td>
              <td>방문객</td>
              <td>23구8992</td>
              <td></td>
              <td></td>
              <td>2022-04-26</td>
              <td>2022-04-25 ~ 2022-04-25</td>
              <td><button class="btn btn-dark" >삭제</button></td>
              <td><button class="btn btn-dark" >수정</button></td>
            </tr>

            <tr style="text-align: center; vertical-align: middle;">
              <td>ict 2차 아파트</td>
              <td>101-602</td>
              <td>방문객</td>
              <td>23구8993</td>
              <td></td>
              <td></td>
              <td>2022-04-26</td>
              <td>2022-04-25 ~ 2022-04-25</td>
              <td><button class="btn btn-dark" >삭제</button></td>
              <td><button class="btn btn-dark" >수정</button></td>
            </tr>

            <tr style="text-align: center; vertical-align: middle;">
              <td>ict 2차 아파트</td>
              <td>101-603</td>
              <td>방문객</td>
              <td>23구8991</td>
              <td></td>
              <td></td>
              <td>2022-04-26</td>
              <td>2022-04-25 ~ 2022-04-25</td>
              <td><button class="btn btn-dark" >삭제</button></td>
              <td><button class="btn btn-dark" >수정</button></td>
            </tr>

            <tr style="text-align: center; vertical-align: middle;">
              <td>ict 2차 아파트</td>
              <td>101-604</td>
              <td>방문객</td>
              <td>23구8992</td>
              <td></td>
              <td></td>
              <td>2022-04-26</td>
              <td>2022-04-25 ~ 2022-04-25</td>
              <td><button class="btn btn-dark" >삭제</button></td>
              <td><button class="btn btn-dark" >수정</button></td>
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
jb-header.button1{
  float: right;
}
</style>
