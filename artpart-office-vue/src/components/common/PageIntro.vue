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
                    <div class="col-auto mb-5">
                        <a href="http://localhost:8887/" class="btn btn-primary">입주민 로그인</a>
                    </div>
                    <!--<button @click="testinsert" class="btn">버튼</button>-->
                    <!-- Contact Form -->
                    <form @submit.prevent="login">
                        <!-- Email address input-->
                        <div class="row input-group-newsletter ms-5 ps-5">
                            <div class="col-auto">
                                <label for="inputId" class="visually-hidden">Id</label>
                                <input type="Id" class="form-control" v-model="empid" id="inputId" placeholder="아이디">
                            </div>
                            <div class="col-auto">
                                <label for="inputPassword2" class="visually-hidden">Password</label>
                                <input type="password" class="form-control" v-model="emppwd" id="inputPassword2"
                                       placeholder="비밀번호" autocomplete="off">
                            </div>
                            <div class="col-auto">
                                <button type="submit" class="btn btn-primary mb-3">로그인</button>
                            </div>
                        </div>
                    </form>
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
            empDto: {}, // 로그인한 회원 정보
            empid: '',
            emppwd: '',
        };
    },
    mounted() {
        this.clearCookie();
    },
    methods: {
        clearCookie(){
            this.$cookie.remove('token');
            this.$cookie.remove('emp');
        },
        login() {
            this.$axios.post(this.$serverUrl + "/login?username=" + this.empid + "&password=" + this.emppwd, {
                username: this.empid,
                password: this.emppwd,
            })
                .then((res) => {
                    if (res.headers.authorization != null) {
                        this.$cookie.set('token', res.headers.authorization.substring(7))
                        this.$axios.defaults.headers.common.Authorization = "Bearer " + this.$cookie.get('token');
                        this.$axios.get(this.$serverUrl + "/emp/"+ this.empid)
                            .then((res2) => {
                                const str = JSON.stringify(res2.data.data)
                                this.$cookie.set('emp', str);
                                this.$router.push({
                                    path: '/notice/list',
                                }); //push
                            })
                    }


                    if (res.headers.authorization == null) {
                        alert("접속할 수 없습니다.");
                        this.$router.push({
                            path: "/"
                        })
                    }
                }).catch((err) => {
                if (err.message.indexOf('Network Error') > -1) {
                    alert('서버와 통신이 불안정합니다.');
                }
            });

        },
        // testinsert() {
        //     this.$axios.post(this.$serverUrl + "/testinsert")
        //         .then((res) => {
        //             if (res.data.result_code === 'OK') {
        //                 alert('성공');
        //             }
        //             if (res.data.result_code === 'ERROR') {
        //                 alert('실패');
        //             }
        //         }).catch((err) => {
        //         if (err.message.indexOf('Network Error') > -1) {
        //             alert('서버와 통신이 불안정합니다.');
        //         }
        //     });
        // },
    }
};
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

    #submitButton {
        font-size: 1.5rem;
    }
}
</style>