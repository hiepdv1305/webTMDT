<template>

  <body class="single-product full-width">
    <div id="page" class="hfeed site">
      <a class="skip-link screen-reader-text" href="#site-navigation">Skip to navigation</a>
      <a class="skip-link screen-reader-text" href="#content">Skip to content</a>
      <div id="content" class="site-content" tabindex="-1">
        <div class="container">

          <nav class="woocommerce-breadcrumb">
            <a href="/">Trang chủ</a>
            <span class="delimiter"><i class="fa fa-angle-right"></i></span>
            <a href="product-category.html">{{ event.category }}</a>
            <span class="delimiter"><i class="fa fa-angle-right"></i>
            </span>{{ event.eventName }}
          </nav><!-- /.woocommerce-breadcrumb -->

          <div id="primary" class="content-area">
            <main id="main" class="site-main">

              <div class="product">

                <div class="single-product-wrapper">
                  <div class="product-images-wrapper">
                    <span class="onsale">Sale!</span>
                    <div class="images electro-gallery">
                      <div class="thumbnails-single owl-carousel owl-loaded owl-drag">
                        <a :href="event.image" class="zoom owl-item active" title=""
                          data-rel="prettyPhoto[product-gallery]"><img :src="event.image" class="wp-post-image"
                            alt=""></a>
                        <!--
                                                <a href="../assets/images/single-product/s1.jpg" class="zoom" title="" data-rel="prettyPhoto[product-gallery]"><img src="../assets/images/single-product/s1.jpg" class="wp-post-image" alt=""></a>

                                                <a href="../assets/images/single-product/s2.jpg" class="zoom" title="" data-rel="prettyPhoto[product-gallery]"><img src="../assets/images/single-product/s2.jpg" class="wp-post-image" alt=""></a>

                                                <a href="../assets/images/single-product/s3.jpg" class="zoom" title="" data-rel="prettyPhoto[product-gallery]"><img src="../assets/images/single-product/s3.jpg" class="wp-post-image" alt=""></a>

                                                <a href="../assets/images/single-product/s4.jpg" class="zoom" title="" data-rel="prettyPhoto[product-gallery]"><img src="assets/images/blank.gif" data-echo="assets/images/single-product/s4.jpg" class="wp-post-image" alt=""></a>

                                                <a href="../assets/images/single-product/s5.jpg" class="zoom" title="" data-rel="prettyPhoto[product-gallery]"><img src="assets/images/blank.gif" data-echo="assets/images/single-product/s5.jpg" class="wp-post-image" alt=""></a> -->
                      </div><!-- .thumbnails-single -->
                      <!-- <div class="thumbnails-all columns-5 owl-carousel owl-loaded owl-drag">
                                                <a href="../assets/images/single-product/single-thumb1.jpg" class="first" title=""><img src="../assets/images/single-product/single-thumb1.jpg" class="wp-post-image" alt=""></a>

                                                <a href="../assets/images/single-product/single-thumb2.jpg" class="" title=""><img src="../assets/images/single-product/single-thumb2.jpg" class="wp-post-image" alt=""></a>

                                                <a href="../assets/images/single-product/single-thumb3.jpg" class="" title=""><img src="../assets/images/single-product/single-thumb3.jpg" class="wp-post-image" alt=""></a>

                                                <a href="../assets/images/single-product/single-thumb4.jpg" class="" title=""><img src="../assets/images/single-product/single-thumb4.jpg" class="wp-post-image" alt=""></a>

                                                <a href="../assets/images/single-product/single-thumb5.jpg" class="last" title=""><img src="../assets/images/single-product/single-thumb5.jpg" class="wp-post-image" alt=""></a>

                                                <a href="../assets/images/single-product/single-thumb6.jpg" class="first" title=""><img src="../assets/images/single-product/single-thumb6.jpg" class="wp-post-image" alt=""></a>
                                            </div> -->
                    </div><!-- .electro-gallery -->
                  </div><!-- /.product-images-wrapper -->

                  <div class="summary entry-summary">

                    <span class="loop-product-categories">
                      <a href="product-category.html" rel="tag">{{ event.category }}</a>
                    </span><!-- /.loop-product-categories -->

                    <h1 itemprop="name" class="product_title entry-title">{{ event.eventName }}</h1>
                    <span class="price">
                      <div class="progress">
                        <div class="progress-bar progress-bar-striped" role="progressbar"
                          :style="'width:' + (event.currentPoint / event.totalPoint) * 100 + '%'"
                          :aria-valuenow="event.currentPoint" aria-valuemin="0" :aria-valuemax="event.totalPoint"></div>
                      </div>
                      <span class="electro-price" style="font-weight: bold;color: #4a5b6a; margin-top: -15px"><span
                          class="amount">{{ event.currentPoint }}</span>/<span>{{ event.totalPoint }}</span></span>
                    </span>
                    <div v-if="event.status == 'active'" class="availability in-stock">Trạng thái: <span>Đang diễn
                        ra</span></div><!-- .availability -->
                    <div v-else class="availability in-stock">Trạng thái: <span style="color: red">Kết thúc</span></div>
                    <!-- .availability -->
                    <hr class="single-product-title-divider" />

                    <div itemprop="description">
                      {{ event.description }}
                    </div><!-- .description -->

                    <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">

                      <p class="price"><span class="electro-price"><ins><span
                              class="amount">{{ event.price.toLocaleString('vi', {
                                style: 'currency', currency: 'VND'
                              })}}</span></ins></span></p>
                    </div><!-- /itemprop -->
                    <div>
                      Số vé còn lại: <b>{{ event.totalPoint - event.currentPoint }}</b>
                    </div><!-- .description -->
                    <div class="variations_form cart">
                      <div class="single_variation_wrap">
                        <div class="woocommerce-variation single_variation"></div>
                        <div class="woocommerce-variation-add-to-cart variations_button">
                          <div class="quantity">
                            <label>Số điểm:</label>
                            <input v-model.number="point" type="number" name="quantity" value="1" min="1" title="Qty"
                              class="input-text qty text" />
                          </div>
                          <button class="single_add_to_cart_button button" @click="myModel = true">Mua ngay</button>
                          <!-- <input type="button" class="btn btn-success btn-xs" @click="myModel=true" value="Add" /> -->
                          <div v-if="myModel">
                            <transition name="model">
                              <div class="modal-mask">
                                <div class="modal-wrapper">
                                  <div class="modal-dialog">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        Tuyệt vời
                                        <button type="button" class="close" @click="myModel = false"><span
                                            aria-hidden="true">&times;</span></button>
                                      </div>
                                      <div class="modal-body">
                                        <h5>Bạn có chắc muốn dùng {{ (point * 10000).toLocaleString('vi', {
                                          style:
                                          'currency', currency: 'VND' })}} để mua {{ point }} điểm không</h5>
                                        <br />
                                        <div align="center">
                                          <button class="" type="button" @click="myModel = false">Hủy</button>
                                          <button style="background-color: #fed700; margin-left: 10px" type="button"
                                            @click="createDeal">Mua ngay</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </transition>
                          </div>
                          <!-- <button type="submit" class="single_add_to_cart_button button">Mua ngay</button> -->
                        </div>
                      </div>
                    </div>

                  </div><!-- .summary -->
                </div><!-- /.single-product-wrapper -->

                <div class="woocommerce-tabs wc-tabs-wrapper">
                  <ul class="nav nav-tabs electro-nav-tabs tabs wc-tabs" role="tablist">
                    <!--
                                        <li class="nav-item specification_tab">
                                            <a href="#tab-specification" data-toggle="tab">Specification</a>
                                        </li> -->

                    <li class="nav-item reviews_tab">
                      <a :class="{ active: tab === 1 }" v-if="user.username === event.winner" @click="tab = 1"
                        data-toggle="tab">Nhận thưởng</a>
                    </li>
                    <li class="nav-item reviews_tab">
                      <a :class="{ active: tab === 2 }" @click="tab = 2" data-toggle="tab">Danh sách tham gia</a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div :class="{ active: tab === 1 }" class="tab-pane panel entry-content wc-tab">
                      <div class="wrapper">
                        <ul class="steps">
                          <li v-bind:class="{ 'is-active': step === 1 }">Step 1</li>
                          <li v-bind:class="{ 'is-active': step === 2 }">Step 2</li>
                        </ul>
                        <form class="form-wrapper">
                          <div v-if="step === 1">
                            <main id="main" class="site-main">
                              <article id="post-8" class="hentry">

                                <div class="entry-content">
                                  <div class="woocommerce">
                                    <div class="customer-login-form">
                                      <span class="or-text">or</span>

                                      <div class="col2-set" id="customer_login">

                                        <div class="col-1">

                                          <h2>Nhận tiền</h2>

                                          <!-- <form method="post" class="login"> -->

                                          <p class="before-login-text">Tiền sẽ được cộng vào tài khoản của quý khách
                                            bằng 80% giá trị sản phẩm</p>
                                          <p class="form-row">
                                            <button class="button" @click="reward(), option = 'money', step = 2">Nhận
                                              tiền</button>
                                          </p>

                                          <!-- </form> -->

                                        </div><!-- .col-1 -->

                                        <div class="col-2">

                                          <h2>Nhận sản phẩm</h2>

                                          <!-- <form> -->

                                          <p class="before-register-text">Cho chúng tôi biết thông tin để sản phẩm tới
                                            tay bạn nhanh nhất</p>

                                          <p class="form-row form-row-wide">
                                            <label for="reg_email">Họ tên<span class="required">*</span></label>
                                            <input v-model="schema.fullname" type="address" class="input-text" />
                                          </p>
                                          <p class="form-row form-row-wide">
                                            <label for="reg_email">Số điện thoại<span class="required">*</span></label>
                                            <input v-model="schema.phonenumber" type="phone" class="input-text" />
                                          </p>
                                          <p class="form-row form-row-wide">
                                            <label for="reg_email">Địa chỉ<span class="required">*</span></label>
                                            <input v-model="schema.address" type="address" class="input-text" />
                                          </p>
                                          <button class="button" @click="reward(), option = 'product', step = 2"> Đăng
                                            ký</button>
                                          <!-- </form> -->

                                        </div><!-- .col-2 -->

                                      </div><!-- .col2-set -->

                                    </div><!-- /.customer-login-form -->
                                  </div><!-- .woocommerce -->
                                </div><!-- .entry-content -->

                              </article><!-- #post-## -->

                            </main><!-- #main -->
                          </div>
                          <div v-if="step === 2">
                            <div v-if="!check" style="text-align: center; color: rgb(211 113 30);"> <svg
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-alarm" viewBox="0 0 16 16">
                                <path
                                  d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                <path
                                  d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                              </svg>
                              <div>Đang xử lý</div>
                            </div>
                            <div v-else-if="option == 'product'" style="text-align: center; color: green;">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-emoji-smile" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path
                                  d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                              </svg>
                              <div>
                                Thành công, sản phẩm sẽ được giao tới quý khách trong vòng 1 tuần
                              </div>
                            </div>
                            <div v-else-if="option == 'money'" style="text-align: center; color: green;">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-emoji-smile" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path
                                  d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                              </svg>
                              <div>
                                Thành công, kiểm tra tài khoản của bạn, Nếu có bất kỳ khiếu nại nào vui lòng liên hệ
                                hotline để được giải quyết
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div><!-- /.panel -->
                    <div :class="{ active: tab === 2 }" class="tab-pane in panel entry-content wc-tab">
                      <div v-if="event.status == 'finish'">Con số may mắn là <b>{{ event.winnerNumber }}</b>. Chúc mừng
                        <b>{{ event.winner }}</b> đã là người chiến thắng sự kiện này</div>
                      <div v-if="participants.length === 0">
                        <h3>Bạn hãy là người đầu tiên tham gia sự kiện này</h3>
                      </div>
                      <div v-else>
                        <table>
                          <tr>
                            <th>Username</th>
                            <th>Số vé</th>
                            <th>Bắt đầu - kết thúc</th>
                          </tr>
                          <tr v-for="participant in participants" :key="participant.dealId">
                            <td>{{ participant.username }}</td>
                            <td>{{ participant.point }}</td>
                            <td v-if="participant.beginNumber === participant.endNumber">{{ participant.beginNumber }}</td>
                            <td v-else>{{ participant.beginNumber }}--{{ participant.endNumber }}</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div><!-- /.woocommerce-tabs -->
              </div><!-- /.product -->

            </main><!-- /.site-main -->
          </div><!-- /.content-area -->
        </div><!-- /.container -->
      </div><!-- /.site-content -->

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
<script>(function(){if(window===window.parent){document.getElementById('_wp_unfiltered_html_comment_disabled').name='_wp_unfiltered_html_comment';}})();</script>
<script>
import api from '../../api/api'
import jwt_decode from 'jwt-decode'
export default {
  name: 'login',
  data () {
    return {
      event: {},
      point: 1,
      myModel:false,
      tab:1,
      option: 'product',
      step: 1,
      participants: [],
      user: {},
      schema:{
        fullname: '',
        phonenumber: '',
        address:'',
      },
      check: false
    }
  },
  mounted () {
    this.getEvent()
    this.eventGetDeal()
  },
  methods: {
    async getEvent () {
      let id = this.$route.params.id
      // console.log(id)
      let result = await api.getEvent(id)
      if(result.status ===200){
        this.event = result.data.data
        if(this.event.status=='finish') this.getUser();
      }
        this.event.price = this.event.price
    },
    async createDeal(){
        if(this.event.currentPoint+this.point>this.event.totalPoint){
            alert("Số điểm bạn muốn mua vượt quá giới hạn");
        }else{
            let result = await api.createDeal({
            eventId: this.$route.params.id,
            point: this.point,
            image: this.event.image,
            eventName: this.event.eventName,
            price: this.point*10000,
            eventPrice: this.event.price
        })
        console.log(result)
        if(result.data.statusCode === 200){
            this.myModel = false
            window.location.reload();
        }
        else{
            alert(result.data.message)
            this.myModel = false
        }
        }
    },
    async eventGetDeal(){
        let id = this.$route.params.id
        let result = await api.eventGetDeal(id)
        // console.log(result)
        this.participants = result.data.data.Items
    },
    myModel_(){
    // console.log(1)
     this.myModel = !this.myModel
     console.log(this.myModel)
    },
    getUser () {
      let token = localStorage.getItem('accessToken')
      // console.log(token)
      if (token) {
        try {
          this.user = jwt_decode(token)
        //   console.log(this.user)
        } catch (err) {
          console.log(err)
        }
      }
    },
    async reward(){
        let result = await api.reward({
          eventId: this.event.eventId,
            option: this.option,
            fullname: this.schema.fullname,
            phonenumber: this.schema.phonenumber,
            address: this.schema.address,
            money: this.event.price
        })
        console.log(result)
        if(result.data.statusCode===200) this.check = true;
        else{
          alert('Xảy ra lỗi')
        }
    }
  }
}
</script>
<style>
@import "../../assets/css/animate.min.css";
@import "../../assets/css/bootstrap.css";
@import "../../assets/css/bootstrap.min.css";
@import "../../assets/css/config.css";
@import "../../assets/css/font-awesome.min.css";
@import "../../assets/css/font-electro.css";
@import "../../assets/css/owl-carousel.css";
@import "../../assets/css/style.css";
@import "../../assets/css/colors/black.css";
@import "../../assets/css/colors/blue.css";
@import "../../assets/css/colors/flat-blue.css";
@import "../../assets/css/colors/gold.css";
@import "../../assets/css/colors/green.css";
@import "../../assets/css/colors/orange.css";
@import "../../assets/css/colors/pink.css";
@import "../../assets/css/colors/red.css";
@import "../../assets/css/colors/yellow.css";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,700italic,800,800italic,600italic,400italic,300italic");

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

