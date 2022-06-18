<template>
  <div class="container">
    <nav class="woocommerce-breadcrumb"><a href="/">Trang chủ</a><span class="delimiter"><i class="fa fa-angle-right"></i></span>Nạp tiền</nav>
    <div class="wrapper">
      <ul class="steps">
        <li v-bind:class="{ 'is-active' : step === 1}">Step 1</li>
        <li v-bind:class="{ 'is-active' : step === 2}">Step 2</li>
        <li v-bind:class="{ 'is-active' : step === 3}">Step 3</li>
      </ul>
      <form class="form-wrapper"  >
        <div v-if="step === 1">
          <header>
              <h2 class="h1" style="margin-bottom:100px">Chọn ngân hàng của bạn:</h2>
          </header>

          <div class="woocommerce columns-4">
              <ul class="product-loop-categories">
                  <li class="product-category product">
                      <a @click="schema.bankName = 'bidv';create()">
                          <img src="../assets/images/logo-ngan-hang-BIDV.png" class="img-responsive" alt="">
                      </a>

                  </li><!-- /.item -->
                  <li class="product-category product">
                      <a @click="schema.bankName = 'sacombank';create()">
                          <img src="../assets/images/logo-ngan-hang-Sacombank.png" class="img-responsive" alt="">
                      </a>

                  </li><!-- /.item -->

                  <li class="product-category product">
                      <a @click="schema.bankName = 'techcombank';create()">
                          <img src="../assets/images/logo-ngan-hang-Techcombank.png" class="img-responsive" alt="">
                      </a>

                  </li><!-- /.item -->

                  <li class="product-category product">
                      <a @click="schema.bankName = 'vietcombank';create()">
                          <img src="../assets/images/logo-ngan-hang-Vietcombank.png" class="img-responsive" alt="">
                      </a>

                  </li><!-- /.item -->

                  <li class="product-category product">
                      <a @click="schema.bankName = 'viettinbank';create()">
                          <img src="../assets/images/logo-ngan-hang-Vietinbank.png" class="img-responsive" alt="">
                      </a>

                  </li><!-- /.item -->

                  <li class="product-category product">
                      <a @click="schema.bankName = 'vpbank';create()" >
                          <img src="../assets/images/logo-ngan-hang-VPbank.png" class="img-responsive" alt="">
                      </a>

                  </li><!-- /.item -->

                  <li class="product-category product">
                      <a @click="schema.bankName = 'vietinbank';create()">
                          <img src="../assets/images/logo-ngan-hang-Vietinbank.png" class="img-responsive" alt="">
                      </a>

                  </li><!-- /.item -->
                  <li class="product-category product">
                      <a @click="schema.bankName = 'bidv';create()">
                          <img src="../assets/images/logo-ngan-hang-BIDV.png" class="img-responsive" alt="">
                      </a>

                  </li><!-- /.item -->

                  <li class="product-category product">
                      <a @click="schema.bankName = 'sacombank';create()">
                          <img src="../assets/images/logo-ngan-hang-Sacombank.png" class="img-responsive" alt="">
                      </a>

                  </li><!-- /.item -->

                  <li class="product-category product">
                      <a @click="schema.bankName = 'techcombank';create()">
                          <img src="../assets/images/logo-ngan-hang-Techcombank.png" class="img-responsive" alt="">
                      </a>

                  </li><!-- /.item -->

                  <li class="product-category product">
                      <a @click="schema.bankName = 'vietcombank';create()">
                          <img src="../assets/images/logo-ngan-hang-Vietcombank.png" class="img-responsive" alt="">
                      </a>

                  </li><!-- /.item -->

                  <li class="product-category product">
                      <a @click="schema.bankName = 'vietinbank';create()">
                          <img src="../assets/images/logo-ngan-hang-Vietinbank.png" class="img-responsive" alt="">
                      </a>

                  </li><!-- /.item -->

                  <li class="product-category product">
                      <a @click="schema.bankName = 'vpbank';create()">
                          <img src="../assets/images/logo-ngan-hang-VPbank.png" class="img-responsive" alt="">
                      </a>

                  </li><!-- /.item -->

                  <li class="product-category product">
                      <a @click="schema.bankName = 'vietinbank';create()">
                          <img src="../assets/images/logo-ngan-hang-Vietinbank.png" class="img-responsive" alt="">
                      </a>

                  </li><!-- /.item -->
              </ul>
          </div>
        </div>
        <div v-if="step === 2">
        <div style="text-align: center;">
          <h3 class="h3">Điền thông tin chuyển khoản vào mẫu sau để hoàn tất quá trình nạp tiền</h3>
          <h5>(Chuyển tiền tới tài khoản 10233847192923 với nội dung <i>webTMDT naptien djadkajda</i>)</h5 >
        </div>
          <div class="page">
            <label class="field field_v1">
              <input v-model="schema.bankAccountNumber" class="field__input" placeholder="1203913313112">
              <span class="field__label-wrap">
                <span class="field__label">Số tài khoản</span>
              </span>
            </label>
            <label class="field field_v2">
              <input v-model="schema.bankAccount" class="field__input" placeholder="e.g. Dong Hiep">
              <span class="field__label-wrap">
                <span class="field__label">Tên chủ tài khoản</span>
              </span>
            </label>
            <label class="field field_v2">
              <input v-model.number="schema.amout" class="field__input" placeholder="e.g. 100000">
              <span class="field__label-wrap">
                <span class="field__label">Số tiền</span>
              </span>
            </label>
            <label class="field field_v2">
              <input v-model="schema.code" class="field__input" placeholder="e.g. adjahdkad">
              <span class="field__label-wrap">
                <span class="field__label">Cú pháp</span>
              </span>
            </label>
          <div style="display: flex;
    justify-content: flex-end;">
              <button type="button" class="previous_button" @click="step=step-1">Quay lại</button>
            <button type="button" class="next action_button" @click="step=step+1">Tiếp tục</button>
          </div>
          </div>
        </div>
        <div v-if="step === 3">
          <h4 class="h4" style="text-align: center;">Kiểm tra lại thông tin</h4>
          <div class="text-center" style="display: flex; justify-content: center;">
            <div class="col-lg-4 col-md-6 col-xs-12">
              <aside class="widget clearfix">
                  <div class="body"><h4 class="widget-title"></h4>
                      <ul class="product_list_widget">
                          <li>
                              <span class="electro-price" style="margin-left: 0px;"><ins><span class="amount"><b>Số tài khoản:</b></span></ins></span>
                          </li>

                          <li>
                              <span class="electro-price" style="margin-left: 0px;"><ins><span class="amount"><b>Tên chủ tài khoản:</b></span></ins></span>
                          </li>

                          <li>
                              <span class="electro-price" style="margin-left: 0px;"><ins><span class="amount"><b>Số tiền:</b></span></ins></span>
                          </li>
                          <li>
                              <span class="electro-price" style="margin-left: 0px;"><ins><span class="amount"><b>Cú pháp:</b></span></ins></span>
                          </li>
                      </ul>
                  </div>
              </aside>
          </div>
          <div class="col-lg-4 col-md-6 col-xs-12">
            <aside class="widget clearfix">
                <div class="body">
                    <ul class="product_list_widget">
                        <li>
                                  <span class="electro-price"  style="margin-left: 0px;"><ins><span class="amount">{{schema.bankAccountNumber}}</span></ins></span>
                        </li>

                        <li>
                                  <span class="electro-price"  style="margin-left: 0px;"><span class="amount">{{schema.bankAccount}}</span></span>
                        </li>

                        <li>
                                <span class="electro-price"  style="margin-left: 0px;"><span class="amount">{{schema.amout.toLocaleString('vi', { style: 'currency', currency: 'VND' })}}</span></span>
                        </li>
                        <li>
                                <span class="electro-price"  style="margin-left: 0px;"><span class="amount">{{schema.code}}</span></span>
                        </li>
                    </ul>
                </div>
            </aside>
          </div>
          </div>
         <div style="display: flex;justify-content: center; margin-top: 30px;">
           <button type="button" class="next action_button" @click="rechange">Đồng ý</button>
         </div>
        </div>
        <fieldset class="section">
        </fieldset>
      </form>
    </div>
  </div>
