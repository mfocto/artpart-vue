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
        <!-- 이번달 관리비 -->
        <h3 class="h4" style="float:left" v-for="(item, index) in recentlyMonth" :key="index">
          {{ $dayjs(item.lastpm_date).format("YYYY년 MM월") }} 관리비</h3>
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">항목</th>
                <th scope="col">당월</th>
                <th scope="col">전월</th>
                <th scope="col">증감</th>
              </tr>
            </thead>
            <tbody v-for="(item, index) in recentlyMonth" :key="index">
              <tr>
                <td>난방비</td>
                <td>{{comma(item.lastpm_heat)}}원</td>
                <td>{{comma(item.pm_heat)}}원</td>
                <td>{{comma(item.pm_heat - item.lastpm_heat)}}원</td>
              </tr>
              <tr>
                <td>급탕비(온수)</td>
                <td>{{comma(item.lastpm_onsu)}}원</td>
                <td>{{comma(item.pm_onsu)}}원</td>
                <td>{{comma(item.pm_onsu - item.lastpm_onsu)}}원</td>
              </tr>
              <tr>
                <td>가스사용</td>
                <td>{{comma(item.lastpm_gas)}}원</td>
                <td>{{comma(item.pm_gas)}}원</td>
                <td>{{comma(item.pm_gas - item.lastpm_gas)}}원</td>
              </tr>
              <tr>
                <td>전기료</td>
                <td>{{comma(item.lastpm_elec)}}원</td>
                <td>{{comma(item.pm_elec)}}원</td>
                <td>{{comma(item.pm_elec - item.lastpm_elec)}}원</td>
              </tr>
              <tr>
                <td>수도료</td>
                <td>{{comma(item.lastpm_water)}}원</td>
                <td>{{comma(item.pm_water)}}원</td>
                <td>{{comma(item.pm_water - item.lastpm_water)}}원</td>
              </tr>
              <tr>
                <td>정화조오물수수료</td>
                <td>{{comma(item.lastpm_septic)}}원</td>
                <td>{{comma(item.pm_septic)}}원</td>
                <td>{{comma(item.pm_septic - item.lastpm_septic)}}원</td>
              </tr>
              <tr>
                <td>생활폐기물수수료</td>
                <td>{{comma(item.lastpm_waste)}}원</td>
                <td>{{comma(item.pm_waste)}}원</td>
                <td>{{comma(item.pm_waste - item.lastpm_waste)}}원</td>
              </tr>
              <tr>
                <td>관리위원회운영비</td>
                <td>{{comma(item.lastpm_opercost)}}원</td>
                <td>{{comma(item.pm_opercost)}}원</td>
                <td>{{comma(item.pm_opercost - item.lastpm_opercost)}}원</td>
              </tr>
              <tr>
                <td>건물보험료</td>
                <td>{{comma(item.lastpm_insure)}}원</td>
                <td>{{comma(item.pm_insure)}}원</td>
                <td>{{comma(item.pm_insure - item.lastpm_insure)}}원</td>
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
      <th v-for="(item, index) in monthList" :key="index"> {{ $dayjs(item.pm_date).format('MM') }}월</th>
    </tr>
  </thead>
  <tbody>
    <!-- 분류와 각각의 금액 -->

    <tr>
      <td>난방비</td>
      <td v-for="(item, index) in monthList" :key="index">{{comma(item.pm_heat) }}원</td>                     
    </tr>
    <tr>
      <td>급탕비(온수)</td>
      <td v-for="(item, index) in monthList" :key="index">{{ comma(item.pm_onsu) }}원</td> 
    </tr>
    <tr>
      <td>가스사용</td>
      <td v-for="(item, index) in monthList" :key="index">{{ comma(item.pm_gas) }}원</td> 
    </tr>
    <tr>
      <td>전기료</td>
      <td v-for="(item, index) in monthList" :key="index">{{ comma(item.pm_elec) }}원</td> 
    </tr>
    <tr>
      <td>수도료</td>
      <td v-for="(item, index) in monthList" :key="index">{{ comma(item.pm_water) }}원</td> 
    </tr>
    <tr>
      <td>정화조오물수수료</td>
      <td v-for="(item, index) in monthList" :key="index">{{ comma(item.pm_septic) }}원</td> 
    </tr>
    <tr>
      <td>생활폐기물수수료</td>
      <td v-for="(item, index) in monthList" :key="index">{{ comma(item.pm_waste) }}원</td> 
    </tr>
    <tr>
      <td>관리위원회운영비</td>
      <td v-for="(item, index) in monthList" :key="index">{{ comma(item.pm_opercost) }}원</td> 
    </tr>
    <tr>
      <td>건물보험료</td>
      <td v-for="(item, index) in monthList" :key="index">{{ comma(item.pm_insure) }}원</td> 
    </tr>
    <tr>
      <td>총합</td>
      <td v-for="(item, index) in monthList" :key="index">{{ comma(item.pm_heat + item.pm_onsu + item.pm_gas + item.pm_elec + item.pm_water +
      item.pm_septic + item.pm_waste + item.pm_opercost + item.pm_insure) }}원</td> 
    </tr>
  </tbody>
