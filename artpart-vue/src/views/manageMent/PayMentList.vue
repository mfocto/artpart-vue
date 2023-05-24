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
      <th v-for="(item, pm_idx) in monthList" :key="pm_idx"> {{ $dayjs(item.pm_date).format('MM') }}월</th>
    </tr>
  </thead>
  <tbody>
    <!-- 분류와 각각의 금액 -->

    <tr>
      <td>난방비</td>
      <td v-for="(item, pm_idx) in monthList" :key="pm_idx">{{ item.pm_heat }}</td>                     
    </tr>
    <tr>
      <td>급탕비(온수)</td>
      <td v-for="(item, pm_idx) in monthList" :key="pm_idx">{{ item.pm_onsu }}</td> 
    </tr>
    <tr>
      <td>가스사용</td>
      <td v-for="(item, pm_idx) in monthList" :key="pm_idx">{{ item.pm_gas }}</td> 
    </tr>
    <tr>
      <td>전기료</td>
      <td v-for="(item, pm_idx) in monthList" :key="pm_idx">{{ item.pm_elec }}</td> 
    </tr>
    <tr>
      <td>수도료</td>
      <td v-for="(item, pm_idx) in monthList" :key="pm_idx">{{ item.pm_water }}</td> 
    </tr>
    <tr>
      <td>정화조오물수수료</td>
      <td v-for="(item, pm_idx) in monthList" :key="pm_idx">{{ item.pm_septic }}</td> 
    </tr>
    <tr>
      <td>생활폐기물수수료</td>
      <td v-for="(item, pm_idx) in monthList" :key="pm_idx">{{ item.pm_waste }}</td> 
    </tr>
    <tr>
      <td>관리위원회운영비</td>
      <td v-for="(item, pm_idx) in monthList" :key="pm_idx">{{ item.pm_opercost }}</td> 
    </tr>
    <tr>
      <td>건물보험료</td>
      <td v-for="(item, pm_idx) in monthList" :key="pm_idx">{{ item.pm_insure }}</td> 
    </tr>
  </tbody>
</table>
</div>
        <div id="year" style="display:none">
          <h3 class="h4" style="float:left">연도별 월평균 관리비</h3>
          <table class="table table-striped table-sm">
            <thead>
              <tr> 
                <!-- 월 단위 표기 -->
                <th>분류</th>
                <th v-for="(item, pm_idx) in yearList" :key="pm_idx"> {{ $dayjs(item.pm_date).format('YYYY') }}년</th>
              </tr>
            </thead>
            <tbody>
              <!-- 분류와 각각의 금액 -->

              <tr>
                <td>난방비</td>
                <td v-for="(item, pm_idx) in yearList" :key="pm_idx">{{ item.pm_heat }}</td>                     
              </tr>
              <tr>
                <td>급탕비(온수)</td>
                <td v-for="(item, pm_idx) in yearList" :key="pm_idx">{{ item.pm_onsu }}</td> 
              </tr>
              <tr>
                <td>가스사용</td>
                <td v-for="(item, pm_idx) in yearList" :key="pm_idx">{{ item.pm_gas }}</td> 
              </tr>
              <tr>
                <td>전기료</td>
                <td v-for="(item, pm_idx) in yearList" :key="pm_idx">{{ item.pm_elec }}</td> 
              </tr>
              <tr>
                <td>수도료</td>
                <td v-for="(item, pm_idx) in yearList" :key="pm_idx">{{ item.pm_water }}</td> 
              </tr>
              <tr>
                <td>정화조오물수수료</td>
                <td v-for="(item, pm_idx) in yearList" :key="pm_idx">{{ item.pm_septic }}</td> 
              </tr>
              <tr>
                <td>생활폐기물수수료</td>
                <td v-for="(item, pm_idx) in yearList" :key="pm_idx">{{ item.pm_waste }}</td> 
              </tr>
              <tr>
                <td>관리위원회운영비</td>
                <td v-for="(item, pm_idx) in yearList" :key="pm_idx">{{ item.pm_opercost }}</td> 
              </tr>
              <tr>
                <td>건물보험료</td>
                <td v-for="(item, pm_idx) in yearList" :key="pm_idx">{{ item.pm_insure }}</td> 
              </tr>
            </tbody>
          </table>
          </div>
        </div>
  </template>
  
  <script>
  import dayjs from 'dayjs';
  import 'dayjs/locale/ko';
  import { Chart, registerables } from 'chart.js';
  Chart.register(...registerables)
  
  export default {
   component:{
      dayjs
   },
    data() {
    return {
      list: {},
      monthList: {},
      yearList: {},
      pmdate: {},
      sixMonthList: {},
      labels: {},
      data: {},
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
  },
    mounted(){
      this.payMentList();
      this.$dayjs = dayjs; // dayjs를 Vue 인스턴스의 속성으로 등록합니다
      this.$dayjs.locale('ko'); // 사용할 로케일을 설정합니다
     
     
      
    },
    methods:{
      payMentList() {
      this.$axios.get(this.$serverUrl + "/payment/list", {
      params: this.requestbody,
      headers: {}
      
    }).then((res) => {
      this.list = res.data;
      this.monthList = this.list.monthList;
      this.yearList = this.list.yearList;
      this.sixMonthList = this.list.sixMonthList;
      console.log(this.monthList);
      console.log(this.yearList);
      console.log(this.sixMonthList);
      this.createChart();

    })
    .catch((error) => {
      if (error.response) {
        // 서버가 응답한 상태 코드가 2xx가 아닌 경우
        console.log('응답 상태 코드:', error.response.status);
        console.log('응답 데이터:', error.response.data);
      } else if (error.request) {
        // 요청은 서버에 전송되었지만 응답이 없는 경우
        console.log('요청이 전송되었지만 응답이 없습니다.');
        console.log('요청:', error.request);
      } else {
        // 요청을 보내는 동안 오류가 발생한 경우
        console.log('오류 발생:', error.message);
      }
    });
      },
      createChart() {
      var labels = [];
      var data = [];
      for (let i = 0; i < 6; i++) {
      var index = this.sixMonthList[i];
      console.log("11" + JSON.stringify(index));
      data.push(index.pm_heat);
      labels.push(dayjs(index.pm_date).format("YY년 MM월"));
    
    }
  new Chart(this.$refs.lineChart, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: '관리비',
          data: data,
          backgroundColor: ['rgb(5, 191, 219, 0.2)'],
          borderColor: ['rgba(5, 191, 219, 2)'],
          borderWidth: 1,
          pointBorderWidth: 8,
        },
      ],
    },
    options: this.options,
      });
      //우리동 관리비
    },change1(){
      document.getElementById('mydong').style.display = 'block';
      document.getElementById('month').style.display = 'none';
      document.getElementById('year').style.display = 'none';
      
      //월별 관리비
    },change2(){
      document.getElementById('mydong').style.display = 'none';
      document.getElementById('month').style.display = 'block';
      document.getElementById('year').style.display = 'none';
      //년도별 관리비
    },change3(){
      document.getElementById('mydong').style.display = 'none';
      document.getElementById('month').style.display = 'none';
      document.getElementById('year').style.display = 'block';

    //전체 리스트
    }
    },
  
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
  