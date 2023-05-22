<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">시설관리</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="input-group">
          <label for="month" class="input-group-text">항목:</label>
          <select class="form-select" id="category" v-model="selectedOption">
            
            <option value="electric">전기</option>
            <option value="gas">가스</option>
            <option value="elevator">승강기</option>
            <option value="playground">놀이터</option>
          </select>
        </div>
        
      </div>   
  </div>
  <!-- 전기점검 영역 시작 -->
      <div class="table-responsive" id="electric" v-if="selectedOption === 'electric'">
        <div class="d-flex justify-content-end">
          <router-link to="/electric/write" class="btn btn-sm btn-outline-secondary">작성</router-link>
        </div>
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">번호</th>
              <th scope="col">제목</th>
              <th scope="col">작성자</th>
              <th scope="col">일자</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>510</td>
              <td>
                <router-link to="/seesul/electric" class="text-decoration-none">2023년4월26일 전기점검</router-link>
              </td>
              <td>작성자3</td>
              <td>2023-04-26</td>
            </tr>
            <tr>
              <td>509</td>
              <td>
                <router-link to="/seesul/electric" class="text-decoration-none">2023년4월25일 전기점검</router-link>
              </td>
              <td>작성자3</td>
              <td>2023-04-25</td>
            </tr>
            <tr>
              <td>508</td>
              <td>
                <router-link to="/seesul/electric" class="text-decoration-none">2023년4월19일 전기점검</router-link>
              </td>
              <td>작성자1</td>
              <td>2023-04-19</td>
            </tr>
            <tr>
              <td>507</td>
              <td>
                <router-link to="/seesul/electric" class="text-decoration-none">2023년4월17일 전기점검</router-link>
              </td>
              <td>작성자2</td>
              <td>2023-04-17</td>
            </tr>
            <tr>
              <td>506</td>
              <td>
                <router-link to="/seesul/electric" class="text-decoration-none">2023년4월16일 전기점검</router-link>
              </td>
              <td>작성자1</td>
              <td>2023-04-16</td>
            </tr>
            <tr>
              <td>505</td>
              <td>
                <router-link to="/seesul/electric" class="text-decoration-none">2023년4월14일 전기점검</router-link>
              </td>
              <td>작성자3</td>
              <td>2023-04-14</td>
            </tr>
            <tr>
              <td>504</td>
              <td>
                <router-link to="/seesul/electric" class="text-decoration-none">2023년4월10일 전기점검</router-link>
              </td>
              <td>작성자1</td>
              <td>2023-04-10</td>
            </tr>
            <tr>
              <td>503</td>
              <td>
                <router-link to="/seesul/electric" class="text-decoration-none">2023년4월07일 전기점검</router-link>
              </td>
              <td>작성자2</td>
              <td>2023-04-07</td>
            </tr>
            <tr>
              <td>502</td>
              <td>
                <router-link to="/seesul/electric" class="text-decoration-none">2023년4월06일 전기점검</router-link>
              </td>
              <td>작성자3</td>
              <td>2023-04-06</td>
            </tr>
            <tr>
              <td>501</td>
              <td>
                <router-link to="/seesul/electric" class="text-decoration-none">2023년4월05일 전기점검</router-link>
              </td>
              <td>작성자1</td>
              <td>2023-04-05</td>
            </tr>
            
          </tbody>
        </table>
      </div>
      <!-- 전기점검 영역 끝 -->

      <!-- 가스점검 영역 시작 -->
      <div class="table-responsive" id="gas" v-if="selectedOption === 'gas'">
        <div class="d-flex justify-content-end">
          <router-link to="/gas-write" class="btn btn-sm btn-outline-secondary">작성</router-link>
        </div>
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">번호</th>
              <th scope="col">제목</th>
              <th scope="col">작성자</th>
              <th scope="col">일자</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>510</td>
              <td>
                <router-link to="/seesul/gas" class="text-decoration-none">2023년4월26일 가스점검</router-link>
              </td>
              <td>작성자3</td>
              <td>2023-04-26</td>
            </tr>
            <tr>
              <td>509</td>
              <td>
                <router-link to="/seesul/gas" class="text-decoration-none">2023년4월25일 가스점검</router-link>
              </td>
              <td>작성자3</td>
              <td>2023-04-25</td>
            </tr>
            <tr>
              <td>508</td>
              <td>
                <router-link to="/seesul/gas" class="text-decoration-none">2023년4월19일 가스점검</router-link>
              </td>
              <td>작성자1</td>
              <td>2023-04-19</td>
            </tr>
            <tr>
              <td>507</td>
              <td>
                <router-link to="/seesul/gas" class="text-decoration-none">2023년4월17일 가스점검</router-link>
              </td>
              <td>작성자2</td>
              <td>2023-04-17</td>
            </tr>
            <tr>
              <td>506</td>
              <td>
                <router-link to="/seesul/gas" class="text-decoration-none">2023년4월16일 가스점검</router-link>
              </td>
              <td>작성자1</td>
              <td>2023-04-16</td>
            </tr>
            <tr>
              <td>505</td>
              <td>
                <router-link to="/seesul/gas" class="text-decoration-none">2023년4월14일 가스점검</router-link>
              </td>
              <td>작성자3</td>
              <td>2023-04-14</td>
            </tr>
            <tr>
              <td>504</td>
              <td>
                <router-link to="/seesul/gas" class="text-decoration-none">2023년4월10일 가스점검</router-link>
              </td>
              <td>작성자1</td>
              <td>2023-04-10</td>
            </tr>
            <tr>
              <td>503</td>
              <td>
                <router-link to="/seesul/gas" class="text-decoration-none">2023년4월07일 가스점검</router-link>
              </td>
              <td>작성자2</td>
              <td>2023-04-07</td>
            </tr>
            <tr>
              <td>502</td>
              <td>
                <router-link to="/seesul/gas" class="text-decoration-none">2023년4월06일 가스점검</router-link>
              </td>
              <td>작성자3</td>
              <td>2023-04-06</td>
            </tr>
            <tr>
              <td>501</td>
              <td>
                <router-link to="/seesul/gas" class="text-decoration-none">2023년4월05일 가스점검</router-link>
              </td>
              <td>작성자1</td>
              <td>2023-04-05</td>
            </tr>
            
          </tbody>
        </table>
      </div>
      <!-- 가스점검 영역 끝 -->

      <!-- 승강기점검 영역 시작 -->
      <div class="table-responsive" id="elevator" v-if="selectedOption === 'elevator'">
        <div class="d-flex justify-content-end">
          <router-link to="/elevator-write" class="btn btn-sm btn-outline-secondary">작성</router-link>
        </div>
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">번호</th>
              <th scope="col">제목</th>
              <th scope="col">작성자</th>
              <th scope="col">일자</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>510</td>
              <td>
                <router-link to="/seesul/elevator" class="text-decoration-none">2023년4월26일 승강기점검</router-link>
              </td>
              <td>작성자3</td>
              <td>2023-04-26</td>
            </tr>
            <tr>
              <td>509</td>
              <td>
                <router-link to="/seesul/elevator" class="text-decoration-none">2023년4월25일 승강기점검</router-link>
              </td>
              <td>작성자3</td>
              <td>2023-04-25</td>
            </tr>
            <tr>
              <td>508</td>
              <td>
                <router-link to="/seesul/elevator" class="text-decoration-none">2023년4월19일 승강기점검</router-link>
              </td>
              <td>작성자1</td>
              <td>2023-04-19</td>
            </tr>
            <tr>
              <td>507</td>
              <td>
                <router-link to="/seesul/elevator" class="text-decoration-none">2023년4월17일 승강기점검</router-link>
              </td>
              <td>작성자2</td>
              <td>2023-04-17</td>
            </tr>
            <tr>
              <td>506</td>
              <td>
                <router-link to="/seesul/elevator" class="text-decoration-none">2023년4월16일 승강기점검</router-link>
              </td>
              <td>작성자1</td>
              <td>2023-04-16</td>
            </tr>
            <tr>
              <td>505</td>
              <td>
                <router-link to="/seesul/elevator" class="text-decoration-none">2023년4월14일 승강기점검</router-link>
              </td>
              <td>작성자3</td>
              <td>2023-04-14</td>
            </tr>
            <tr>
              <td>504</td>
              <td>
                <router-link to="/seesul/elevator" class="text-decoration-none">2023년4월10일 승강기점검</router-link>
              </td>
              <td>작성자1</td>
              <td>2023-04-10</td>
            </tr>
            <tr>
              <td>503</td>
              <td>
                <router-link to="/seesul/elevator" class="text-decoration-none">2023년4월07일 승강기점검</router-link>
              </td>
              <td>작성자2</td>
              <td>2023-04-07</td>
            </tr>
            <tr>
              <td>502</td>
              <td>
                <router-link to="/seesul/elevator" class="text-decoration-none">2023년4월06일 승강기점검</router-link>
              </td>
              <td>작성자3</td>
              <td>2023-04-06</td>
            </tr>
            <tr>
              <td>501</td>
              <td>
                <router-link to="/seesul/elevator" class="text-decoration-none">2023년4월05일 승강기점검</router-link>
              </td>
              <td>작성자1</td>
              <td>2023-04-05</td>
            </tr>
            
          </tbody>
        </table>
      </div>
      <!-- 승강기점검 영역 끝 -->

      <!-- 놀이터점검 영역 시작 -->
      <div class="table-responsive" id="playground" v-if="selectedOption === 'playground'">
        <div class="d-flex justify-content-end">
           <router-link to="/playground-write" class="btn btn-sm btn-outline-secondary">작성</router-link>
        </div>
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">번호</th>
              <th scope="col">제목</th>
              <th scope="col">작성자</th>
              <th scope="col">일자</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>510</td>
              <td>
                <router-link to="/seesul/playground" class="text-decoration-none">2023년4월26일 놀이터점검</router-link>
              </td>
              <td>작성자3</td>
              <td>2023-04-26</td>
            </tr>
            <tr>
              <td>509</td>
              <td>
                <router-link to="/seesul/playground" class="text-decoration-none">2023년4월25일 놀이터점검</router-link>
              </td>
              <td>작성자3</td>
              <td>2023-04-25</td>
            </tr>
            <tr>
              <td>508</td>
              <td>
                <router-link to="/seesul/playground" class="text-decoration-none">2023년4월19일 놀이터점검</router-link>
              </td>
              <td>작성자1</td>
              <td>2023-04-19</td>
            </tr>
            <tr>
              <td>507</td>
              <td>
                <router-link to="/seesul/playground" class="text-decoration-none">2023년4월17일 놀이터점검</router-link>
              </td>
              <td>작성자2</td>
              <td>2023-04-17</td>
            </tr>
            <tr>
              <td>506</td>
              <td>
                <router-link to="/seesul/playground" class="text-decoration-none">2023년4월16일 놀이터점검</router-link>
              </td>
              <td>작성자1</td>
              <td>2023-04-16</td>
            </tr>
            <tr>
              <td>505</td>
              <td>
                <router-link to="/seesul/playground" class="text-decoration-none">2023년4월14일 놀이터점검</router-link>
              </td>
              <td>작성자3</td>
              <td>2023-04-14</td>
            </tr>
            <tr>
              <td>504</td>
              <td>
                <router-link to="/seesul/playground" class="text-decoration-none">2023년4월10일 놀이터점검</router-link>
              </td>
              <td>작성자1</td>
              <td>2023-04-10</td>
            </tr>
            <tr>
              <td>503</td>
              <td>
                <router-link to="/seesul/playground" class="text-decoration-none">2023년4월07일 놀이터점검</router-link>
              </td>
              <td>작성자2</td>
              <td>2023-04-07</td>
            </tr>
            <tr>
              <td>502</td>
              <td>
                <router-link to="/seesul/playground" class="text-decoration-none">2023년4월06일 놀이터점검</router-link>
              </td>
              <td>작성자3</td>
              <td>2023-04-06</td>
            </tr>
            <tr>
              <td>501</td>
              <td>
                <router-link to="/seesul/playground" class="text-decoration-none">2023년4월05일 놀이터점검</router-link>
              </td>
              <td>작성자1</td>
              <td>2023-04-05</td>
            </tr>
            
          </tbody>
        </table>
      </div>
      <!-- 놀이터점검 영역 끝 -->
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      selectedOption: 'electric' 
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
  color: #212529;
}
.custom-input {
    border: none;
    background: transparent;
    text-align: center;
  }
</style>
