<template>
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">공지사항</h1>

    </div>


    <div className="table-responsive">

        <table className="table table-striped table-sm">
            <thead className="boarder-0">
            <tr>
                <th scope style="text-align:left;">제목</th>
                <th scope="col" style="text-align:left;" colSpan="3"><input type="text" style="width: 100%"
                                                                            v-model="title" placeholder="공지사항 제목"/></th>
            </tr>

            <tr>
                <th scope="col" colSpan="4" style="text-align:right;">
                    <button type="button" className="btn btn-sm btn-outline-secondary" v-on:click="fnList">목록</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary" v-on:click="fnSave">작성</button>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td colSpan="4" style="text-align:left;">
                    <textarea v-model="content" rows="10" style="width: 100%;" placeholder="공지사항 내용을 입력하세요."></textarea>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            requestBody: this.$route.query,
            noticeidx: this.$route.query.noticeidx,

            title: '',
            writer: '',
            content: '',
            noticedate: ''
        }
    },
    mounted() {
        this.fnGetView()
    },
    methods: {
        fnGetView() {
            if (this.noticeidx !== undefined) {
                this.$axios.get(this.$serverUrl + '/notice/' + this.noticeidx, {
                    params: this.requestBody
                }).then((res) => {
                    this.title = res.data.title
                    this.writer = res.data.writer
                    this.content = res.data.content
                    this.noticedate = res.data.noticedate
                }).catch((err) => {
                    console.log(err)
                })
            }
        },
        fnList() {
            delete this.requestBody.noticeidx
            this.$router.push({
                path: './list',
                query: this.requestBody
            })
        },
        fnView(noticeidx) {
            this.requestBody.noticeidx = noticeidx
            this.$router.push({
                path: './detail',
                query: this.requestBody
            })
        },
        fnSave() {
            const test = JSON.parse(this.$cookie.get('emp'))
            let apiUrl = this.$serverUrl + '/notice'
            this.form = {
                "noticeidx": this.noticeidx,
                "title": this.title,
                "content": this.content,
                "writer": {
                    "emp_idx": test.emp_idx
                }
            }

            if (this.noticeidx === undefined) {
                //등록
                this.$axios.post(apiUrl, this.form)
                    .then((res) => {
                        alert('글이 저장되었습니다.')
                        this.fnView(res.data.noticeidx)
                    }).catch((err) => {
                    if (err.message.indexOf('Network Error') > -1) {
                        alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                    }
                })
            } else {
                //수정
                this.$axios.patch(apiUrl, this.form)
                    .then((res) => {
                        alert('글이 저장되었습니다.')
                        this.fnView(res.data.noticeidx)
                    }).catch((err) => {
                    if (err.message.indexOf('Network Error') > -1) {
                        alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                    }
                })
            }
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
    color: #0a0a0a;
}
</style>
