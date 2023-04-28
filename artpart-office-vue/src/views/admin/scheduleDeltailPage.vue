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
        <h2>직원 스케줄 정보&nbsp; </h2>
      </div>

      <div>
        <img src = "../../assets/images/차사원.jpeg" />
      </div>

      <div>
        <table style="width:100%; border : 1px solid #000 ;">
          <tr style="border : 1px solid #000 ;">
          <td> <font size="5">사원구분 </font></td>
          <td>
            <font size="5"> 정규직 </font>
          </td>
        </tr>
        
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">소속 </font></td>
          <td>
            <font size="5"> 관리 </font>
          </td>
        </tr>

        <tr style="border : 1px solid #000 ;">
          <td><font size="5">직위</font></td>
          <td style="margin: 0; padding: 0; vertical-align:middle;">
              <font size="5"> 사무원 </font>
          </td>
        </tr>

        <tr style="border : 1px solid #000 ;">
          <td><font size="5">직원이름</font></td>
          <td>
            <font size="5">차사원</font>

        </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">연락처</font></td>
          <td>
            <!-- <input style="width:250px;height:30px;" type="text"> -->
            <font size="5">010-9283-0293</font>
          </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td> <font size="5">근무 날짜</font></td>
          <td>
            <!-- <input style="width:500px;height:50px;font-size: 30px;" type="date" id="start" name="trip-start" value="2022-04-08" min="2018-01-01" max="2022-12-31"> -->
            <font size="5">2022-04-08</font>
          </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">근무 시간</font></td>
          <td>
            <!-- <input type="time" value="09:00:00"> &nbsp; ~ &nbsp; <input type="time" value="18:00:00"> -->
            <font size="5">09:00:00</font> &nbsp; ~ &nbsp; <font size="5">18:00:00</font>
            </td>
        </tr>
        
      </table>
      </div>
      <div class="button1">
            <button style="float: center;" type="button" class="btn btn-dark"><router-link to="/scheduleChangeAdmin">직원 변경</router-link></button>  &nbsp; 
            <button style="float: center;" type="button" class="btn btn-dark"><router-link to="/scheduleChangeTime">시간 변경</router-link></button>  &nbsp; 
            <button type="button" class="btn btn-dark">삭제</button>
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
    
