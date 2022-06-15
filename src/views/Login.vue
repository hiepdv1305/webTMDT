<template>
  <body class="page home page-template-default">
    <div id="page" class="hfeed site">
            <a class="skip-link screen-reader-text" href="#site-navigation">Skip to navigation</a>
            <a class="skip-link screen-reader-text" href="#content">Skip to content</a>
            <div id="content" class="site-content" tabindex="-1">
                <div class="container">

                    <nav class="woocommerce-breadcrumb" ><a href="/">Trang chủ</a><span class="delimiter"><i class="fa fa-angle-right"></i></span>Đăng nhập</nav><!-- .woocommerce-breadcrumb -->

                    <div id="primary" class="content-area">
                        <main id="main" class="site-main">
                            <article id="post-8" class="hentry">

                                <div class="entry-content">
                                    <div class="woocommerce">
                                        <div class="customer-login-form">
                                            <span class="or-text">or</span>

                                            <div class="col2-set" id="customer_login">

                                                <div class="col-1">

                                                    <h2>Đăng nhập</h2>

                                                    <!-- <form method="post" class="login"> -->

                                                        <p class="before-login-text">Mừng trở lại! Đăng nhập vào tài khoản của bạn</p>

                                                        <p class="form-row form-row-wide">
                                                            <label for="username">Tên đăng nhập<span class="required">*</span></label>
                                                            <input v-model="loginSchema.username" type="text" class="input-text"/>
                                                        </p>

                                                        <p class="form-row form-row-wide">
                                                            <label for="password">Mật khẩu<span class="required">*</span></label>
                                                            <input v-model="loginSchema.password" class="input-text" type="password" />
                                                        </p>

                                                        <p class="form-row">
                                                            <button @click="login" class="button">Đăng nhập</button>
                                                            <label for="rememberme" class="inline"><input name="rememberme" type="checkbox" id="rememberme" value="forever" /> Nhớ tài khoản</label>
                                                        </p>

                                                        <p class="lost_password"><a href="login-and-register.html">Quên mật khẩu?</a></p>

                                                    <!-- </form> -->

                                                </div><!-- .col-1 -->

                                                <div class="col-2">

                                                    <h2>Đăng ký</h2>

                                                    <!-- <form class="register"> -->

                                                        <p class="before-register-text">Tạo tài khoản</p>

                                                        <p class="form-row form-row-wide">
                                                            <label for="reg_email">Email<span class="required">*</span></label>
                                                            <input v-model="registerSchema.email" type="email" class="input-text" />
                                                        </p>
                                                        <p class="form-row form-row-wide">
                                                            <label for="reg_email">Họ tên<span class="required">*</span></label>
                                                            <input v-model="registerSchema.fullname" type="text" class="input-text"  />
                                                        </p>
                                                        <p class="form-row form-row-wide">
                                                            <label for="reg_email">Số điện thoại<span class="required">*</span></label>
                                                            <input v-model="registerSchema.phonenumber" type="phone" class="input-text"  />
                                                        </p>
                                                        <p class="form-row form-row-wide">
                                                            <label for="reg_email">Địa chỉ<span class="required">*</span></label>
                                                            <input v-model="registerSchema.address" type="address" class="input-text"/>
                                                        </p>
                                                        <p class="form-row form-row-wide">
                                                            <label for="reg_email">Tên đăng nhập<span class="required">*</span></label>
                                                            <input v-model="registerSchema.username" type="text" class="input-text"/>
                                                        </p>
                                                        <p class="form-row form-row-wide">
                                                            <label for="reg_email">Mật khẩu<span class="required">*</span></label>
                                                            <input v-model="registerSchema.password" type="password" class="input-text"/>
                                                        </p>
                                                        <p class="form-row form-row-wide">
                                                            <label for="reg_email">Xác nhận mật khẩu<span class="required">*</span></label>
                                                            <input v-model="registerSchema.confirmpassword" type="password" class="input-text"/>
                                                        </p>
                                                        <button @click="register" class="button"> Đăng ký</button>

                                                        <div class="register-benefits">
                                                            <h3>Sign up today and you will be able to :</h3>
                                                            <ul>
                                                                <li>Speed your way through checkout</li>
                                                                <li>Track your orders easily</li>
                                                                <li>Keep a record of all your purchases</li>
                                                            </ul>
                                                        </div>

                                                    <!-- </form> -->

                                                </div><!-- .col-2 -->

                                            </div><!-- .col2-set -->

                                        </div><!-- /.customer-login-form -->
                                    </div><!-- .woocommerce -->
                                </div><!-- .entry-content -->

                            </article><!-- #post-## -->

                        </main><!-- #main -->
                    </div><!-- #primary -->

                </div><!-- .col-full -->
            </div><!-- #content -->

            <section class="brands-carousel">
                <h2 class="sr-only">Brands Carousel</h2>
                <div class="container">
                    <div id="owl-brands" class="owl-brands owl-carousel unicase-owl-carousel owl-outer-nav">

                        <div class="item">

                            <a href="#">

                                <figure>
                                    <figcaption class="text-overlay">
                                        <div class="info">
                                            <h4>Acer</h4>
                                        </div><!-- /.info -->
                                    </figcaption>

                                     <img src="assets/images/blank.gif" data-echo="assets/images/brands/1.png" class="img-responsive" alt="">

                                </figure>
                            </a>
                        </div><!-- /.item -->

                        <div class="item">

                            <a href="#">

                                <figure>
                                    <figcaption class="text-overlay">
                                        <div class="info">
                                            <h4>Apple</h4>
                                        </div><!-- /.info -->
                                    </figcaption>

                                     <img src="assets/images/blank.gif" data-echo="assets/images/brands/2.png" class="img-responsive" alt="">

                                </figure>
                            </a>
                        </div><!-- /.item -->

                        <div class="item">

                            <a href="#">

                                <figure>
                                    <figcaption class="text-overlay">
                                        <div class="info">
                                            <h4>Asus</h4>
                                        </div><!-- /.info -->
                                    </figcaption>

                                     <img src="assets/images/blank.gif" data-echo="assets/images/brands/3.png" class="img-responsive" alt="">

                                </figure>
                            </a>
                        </div><!-- /.item -->

                        <div class="item">

                            <a href="#">

                                <figure>
                                    <figcaption class="text-overlay">
                                        <div class="info">
                                            <h4>Dell</h4>
                                        </div><!-- /.info -->
                                    </figcaption>

                                    <img src="assets/images/blank.gif" data-echo="assets/images/brands/4.png" class="img-responsive" alt="">

                                </figure>
                            </a>
                        </div><!-- /.item -->

                        <div class="item">

                            <a href="#">

                                <figure>
                                    <figcaption class="text-overlay">
                                        <div class="info">
                                            <h4>Gionee</h4>
                                        </div><!-- /.info -->
                                    </figcaption>

                                    <img src="assets/images/blank.gif" data-echo="assets/images/brands/5.png" class="img-responsive" alt="">

                                </figure>
                            </a>
                        </div><!-- /.item -->

                        <div class="item">

                            <a href="#">

                                <figure>
                                    <figcaption class="text-overlay">
                                        <div class="info">
                                            <h4>HP</h4>
                                        </div><!-- /.info -->
                                    </figcaption>

                                    <img src="assets/images/blank.gif" data-echo="assets/images/brands/6.png" class="img-responsive" alt="">

                                </figure>
                            </a>
                        </div><!-- /.item -->

                        <div class="item">

                            <a href="#">

                                <figure>
                                    <figcaption class="text-overlay">
                                        <div class="info">
                                            <h4>HTC</h4>
                                        </div><!-- /.info -->
                                    </figcaption>

                                    <img src="assets/images/blank.gif" data-echo="assets/images/brands/3.png" class="img-responsive" alt="">

                                </figure>
                            </a>
                        </div><!-- /.item -->

                        <div class="item">

                            <a href="#">

                                <figure>
                                    <figcaption class="text-overlay">
                                        <div class="info">
                                            <h4>IBM</h4>
                                        </div><!-- /.info -->
                                    </figcaption>

                                    <img src="assets/images/blank.gif" data-echo="assets/images/brands/5.png" class="img-responsive" alt="">

                                </figure>
                            </a>
                        </div><!-- /.item -->

                        <div class="item">

                            <a href="#">

                                <figure>
                                    <figcaption class="text-overlay">
                                        <div class="info">
                                            <h4>Lenova</h4>
                                        </div><!-- /.info -->
                                    </figcaption>

                                    <img src="assets/images/blank.gif" data-echo="assets/images/brands/2.png" class="img-responsive" alt="">

                                </figure>
                            </a>
                        </div><!-- /.item -->

                        <div class="item">

                            <a href="#">

                                <figure>
                                    <figcaption class="text-overlay">
                                        <div class="info">
                                            <h4>LG</h4>
                                        </div><!-- /.info -->
                                    </figcaption>

                                    <img src="assets/images/blank.gif" data-echo="assets/images/brands/1.png" class="img-responsive" alt="">

                                </figure>
                            </a>
                        </div><!-- /.item -->

                        <div class="item">

                            <a href="#">

                                <figure>
                                    <figcaption class="text-overlay">
                                        <div class="info">
                                            <h4>Micromax</h4>
                                        </div><!-- /.info -->
                                    </figcaption>

                                    <img src="assets/images/blank.gif" data-echo="assets/images/brands/6.png" class="img-responsive" alt="">

                                </figure>
                            </a>
                        </div><!-- /.item -->

                        <div class="item">

                            <a href="#">

                                <figure>
                                    <figcaption class="text-overlay">
                                        <div class="info">
                                            <h4>Microsoft</h4>
                                        </div><!-- /.info -->
                                    </figcaption>

                                    <img src="assets/images/blank.gif" data-echo="assets/images/brands/4.png" class="img-responsive" alt="">

                                </figure>
                            </a>
                        </div><!-- /.item -->

                    </div><!-- /.owl-carousel -->

                </div>
            </section>
        </div><!-- #page -->
  </body>
