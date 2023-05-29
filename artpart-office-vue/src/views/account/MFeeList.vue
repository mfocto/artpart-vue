<template>
    <h2>관리비 조회</h2>
    <br><br>
    <div class="col-md-5 offset-md-1 mb-3" style="margin: 0 auto;">
        <form>
            <h5>동/호수로 검색</h5>
            <div class="d-flex flex-column  gap-2">
                <input type="month" v-model="sv" id="gongdate">
                <select class="form-select form-select-md" v-model="sv1" aria-label=".form-select-sm example">
                    <option selected>동</option>
                    <option value="101">101</option>
                    <option value="102">102</option>
                    <option value="103">103</option>
                    <option value="104">104</option>
                </select>
                <select class="form-select form-select-md" v-model="sv2" aria-label=".form-select-sm example">
                    <option selected>호</option>
                    <option value="101">101</option>
                    <option value="102">102</option>
                    <option value="201">201</option>
                    <option value="202">202</option>
                </select>
                <button class="btn btn-primary" type="button" @click="listSearch">검색</button>
            </div>
        </form>
    </div>
    <hr>
    <div class="table-responsive">
        <table class="table table-striped table-sm">
            <thead>
            <tr>
                <th scope="col">동</th>
                <th scope="col">호</th>
                <th scope="col">일반관리비</th>
                <th scope="col">난방기</th>
                <th scope="col">급탕비</th>
                <th scope="col">가스비</th>
                <th scope="col">전기료</th>
                <th scope="col">수도</th>
                <th scope="col">그 외 관리비</th>
                <th scope="col">합계</th>
                <th scope="col">일자</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, idx) in list" :key="idx">
                <td>{{ item.dong }}</td>
                <td>{{ item.ho }}</td>
                <td>{{ item.gen }}</td>
                <td>{{ item.heat }}</td>
                <td>{{ item.onsu }}</td>
                <td>{{ item.gas }}</td>
                <td>{{ item.elec }}</td>
                <td>{{ item.water }}</td>
                <td>{{ item.etc }}</td>
                <td>{{ item.sum }}</td>
                <td>{{ item.date }}</td>
                <td>
                    <button class="btn-secondary" @click="toggleUp(idx)">수정</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    <div class="popup-overlay" v-if="showPopup">
        <div class="popup">
            <div class="col-sm-4">
                <label for="lastName" class="form-label">일반</label>
                <input type="number" class="form-control" v-model="gen2">
            </div>
            <div class="col-sm-4">
                <label for="lastName" class="form-label">난방비</label><br>
                <input type="number" class="form-control" v-model="heat2">
            </div>

            <div class="col-sm-6">
                <label for="lastName" class="form-label">급탕비</label>
                <input type="number" class="form-control" v-model="onsu2">
            </div>
            <div class="col-sm-6">
                <label for="lastName" class="form-label">가스비</label>
                <input type="number" class="form-control" v-model="gas2">
            </div>

            <div class="col-8">
                <label for="lastName" class="form-label">전기요금</label>
                <input type="number" class="form-control" v-model="elec2">
            </div>

            <div class="col-4">
                <label for="lastName" class="form-label">수돗세</label>
                <input type="number" class="form-control" v-model="water2">
            </div>

            <div class="col-12">
                <label for="lastName" class="form-label">그 외 관리비</label>
                <input type="number" class="form-control" v-model="etc2">
            </div>
            <button @click="updateFee()">update</button>
            <button @click="closePopup">Close</button>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            requestBody: {},
            // 출력용 데이터
            list: {},
            dong: '',
            ho: '',
            gen: 0,
            heat: 0,
            onsu: 0,
            gas: 0,
            elec: 0,
            water: 0,
            etc: 0,
            sum: 0,
            date: '',
            // 검색
            sv: '',
            sv1: '',
            sv2: '',
            // 수정
            showPopup: false,
            gen2: 0,
            heat2: 0,
            onsu2: 0,
            gas2: 0,
            elec2: 0,
            water2: 0,
            etc2: 0,
            updateIdx: 0,

        }
    },
    mounted() {
        this.getFeeList();
    },
    methods: {
        getFeeList() {
            this.requestBody = {
                sv: this.sv,
                sv1: this.sv1,
                sv2: this.sv2
            }
            this.$axios.get(this.$serverUrl + '/account/payment/list', {
                params: this.requestBody
            })
                .then((res) => {
                    this.list = res.data.data
                })
        },
        listSearch() {
            this.getFeeList();
            this.sv = '';
            this.sv1 = '';
            this.sv2 = '';
        },
        toggleUp(idx) {
            this.updateIdx = idx;
            this.dong = this.list[idx].dong;
            this.ho = this.list[idx].ho;
            this.gen = this.list[idx].gen;
            this.heat = this.list[idx].heat;
            this.onsu = this.list[idx].onsu;
            this.gas = this.list[idx].gas;
            this.elec = this.list[idx].elec;
            this.water = this.list[idx].water;
            this.etc = this.list[idx].etc;
            this.showPopup = true;
        },
        closePopup() {
            this.showPopup = false;
        },
        updateFee() {
            this.list[this.updateIdx].gen = this.gen2;
            this.list[this.updateIdx].heat = this.heat2;
            this.list[this.updateIdx].onsu = this.onsu2;
            this.list[this.updateIdx].gas = this.gas2;
            this.list[this.updateIdx].elec = this.elec2;
            this.list[this.updateIdx].water = this.water2;
            this.list[this.updateIdx].etc = this.etc2;
            this.list[this.updateIdx].sum = this.gen2+this.heat2+this.onsu2+this.gas2+this.elec2+this.water2+this.etc2;
            this.showPopup = false;
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
  