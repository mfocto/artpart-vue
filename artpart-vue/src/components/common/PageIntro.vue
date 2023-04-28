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
                  <a href="http://192.168.0.117:80" class="btn btn-primary">관리자 로그인</a>
            </div>
            <!-- Contact Form -->
            <form> 
              <!-- Email address input-->
              <div class="row input-group-newsletter ms-5">
                <div class="col">
                  <input class="form-control" v-model="email" type="email" placeholder="Enter email address..." aria-label="Enter email address..." />
                </div>
                <div class="col-auto">
                  <router-link to="/Pay" class="btn btn-primary">로그인</router-link>
                </div>
              </div>
              <div class="invalid-feedback mt-2" v-show="isEmailRequired">An email is required.</div>
              <div class="invalid-feedback mt-2" v-show="isEmailInvalid">Email is not valid.</div>
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
    data() {
      return {
        email: "",
        isFormSubmitted: false,
        isFormSubmitError: false,
      };
    },
    computed: {
      isEmailRequired() {
        return !this.email;
      },
      isEmailInvalid() {
        return !this.isEmailRequired && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
      },
      isFormInvalid() {
        return this.isEmailRequired || this.isEmailInvalid || this.isFormSubmitted;
      },
    },
    methods: {
      submitForm() {
      if (this.$refs.form.checkValidity()) {
        // If form is valid, submit to server
        console.log("Submitting form...");
        // TODO: Send email to server
        this.$refs.form.reset();
        this.$refs.successMessage.classList.remove("d-none");
      } else {
        // If form is invalid, show error messages
        console.log("Form is invalid");
        this.$refs.form.classList.add("was-validated");
      }
    },
  },
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