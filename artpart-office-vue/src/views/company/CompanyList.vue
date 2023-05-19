<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">외부업체</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group me-2">
            <button type="button" class="btn btn-sm btn-outline-secondary" @click="toggleInputRow">추가</button>
            <button type="button" class="btn btn-sm btn-outline-secondary" @click="toggleEditMode">수정</button>
            <button type="button" class="btn btn-sm btn-outline-secondary" @click="toggleDeleteButtons">삭제</button>
          </div>
        </div>
    </div>

      

      
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">번호</th>
              <th scope="col" style="width: 15%">업체명</th>
              <th scope="col" style="width: 15%">취급품목</th>
              <th scope="col">전화번호</th>
              <th scope="col">업체주소</th>
              <th scope="col" colspan="2">승인일</th>
            </tr>
          </thead>
        <tbody>
        <tr v-if="showInputRow">
            <td><input type="text" v-model="newRow.companyidx" disabled style="width: 50px"/></td>
            <td><input type="text" v-model="newRow.name" style="width: 100px" /></td>
            <td><input type="text" v-model="newRow.item" style="width: 100px" /></td>
            <td><input type="text" v-model="newRow.phone" style="width: 150px"/></td>
            <td><input type="text" v-model="newRow.address" /></td>
            <td><input type="date" v-model="newRow.companydate" /></td>
            <td>
                <button type="button" class="btn btn-dark" @click="saveNewRow">완료</button>
            </td>
        </tr>
        <!-- 기존 행들 -->
        <tr v-for="(row, index) in rows" :key="row.companyidx">
            <td>{{ row.companyidx }}</td>
            <td v-show="!editMode">{{ row.name }}</td>
            <td v-show="editMode"><input type="text" v-model="rows[index].name" style="width: 100px" /></td>
            <td v-show="!editMode">{{ row.item }}</td>
            <td v-show="editMode"><input type="text" v-model="rows[index].item" style="width: 100px" /></td>
            <td v-show="!editMode">{{ row.phone }}</td>
            <td v-show="editMode"><input type="text" v-model="rows[index].phone" style="width: 150px" /></td>
            <td v-show="!editMode">{{ row.address }}</td>
            <td v-show="editMode"><input type="text" v-model="rows[index].address" /></td>
            <td v-show="!editMode">{{ formatDate(row.companydate) }}</td>
            <td v-show="editMode"><input type="date" v-model="rows[index].companydate"/></td>
            <td v-if="showDeleteButtons">
                <button type="button" class="btn btn-dark" @click="deleteRow(index)">삭제</button>
            </td>
        </tr>
        </tbody>
        </table>
          <div>
              <div></div>
              <div v-if="paging.total_list_cnt > 0" style="margin: 0 auto !important;">
            <span >
            <a  class="page-item" href="javascript:;" @click="fnPage(1)" >&lt;&lt;</a>
            <a class="page-item" href="javascript:;" v-if="paging.page > 7" @click="fnPage(`${paging.start_page-1}`)"
            >&lt;</a>
            <template v-for=" (n,index) in paginavigation()">
                <template v-if="paging.page==n">
                    <strong class="page-item-fn" :key="index">{{ n }}</strong>
                </template>
                <template v-else>
                    <a class="page-item" href="javascript:;" @click="fnPage(`${n}`)" :key="index">{{ n }}</a>
                </template>
            </template>
            <a  class="page-item" href="javascript:;" v-if="paging.total_page_cnt > paging.end_page"
                @click="fnPage(`${paging.end_page+1}`)" >&gt;</a>
            <a  class="page-item" href="javascript:;" @click="fnPage(`${paging.total_page_cnt}`)" >&gt;&gt;</a>
            </span>
              </div>
          </div>
        </div>

</template>

