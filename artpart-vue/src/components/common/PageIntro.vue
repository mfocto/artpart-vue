<!-- PageIntro.vue -->
<template>
<div class="background"> <!--백그라운드-->

    <div class="masthead-content">
        <div class="masthead">
            <div class="box">  
                <div class="front"> <img src="@/assets/images/black.jpg" /> 
                    <div class="container-fluid px-4 px-lg-0">
                        <h1 class="fst fst-italic lh-1 mb-4">Our Website is Coming Soon</h1>
                        <p class="mb-5">We're working hard to finish the development of this site. Sign up below to receive updates and to be notified when we launch!</p>
                        <form id="contactForm" >
                            <!-- id address input-->
                            <div class="row input-group-newsletter">
                                <div class="col"><input class="form-control" id="id" type="text" placeholder="Enter email address..." aria-label="Enter id" data-sb-validations="required,id" /></div>
                                <div class="col-auto"><button class="btn btn-primary disabled" id="submitButton" type="submit">LOGIN</button></div>
                            </div>
                            <div class="invalid-feedback mt-2" data-sb-feedback="text:required">id를 입력해주세요</div>
                            <div class="invalid-feedback mt-2" data-sb-feedback="email:email">Email is not valid.</div>
                            <!-- Submit success message-->
                            <!---->
                            <!-- This is what your users will see when the form-->
                            <!-- has successfully submitted-->
                            <div class="d-none" id="submitSuccessMessage">
                                <div class="text-center mb-3 mt-2">
                                    <div class="fw-bolder">로그인 성공!</div>
                                    To activate this form, sign up at
                                </div>
                            </div>
                            <!-- Submit error message-->
                            <!---->
                            <!-- This is what your users will see when there is-->
                            <!-- an error submitting the form-->
                            <div class="d-none" id="submitErrorMessage">
                                <div class="text-center text-danger mb-3 mt-2">잘못 입력하셨습니다</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div> <!--백그라운드-->





</template>

<script>

export default {
  name: 'PageIntro',
}

/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js">
<script src="js/scripts.js">
<script src="https://cdn.startbootstrap.com/sb-forms-latest.js"> */

</script>







<style scoped>
.background{ /*백그라운드*/
    width: 100%;
    height: 100vh;
    overflow: hidden;
    margin:auto;
    background-image: url("@/assets/images/bg-mobile-fallback.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  
}

.box{
    position: relative;
}


.front {
    position: absolute;
    bottom: 50%;
    left: -80%;
    border-right: 180px
}

/* 작성중 */
.container-fluid {
    position: absolute;
    font-size: 20px;
    color: white;
    border-right: 180px;
}

</style>




