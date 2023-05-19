<template>

  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">우리집 관리비 조회하기</h1>  
    </div>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 class="h4">관리비 사용 내역</h2>  
    </div>
    <div class="chart-container">
      <canvas ref="lineChart"/>
    </div>
    <br>
    <div class="table-responsive">
      <input type="button" value="우리 동 관리비" style="width:150pt;height:30pt;" @click="change1">&nbsp;
      <input type="button" value="월별 관리비" style="width:150pt;height:30pt;" @click="change2">&nbsp;
      <input type="button"  value="연도별 관리비" style="width:150pt;height:30pt;" @click="change3">&nbsp;
      <br>
      <hr>
      <div id="mydong" style="display:none">
        <h3 class="h4" style="float:left">2023년 4월 관리비</h3>
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">항목</th>
                <th scope="col">당월</th>
                <th scope="col">전월</th>
                <th scope="col">증감</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>일반관리비</td>
                <td>57,750</td>
                <td>59,880</td>
                <td>-2,130</td>
              </tr>
              <tr>
                <td>청소비</td>
                <td>16,180</td>
                <td>16,180</td>
                <td>0</td>
              </tr>
              <tr>
                <td>소독비</td>
                <td>750</td>
                <td>750</td>
                <td>0</td>
              </tr>
              <tr>
                <td>승강기유지비</td>
                <td>2,720</td>
                <td>2,720</td>
                <td>0</td>
              </tr>
              <tr>
                <td>수선유지비</td>
                <td>10,790</td>
                <td>13,670</td>
                <td>-2,880</td>
              </tr>
              <tr>
                <td>전기수선충당금</td>
                <td>28,660</td>
                <td>28.660</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="month" style="display:none">
  <h3 class="h4" style="float:left">월별 관리비</h3>
  <table class="table table-striped table-sm">
  <thead>
    <tr> 
      <!-- 월 단위 표기 -->
      <th>분류</th>
      <th v-for="(item, pm_idx) in list" :key="pm_idx">
        {{ item.pm_date }}월
      </th>
    </tr>
  </thead>
  <tbody>
    <!-- 분류와 각각의 금액 -->

    <tr>
      <td>난방비</td>
      <td v-for="(item, pm_idx) in list" :key="pm_idx">{{ item.pm_heat }}</td>                     
    </tr>
    <tr>
      <td>급탕비(온수)</td>
      <td v-for="(item, pm_idx) in list" :key="pm_idx">{{ item.pm_onsu }}</td> 
    </tr>
    <tr>
      <td>가스사용</td>
      <td v-for="(item, pm_idx) in list" :key="pm_idx">{{ item.pm_gas }}</td> 
    </tr>
    <tr>
      <td>전기료</td>
      <td v-for="(item, pm_idx) in list" :key="pm_idx">{{ item.pm_elec }}</td> 
    </tr>
    <tr>
      <td>수도료</td>
      <td v-for="(item, pm_idx) in list" :key="pm_idx">{{ item.pm_water }}</td> 
    </tr>
    <tr>
      <td>정화조오물수수료</td>
      <td v-for="(item, pm_idx) in list" :key="pm_idx">{{ item.pm_septic }}</td> 
    </tr>
    <tr>
      <td>생활폐기물수수료</td>
      <td v-for="(item, pm_idx) in list" :key="pm_idx">{{ item.pm_waste }}</td> 
    </tr>
    <tr>
      <td>관리위원회운영비</td>
      <td v-for="(item, pm_idx) in list" :key="pm_idx">{{ item.pm_opercost }}</td> 
    </tr>
    <tr>
      <td>건물보험료</td>
      <td v-for="(item, pm_idx) in list" :key="pm_idx">{{ item.pm_insure }}</td> 
    </tr>
  </tbody>
