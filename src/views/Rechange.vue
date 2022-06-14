<template>
  <div class="container">
    <nav class="woocommerce-breadcrumb"><a href="/">Trang chủ</a><span class="delimiter"><i class="fa fa-angle-right"></i></span>Nạp tiền</nav>
    <div class="wrapper">
      <ul class="steps">
        <li >Step 1</li>
        <li >Step 2</li>
        <li class="is-active">Step 3</li>
      </ul>
      <form class="form-wrapper" style="
    height: 450px;
" >
        <fieldset class="section ">
          <h3>Your Details</h3>
          <input type="text" name="name" id="name" placeholder="Name">
          <input type="text" name="email" id="email" placeholder="Email">
          <div class="button">Next</div>
        </fieldset>
        <fieldset class="section ">
          <h3>Account Type</h3>
          <div class="row cf">
            <div class="four col">
              <input type="radio" name="r1" id="r1" checked>
              <label for="r1">
                <h4>Designer</h4>
              </label>
            </div>
            <div class="four col">
              <input type="radio" name="r1" id="r2"><label for="r2">
                <h4>Developer</h4>
              </label>
            </div>
            <div class="four col">
              <input type="radio" name="r1" id="r3"><label for="r3">
                <h4>Project Manager</h4>
              </label>
            </div>
          </div>
          <div class="button">Next</div>
        </fieldset>
        <fieldset class="section is-active">
          <h3>Choose a Password</h3>
          <input type="password" name="password" id="password" placeholder="Password">
          <input type="password" name="password2" id="password2" placeholder="Re-enter Password">
          <input class="submit button" type="submit" value="Sign Up">
        </fieldset>
        <fieldset class="section">
          <h3>Account Created!</h3>
          <p>Your account has now been created.</p>
          <div class="button">Reset Form</div>
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
        ownName: '',
        sourceAccount: '',
        targetAccount: '',
        amout: '',
        transactionCode: ''
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
    // async getEvent () {
    //   let id = this.$route.path.substring(1).split('/')[1]
    //   //   console.log(id)
    //   let result = await api.getEvent(id)
    //   // console.log(result)
    //   this.event = result.data.data.Items[0]
    // },
    async momopayment () {
      let paymentresult = await api.momopayment({
        point: this.point
      })
      console.log(paymentresult)
      window.location.href = paymentresult.data.data.payUrl
      let eventId = this.event.eventId
      let a = await api.createDeal({
        eventId: eventId,
        point: this.point,
        image: this.event.image,
        eventName: this.event.eventName,
        price: this.point * 10000
      })
      console.log(a)
      this.$router.push({ path: '/cart' })
    },
    async create () {
      this.step += 1
      switch (this.schema.bankName) {
        case 'Viettinbank':
          this.currentBankAccount = this.viettinbank
          break
        case 'BIDV':
          this.currentBankAccount = this.bidv
          break
        case 'Vietcombank':
          this.currentBankAccount = this.vietcombank
          break
        case 'Techcombank':
          this.currentBankAccount = this.techcombank
          break
        case 'VPbank':
          this.currentBankAccount = this.vpbank
          break
        case 'Sacombank':
          this.currentBankAccount = this.sacombank
          break
        case 'Agribank':
          this.currentBankAccount = this.agribank
          break
        case 'TPbank':
          this.currentBankAccount = this.tpbank
          break
        default:
          console.log('bankName invalid')
      }
      console.log(this.currentBankAccount)
      // await api.createrechange(this.schema)
    }
  }
}
</script>
<style>
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

</style>
