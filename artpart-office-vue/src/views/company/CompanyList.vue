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
            <td><input type="text" v-model="newRow.no" disabled style="width: 50px"/></td>
            <td><input type="text" v-model="newRow.company" style="width: 100px" /></td>
            <td><input type="text" v-model="newRow.product" style="width: 100px" /></td>
            <td><input type="text" v-model="newRow.phone" style="width: 150px"/></td>
            <td><input type="text" v-model="newRow.address" /></td>
            <td><input type="date" v-model="newRow.approvalDate" /></td>
            <td>
                <button type="button" class="btn btn-dark" @click="saveNewRow">완료</button>
            </td>
        </tr>
        <!-- 기존 행들 -->
        <tr v-for="(row, index) in rows" :key="row.no">
            <td>{{ row.no }}</td>
            <td v-show="!editMode">{{ row.company }}</td>
            <td v-show="editMode"><input type="text" v-model="rows[index].company" style="width: 100px" /></td>
            <td v-show="!editMode">{{ row.product }}</td>
            <td v-show="editMode"><input type="text" v-model="rows[index].product" style="width: 100px" /></td>
            <td v-show="!editMode">{{ row.phone }}</td>
            <td v-show="editMode"><input type="text" v-model="rows[index].phone" style="width: 150px" /></td>
            <td v-show="!editMode">{{ row.address }}</td>
            <td v-show="editMode"><input type="text" v-model="rows[index].address" /></td>
            <td v-show="!editMode">{{ row.approvalDate }}</td>
            <td v-show="editMode"><input type="text" v-model="rows[index].approvalDate" /></td>
            <td v-if="showDeleteButtons">
                <button type="button" class="btn btn-dark" @click="deleteRow(index)">삭제</button>
            </td>
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
    showDeleteButtons: false,
    showNewRow: false,
    showInputRow: false,
    newRow: {
      no: "",
      company: "",
      product: "",
      phone: "",
      address: "",
      approvalDate: ""
    },
    rows: [
        { 
            no: 10, 
            company: "A사", 
            product: "제품A", 
            phone: "010-1234-5678", 
            address: "서울시 강남구 도곡동 123-45", 
            approvalDate: "2022-01-15" 
        },
        { 
            no: 9, 
            company: "B사", 
            product: "제품B", 
            phone: "010-2345-6789", 
            address: "서울시 서초구 반포동 234-56", 
            approvalDate: "2022-02-10" 
        },
        { 
            no: 8, 
            company: "C사", 
            product: "제품C", 
            phone: "010-3456-7890", 
            address: "서울시 마포구 상수동 345-67", 
            approvalDate: "2022-03-05" 
        },
        { 
            no: 7, 
            company: "D사", 
            product: "제품D", 
            phone: "010-4567-8901", 
            address: "서울시 강서구 화곡동 456-78", 
            approvalDate: "2022-04-20" 
        },
        { 
            no: 6, 
            company: "E사", 
            product: "제품E", 
            phone: "010-5678-9012", 
            address: "서울시 관악구 신림동 567-89", 
            approvalDate: "2022-05-25" 
        },
        { 
            no: 5, 
            company: "F사", 
            product: "제품F", 
            phone: "010-6789-0123", 
            address: "경기도 성남시 분당구 정자동 678-90", 
            approvalDate: "2022-06-10" 
        },
        { 
            no: 4, 
            company: "G사", 
            product: "제품G", 
            phone: "010-7890-1234", 
            address: "인천광역시 부평구 부평동 789-01", 
            approvalDate: "2022-07-15" 
        },
        { 
            no: 3, 
            company: "H사", 
            product: "제품H", 
            phone: "010-8901-2345", 
            address: "경기도 고양시 일산동구 장항동 890-12", 
            approvalDate: "2022-08-30" 
        },
        { 
            no: 2, 
            company: "I사", 
            product: "제품I", 
            phone: "010-9012-3456", 
            address: "대전광역시 유성구 신성동 901-23", 
            approvalDate: "2022-09-14" 
        },
        { 
            no: 1, 
            company: "J사", 
            product: "제품J", 
            phone: "010-0123-4567", 
            address: "부산광역시 해운대구 우동 123-40", 
            approvalDate: "2022-10-29" 
        }
    ],
    editMode: false
  };
},
  methods: {
    toggleDeleteButtons() {
        this.showDeleteButtons = !this.showDeleteButtons;
    },
    addNewRow() {
        this.showNewRow = true;
    },
    saveNewRow() {
        this.rows.unshift({...this.newRow, no: this.rows[0].no + 1});
        this.showNewRow = false;
        this.newRow = {
        no: "",
        company: "",
        product: "",
        phone: "",
        address: "",
        approvalDate: ""
        };
    },
    deleteRow(index) {
        this.rows.splice(index, 1);
    },
    toggleEditMode() {
        this.editMode = !this.editMode;
    },
    toggleInputRow() {
      this.showInputRow = !this.showInputRow;
    }
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
}
</style>