.progress {
  --bs-progress-height: 1rem;
  --bs-progress-font-size: 0.75rem;
  --bs-progress-bg: #e9ecef;
  --bs-progress-border-radius: 0.375rem;
  --bs-progress-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);
  --bs-progress-bar-color: #fff;
  --bs-progress-bar-bg: #fed700;
  --bs-progress-bar-transition: width 0.6s ease;
  display: flex;
  height: var(--bs-progress-height);
  overflow: hidden;
  font-size: var(--bs-progress-font-size);
  background-color: var(--bs-progress-bg);
  border-radius: var(--bs-progress-border-radius);
}

.progress {
  width: 100%;
  height: 0.75rem;
  margin-bottom: 0.2rem;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  /* background-color: #3498db; */
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 200;
}

a {
  text-decoration: none;
}

p,
li,
a {
  font-size: 14px;
}

fieldset {
  margin: 0;
  padding: 0;
  border: none;
}

/* GRID */

.twelve {
  width: 100%;
}

.eleven {
  width: 91.53%;
}

.ten {
  width: 83.06%;
}

.nine {
  width: 74.6%;
}

.eight {
  width: 66.13%;
}

.seven {
  width: 57.66%;
}

.six {
  width: 49.2%;
}

.five {
  width: 40.73%;
}

