<template>
    <br><br>
    <h2>현금출납부</h2>
    <br><br>

    <div>
        <form id="insertform" @submit.prevent="insertCJournal">
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">적요</th>
                    <th scope="col">수입</th>
                    <th scope="col">지출</th>
                    <th scope="col">비고</th>
                    <th scope="col">작성자</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><input type="text" v-model="cr_brif" class="form-control"></td>
                    <td><input type="number" v-model="cr_in" class="form-control"></td>
                    <td><input type="number" v-model="cr_out" class="form-control"></td>
                    <td><input type="text" v-model="cr_note" class="form-control"></td>
                    <td><input type="text" class="form-control" v-model="cr_writer" readonly></td>
                </tr>
                </tbody>
            </table>
            <button class="btn btn-outline-secondary" type="submit">&nbsp; &nbsp; 등록 &nbsp; &nbsp;</button>
        </form>
    </div>
    <br><br>
    <hr>
    <br><br>
    <button class="btn btn-secondary rounded-pill px-3" type="button" @click="toggleSection('account')">작성자/적요로 검색
    </button>
    <button class="btn btn-secondary rounded-pill px-3" type="button" @click="toggleSection('date')">일자로 검색</button>

    <div class="input-group mt-5" v-show="accountSearch">
        <div class="col-sm-2 me-2 ms-5">
            <select class="form-select form-select-md" v-model="sk" aria-label=".form-select-sm example">
                <option selected>조회 목록</option>
                <option value="crbrif">적요</option>
                <option value="crwriter">작성자</option>
            </select>
        </div> &nbsp;
        <div class="col-sm-7">
            <input type="text" class="form-control" v-model="sv" id="searchDreport" placeholder="검색할 내용 입력">
        </div>
        <div class="col-2 ">
            <button type="submit" @click="fnPage()" class="btn btn-secondary">조회</button>
        </div>
    </div>
    <div class="input-group mt-5" v-show="dateSearch">
        <div class="" style="margin: 0 auto;">
            <input type="date" id="searchdate" v-model="sv" class="mb-5">
            <button type="submit" @click="fnPage()" class="btn btn-secondary">조회</button>
        </div>
    </div>

    <div class="table-responsive mt-5">
        <table class="table table-striped table-sm">
            <thead>
            <tr>
                <th scope="col">등록번호</th>
                <th scope="col">일자</th>
                <th scope="col">적요</th>
                <th scope="col">수입</th>
                <th scope="col">지출</th>
                <th scope="col">차인잔액</th>
                <th scope="col">비고</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(item, idx) in list" :key="idx">
                    <td>{{item.cr_idx}}</td>
                    <td>{{item.cr_date}}</td>
                    <td>{{item.cr_brif}}</td>
                    <td>{{item.cr_in}}</td>
                    <td>{{item.cr_out}}</td>
                    <td>{{item.cr_cash}}</td>
                    <td>{{item.cr_note}}</td>
                    <td><input type="button" @click="crup(idx)" value="수정"></td>
                </tr>
            </tbody>
        </table>
    </div>
<!--수정 팝업-->
    <div class="popup-overlay" v-if="showPopup">
        <div class="popup">
            <form @submit.prevent="updateCJournal">
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">적요</th>
                        <th scope="col">수입</th>
                        <th scope="col">지출</th>
                        <th scope="col">비고</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><input type="text" v-model="cr_brif2" class="form-control"></td>
                        <td><input type="number" v-model="cr_in2" class="form-control"></td>
                        <td><input type="number" v-model="cr_out2" class="form-control"></td>
                        <td><input type="text" v-model="cr_note2" class="form-control"></td>
                    </tr>
                    </tbody>
                </table>
                <button class="btn btn-outline-secondary" type="submit">&nbsp; &nbsp; 등록 &nbsp; &nbsp;</button>
                <button class="btn btn-outline-secondary" type="button" @click="closePopup">닫기</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cr_writer: JSON.parse(this.$cookie.get('emp')).emp_name,
            list: {},
            requestBody: {},
            // 검색
            sk: '',
            sv: '',
            // 검색 폼
            accountSearch: true,
            dateSearch: false,
            // 현금출납부정보
            cr_brif: '',    //적요
            cr_idx: 0,      //등록번호
            cr_in: 0,       //수입
            cr_out: 0,      //지출
            cr_cash: 0,     //차인잔액
            cr_note: '',    //비고
            cr_date: '',    //일자
            // 수정팝업
            showPopup: false,
            update_idx: 0,
            isDisabled: false,
            cr_brif2: '',
            cr_in2: 0,
            cr_out2: 0,
            cr_note2: '',
        }
    },
    mounted(){
        this.getClist();
    },
    methods: {
        toggleSection(section) {
            if (section === 'account') {
                this.accountSearch = true;
                this.dateSearch = false;
            }
            if (section === 'date') {
                this.accountSearch = false;
                this.dateSearch = true;
            }
        },
        fnPage() {
            this.getClist();
            this.sv = '';
        },
        getClist(){
            // 검색 조건별로 나눔
            if (this.dateSearch) {
                this.sk = 'crdate';
            }
            this.requestBody = {
                sk: this.sk,
                sv: this.sv
            }

            this.$axios.get(this.$serverUrl + '/account/cash-journals', {
                params: this.requestBody
            })
                .then((res) => {

                    if (res.data.result_code === 'OK') {
                        this.list = res.data.data;
                    }
                })
                .catch((err) => {
                    console.log("실패" + err);
                })
        },
        insertCJournal() {
            const cdata = {
                cr_brif: this.cr_brif,
                cr_in: this.cr_in,
                cr_out: this.cr_out,
                cr_cash: this.cr_in - this.cr_out,
                cr_note: this.cr_note,
                cr_writer: this.cr_writer
            }

            this.$axios.post(this.$serverUrl + '/account/cash-journal', cdata)
                .then((res) => {
                    if (res.data.result_code === 'OK') {
                        alert('등록 성공');
                        this.getClist();
                    }
                })
                .catch(() => {
                    console.log("실패");
                })
        },
        crup(idx){
          this.update_idx = this.list[idx].cr_idx;
          this.cr_writer = this.list[idx].cr_writer;
          this.cr_brif = this.list[idx].cr_brif;
          this.cr_in = this.list[idx].cr_in;
          this.cr_out = this.list[idx].cr_out;
          this.cr_cash = this.list[idx].cr_cash;
          this.cr_note = this.list[idx].cr_note;
          this.cr_date = this.list[idx].cr_date;
          this.showPopup = true;

        },
        closePopup(){
            this.showPopup = false;

        },
        updateCJournal(){
            const cdata = {
                cr_idx: this.update_idx,
                cr_brif: this.cr_brif2,
                cr_in: this.cr_in2,
                cr_out: this.cr_out2,
                cr_cash: this.cr_cash,
                cr_note: this.cr_note2,
                cr_writer: this.cr_writer
            }

            this.$axios.patch(this.$serverUrl + '/account/cash-journal', cdata)
                .then(({data}) => {
                    if (data.result_code === 'OK') {
                        alert('수정 성공');
                        this.getClist();
                        this.showPopup = false;
                    }
                })
                .catch(() => {
                    console.log("실패");
                })
        },

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

.popup-overlay {
    position: fixed;
    top: 100px;
    left: 100px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.popup {
    width: 500px;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
}
</style>
