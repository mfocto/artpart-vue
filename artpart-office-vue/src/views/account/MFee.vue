<template>

    <form @submit.prevent="insertPublic">
        <div class="row mb-5">
            <div class="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" class="btn btn-outline-primary" @click="toggleSection('gongdong')">
                    공동관리비
                </button>
                <button type="button" class="btn btn-outline-primary" @click="toggleSection('dongfee')">
                    개별사용료
                </button>
            </div>
        </div>
        <div v-show="gongdongVisible">
            <h1 class="text-center mb-5 ">관리비 등록</h1>
            <label for="gongdat">회계년월</label>
            <input type="month" id="gongdate" v-model="pp_date" class="mb-5">
            <table class="table" id="gongdong">
                <thead>
                <tr>
                    <th scope="col" class="txCenter tdItem">대분류</th>
                    <th scope="col" class="txCenter tdItem">중분류</th>
                    <th scope="col" class="txCenter tdItem">소분류</th>
                    <th scope="col" class="txCenter">세부항목</th>
                    <th scope="col" class="txCenter tdItem">금액</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th rowspan="35" scope="row" class="bgGary bdR1px align-middle">공용관리비</th>
                    <th rowspan="25" scope="row" class="bgGary bdR1px align-middle">일반관리비</th>
                    <th rowspan="9" scope="row" class="bgGary bdR1px align-middle">인건비</th>
                    <td class="txLeft align-middle">1 급여</td>
                    <td class="txRight"><input type="number" v-model="p1" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <td class="txLeft align-middle">2 제수당</td>
                    <td class="txRight"><input type="number" v-model="p2" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <td class="txLeft align-middle">3 상여금</td>
                    <td class="txRight"><input type="number" v-model="p3" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <td class="txLeft align-middle">4 퇴직금</td>
                    <td class="txRight"><input type="number" v-model="p4" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <td class="txLeft align-middle">5 산재보험료</td>
                    <td class="txRight"><input type="number" v-model="p5" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <td class="txLeft align-middle">6 고용보험료</td>
                    <td class="txRight"><input type="number" v-model="p6" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <td class="txLeft align-middle">7 국민연금</td>
                    <td class="txRight"><input type="number" v-model="p7" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <td class="txLeft align-middle">8 국민건강보험료</td>
                    <td class="txRight"><input type="number" v-model="p8" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <td class="txLeft align-middle">9 식대 등 복리후생비</td>
                    <td class="txRight"><input type="number" v-model="p9" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <th rowspan="3" scope="row" class="bgGary bdR1px align-middle">제사무비</th>
                    <td class="txLeft align-middle">10 일반사무용품비</td>
                    <td class="txRight"><input type="number" v-model="p10" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <td class="txLeft align-middle">11 도서인쇄비</td>
                    <td class="txRight"><input type="number" v-model="p11" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <td class="txLeft align-middle">12 교통통신비 등</td>
                    <td class="txRight"><input type="number" v-model="p12" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <th rowspan="4" scope="row" class="bgGary bdR1px align-middle">제세공과금<br>(관리기구 사용)</th>
                    <td class="txLeft align-middle">13 전기료</td>
                    <td class="txRight"><input type="number" v-model="p13" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <td class="txLeft align-middle">14 통신료</td>
                    <td class="txRight"><input type="number" v-model="p14" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <td class="txLeft align-middle">15 우편료</td>
                    <td class="txRight"><input type="number" v-model="p15" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <td class="txLeft align-middle">16 세금 등</td>
                    <td class="txRight"><input type="number" v-model="p16" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <td colspan="2" class="txLeft align-middle">17 피복비</td>
                    <td class="txRight"><input type="number" v-model="p17" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <td colspan="2" class="txLeft align-middle">18 교육훈련비</td>
                    <td class="txRight"><input type="number" v-model="p18" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <th rowspan="4" scope="row" class="bgGary bdR1px align-middle">차량유지비
                        <br>(관리기구<br>사용)
                    </th>
                    <td class="txLeft align-middle">19 연료비</td>
                    <td class="txRight"><input type="number" v-model="p19" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <td class="txLeft align-middle">20 수리비</td>
                    <td class="txRight"><input type="number" v-model="p20" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <td class="txLeft align-middle">21 보험료</td>
                    <td class="txRight"><input type="number" v-model="p21" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <td class="txLeft align-middle">22 기타 차량유지비</td>
                    <td class="txRight"><input type="number" v-model="p22" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <th rowspan="3" scope="row" class="bgGary bdR1px align-middle">그밖의 부대비용</th>
                    <td class="txLeft align-middle">23 관리용품 구입비</td>
                    <td class="txRight"><input type="number" v-model="p23" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <td class="txLeft align-middle">24 회계감사비</td>
                    <td class="txRight"><input type="number" v-model="p24" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <td class="txLeft align-middle">25 그 밖의 비용(잡비)</td>
                    <td class="txRight"><input type="number" v-model="p25" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <td colspan="3" class="txLeft align-middle">26 청소비</td>
                    <td class="txRight"><input type="number" v-model="p26" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <td colspan="3" class="txLeft align-middle">27 경비비</td>
                    <td class="txRight"><input type="number" v-model="p27" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <td colspan="3" class="txLeft align-middle">28 소독비</td>
                    <td class="txRight"><input type="number" v-model="p28" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <td colspan="3" class="txLeft align-middle">29 승강기유지비</td>
                    <td class="txRight"><input type="number" v-model="p29" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <td colspan="3" class="txLeft align-middle">30 지능형홈네트워크설비유지비</td>
                    <td class="txRight"><input type="number" v-model="p30" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <th rowspan="4" scope="row" class="bgGary bdR1px align-middle">수선유지비</th>
                    <td colspan="2" class="txLeft align-middle">31 용역금액 또는 자재 및 인건비(수선비)</td>
                    <td class="txRight"><input type="number" v-model="p31" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <td colspan="2" class="txLeft align-middle">32 보수유지비 및 제반 검사비(시설유지비)</td>
                    <td class="txRight"><input type="number" v-model="p32" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <td colspan="2" class="txLeft align-middle">33 건축물의 안전점검비용(안전점검비)</td>
                    <td class="txRight"><input type="number" v-model="p33" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <td colspan="2" class="txLeft align-middle">34 재난 및 재해 등의 예방에 따른 비용(재해예방비)</td>
                    <td class="txRight"><input type="number" v-model="p34" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <td colspan="3" class="txLeft align-middle">35 위탁관리수수료</td>
                    <td class="txRight"><input type="number" v-model="p35" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <td colspan="3" class="txLeft align-middle">46.장기수선충당금</td>
                    <td> &nbsp;</td>
                    <td class="txRight"><input type="number" v-model="p46" class="form-control text-end" min="0"/></td>
                </tr>
                <tr>
                    <td>
                        <button class="btn btn-primary btn-lg mt-4" type="submit">등록</button>
                    </td>
                </tr>
                </tbody>

            </table>
        </div>
    </form>


    <br><br>
    <form @submit.prevent="insertMember">
        <div v-show="dongfeeVisible" class="row" id="dongfee">
            <div>
            <h1 class="text-center mb-5 ">관리비 등록</h1>
            <label for="gongdat">회계년월</label>
            <input type="month" id="gongdate" v-model="pm_date" class="mb-5">
            </div>
            <div class="col-2">
                <h3>동/호수</h3>
                <select class="form-select form-select-md" v-model="dong" aria-label=".form-select-sm example">
                    <option selected>동 선택</option>
                    <option value="101">101동</option>
                    <option value="102">102동</option>
                    <option value="103">103동</option>
                    <option value="104">104동</option>
                </select>
                <div class="form-check pt-5">
                    <input class="form-check-input" type="radio" v-model="ho" value="101" id="flexCheckDefault1">
                    <label class="form-check-label" for="flexCheckDefault1">
                        101호
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" v-model="ho" value="102" id="flexCheckDefault2">
                    <label class="form-check-label" for="flexCheckDefault2">
                        102호
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" v-model="ho" value="201" id="flexCheckDefault3">
                    <label class="form-check-label" for="flexCheckDefault3">
                        201호
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" v-model="ho" value="202" id="flexCheckDefault4">
                    <label class="form-check-label" for="flexCheckDefault4">
                        202호
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" v-model="ho" value="301" id="flexCheckDefault5">
                    <label class="form-check-label" for="flexCheckDefault5">
                        301호
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" v-model="ho" value="302" id="flexCheckDefault6">
                    <label class="form-check-label" for="flexCheckDefault6">
                        302호
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" v-model="ho" value="401" id="flexCheckDefault7">
                    <label class="form-check-label" for="flexCheckDefault7">
                        401호
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" v-model="ho" value="402" id="flexCheckDefault8">
                    <label class="form-check-label" for="flexCheckDefault8">
                        402호
                    </label>
                </div>
            </div>

                <div class="col-9">
                <table class="table ms-5">
                    <thead>
                    <tr>
                        <th scope="col" class="txCenter tdItem">대분류</th>
                        <th scope="col" class="txCenter tdItem">중분류</th>
                        <th scope="col" class="txCenter tdItem">소분류</th>
                        <th scope="col" class="txCenter">세부항목</th>
                        <th scope="col" class="txCenter tdItem">금액</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th rowspan="10" scope="row" class="bgGary bdR1px align-middle">개별사용료</th>
                        <td colspan="3" class="txLeft align-middle">36 난방비</td>
                        <td class="txRight"><input type="number" v-model="p36" class="form-control text-end" min="0"/></td>
                    </tr>
                    <tr>
                        <td colspan="3" class="txLeft align-middle">37 급탕비</td>
                        <td class="txRight"><input type="number" v-model="p37" class="form-control text-end" min="0"/></td>
                    </tr>
                    <tr>
                        <td colspan="3" class="txLeft align-middle">38 가스사용료</td>
                        <td class="txRight"><input type="number" v-model="p38" class="form-control text-end" min="0"/></td>
                    </tr>
                    <tr>
                        <td colspan="3" class="txLeft align-middle">39 전기료</td>
                        <td class="txRight"><input type="number" v-model="p39" class="form-control text-end" min="0"/></td>
                    </tr>
                    <tr>
                        <td colspan="3" class="txLeft align-middle">40 수도료</td>
                        <td class="txRight"><input type="number" v-model="p40" class="form-control text-end" min="0"/></td>
                    </tr>
                    <tr>
                        <td colspan="3" class="txLeft align-middle">41 정화조오물수수료</td>
                        <td class="txRight"><input type="number" v-model="p41" class="form-control text-end" min="0"/></td>
                    </tr>
                    <tr>
                        <td colspan="3" class="txLeft align-middle">42 생활폐기물수수료</td>
                        <td class="txRight"><input type="number" v-model="p42" class="form-control text-end" min="0"/></td>
                    </tr>
                    <tr>
                        <td colspan="3" class="txLeft align-middle">43 관리위원회운영비</td>
                        <td class="txRight"><input type="number" v-model="p43" class="form-control text-end" min="0"/></td>
                    </tr>
                    <tr>
                        <td colspan="3" class="txLeft align-middle">44 건물보험료</td>
                        <td class="txRight"><input type="number" v-model="p44" class="form-control text-end" min="0"/></td>
                    </tr>
                    <tr>
                        <td colspan="3" class="txLeft align-middle">45 선거관리위원회 운영비기타</td>
                        <td class="txRight"><input type="number" v-model="p45" class="form-control text-end" min="0"/></td>
                    </tr>
                    <tr>
                        <td>
                            <button class="btn btn-primary btn-lg mt-4" type="submit">등록</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            gongdongVisible: true,
            dongfeeVisible: false,
            payment_public: 0,
            pp_date: '',
            pm_date: '',
            // 관리비 데이터
            p1: 0,
            p2: 0,
            p3: 0,
            p4: 0,
            p5: 0,
            p6: 0,
            p7: 0,
            p8: 0,
            p9: 0,
            p10: 0,
            p11: 0,
            p12: 0,
            p13: 0,
            p14: 0,
            p15: 0,
            p16: 0,
            p17: 0,
            p18: 0,
            p19: 0,
            p20: 0,
            p21: 0,
            p22: 0,
            p23: 0,
            p24: 0,
            p25: 0,
            p26: 0,
            p27: 0,
            p28: 0,
            p29: 0,
            p30: 0,
            p31: 0,
            p32: 0,
            p33: 0,
            p34: 0,
            p35: 0,
            p36: 0,
            p37: 0,
            p38: 0,
            p39: 0,
            p40: 0,
            p41: 0,
            p42: 0,
            p43: 0,
            p44: 0,
            p45: 0,
            p46: 0,
            // 동, 호수
            dong: '',
            ho: {},
        };
    },
    methods: {
        toggleSection(section) {
            if (section === "gongdong") {
                this.gongdongVisible = !this.gongdongVisible;
                this.dongfeeVisible = false;
            } else if (section === "dongfee") {
                this.gongdongVisible = false;
                this.dongfeeVisible = !this.dongfeeVisible;
            }
        },
        insertPublic() {
            this.payment_public = this.p1 + this.p2 + this.p3 + this.p4 + this.p5 + this.p6 + this.p7 + this.p8 +
                this.p9 + this.p10 + this.p11 + this.p12 + this.p13 + this.p14 + this.p15 + this.p16 + this.p17 + this.p18 +
                this.p19 + this.p20 + this.p21 + this.p22 + this.p23 + this.p24 + this.p25 + this.p26 + this.p27 + this.p28 +
                this.p29 + this.p30 + this.p31 + this.p32 + this.p33 + this.p34 + this.p35 + this.p46;

            this.$axios.post(this.$serverUrl + '/account/payment/public', {
                ppfee: this.payment_public,
                ppdate: this.pp_date,
            }).then(() => {
                alert("등록 성공")
            })
                .catch((err) => {
                    console.log(err);
                });
        },
        insertMember() {
            const member_no = {
                memberdong: this.dong,
                memberho: this.ho
            }

            const data = {
                pm_date: this.pm_date,
                pm_heat: this.p36,
                pm_onsu: this.p37,
                pm_gas: this.p38,
                pm_elec: this.p39,
                pm_water: this.p40,
                pm_septic: this.p41,
                pm_waste: this.p42,
                pm_opercost: this.p43 + this.p45,
                pm_insure: this.p44,
                member_no
            }
            this.$axios.post(this.$serverUrl + '/account/payment/member', data)
                .then((res) => {
                    if(res.data.result_code === 'OK'){
                        alert(this.dong + "동 " + this.ho + "호 관리비 등록 성공했습니다.")
                        this.p36 = 0;
                        this.p37 = 0;
                        this.p38 = 0;
                        this.p39 = 0;
                        this.p40 = 0;
                        this.p41 = 0;
                        this.p42 = 0;
                        this.p43 = 0;
                        this.p44 = 0;
                        this.p45 = 0;
                    }
                    if(res.data.result_code !== 'OK') {
                        alert(res.data.description)
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>h3 {
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
}</style>
  