</table>
</div>
        <div id="year" style="display:none">
          <h3 class="h4" style="float:left">연도별 월평균 관리비</h3>
          <table class="table table-striped table-sm">
            <thead>
              <tr> 
                <!-- 연도별 단위 표기 -->
                <th>분류</th>
                <th v-for="(item, index) in yearList" :key="index"> {{ $dayjs(item.pm_date).format('YYYY') }}년</th>
              </tr>
            </thead>
            <tbody>
              <!-- 분류와 각각의 금액 -->

              <tr>
                <td>난방비</td>
                <td v-for="(item, index) in yearList" :key="index">{{ comma(item.pm_heat) }}원</td>                     
              </tr>
              <tr>
                <td>급탕비(온수)</td>
                <td v-for="(item, index) in yearList" :key="index">{{ comma(item.pm_onsu) }}원</td> 
              </tr>
              <tr>
                <td>가스사용</td>
                <td v-for="(item, index) in yearList" :key="index">{{ comma(item.pm_gas) }}원</td> 
              </tr>
              <tr>
                <td>전기료</td>
                <td v-for="(item, index) in yearList" :key="index">{{ comma(item.pm_elec) }}원</td> 
              </tr>
              <tr>
                <td>수도료</td>
                <td v-for="(item, index) in yearList" :key="index">{{ comma(item.pm_water) }}원</td> 
              </tr>
              <tr>
                <td>정화조오물수수료</td>
                <td v-for="(item, index) in yearList" :key="index">{{ comma(item.pm_septic) }}원</td> 
              </tr>
              <tr>
                <td>생활폐기물수수료</td>
                <td v-for="(item, index) in yearList" :key="index">{{ comma(item.pm_waste) }}원</td> 
              </tr>
              <tr>
                <td>관리위원회운영비</td>
                <td v-for="(item, index) in yearList" :key="index">{{ comma(item.pm_opercost) }}원</td> 
              </tr>
              <tr>
                <td>건물보험료</td>
                <td v-for="(item, index) in yearList" :key="index">{{ comma(item.pm_insure) }}원</td> 
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
      sixMonthList: {},
      recentlyMonth: {},
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
      comma(value) {

      // 여기에서 필터링 로직을 수행하고, 필터링된 값을 반환합니다.
      //소수점까지 짜르고 반올림후 3자리단위 끊기
      return value.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      },
      payMentList() {
      const member = JSON.parse(this.$cookie.get('member'));
      console.log(member);
      const id = member.member_idx
      this.$axios.get(this.$serverUrl + "/payment/list/" + id, {
      params: this.requestbody,
      headers: {}
      
    }).then((res) => {
      if (res.data.result_code === "OK") {
      //총 리스트 담은 MAP
      this.list = res.data.data;
      //월별 관리비
      this.monthList = this.list.monthList;
      //연도별 관리비
      this.yearList = this.list.yearList;
      //최근 6개월 관리비 차트용
      this.sixMonthList = this.list.sixMonthList;
      //이번달 관리비
      this.recentlyMonth = this.list.recentlyMonth
      }
      //차트 메소드실행
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
  