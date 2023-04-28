<template>
  <div>
    <div  align="left" class="jb-header">
        <h1>입주민 차량 관리</h1>
    </div>
        
  </div>
      <br>
      <br>
      <div align="left" class="jb-header" ><h2>입주민 차량 신청 확인</h2> 
      </div>
      
      <div>
        <table style="width:100%; border : 1px solid #000 ;">
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">아파트 명 </font></td><td><font size="5">ict 2차 아파트</font></td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td> <font size="5">동호 </font></td><td><font size="5">101-101</font></td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">입주민 전화 번호 </font></td><td><font size="5">01012345678</font></td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">차량구분</font></td>
          <td><font size="5">입주민</font></td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">차량번호</font></td>
          <!-- <td><input style="width:500px;height:50px;" type="text"></td> -->
          <td><font size="5">12가3456</font></td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">차종</font></td>
          <td><font size="5">지바겐</font></td>
          <!-- <td><input style="width:500px;height:50px;" type="text"></td> -->
        </tr>
        <!-- <tr style="border : 1px solid #000 ;">
          <td><font size="5">비고</font></td>
          <td><input style="width:500px;height:50px;" type="text"></td>
        </tr> -->
        <tr style="border : 1px solid #000 ;">
          <th><font size="5">등록일시</font></th>
          <!-- <th><input style="width:500px;height:50px;font-size: 30px;" type="date" id="start" name="trip-start" value="2022-04-26" min="2018-01-01" max="2022-12-31"></th> -->
          <th><font size="5">2022.04.26</font></th>
        </tr>
        </table>
      </div>
      <br>
      <br>
      <div class="button1">
            <button style="float: center;" type="button" class="btn btn-dark">승락</button>  &nbsp; 
            <button type="button" class="btn btn-dark">반려</button>
            <button style="float: right;" type="button" class="btn btn-dark"><router-link to="/memberCarList">목록</router-link></button>
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