<!-- End Multi step form -->
</template>
<script>
// import axios from 'axios'
import api from '../api/api'
import agribank from '../assets/bankaccount/agribank.json'
import bidv from '../assets/bankaccount/bidv.json'
import sacombank from '../assets/bankaccount/sacombank.json'
import techcombank from '../assets/bankaccount/techcombank.json'
import tpbank from '../assets/bankaccount/tpbank.json'
import vietcombank from '../assets/bankaccount/vietcombank.json'
import viettinbank from '../assets/bankaccount/viettinbank.json'
import vpbank from '../assets/bankaccount/vpbank.json'
// const https = require('https')
// const config = require('../../config/config')

export default {
  name: 'rechange',
  components: {},
  data () {
    return {
      count: 0,
      event: {},
      product: {},
      point: 1,
      step: 1,
      schema: {
        bankName: '',
        bankAccountNumber: '',
        bankAccount: '',
        amout: '',
        code: ''
      },
      currentBankAccount: [],
      agribank: agribank,
      sacombank: sacombank,
      techcombank: techcombank,
      tpbank: tpbank,
      bidv: bidv,
      vietcombank: vietcombank,
      viettinbank: viettinbank,
      vpbank: vpbank

    }
  },
  mounted () {
    // this.getEvent()
    // console.log(this.agribank)
  },
  methods: {
    async create () {
      this.step += 1
      switch (this.schema.bankName) {
        case 'viettinbank':
          this.currentBankAccount = this.viettinbank
          break
        case 'bidv':
          this.currentBankAccount = this.bidv
          break
        case 'vietcombank':
          this.currentBankAccount = this.vietcombank
          break
        case 'techcombank':
          this.currentBankAccount = this.techcombank
          break
        case 'vpbank':
          this.currentBankAccount = this.vpbank
          break
        case 'sacombank':
          this.currentBankAccount = this.sacombank
          break
        case 'agribank':
          this.currentBankAccount = this.agribank
          break
        case 'tpbank':
          this.currentBankAccount = this.tpbank
          break
        default:
          console.log('bankName invalid')
      }
      console.log(this.currentBankAccount)
      // await api.createrechange(this.schema)
    },
    async rechange () {
      let result = await api.rechange(this.schema)
      console.log(result)
      if (result.data.statusCode === 200) {
        alert('Nạp tiền thành công')
        window.location.replace('/profile')
      } else {
        alert('lỗi hệ thống, xin thử lại sau')
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
html, body{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  /* background-color: #3498db; */
}

h1, h2, h3, h4, h5 ,h6{
  font-weight: 200;
}

a{
  text-decoration: none;
}

p, li, a{
  font-size: 14px;
}

fieldset{
  margin: 0;
  padding: 0;
  border: none;
}

/* GRID */

.twelve { width: 100%; }
.eleven { width: 91.53%; }
.ten { width: 83.06%; }
.nine { width: 74.6%; }
.eight { width: 66.13%; }
.seven { width: 57.66%; }
.six { width: 49.2%; }
.five { width: 40.73%; }
.four { width: 32.26%; }
.three { width: 23.8%; }
.two { width: 15.33%; }
.one { width: 6.866%; }

/* COLUMNS */

.col {
  display: block;
  float:left;
  margin: 0 0 0 1.6%
}

.col:first-of-type {
  margin-left: 0;
}

.container{
  width: 100%;
  /* max-width: 700px; */
  margin: 0 auto;
  /* position: relative; */
}

.row{
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

.cf {
    *zoom: 1;
}

.wrapper{
  width: 100%;
  margin: 30px 0;
}

/* STEPS */

.steps{
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #fff;
  text-align: center;
}

.steps li{
  display: inline-block;
  margin: 20px;
  color: #ccc;
  padding-bottom: 5px;
}

.steps li.is-active{
  border-bottom: 1px solid #3498db;
  color: #3498db;
}

/* FORM */

.form-wrapper .section{
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

.form-wrapper .section h3{
  margin-bottom: 30px;
}

.form-wrapper .section.is-active{
  opacity: 1;
  -webkit-transform: scale(1, 1);
  -ms-transform: scale(1, 1);
  -o-transform: scale(1, 1);
  transform: scale(1, 1);
}

.form-wrapper .button, .form-wrapper .submit{
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

.form-wrapper .submit{
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
.form-wrapper input[type="password"]{
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

.form-wrapper input[type="radio"]{
  display: none;
}

.form-wrapper input[type="radio"] + label{
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

.form-wrapper input[type="radio"] + label:before{
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

.form-wrapper input[type="radio"]:checked + label:before{
  display: block;
}

.form-wrapper input[type="radio"] + label h4{
  margin: 15px;
  color: #ccc;
}

.form-wrapper input[type="radio"]:checked + label{
  border: 1px solid #3498db;
}

.form-wrapper input[type="radio"]:checked + label h4{
  color: #3498db;
}
.field__input{
  --uiFieldPlaceholderColor: var(--fieldPlaceholderColor, #767676);
  background-color: transparent;
  border-radius: 0;
  border: none;

  -webkit-appearance: none;
  -moz-appearance: none;

  font-family: inherit;
  font-size: inherit;
}

.field__input:focus::-webkit-input-placeholder{
  color: var(--uiFieldPlaceholderColor);
}

.field__input:focus::-moz-placeholder{
  color: var(--uiFieldPlaceholderColor);
}

/*
=====
CORE STYLES
=====
*/

.field{
  --uiFieldBorderWidth: var(--fieldBorderWidth, 2px);
  --uiFieldPaddingRight: var(--fieldPaddingRight, 1rem);
  --uiFieldPaddingLeft: var(--fieldPaddingLeft, 1rem);
  --uiFieldBorderColorActive: var(--fieldBorderColorActive, rgba(22, 22, 22, 1));

  display: var(--fieldDisplay, inline-flex);
  position: relative;
  font-size: var(--fieldFontSize, 1rem);
}

.field__input{
  box-sizing: border-box;
  width: var(--fieldWidth, 100%);
  height: var(--fieldHeight, 3rem);
  padding: var(--fieldPaddingTop, 1.25rem) var(--uiFieldPaddingRight) var(--fieldPaddingBottom, .5rem) var(--uiFieldPaddingLeft);
  border-bottom: var(--uiFieldBorderWidth) solid var(--fieldBorderColor, rgba(0, 0, 0, .25));
}

.field__input:focus{
  outline: none;
}

.field__input::-webkit-input-placeholder{
  opacity: 0;
  transition: opacity .2s ease-out;
}

.field__input::-moz-placeholder{
  opacity: 0;
  transition: opacity .2s ease-out;
}

.field__input:focus::-webkit-input-placeholder{
  opacity: 1;
  transition-delay: .2s;
}

.field__input:focus::-moz-placeholder{
  opacity: 1;
  transition-delay: .2s;
}

.field__label-wrap{
  box-sizing: border-box;
  pointer-events: none;
  cursor: text;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.field__label-wrap::after{
  content: "";
  box-sizing: border-box;
  width: 100%;
  height: 0;
  opacity: 0;

  position: absolute;
  bottom: 0;
  left: 0;
}

.field__input:focus ~ .field__label-wrap::after{
  opacity: 1;
}

.field__label{
  position: absolute;
  left: var(--uiFieldPaddingLeft);
  top: calc(50% - .5em);

  line-height: 1;
  font-size: var(--fieldHintFontSize, inherit);

  transition: top .2s cubic-bezier(0.9, -0.15, 0.1, 1.15), opacity .2s ease-out, font-size .2s ease-out;
  will-change: bottom, opacity, font-size;
}

.field__input:focus ~ .field__label-wrap .field__label,
.field__input:not(:placeholder-shown) ~ .field__label-wrap .field__label{
  --fieldHintFontSize: var(--fieldHintFontSizeFocused, .75rem);

  top: var(--fieldHintTopHover, .25rem);
}
.field_v1 .field__label-wrap::after{
  border-bottom: var(--uiFieldBorderWidth) solid var(--uiFieldBorderColorActive);
  transition: opacity .2s ease-out;
  will-change: opacity;
}
.field_v2 .field__label-wrap{
  overflow: hidden;
}

.field_v2 .field__label-wrap::after{
  border-bottom: var(--uiFieldBorderWidth) solid var(--uiFieldBorderColorActive);
  transform: translate3d(-105%, 0, 0);
  will-change: transform, opacity;
  transition: transform .285s ease-out .2s, opacity .2s ease-out .2s;
}

.field_v2 .field__input:focus ~ .field__label-wrap::after{
  transform: translate3d(0, 0, 0);
  transition-delay: 0;
}

/*
effect 3
*/

.field_v3 .field__label-wrap::after{
  border: var(--uiFieldBorderWidth) solid var(--uiFieldBorderColorActive);
  will-change: opacity, height;
  transition: height .2s ease-out, opacity .2s ease-out;
}

.field_v3 .field__input:focus ~ .field__label-wrap::after{
  height: 100%;
}

/*
=====
LEVEL 4. SETTINGS
=====
*/

.field{
  --fieldBorderColor: #D1C4E9;
  --fieldBorderColorActive: #673AB7;
}

/*
=====
DEMO
=====
*/

body{
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, Ubuntu, Fira Sans, Helvetica Neue, sans-serif;
  margin: 0;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page{
  box-sizing: border-box;
  width: 100%;
  max-width: 480px;
  margin: auto;
  padding: 1rem;

  display: grid;
  grid-gap: 30px;
}

.linktr{
  order: -1;
  padding: 1.75rem;
  text-align: center;
}

.linktr__goal{
  background-color: rgb(209, 246, 255);
  color: rgb(8, 49, 112);
  box-shadow: rgb(8 49 112 / 24%) 0px 2px 8px 0px;
  border-radius: 2rem;
  padding: .5rem 1.25rem;
}

@media (min-width: 1024px){
  .linktr{
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }
  .product_list_widget{
    padding-left: 120px;
  }
}
.r-link{
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
.previous_button:hover,.previous_button:focus {
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
.action_button:hover,.action_button:focus {
  background: #405867;
  border-color: #405867;
}

</style>