<script>
export default {
  data() {
  return {
    showDeleteButtons: false,
    showNewRow: false,
    showInputRow: false,
    newRow: {
      companyidx: "",
      name: "",
      item: "",
      phone: "",
      address: "",
      companydate: ""
    },
    originalRows: [],
    rows: [],
    editMode: false,
      requestBody: {}, //리스트 페이지 데이터전송
      list: {}, //리스트 데이터
      no: '', //게시판 숫자처리
      paging: {
          block: 0,
          end_page: 0,
          next_block: 0,
          page: 0,
          page_size: 0,
          prev_block: 0,
          start_index: 0,
          start_page: 0,
          total_block_cnt: 0,
          total_list_cnt: 0,
          total_page_cnt: 0,
      }, //페이징 데이터
      page: this.$route.query.page ? this.$route.query.page : 1,
      size: this.$route.query.size ? this.$route.query.size : 10,
      //keyword: this.$route.query.keyword,
      search_key: this.$route.query.sk ? this.$route.query.sk : '',
      search_value: this.$route.query.sv ? this.$route.query.sv : '',

      paginavigation: function () { //페이징 처리 for문 커스텀
          let pageNumber = [] //;
          let start_page = this.paging.start_page;
          let end_page = this.paging.end_page;
          for (let i = start_page; i <= end_page; i++) pageNumber.push(i);
          return pageNumber;
      }
  };
},
  methods: {
    fetchCompany(){
        //스프링 부트에서 전송받은 데이터 출력 처리
        this.requestBody = { // 데이터 전송
              //keyword: this.keyword,
              sk: this.search_key,
              sv: this.search_value,
              page: this.page,
              size: this.size
        }

        this.$axios.get(this.$serverUrl + "/company/list", {
            params: this.requestBody,
            headers: {}
        }).then((res) => {

            //this.list = res.data  //서버에서 데이터를 목록으로 보내므로 바로 할당하여 사용할 수 있다.
            if (res.data.result_code === "OK") {
                this.rows = res.data.data
                this.paging = res.data.pagination
                this.no = this.paging.total_list_cnt - ((this.paging.page - 1) * this.paging.page_size)
            }
        }).catch( error => {
            console.error(error);
        })
    },
    toggleDeleteButtons() {
        this.showDeleteButtons = !this.showDeleteButtons;
    },
    saveNewRow() {
        this.rows.unshift({...this.newRow, companyidx: this.rows[0].companyidx + 1});
        this.showNewRow = false;
        let apiUrl = this.$serverUrl + '/company'
        this.form = {
            "companyidx": this.newRow.companyidx,
            "name": this.newRow.name,
            "item": this.newRow.item,
            "phone": this.newRow.phone,
            "address": this.newRow.address,
            "companydate": this.newRow.companydate
        }
        this.$axios.post(apiUrl, this.form)

        this.newRow = {
        companyidx: "",
        name: "",
        item: "",
        phone: "",
        address: "",
        companydate: ""
        };
    },
    deleteRow(index) {
        let companyIdx = this.rows[index].companyidx;
        this.$axios.delete(this.$serverUrl + '/company/' + companyIdx)
            .then(() => {
                this.rows.splice(index, 1);
            })
            .catch(error => {
                console.error(error);
            });
    },
    toggleEditMode() {
        this.editMode = !this.editMode;
        if (this.editMode) {
            // 편집 모드로 진입할 때 원본 데이터를 저장합니다.
            this.originalRows = JSON.parse(JSON.stringify(this.rows));
        } else {
            // 편집 모드에서 나올 때 변경된 데이터를 this.form에 설정하고, 서버로 보냅니다.
            this.form = JSON.parse(JSON.stringify(this.rows));
            this.$axios.patch((this.$serverUrl+'/company'), this.form)
        }
    },
    toggleInputRow() {
      this.showInputRow = !this.showInputRow;
    },
    formatDate: function(datetime) {
          let date = new Date(datetime);
          let year = date.getFullYear();
          let month = ('0' + (date.getMonth()+1)).slice(-2); // Months are zero based
          let day = ('0' + date.getDate()).slice(-2);
          return `${year}-${month}-${day}`; // Modify this line
    },
    fnPage(n) {
        if (this.page !== n) {
            this.page = n
        }
        this.fetchCompany()
    },
  },
  mounted() {
      this.fetchCompany();
  }
};
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
    text-decoration: none;
}
.page-item {
    min-width:32px;
    padding:2px 6px;
    text-align:center;
    margin:0 3px;
    border-radius: 6px;
    border:1px solid #eee;
    color:#666;
}
.page-item-fn{
    min-width:32px;
    padding:2px 6px;
    text-align:center;
    margin:0 3px;
    border-radius: 6px;
    border:1px solid #eee;
    color:#666;
}
.page-item:hover {
    background: #E4DBD6;
}
.page-item a {
    color:#666;
}
.page-item-fn {
    background-color : #E7AA8D;
    color:#fff;
}
.page-item-fn a {
    color:#fff;
}
</style>