</table>
</div>
        <div id="year" style="display:none">
          <h3 class="h4" style="float:left">연도별 월평균 관리비</h3>
          <br>
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">분류</th>
                <th scope="col">2014년</th>
                <th scope="col">2015년</th>
                <th scope="col">2016년</th>
                <th scope="col">2017년</th>
                <th scope="col">2018년</th>
                <th scope="col">2019년</th>
                <th scope="col">2020년</th>
                <th scope="col">2021년</th>
                <th scope="col">2022년</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>공용관리비</td>
                <td>723</td>
                <td>722</td>
                <td>733</td>
                <td>781</td>
                <td>843</td>
                <td>925</td>
                <td>951</td>
                <td>1,029</td>
                <td>1,053</td>
              </tr>
              <tr>
                <td>개별사용료</td>
                <td>970</td>
                <td>907</td>
                <td>835</td>
                <td>790</td>
                <td>808</td>
                <td>784</td>
                <td>821</td>
                <td>857</td>
                <td>898</td>
              </tr>
              <tr>
                <td>장기수선충당금 원부과액</td>
                <td>169</td>
                <td>169</td>
                <td>169</td>
                <td>169</td>
                <td>152</td>
                <td>204</td>
                <td>247</td>
                <td>247</td>
                <td>247</td>
              </tr>
              <tr>
                <td>합계</td>
                <td>1,862</td>
                <td>1,798</td>
                <td>1,737</td>
                <td>1,740</td>
                <td>1,803</td>
                <td>1,913</td>
                <td>2,018</td>
                <td>2,133</td>
                <td>2,198</td>
              </tr>
              <tr>
                <td>잡수입</td>
                <td>93</td>
                <td>111</td>
                <td>98</td>
                <td>125</td>
                <td>140</td>
                <td>170</td>
                <td>150</td>
                <td>146</td>
                <td>166</td>>
              </tr>
             
            </tbody>
          </table>
          </div>
        </div>
  </template>
  
  <script>
  import { Chart, registerables } from 'chart.js'
  import dayjs from 'dayjs';
  Chart.register(...registerables)
  
  export default {
    component: { 
              dayjs
          },
    data:() => ({
      list: {},
      month: {},
      type: 'line',
      data: {
        labels: [ '22년 10월', '22년 11월', '22년 12월', '23년 01월', '23년 02월', '23년 03월'],
        datasets: [{
          label: '관리비',
          data: [ 800000, 350000, 420000, 1400000, 200000, 200000 ],
          backgroundColor: [
            'rgb(5, 191, 219, 0.2)',
          ],
          borderColor: [
            'rgba(5, 191, 219, 2)',
          ],
          borderWidth: 1,
          pointBorderWidth: 8
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    }),
  
    mounted(){
      this.createChart()
      
    },
    methods:{
      createChart(){
        new Chart(this.$refs.lineChart, {
          type:'line',
          data:this.data,
          options:this.options
        })      
      },  
      change1(){
      document.getElementById('mydong').style.display = 'block';
      document.getElementById('month').style.display = 'none';
      document.getElementById('year').style.display = 'none';
      
    },change2(){
      document.getElementById('mydong').style.display = 'none';
      document.getElementById('month').style.display = 'block';
      document.getElementById('year').style.display = 'none';
      this.payMentList();
      console.log(JSON.stringify())
  
    },change3(){
      document.getElementById('mydong').style.display = 'none';
      document.getElementById('month').style.display = 'none';
      document.getElementById('year').style.display = 'block';
    },
    payMentList(){
      this.$axios.get(this.$serverUrl + "/payment/list", {
        params : this.requestbody,
        headers: {}
      }).then((res) =>{
        if(res.data.result_code === "OK"){
          this.list = res.data.data;
          this.list.pm_date = dayjs(this.list.pm_date).format("MM");
          
        }
      }).catch(error =>{
        console.error(error);
      })
    }
  }
    
  }
  
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .chart-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
  }
  
  @media screen and (max-width: 768px) {
    .chart-container {
      height: 300px;
    }
  }
  
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
  