.four {
  width: 32.26%;
}

.three {
  width: 23.8%;
}

.two {
  width: 15.33%;
}

.one {
  width: 6.866%;
}

/* COLUMNS */

.col {
  display: block;
  float: left;
  margin: 0 0 0 1.6%
}

.col:first-of-type {
  margin-left: 0;
}

.container {
  width: 100%;
  /* max-width: 700px; */
  margin: 0 auto;
  /* position: relative; */
}

.row {
  padding: 20px 0;
}

/* CLEARFIX */

.cf:before,
.cf:after {
  content: " ";
  display: table;
}

.cf:after {
  clear: both;
}

/* .cf {
    *zoom: 1;
} */

.wrapper {
  width: 100%;
  margin: 30px 0;
}

/* STEPS */

.steps {
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #fff;
  text-align: center;
}

.steps li {
  display: inline-block;
  margin: 20px;
  color: #ccc;
  padding-bottom: 5px;
}

.steps li.is-active {
  border-bottom: 1px solid #3498db;
  color: #3498db;
}

/* FORM */

.form-wrapper .section {
  padding: 0px 20px 30px 20px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #fff;
  opacity: 0;
  -webkit-transform: scale(1, 0);
  -ms-transform: scale(1, 0);
  -o-transform: scale(1, 0);
  transform: scale(1, 0);
  -webkit-transform-origin: top center;
  -moz-transform-origin: top center;
  -ms-transform-origin: top center;
  -o-transform-origin: top center;
  transform-origin: top center;
  -webkit-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  text-align: center;
  /* position: absolute; */
  width: 100%;
  /* min-height: 300px */
}

