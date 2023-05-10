<template>
  <div>
    <div  align="left" class="jb-header">
        <h1>직원 관리</h1>
    </div>
        
  </div>
      <br>
      <br>
      <div align="left" class="jb-header" ><h2>직원등록</h2> 
      </div>
      
      <div>
        <table style="width:100%; border : 1px solid #000 ;">
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">이미지 </font></td>
          <td>
              <input id="customFile" type="file" @change="handleFileChange"/>
               <label class="custom-file-label" for="customFile">{{file_name}}</label>
          </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">사원번호</font></td>
          <td><input style="width:250px;height:30px;" type="number" id="empId"></td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td> <font size="5">사원구분 </font></td>
          <td>
          <h3 style="margin: 0; padding: 0; vertical-align:middle;">
            <input style="width:20px; height:20px;" type="checkbox" id="empPermanentId" name="empPermanentId" value="정규직"> &nbsp; 정규직 &nbsp; 
            <input style="width:20px; height:20px " type="checkbox" id="empPermanentId" name="empPermanentId" value="계약직"> &nbsp; 계약직 &nbsp; 
            <input style="width:20px; height:20px " type="checkbox" id="empPermanentId" name="empPermanentId" value="알바"> &nbsp; 알바
          </h3>
          </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">소속 </font></td>
          <td>
            <select style="width: 250px; height: 30px;" name="empDepartmentId" id="empDepartmentId" v-model="empDepartmentId">
                <option selected>소속을 선택하시오</option>
                <option value="관리직-행정직">관리직-행정직</option>
                <option value="관리직-경비직">관리직-경비직</option>
                <option value="관리직-청소직">관리직-청소직</option>
                <option value="기술직-전기">기술직-전기</option>
                <option value="기술직-설비">기술직-설비</option>
                <option value="기술직-열선">기술직-열선</option>
              </select>

          </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">직급</font></td>
          <td style="margin: 0; padding: 0; vertical-align:middle;">
            <select style="width: 250px; height: 30px;" name="empJobId" id="empJobId" v-model="empJobId">
                <option value="반장">반장</option>
                <option value="소장">소장</option>
                <option value="기사">기사</option>
                <option value="사무원">사무원</option>
                <option value="관리원">관리원</option>
                <option value="미화원">미화원</option>
              </select>
          </td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">사원명</font></td>
          <td><input style="width:250px;height:30px;" id="empName" type="text"></td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">이메일</font></td>
          <td><input style="width:250px;height:30px;" id="empEmail" type="text"></td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">비밀번호</font></td>
          <td><input style="width:250px;height:30px;" id="empPwd" type="password"></td>
        </tr>
        <tr style="border : 1px solid #000 ;">
          <td><font size="5">주소</font></td>
          <td><input style="width:250px;height:30px;" id="empAddress" type="text"></td>
        </tr>

        <tr style="border : 1px solid #000 ;">
          <td><font size="5">연락처</font></td>
          <td><input style="width:250px;height:30px;" id="empPhone" type="tel"></td>
        </tr>

        <tr style="border : 1px solid #000 ;">
          <th><font size="5">입사일</font></th>
          <th><input style="width:250px;height:30px;font-size: 20px;"  type="date" name="empHireDate" id="empHireDate" min="2018-01-01" max="2022-12-31"></th>
        </tr>

        <tr style="border : 1px solid #000 ;">
          <td><font size="5">차량번호</font></td>
          <td><input style="width:250px;height:30px;" type="text"></td>
        </tr>

        <tr style="border : 1px solid #000 ;">
          <td><font size="5">비고</font></td>
          <td><input style="width:250px;height:30px;" type="text"></td>
        </tr>
        
        </table>
      </div>
      <br>
      <br>
      <div class="button1">
            <button style="float: center;" type="submit" class="btn btn-dark">등록</button>  &nbsp; 
            <button type="reset" class="btn btn-dark">내용삭제</button>
            <button style="float: right;" type="button" class="btn btn-dark"><router-link to="/adminList">목록</router-link></button>
      </div>



</template>

<script>
export default {

  
  
  

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