</template>
<script src="../assets/js/jquery.min.js"></script>
<script src="../assets/js/tether.min.js"></script>
<script src="../assets/js/bootstrap.min.js"></script>
<script src="../assets/js/bootstrap-hover-dropdown.min.js"></script>
<script src="../assets/js/owl.carousel.min.js"></script>
<script src="../assets/js/echo.min.js"></script>
<script src="../assets/js/wow.min.js"></script>
<script src="../assets/js/jquery.easing.min.js"></script>
<script src="../assets/js/jquery.waypoints.min.js"></script>
<script src="../assets/js/electro.js"></script>
<script src="../switchstylesheet/switchstylesheet.js"></script>
<script>
import api from '../api/api'
export default {
  name: 'login',
  data () {
    return {
      registerSchema: {
        fullname: '',
        email: '',
        phonenumber: '',
        username: '',
        password: '',
        confirmpassword: ''
      },
      loginSchema: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async register () {
      console.log(this.registerSchema)
      let result = await api.register(this.registerSchema)
      console.log(result)
      if (result.data.statusCode === 200) {
        // this.$router.push({ path: '/login' })
        alert('Đăng ký tài khoản thành công')
      }
    },
    async login () {
      if (this.loginSchema.username === '') {
        alert('validate username')
      } else if (this.loginSchema.password === '') {
        alert('validate password')
      } else {
        try {
          let result = await api.login(this.loginSchema)
          console.log(result)
          if (result.data.statusCode === 200) {
            localStorage.setItem('accessToken', result.data.data)

            this.$router.push({ path: '/' })
          }
        } catch (e) {
          alert(e.message)
        }
      }
    }
  }
}
</script>
<style>
  @import "../assets/css/animate.min.css";
  @import "../assets/css/bootstrap.css";
  @import "../assets/css/bootstrap.min.css";
  @import "../assets/css/config.css";
  @import "../assets/css/font-awesome.min.css";
  @import "../assets/css/font-electro.css";
  @import "../assets/css/owl-carousel.css";
  @import "../assets/css/style.css";
  @import "../assets/css/colors/black.css";
  @import "../assets/css/colors/blue.css";
  @import "../assets/css/colors/flat-blue.css";
  @import "../assets/css/colors/gold.css";
  @import "../assets/css/colors/green.css";
  @import "../assets/css/colors/orange.css";
  @import "../assets/css/colors/pink.css";
  @import "../assets/css/colors/red.css";
  @import "../assets/css/colors/yellow.css";
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,700italic,800,800italic,600italic,400italic,300italic");
</style>
