<template>
    <h2>전표 조회</h2>
    <br><br>
    <div class="input-group mb-3 border rounded">
        <input type="text" class="form-control" placeholder="전표 번호 조회">
        <button type="submit" class="btn btn-secondary">조회</button>
    </div>
    <div class="table-responsive">

        <table class="table table-striped table-sm">
            <thead>
            <tr>
                <th scope="col">등록번호</th>
                <th scope="col">전표번호</th>
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
                <td>{{item.slip_idx}}</td>
                <td>{{item.slip_no}}</td>
                <td>{{item.slip_date}}</td>
                <td>{{item.slip_writer}}</td>
                <td>{{item.slip_item}}</td>
                <td>{{item.slip_comp}}</td>
                <td>{{item.slip_brif}}</td>
                <td>{{item.slip_cash}}</td>
                <td>{{item.slip_note}}</td>
                <td class="btn" @click="slipupdate(idx)">수정</td>
            </tr>

            </tbody>

        </table>

    </div>
</template>

<script>
export default {
    data() {
        return {
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
        }
    },
    mounted() {
        this.getSlipList();
    },
    methods: {
        getSlipList() {
            this.$axios.get(this.$serverUrl + "/account/slip/list")
                .then((res) => {
                    console.log(JSON.stringify(res))
                    this.list = res.data.data;
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        slipupdate(idx) {
            console.log(idx)
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
