<!-- PageIntro.vue -->
<template>
    <div class="background">
      Hello
    </div>
    <div class="masthead-content">
        <div class="masthead">
            <div class="box">
                <div class="front"> <img id="img" src="@/assets/images/black.jpg"/></div>
            </div>

            <div class="container-fluid px-4 px-lg-0">
                <h1 class="fst fst-italic lh-1 mb-4">Our Website is Coming Soon</h1>
                <p class="mb-5">We're working hard to finish the development of this site. Sign up below to receive updates and to be notified when we launch!</p>
                <form id="contactForm" >
                    <!-- id address input-->
                    <div class="row input-group-newsletter">
                        <div class="col">
                            <input class="form-control" id="id" type="text" placeholder="아이디를 입력해주세요" aria-label="Enter id" data-sb-validations="required,id" style="width:500px;"/>
                            <input class="form-control" id="password" type="password" placeholder="비밀번호를 입력해주세요" aria-label="Enter password" style="width:500px;" />
                            
                        </div>
                        <div class="col-auto">
                            <button class="btn btn-primary disabled" id="submitButton" type="submit">LOGIN</button></div>
                    </div>
                    <!-- <div class="invalid-feedback mt-2" data-sb-feedback="text:required">id를 입력해주세요</div>
                    <div class="invalid-feedback mt-2" data-sb-feedback="email:email">Email is not valid.</div> -->
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
                    <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3 mt-2">잘못 입력하셨습니다</div></div>
                </form>
            </div>
            
            

            
        </div>
    </div>





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
.background{
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: auto;
  background-image: url("@/assets/images/bg-mobile-fallback.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 0; 
  
}

 .box{
    position: absolute;
    /* left: 400px;
    top: 8%; 
    bottom: 0; */
    z-index: 1;
    background-size: cover;
    object-fit: cover;
    
} 

.front {
    position: absolute;
    top: 550px;
    left: 30%;
    transform: translate(-50%, -50%);
    z-index: 2;
    background-size: cover;
    object-fit: cover;
}

.container-fluid {
    position: absolute;
    top: 550px;
    width: 20%;
    height: 20%;
    /* right: 0;
    top: 70%;
    left: -10%; */
     transform: translateY(-50%);
    z-index: 3;
    
    color: white;
}



</style>




