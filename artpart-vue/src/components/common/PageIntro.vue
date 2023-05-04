<template>
    <div>
      <!-- Background Video-->
      <video class="bg-video" playsinline autoplay muted loop>
        <source src="@/assets/mp4/bg.mp4" type="video/mp4" />
      </video>
      <!-- Masthead-->
      <div class="masthead">
        <div class="masthead-content text-white">
          <div class="container-fluid px-4 px-lg-0">
            <h1 class="fst-italic lh-1 mb-4">Our Website is Coming Soon</h1>
            <p class="mb-5">
              We're working hard to finish the development of this site. Sign up below to receive updates and to be notified when we launch!
            </p>

            <div class="col-auto mb-5">
                  <a href="http://localhost:80" class="btn btn-primary">관리자 로그인</a>
            </div>
            <!-- Contact Form -->
            <form @submit.prevent="login"> 
              <div class="row input-group-newsletter ms-5 ps-5">
                    <div class="col-auto">
                    <label for="inputId" class="visually-hidden">Id</label>
                    <input type="Id" class="form-control" v-model="memberid" id="inputId" placeholder="아이디">
                </div>
                <div class="col-auto">
                    <label for="inputPassword2" class="visually-hidden">Password</label>
                    <input type="password" class="form-control" v-model="memberpwd" id="inputPassword2" placeholder="비밀번호">
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3">로그인</button>
                </div>
              </div>
              
              <!-- Submit success message-->
              <div class="d-none" :class="{ 'd-block': isFormSubmitted }" id="submitSuccessMessage">
                <div class="text-center mb-3 mt-2">
                  <div class="fw-bolder">Form submission successful!</div>
                  To activate this form, sign up at
                  <br />
                  <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                </div>
              </div>
              <!-- Submit error message-->
              <div class="d-none" :class="{ 'd-block': isFormSubmitError }" id="submitErrorMessage">
                <div class="text-center text-danger mb-3 mt-2">Error sending message!</div>
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
        member: {} // 로그인한 회원 정보
      };
    },
    methods: {
      login() {
        this.requestBody = {
          memberid: this.memberid,
          memberpwd: this.memberpwd
        };
        this.$axios.get(this.$serverUrl + "/login/" + this.memberid, {
          params: {
            memberpwd: this.memberpwd
          }
        })
        .then((res) => {
          if(res.data.result_code === 'OK'){
            sessionStorage.setItem('member', JSON.stringify(res.data.data));
            // 로그인 성공시 메인페이지 이동
            this.$router.push({ 
              path: '/member/main',
            });
          }
          if(res.data.result_code === 'ERROR'){
            alert(res.data.description);
          }
        }).catch((err) => {
          if (err.message.indexOf('Network Error') > -1){
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

  #submitButton {
    font-size: 1.5rem;
  }
}
</style>