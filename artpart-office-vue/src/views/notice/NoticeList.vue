<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">공지사항</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group me-2">
            <router-link to="/notice/write"  class="btn btn-sm btn-outline-secondary">작성</router-link>
            
          </div>
          
        </div>
      </div>

      

      
      <div class="table-responsive">
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
                <router-link to="/notice/detail" class="text-decoration-none">공지사항10</router-link>
              </td>
              <td>작성자3</td>
              <td>2023-04-26</td>
            </tr>
            <tr>
              <td>509</td>
              <td>
                <router-link to="/notice/detail" class="text-decoration-none">공지사항9</router-link>
              </td>
              <td>작성자3</td>
              <td>2023-04-25</td>
            </tr>
            <tr>
              <td>508</td>
              <td>
                <router-link to="/notice/detail" class="text-decoration-none">공지사항8</router-link>
              </td>
              <td>작성자1</td>
              <td>2023-04-19</td>
            </tr>
            <tr>
              <td>507</td>
              <td>
                <router-link to="/notice/detail" class="text-decoration-none">공지사항7</router-link>
              </td>
              <td>작성자2</td>
              <td>2023-04-17</td>
            </tr>
            <tr>
              <td>506</td>
              <td>
                <router-link to="/notice/detail" class="text-decoration-none">공지사항6</router-link>
              </td>
              <td>작성자1</td>
              <td>2023-04-17</td>
            </tr>
            <tr>
              <td>505</td>
              <td>
                <router-link to="/notice/detail" class="text-decoration-none">공지사항5</router-link>
              </td>
              <td>작성자3</td>
              <td>2023-04-14</td>
            </tr>
            <tr>
              <td>504</td>
              <td>
                <router-link to="/notice/detail" class="text-decoration-none">공지사항4</router-link>
              </td>
              <td>작성자1</td>
              <td>2023-04-10</td>
            </tr>
            <tr>
              <td>503</td>
              <td>
                <router-link to="/notice/detail" class="text-decoration-none">공지사항3</router-link>
              </td>
              <td>작성자2</td>
              <td>2023-04-07</td>
            </tr>
            <tr>
              <td>502</td>
              <td>
                <router-link to="/notice/detail" class="text-decoration-none">공지사항2</router-link>
              </td>
              <td>작성자3</td>
              <td>2023-04-06</td>
            </tr>
            <tr>
              <td>501</td>
              <td>
                <router-link to="/notice/detail" class="text-decoration-none">공지사항1</router-link>
              </td>
              <td>작성자1</td>
              <td>2023-04-05</td>
            </tr>
            
          </tbody>
        </table>
      </div>
</template>

<script>
export default {
  name: 'NoticeList',
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
  color: #0a0a0a;
}
</style>
