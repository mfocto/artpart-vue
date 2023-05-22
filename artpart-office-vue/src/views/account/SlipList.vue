<template>
    <h2>전표 조회</h2>
    <br><br>
    <div class="input-group mb-3 border rounded">
        <input type="text" class="form-control" v-model="sv" placeholder="전표 번호 조회">
        <button type="button" class="btn btn-secondary" @click="fnpage">조회</button>
    </div>
    <div class="table-responsive">

        <table class="table table-striped table-sm">
            <thead>
            <tr>
                <th scope="col">등록번호</th>
                <th scope="col">전표번호</th>
                <th scope="col">입/출금</th>
                <th scope="col">일자</th>
                <th scope="col">작성자</th>
                <th scope="col">과목</th>
                <th scope="col">항목</th>
                <th scope="col">적요</th>
                <th scope="col">금액</th>
                <th scope="col">비고</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, idx) in list" :key="idx">
                <td>{{ item.slip_idx }}</td>
                <td>{{ item.slip_no }}</td>
                <td>{{ item.slip_type === 'input' ? '입금' : '출금' }}</td>
                <td>{{ item.slip_date }}</td>
                <td>{{ item.slip_writer }}</td>
                <td>{{ item.slip_item }}</td>
                <td>{{ item.slip_comp }}</td>
                <td>{{ item.slip_brif }}</td>
                <td>{{ item.slip_cash }}</td>
                <td>{{ item.slip_note }}</td>
                <td class="btn" @click="popupdate(idx)">수정</td>
            </tr>

            </tbody>

        </table>

    </div>
    <div class="popup-overlay" v-if="showPopup">
        <div class="popup">
            <div class="col-sm-12">
                <label for="firstName" class="form-label">전표 종류</label>
                <select class="form-select" v-model="slip_type">
                    <option value="input">입금</option>
                    <option value="output">출금</option>
                </select>
            </div>

            <div class="col-sm-4">
                <label for="lastName" class="form-label">전표번호</label>
                <input type="text" class="form-control" v-model="slip_no" readonly>
            </div>
            <div class="col-sm-4">
                <label for="lastName" class="form-label">일자</label><br>
                {{ slip_date }}
            </div>

            <div class="col-sm-6">
                <label for="lastName" class="form-label">과목</label>
                <input type="text" class="form-control" v-model="slip_item">
            </div>
            <div class="col-sm-6">
                <label for="lastName" class="form-label">항목</label>
                <input type="text" class="form-control" v-model="slip_comp">
            </div>

            <div class="col-8">
                <label for="username" class="form-label">적요</label>
                <div class="input-group has-validation">
                    <input type="text" class="form-control" v-model="slip_brif">
                </div>
            </div>

            <div class="col-4">
                <label for="cash" class="form-label">금액</label>
                <div class="input-group has-validation">
                    <input type="number" class="form-control" id="cash" v-model="slip_cash">
                </div>
            </div>

            <div class="col-12">
                <label for="address" class="form-label">비고</label>
                <textarea class="form-control" v-model="slip_note" rows="3"></textarea>
            </div>
            <button @click="updateSlip(this.update_idx)">update</button>
            <button @click="closePopup">Close</button>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            today: new Date().toISOString().substring(0, 10),
            list: {},
            slip_type: '',      // 전표종류
            slip_no: '',        // 전표번호
            slip_item: '',      // 과목
            slip_comp: '',      // 항목
            slip_brif: '',      // 적요
            slip_cash: 0,       // 금액
            slip_note: '',      // 비고
            slip_writer: '',    // 작성자
            slip_date: '',      // 작성일자
            //검색
            sv: '',
            showPopup: false,
            // 수정
            update_idx: 0,
        }
    },
    mounted() {
        this.getSlipList();
    },
    methods: {
        // 검색
        fnpage () {
          this.getSlipList();
          this.sv = '';
        },
        //전표 리스트 조회
        getSlipList() {
            this.$axios.get(this.$serverUrl + "/account/slip/list", {
                params: {
                    sv: this.sv
                }
            })
                .then((res) => {
                    this.list = res.data.data;
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        // 전표 업데이트 위해 값 받아오고 팝업창에 보여주기
        popupdate(idx) {
            this.update_idx = this.list[idx].slip_idx;
            this.slip_type = this.list[idx].slip_type;
            this.slip_no = this.list[idx].slip_no;
            this.slip_item = this.list[idx].slip_item;
            this.slip_comp = this.list[idx].slip_comp;
            this.slip_brif = this.list[idx].slip_brif;
            this.slip_cash = this.list[idx].slip_cash;
            this.slip_note = this.list[idx].slip_note;
            this.slip_writer = this.list[idx].slip_writer;
            this.slip_date = this.list[idx].slip_date;
            this.showPopup = true;
        },
        // 팝업창 닫기
        closePopup() {
            this.showPopup = false;
        },
        // 전표 업데이트
        updateSlip(){
            const form = {
                slip_idx: this.update_idx,
                slip_type: this.slip_type,
                slip_item: this.slip_item,
                slip_comp: this.slip_comp,
                slip_brif: this.slip_brif,
                slip_cash: this.slip_cash,
                slip_note: this.slip_note,
            }
            this.$axios.patch(this.$serverUrl + "/account/slip/list", form)
                .then((res) => {
                    alert(res.data.data.slip_no+"번 전표가 수정되었습니다.");
                    this.getSlipList();
                    this.showPopup = false;
                })
                .catch(() => {
                    alert('오류가 발생했습니다. 다시 시도해주세요')
                    this.showPopup = false;
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