.form-wrapper .section h3 {
  margin-bottom: 30px;
}

.form-wrapper .section.is-active {
  opacity: 1;
  -webkit-transform: scale(1, 1);
  -ms-transform: scale(1, 1);
  -o-transform: scale(1, 1);
  transform: scale(1, 1);
}

.form-wrapper .button,
.form-wrapper .submit {
  background-color: #3498db;
  display: inline-block;
  padding: 8px 30px;
  color: #fff;
  cursor: pointer;
  font-size: 14px !important;
  font-family: 'Open Sans', sans-serif !important;
  /* position: absolute; */
  right: 20px;
  bottom: 20px;
}

.form-wrapper .submit {
  border: none;
  outline: none;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.form-wrapper input[type="text"],
.form-wrapper input[type="password"] {
  display: block;
  padding: 10px;
  margin: 10px auto;
  background-color: #f1f1f1;
  border: none;
  width: 50%;
  outline: none;
  font-size: 14px !important;
  font-family: 'Open Sans', sans-serif !important;
}

.form-wrapper input[type="radio"] {
  display: none;
}

.form-wrapper input[type="radio"]+label {
  display: block;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 100%;
  padding: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}

.form-wrapper input[type="radio"]+label:before {
  content: "✔";
  position: absolute;
  right: -10px;
  top: -10px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 100%;
  background-color: #cab560;
  color: #fff;
  display: none;
}

.form-wrapper input[type="radio"]:checked+label:before {
  display: block;
}

.form-wrapper input[type="radio"]+label h4 {
  margin: 15px;
  color: #ccc;
}

.form-wrapper input[type="radio"]:checked+label {
  border: 1px solid #3498db;
}

.form-wrapper input[type="radio"]:checked+label h4 {
  color: #3498db;
}

.field__input {
  --uiFieldPlaceholderColor: var(--fieldPlaceholderColor, #767676);
  background-color: transparent;
  border-radius: 0;
  border: none;

  -webkit-appearance: none;
  -moz-appearance: none;

  font-family: inherit;
  font-size: inherit;
}

.field__input:focus::-webkit-input-placeholder {
  color: var(--uiFieldPlaceholderColor);
}

.field__input:focus::-moz-placeholder {
  color: var(--uiFieldPlaceholderColor);
}

/*
=====
CORE STYLES
=====
*/

.field {
  --uiFieldBorderWidth: var(--fieldBorderWidth, 2px);
  --uiFieldPaddingRight: var(--fieldPaddingRight, 1rem);
  --uiFieldPaddingLeft: var(--fieldPaddingLeft, 1rem);
  --uiFieldBorderColorActive: var(--fieldBorderColorActive, rgba(22, 22, 22, 1));

  display: var(--fieldDisplay, inline-flex);
  position: relative;
  font-size: var(--fieldFontSize, 1rem);
}

.field__input {
  box-sizing: border-box;
  width: var(--fieldWidth, 100%);
  height: var(--fieldHeight, 3rem);
  padding: var(--fieldPaddingTop, 1.25rem) var(--uiFieldPaddingRight) var(--fieldPaddingBottom, .5rem) var(--uiFieldPaddingLeft);
  border-bottom: var(--uiFieldBorderWidth) solid var(--fieldBorderColor, rgba(0, 0, 0, .25));
}

.field__input:focus {
  outline: none;
}

.field__input::-webkit-input-placeholder {
  opacity: 0;
  transition: opacity .2s ease-out;
}

.field__input::-moz-placeholder {
  opacity: 0;
  transition: opacity .2s ease-out;
}

.field__input:focus::-webkit-input-placeholder {
  opacity: 1;
  transition-delay: .2s;
}

.field__input:focus::-moz-placeholder {
  opacity: 1;
  transition-delay: .2s;
}

.field__label-wrap {
  box-sizing: border-box;
  pointer-events: none;
  cursor: text;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.field__label-wrap::after {
  content: "";
  box-sizing: border-box;
  width: 100%;
  height: 0;
  opacity: 0;

  position: absolute;
  bottom: 0;
  left: 0;
}

.field__input:focus~.field__label-wrap::after {
  opacity: 1;
}

.field__label {
  position: absolute;
  left: var(--uiFieldPaddingLeft);
  top: calc(50% - .5em);

  line-height: 1;
  font-size: var(--fieldHintFontSize, inherit);

  transition: top .2s cubic-bezier(0.9, -0.15, 0.1, 1.15), opacity .2s ease-out, font-size .2s ease-out;
  will-change: bottom, opacity, font-size;
}

.field__input:focus~.field__label-wrap .field__label,
.field__input:not(:placeholder-shown)~.field__label-wrap .field__label {
  --fieldHintFontSize: var(--fieldHintFontSizeFocused, .75rem);

  top: var(--fieldHintTopHover, .25rem);
}

.field_v1 .field__label-wrap::after {
  border-bottom: var(--uiFieldBorderWidth) solid var(--uiFieldBorderColorActive);
  transition: opacity .2s ease-out;
  will-change: opacity;
}

.field_v2 .field__label-wrap {
  overflow: hidden;
}

.field_v2 .field__label-wrap::after {
  border-bottom: var(--uiFieldBorderWidth) solid var(--uiFieldBorderColorActive);
  transform: translate3d(-105%, 0, 0);
  will-change: transform, opacity;
  transition: transform .285s ease-out .2s, opacity .2s ease-out .2s;
}

.field_v2 .field__input:focus~.field__label-wrap::after {
  transform: translate3d(0, 0, 0);
  transition-delay: 0;
}

/*
effect 3
*/

.field_v3 .field__label-wrap::after {
  border: var(--uiFieldBorderWidth) solid var(--uiFieldBorderColorActive);
  will-change: opacity, height;
  transition: height .2s ease-out, opacity .2s ease-out;
}

.field_v3 .field__input:focus~.field__label-wrap::after {
  height: 100%;
}

/*
=====
LEVEL 4. SETTINGS
=====
*/

.field {
  --fieldBorderColor: #D1C4E9;
  --fieldBorderColorActive: #673AB7;
}

/*
=====
DEMO
=====
*/

body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, Ubuntu, Fira Sans, Helvetica Neue, sans-serif;
  margin: 0;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page {
  box-sizing: border-box;
  width: 100%;
  max-width: 480px;
  margin: auto;
  padding: 1rem;

  display: grid;
  grid-gap: 30px;
}

.linktr {
  order: -1;
  padding: 1.75rem;
  text-align: center;
}

.linktr__goal {
  background-color: rgb(209, 246, 255);
  color: rgb(8, 49, 112);
  box-shadow: rgb(8 49 112 / 24%) 0px 2px 8px 0px;
  border-radius: 2rem;
  padding: .5rem 1.25rem;
}

@media (min-width: 1024px) {
  .linktr {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }

  .product_list_widget {
    padding-left: 120px;
  }
}

.r-link {
  --uirLinkDisplay: var(--rLinkDisplay, inline-flex);
  --uirLinkTextColor: var(--rLinkTextColor);
  --uirLinkTextDecoration: var(--rLinkTextDecoration, none);

  display: var(--uirLinkDisplay) !important;
  color: var(--uirLinkTextColor) !important;
  text-decoration: var(--uirLinkTextDecoration) !important;
}

.previous_button {
  background: transparent;
  color: #99a2a8;
  border-color: #99a2a8;
}

.previous_button:hover,
.previous_button:focus {
  background: #405867;
  border-color: #405867;
  color: #fff;
}

.action_button {
  background: #fed700;
  color: #fff;
  font-weight: bold;
  border-color: #fed700;
}

.action_button:hover,
.action_button:focus {
  background: #405867;
  border-color: #405867;
}
</style>
