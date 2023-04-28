<TimePicker :hour="selectedHour" :minute="selectedMinute" />
<template>
    <div>
    <div  align="left" class="jb-header">
        <h1>직원 관리</h1>
    </div>
        
    </div>
      <br>
      <br>
      <div align="left" class="jb-header" >
        <h2>직원 스케줄 등록&nbsp; </h2>
      </div>

      <div>
        <table style="width:100%; border : 1px solid #000 ;">
          <tr style="border : 1px solid #000 ;">
          <td> <font size="5">사원구분 </font></td>
          <td>
          <h3 style="margin: 0; padding: 0; vertical-align:middle;">
            <input style="width:20px; height:20px;" type="checkbox" name="car" value="member"> &nbsp; 정규직 &nbsp; 
            <input style="width:20px; height:20px " type="checkbox" name="car" value="noentry"> &nbsp; 계약직 &nbsp; 
            <input style="width:20px; height:20px " type="checkbox" name="car" value="noentry"> &nbsp; 알바
          </h3>
          </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">소속 </font></td>
          <td>
            <select style="width: 250px; height: 30px;" name="car" id="car">
                <option value="member">관리원</option>
                <option value="member">경비원</option>
                <option value="noentry">미화원</option>
            </select>

          </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">직위</font></td>
          <td style="margin: 0; padding: 0; vertical-align:middle;">
            <select style="width: 250px; height: 30px;" name="car" id="car">
                <option value="member">반장</option>
                <option value="member">소장</option>
                <option value="noentry">기사</option>
                <option value="noentry">사무원</option>
                <option value="noentry">관리원</option>
                <option value="noentry">미화원</option>
              </select> 
          </td>
        </tr>
          <tr style="border : 1px solid #000 ;">
          <td><font size="5">직원이름</font></td>
          <td>
            <select style="width: 250px; height: 30px;" name="car" id="car">
                <option value="member">차사원</option>
                <option value="member">이과장</option>
            </select>

          </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td> <font size="5">근무 날짜</font></td>
          <td>
            <input style="width:500px;height:50px;font-size: 30px;" type="date" id="start" name="trip-start" value="2022-04-26" min="2018-01-01" max="2022-12-31">
          </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">근무 시간</font></td>
          <td><input type="time"></td>
        </tr>
        
      </table>
      </div>
      <div class="button1">
            <button style="float: center;" type="button" class="btn btn-dark">등록</button>  &nbsp; 
            <button type="button" class="btn btn-dark">내용삭제</button>
            <button style="float: right;" type="button" class="btn btn-dark"><router-link to="/scheduleList">목록</router-link></button>
      </div>
</template>

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
    
