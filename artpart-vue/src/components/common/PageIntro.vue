<template>
    <div>
        <!-- Background Video-->
        <video class="bg-video" playsinline autoplay muted loop>
            <source src="@/assets/mp4/bg.mp4" type="video/mp4"/>
        </video>
        <!-- Masthead-->
        <div class="masthead">
            <div class="masthead-content text-white">
                <div class="container-fluid px-4 px-lg-0">
                    <h1 class="fst-italic lh-1 mb-4">Welcome to ArtPart ๑•‿•๑</h1>
                    <p class="mb-5">
                        Welcome, residents of ArtPart! Please log in to access important notices and updates for
                        residents!
                    </p>
                    <button class="btn-light" @click="testinsert">임시</button>

                    <!-- Contact Form -->
                    <form @submit.prevent="login">
                        <div class="row input-group-newsletter ms-5 ps-5">
                            <div class="col-auto">
                                <label for="inputId" class="visually-hidden">Id</label>
                                <input type="Id" class="form-control" v-model="memberid" id="inputId" placeholder="아이디">
                            </div>
                            <div class="col-auto">
                                <label for="inputPassword2" class="visually-hidden">Password</label>
                                <input type="password" class="form-control" v-model="memberpwd" id="inputPassword2"
                                       placeholder="비밀번호" autocomplete="off">
                            </div>
                        </div>

                        <div class="col-auto">
                            <br/>
                            <button type="submit" class="btn btn-primary mb-4"
                                    style="float: left; left: 105px; width: 500px;">LOGIN
                            </button>
                            <br>
                        </div>

                        <div class="col-auto mb-5">
                            <a href="http://localhost:8282" class="botton1 btn-primary rounded-2"
                               style="float: left; left: 105px; width: 245px; margin-right:10px;">관리자 로그인 </a>
                            <router-link to="/member/main" class="botton1 btn-primary rounded-2"
                                         style="float: left; left: 105px; width: 245px;"> 임시입주민
                            </router-link>
                        </div>
                    </form>
                    <button class="btn btn-light" @click="testlogin">테스트로그인</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "PageIntro",
    data() {
        return {
            requestBody: {},
            member: {}, // 로그인한 회원 정보
            memberid: '',
            memberpwd: '',
        };
    },
    mounted() {
        this.cookieClear()
    },
    methods: {
        cookieClear() {
            this.$cookie.remove('token');
            this.$cookie.remove('member');
        },
        login() {
            this.$axios.post(this.$serverUrl + "/login?username=" + this.memberid + "&password=" + this.memberpwd,
                {
                    username: this.memberid,
                    password: this.memberpwd
                }
            )
                .then((res) => {
                    if (res.headers.authorization != null) {
                        this.$cookie.set('token', res.headers.authorization.substring(7))
                        this.$axios.defaults.headers.common.Authorization = "Bearer " + this.$cookie.get('token');
                        this.$axios.get(this.$serverUrl + "/member/" + this.memberid,)
                            .then((res2) =>{
                                const str = JSON.stringify(res2.data.data);
                                this.$cookie.set('member', str);
                                this.$router.push({
                                    path: '/member/main',
                                });
                            })
                    }
                    if (res.data.headers.authorization == null) {
                        alert("접속할 수 없습니다.");
                        this.$router.push({
                            path: "/"
                        })
                    }
                }).catch((err) => {
                    alert("로그인 할 수 없습니다. 관리자에게 문의하세요.")
                if (err.message.indexOf('Network Error') > -1) {
                    alert('서버와 통신이 불안정합니다.');
                }
            })
        },  // login
        testinsert() {
            this.$axios.post(this.$serverUrl + "/testinsert")
                .then((res) => {
                    if (res.data.result_code === 'OK') {
                        alert('성공');
                    }
                    if (res.data.result_code === 'ERROR') {
                        alert('실패');
                    }
                }).catch((err) => {
                if (err.message.indexOf('Network Error') > -1) {
                    alert('서버와 통신이 불안정합니다.');
                }
            });
        },
        testlogin() {
            this.$axios.post(this.$serverUrl + "/login?username=so여물&password=duanf", {
                    username: 'so여물',
                    password: 'duanf',
                } )
                .then((res) => {
                    if (res.headers.authorization != null) {
                        this.$cookie.set('token', res.headers.authorization.substring(7))
                        this.$axios.defaults.headers.common.Authorization = "Bearer " + this.$cookie.get('token');
                        this.$axios.get(this.$serverUrl + "/member/so여물")
                            .then((res2) =>{
                                const str = JSON.stringify(res2.data.data);
                                this.$cookie.set('member', str);
                                this.$router.push({
                                    path: '/member/main',
                                });
                            })
                    }
                    if (res.data.headers.authorization == null) {
                        alert("접속할 수 없습니다.");
                        this.$router.push({
                            path: "/"
                        })
                    }
                }).catch((err) => {
                if (err.message.indexOf('Network Error') > -1) {
                    alert('서버와 통신이 불안정합니다.');
                }
            })

        }
    }
}
</script>

<style>
.bg-video {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
}

.masthead {
    position: relative;
    background-color: rgba(0, 0, 0, 0.7);
    height: 100vh;
    min-height: 500px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.masthead-content {
    position: absolute;
    top: 50%;
    width: 100%;
    padding: 0 15px;
    text-align: center;
    transform: translateY(-50%);
}

.masthead-content h1 {
    font-size: 4rem;
    font-weight: 400;
    line-height: 1.2;
}

.masthead-content p {
    font-size: 1.5rem;
    font-weight: 300;
}

.input-group-newsletter {
    max-width: 500px;
}

#email {
    font-size: 1.2rem;
    border: none;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
}

#submitButton {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    position: relative;
}

.invalid-feedback {
    display: block;
    margin-top: 0.25rem;
    font-size: 80%;
    color: #dc3545;
}

.social-icons {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2rem;
}

.social-icons .btn {
    font-size: 1.25rem;
    line-height: 2rem;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0;
    border-radius: 100%;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.5);
    transition: all 0.2s;
}

.social-icons .btn:hover {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.9);
}

@media (min-width: 768px) {
    .masthead {
        height: 100vh;
        min-height: 0;
        background-position: center;
    }

    .masthead-content {
        width: 50%;
        padding: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    .masthead-content h1 {
        font-size: 5rem;
    }

    .masthead-content p {
        font-size: 1.75rem;
    }

    .input-group-newsletter {
        max-width: 750px;
    }

    #email {
        font-size: 1.5rem;
    }

    input[type="submit"],
    button[type="submit"],
    .botton1 {
        position: relative;
        font-size: 15px;
        width: 500px;
        left: 2%;
        background-color: Khaki;
        color: black;
        /* margin: 50px; */
        padding: 10px;
        text-decoration-line: none;
    }
}
</style>