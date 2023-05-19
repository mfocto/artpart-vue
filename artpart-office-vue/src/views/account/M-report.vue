<template>
    <div class="col-md-7 col-lg-8" style="margin:0 auto; width: 100%;">
        <h2 class="mb-3">월계표</h2>
        <form class="needs-validation" @submit.prevent="insertMReport">
            <div class="row g-3">
                <div class="col-sm-6">
                    <label for="firstName" class="form-label">직급</label> &nbsp; &nbsp;
                    <input type="text" name="permanentId" v-model="permanentId" required="true" readonly>
                </div>

                <div class="col-sm-6">
                    <label for="firstName" class="form-label">성명</label> &nbsp;&nbsp;
                    <input type="text" v-model="name" required="true" readonly>

                </div>
            </div>
            <hr class="my-4">
            <div class="table-responsive">
                <table class="table table-striped table-sm">
                    <thead>
                    <tr>
                        <th colspan="2">차변</th>
                        <th colspan="3" rowspan="2">계정과목</th>
                        <th colspan="2">대변</th>
                    </tr>
                    <tr>
                        <th>입금</th>
                        <th>대체</th>
                        <th>입금</th>
                        <th>대체</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><input type="number" v-model="tmdebit_in" min="0"></td>
                        <td><input type="number" min="0" v-model="tmdebit_out"></td>
                        <td colspan="3"><input type="text" v-model="tmaccount"></td>
                        <td><input type="number" min="0" v-model="tmcredit_in"></td>
                        <td><input type="number" min="0" v-model="tmcredit_out"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <button class="w-100 btn btn-primary btn-lg mt-4 mb-3" type="submit">등록</button>
        </form>
    </div>
    <hr>
    <button class="btn btn-secondary rounded-pill px-3" type="button" @click="toggleSection('account')">과목/번호로 검색
    </button>
    <button class="btn btn-secondary rounded-pill px-3" type="button" @click="toggleSection('date')">일자로 검색</button>

    <div class="input-group mt-5" v-show="accountSearch">
        <div class="col-sm-2 me-2 ms-5">
            <select class="form-select form-select-md" v-model="sk" aria-label=".form-select-sm example">
                <option selected>조회 목록</option>
                <option value="tmaccount">과목</option>
                <option value="tmidx">번호</option>
            </select>
        </div> &nbsp;
        <div class="col-sm-7">
            <input type="text" class="form-control" v-model="sv" id="searchMreport" placeholder="검색할 내용 입력">
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

    <br><br>
    <div class="table-responsive">
        <table class="table table-striped table-sm">
            <thead>
            <tr>
                <th rowspan="2">번호</th>
                <th colspan="3">차변</th>
                <th colspan="3" rowspan="2">계정과목</th>
                <th colspan="3">대변</th>
            </tr>
            <tr>
                <th>입금</th>
                <th>대체</th>
                <th>합계</th>
                <th>입금</th>
                <th>대체</th>
                <th>합계</th>
                <th>일자</th>
                <th>수정</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, tmidx) in list" :key="tmidx">
                <template v-if="!item.editing">
                    <td>{{ item.tmidx }}</td>
                    <td>{{ item.tmdebit_in }}</td>
                    <td>{{ item.tmdebit_out }}</td>
                    <td>{{ item.tmdebit_total }}</td>
                    <td colspan="3">{{ item.tmaccount }}</td>
                    <td>{{ item.tmcredit_in }}</td>
                    <td>{{ item.tmcredit_out }}</td>
                    <td>{{ item.tmcredit_total }}</td>
                    <td>{{ item.tmdate }}</td>
                    <td>
                        <button class="btn-secondary" @click="item.editing = true">수정</button>
                    </td>
                </template>
                <template v-else>
                    <td>{{ item.tmidx }}</td>
                    <td><input v-model="tmdebit_in"></td>
                    <td><input v-model="tmdebit_out"></td>
                    <td>{{ item.tmdebit_total }}</td>
                    <td colspan="3"><input v-model="tmaccount"></td>
                    <td><input v-model="tmcredit_in"></td>
                    <td><input v-model="tmcredit_out"></td>
                    <td>{{ item.tmcredit_total }}</td>
                    <td>{{ item.tmdate }}</td>
                    <td>
                        <button class="btn-secondary" @click="item.editing = false; updateReport(item)">수정</button>
                    </td>
                </template>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: 'M-report',
    data() {
        return {
            permanentId: '',
            TMIdx: '',
            name: '',
            //검색
            sk: '',
            sv: '',
            requestBody: {},
            // db 값
            tmdebit_in: '',
            tmdebit_out: '',
            tmdebit_total: '',
            tmcredit_in: '',
            tmcredit_out: '',
            tmcredit_total: '',
            tmaccount: '',
            tmdate: '',
            list: {},
            // 검색 폼
            accountSearch: true,
            dateSearch: false
        }
    },
    mounted() {
        this.getMreportList();
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
            this.getMreportList();
            this.sv = '';
        },
        getMreportList() {
            if (this.dateSearch) {
                this.sk = 'tmdate';
            }
            this.requestBody = {
                sk: this.sk,
                sv: this.sv
            }
            this.$axios.get(this.$serverUrl + '/account/monthly-report', {
                params: this.requestBody,
                headers: {}
            })
                .then((res) => {
                    if (res.data.result_code === 'OK') {
                        this.list = res.data.data;
                    }
                }).catch((err) => {
                console.log(err);
            })
        },
        insertMReport() {
            let apiUrl = this.$serverUrl + '/account/monthly-report'
            let formData = {
                tmdebit_in: this.tmdebit_in.toString(),
                tmdebit_out: this.tmdebit_out.toString(),
                tmcredit_in: this.tmcredit_in.toString(),
                tmcredit_out: this.tmcredit_out.toString(),
                tmaccount: this.tmaccount,
                tmdebit_total: (parseInt(this.tmdebit_in) - parseInt(this.tmdebit_out)).toString(),
                tmcredit_total: (parseInt(this.tmcredit_in) - parseInt(this.tmcredit_out)).toString(),
            };
            this.$axios.post(apiUrl, formData, {
                headers: {
                    'Content-Type': 'application/json'
                },
                responseType: 'json'
            })
                .then(() => {
                    alert('등록되었습니다.');
                    this.tmdebit_in = 0;
                    this.tmdebit_out = 0;
                    this.tmcredit_in = 0;
                    this.tmcredit_out = 0;
                    this.tmaccount = '';
                    this.getMreportList();
                }).catch((err) => {
                console.log(err);
            })
        },
        updateReport(item) {
            let formData = {
                tmidx: item.tmidx,
                tmdebit_in: this.tmdebit_in ? this.tmdebit_in.toString() : item.tmdebit_in,
                tmdebit_out: this.tmdebit_out ? this.tmdebit_out.toString() : item.tmdebit_out,
                tmcredit_in: this.tmcredit_in ? this.tmcredit_in.toString() : item.tmcredit_in,
                tmcredit_out: this.tmcredit_out ? this.tmcredit_out.toString() : item.tmcredit_out,
                tmaccount: this.tmaccount ? this.tmaccount : item.tmaccount,
                tmdebit_total: (parseInt(this.tmdebit_in || item.tmdebit_in || 0) - parseInt(this.tmdebit_out || item.tmdebit_out || 0)).toString(),
                tmcredit_total: (parseInt(this.tmcredit_in || item.tmcredit_in || 0) - parseInt(this.tmcredit_out || item.tmcredit_out || 0)).toString(),
            };
            this.$axios.patch(this.$serverUrl + "/account/monthly-report", formData, {
                headers: {
                    'Content-Type': 'application/json'
                },
                responseType: 'json'
            })
                .then(() => {
                    alert('수정되었습니다.');
                    this.getMreportList();
                }).catch((err) => {
                console.log(err);
            })
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
</style>
  