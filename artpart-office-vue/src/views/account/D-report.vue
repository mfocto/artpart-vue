<template>
    <div class="col-md-7 col-lg-8" style="margin:0 auto; width: 100%;">
        <h2 class="mb-3">일계표</h2>
        <form class="needs-validation" @submit.prevent="insertDReport">
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
                        <td><input type="number" v-model="tddebit_in" min="0"></td>
                        <td><input type="number" min="0" v-model="tddebit_out"></td>
                        <td colspan="3"><input type="text" v-model="tdaccount"></td>
                        <td><input type="number" min="0" v-model="tdcredit_in"></td>
                        <td><input type="number" min="0" v-model="tdcredit_out"></td>
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
                <option value="tdaccount">과목</option>
                <option value="tdidx">번호</option>
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
            <tr v-for="(item, TDIdx) in list" :key="TDIdx">
                <template v-if="!item.editing">
                    <td>{{ item.tdidx }}</td>
                    <td>{{ item.tddebit_in }}</td>
                    <td>{{ item.tddebit_out }}</td>
                    <td>{{ item.tddebit_total }}</td>
                    <td colspan="3">{{ item.tdaccount }}</td>
                    <td>{{ item.tdcredit_in }}</td>
                    <td>{{ item.tdcredit_out }}</td>
                    <td>{{ item.tdcredit_total }}</td>
                    <td>{{ item.tddate }}</td>
                    <td>
                        <button class="btn-secondary" @click="item.editing = true">수정</button>
                    </td>
                </template>
                <template v-else>
                    <td>{{ item.tdidx }}</td>
                    <td><input v-model="tddebit_in"></td>
                    <td><input v-model="tddebit_out"></td>
                    <td>{{ item.tddebit_total }}</td>
                    <td colspan="3"><input v-model="tdaccount"></td>
                    <td><input v-model="tdcredit_in"></td>
                    <td><input v-model="tdcredit_out"></td>
                    <td>{{ item.tdcredit_total }}</td>
                    <td>{{ item.tddate }}</td>
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
    name: 'D-report',
    data() {
        return {
            permanentId: '',
            TDIdx: '',
            name: '',
            //검색
            sk: '',
            sv: '',
            requestBody: {},
            // db 값
            tddebit_in: '',
            tddebit_out: '',
            tddebit_total: '',
            tdcredit_in: '',
            tdcredit_out: '',
            tdcredit_total: '',
            tdaccount: '',
            tddate: '',
            list: {},
            // 검색 폼
            accountSearch: true,
            dateSearch: false
        }
    },
    mounted() {
        this.getDreportList();
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
            this.getDreportList();
            this.sv = '';
        },
        getDreportList() {
            if (this.dateSearch) {
                this.sk = 'tddate';
            }
            this.requestBody = {
                sk: this.sk,
                sv: this.sv
            }
            const test = JSON.parse(this.$cookie.get('emp'))
            console.log(test.emp_name)

            this.$axios.get(this.$serverUrl + '/account/daily-report', {
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
        insertDReport() {
            let apiUrl = this.$serverUrl + '/account/daily-report'
            let formData = {
                tddebit_in: this.tddebit_in.toString(),
                tddebit_out: this.tddebit_out.toString(),
                tdcredit_in: this.tdcredit_in.toString(),
                tdcredit_out: this.tdcredit_out.toString(),
                tdaccount: this.tdaccount,
                tddebit_total: (parseInt(this.tddebit_in) - parseInt(this.tddebit_out)).toString(),
                tdcredit_total: (parseInt(this.tdcredit_in) - parseInt(this.tdcredit_out)).toString(),
            };
            this.$axios.post(apiUrl, formData, {
                headers: {
                    'Content-Type': 'application/json'
                },
                responseType: 'json'
            })
                .then(() => {
                    alert('등록되었습니다.');
                    this.tddebit_in = 0;
                    this.tddebit_out = 0;
                    this.tdcredit_in = 0;
                    this.tdcredit_out = 0;
                    this.tdaccount = '';
                    this.getDreportList();
                }).catch((err) => {
                console.log(err);
            })
        },
        updateReport(item) {
            let formData = {
                tdidx: item.tdidx,
                tddebit_in: this.tddebit_in ? this.tddebit_in.toString() : item.tddebit_in,
                tddebit_out: this.tddebit_out ? this.tddebit_out.toString() : item.tddebit_out,
                tdcredit_in: this.tdcredit_in ? this.tdcredit_in.toString() : item.tdcredit_in,
                tdcredit_out: this.tdcredit_out ? this.tdcredit_out.toString() : item.tdcredit_out,
                tdaccount: this.tdaccount ? this.tdaccount : item.tdaccount,
                tddebit_total: (parseInt(this.tddebit_in || item.tddebit_in || 0) - parseInt(this.tddebit_out || item.tddebit_out || 0)).toString(),
                tdcredit_total: (parseInt(this.tdcredit_in || item.tdcredit_in || 0) - parseInt(this.tdcredit_out || item.tdcredit_out || 0)).toString(),
            };
            this.$axios.patch(this.$serverUrl + "/account/daily-report", formData, {
                headers: {
                    'Content-Type': 'application/json'
                },
                responseType: 'json'
            })
                .then(() => {
                    alert('수정되었습니다.');
                    this.getDreportList();
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
