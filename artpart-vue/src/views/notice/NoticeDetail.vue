<template>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">공지사항</h1>
        </div>
        <div class="table-responsive">
          
          <table class="table table-striped table-sm">
            <thead class="boarder-0">
              <tr>
                <th scope style="text-align:left;">제목</th>
                <th scope="col" style="text-align:left;" colspan="3">{{ title }}</th>
              </tr>
              <tr>
                <th scope style="text-align:left;">작성자</th>
                <th scope="col" style="text-align:left;" colspan="3">{{ writer }}</th>
              </tr>
              <tr>
                <th scope style="text-align:left;">작성일자</th>
                <th scope="col" style="text-align:left;" colspan="3">{{ noticeDate }}</th>
              </tr>
              <tr>
                <th scope="col" colspan="4" style="text-align:right;">
                  <button class="btn btn-sm btn-outline-secondary" v-on:click="fnList">목록</button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td colspan="4" style="text-align:left; height: 300px; width: 200px; overflow: auto;" v-text="content">
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
  </template>
  
  <script>
    import dayjs from 'dayjs';

  export default {
    component: { 
            dayjs
        },
    data(){      
        return {
            requestBody: this.$route.query,
            id: this.$route.query.noticeidx,
            title: '',
            content: '',
            noticeDate: '',
            writer:''
        };
    },
      methods: {
        fetchNotice(){
            this.$axios.get(this.$serverUrl + "/notice/" + this.id, {
                params: this.requestBody
            }).then(response => {
                    this.title = response.data.title;
                    this.content = response.data.content;
                    this.noticeDate = dayjs(response.data.notice_date).format("YYYY-MM-DD HH:mm:ss");
                    this.writer = response.data.writer.emp_name;
                })
                
                .catch(error => {
                    console.error(error);
                });
        },
        fnList(){
            delete this.requestBody.id
            this.$router.push({
                path: './list',
                query: this.requestBody
            })
        },
      },
      mounted() {
        
        this.fetchNotice();   
      },
 
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
  