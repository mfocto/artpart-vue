<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">검침</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group me-2">
            <button type="button" class="btn btn-sm btn-outline-secondary" @click="toggleReadonly">수정</button>
          </div>
          <div class="input-group">
        <label for="month" class="input-group-text">월 선택:</label>
        <select class="form-select" id="month">
          <option value="1">1월</option>
          <option value="2">2월</option>
          <option value="3" selected>3월</option>
          <option value="4">4월</option>
          <option value="5">5월</option>
          <option value="6">6월</option>
          <option value="7">7월</option>
          <option value="8">8월</option>
          <option value="9">9월</option>
          <option value="10">10월</option>
          <option value="11">11월</option>
          <option value="12">12월</option>
        </select>
      </div>
        </div>
      </div>

      

      
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col" rowspan="2">동</th>
              <th scope="col" rowspan="2">호수</th>
              <th scope="col" colspan="3">전기</th>
              <th scope="col" colspan="3">온수</th>
              <th scope="col" colspan="3">수도</th>
              <th scope="col" colspan="3">난방</th>
            </tr>
            <tr>
              <th scope="col">전월지침</th>
              <th scope="col">당월지침</th>
              <th scope="col">사용량</th>

              <th scope="col">전월지침</th>
              <th scope="col">당월지침</th>
              <th scope="col">사용량</th>

              <th scope="col">전월지침</th>
              <th scope="col">당월지침</th>
              <th scope="col">사용량</th>

              <th scope="col">전월지침</th>
              <th scope="col">당월지침</th>
              <th scope="col">사용량</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>101</td>
              <td>101</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="6488"/></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="6820" /></td>
              <td>332</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1284" /></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1299" /></td>
              <td>15</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="2749" /></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="2759" /></td>
              <td>25</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1575" /></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1602" /></td>
              <td>27</td>
            </tr>
            <tr>
              <td>101</td>
              <td>102</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="6488"/></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="6820" /></td>
              <td>332</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1284" /></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1299" /></td>
              <td>15</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="2749" /></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="2759" /></td>
              <td>25</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1575" /></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1602" /></td>
              <td>27</td>
            </tr>
            <tr>
              <td>101</td>
              <td>201</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="6488"/></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="6820" /></td>
              <td>332</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1284" /></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1299" /></td>
              <td>15</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="2749" /></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="2759" /></td>
              <td>25</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1575" /></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1602" /></td>
              <td>27</td>
            </tr>
            <tr>
              <td>101</td>
              <td>202</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="6488"/></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="6820" /></td>
              <td>332</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1284" /></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1299" /></td>
              <td>15</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="2749" /></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="2759" /></td>
              <td>25</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1575" /></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1602" /></td>
              <td>27</td>
            </tr>
            <tr>
              <td>101</td>
              <td>301</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="6488"/></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="6820" /></td>
              <td>332</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1284" /></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1299" /></td>
              <td>15</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="2749" /></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="2759" /></td>
              <td>25</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1575" /></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1602" /></td>
              <td>27</td>
            </tr>
            <tr>
              <td>101</td>
              <td>302</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="6488"/></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="6820" /></td>
              <td>332</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1284" /></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1299" /></td>
              <td>15</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="2749" /></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="2759" /></td>
              <td>25</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1575" /></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1602" /></td>
              <td>27</td>
            </tr>
            <tr>
              <td>101</td>
              <td>401</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="6488"/></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="6820" /></td>
              <td>332</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1284" /></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1299" /></td>
              <td>15</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="2749" /></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="2759" /></td>
              <td>25</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1575" /></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1602" /></td>
              <td>27</td>
            </tr>
            <tr>
              <td>101</td>
              <td>402</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="6488"/></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="6820" /></td>
              <td>332</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1284" /></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1299" /></td>
              <td>15</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="2749" /></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="2759" /></td>
              <td>25</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1575" /></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1602" /></td>
              <td>27</td>
            </tr>
            <tr>
              <td>101</td>
              <td>501</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="6488"/></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="6820" /></td>
              <td>332</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1284" /></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1299" /></td>
              <td>15</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="2749" /></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="2759" /></td>
              <td>25</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1575" /></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1602" /></td>
              <td>27</td>
            </tr>
            <tr>
              <td>101</td>
              <td>502</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="6488"/></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="6820" /></td>
              <td>332</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1284" /></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1299" /></td>
              <td>15</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="2749" /></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="2759" /></td>
              <td>25</td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1575" /></td>
              <td><input type="text" :readonly="isReadonly" class="custom-input" value="1602" /></td>
              <td>27</td>
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
  },
  data() {
    return {
      isReadonly: true
    };
  },
  methods: {
    toggleReadonly() {
      this.isReadonly = !this.isReadonly;
    }
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
 .custom-input {
    border: none;
    background: transparent;
    text-align: center;
    width: 70px;
  }

</style>
