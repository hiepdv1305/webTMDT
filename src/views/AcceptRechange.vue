<template>
  <div class="home">
    <div v-if="user.role === 'user'" style="color: red"> Bạn không có quyền truy cập </div>
    <body v-else class="left-sidebar">
        <div id="page" class="hfeed site">
            <div id="content" class="site-content" tabindex="-1">
                <div class="container">

                    <nav class="woocommerce-breadcrumb" ><a href="/">Trang chủ</a><span class="delimiter"><i class="fa fa-angle-right"></i></span></nav>

                    <div id="primary" class="content-area">
                        <main id="main" class="site-main">
                            <div class="shop-control-bar">
                                <form class="woocommerce-ordering" method="get">
                                    <select name="orderby" class="orderby">
                                        <option value="newest" selected='selected'>Sự kiện mới nhất</option>
                                        <option value="end" >Sự kiện sắp kết thúc</option>
                                        <option value="prices_increase"  >Sắp xếp theo giá: Tăng dần</option>
                                        <option value="price_descending" >Sắp xếp theo giá: Giảm dần</option>
                                    </select>
                                </form>
                                <form class="form-electro-wc-ppp"><select name="ppp" class="electro-wc-wppp-select c-select"><option value="15" selected='selected'>Hiển thị 15</option><option value="30" selected='selected'>Hiển thị 30</option><option >Hiển thị tất cả</option></select></form>
                                <nav class="electro-advanced-pagination">
                                    <form class="form-adv-pagination"><i class="fas fa-chevron-right" style="cursor: pointer;margin: 0px 10px;">&#x3c;</i><input step="1" type="number" value="1"/></form> of<i class="fas fa-chevron-right" style="cursor: pointer;">&#x3e;</i>
                                </nav>
                            </div>

                            <div class="tab-content">

                                    <table class="shop_table shop_table_responsive cart">
                                        <thead>
                                            <tr>
                                                <th class="product-thumbnail">Tài khoản</th>
                                                <th class="product-name">Số tài khoản</th>
                                                <th class="product-price">Ngân hàng</th>
                                                <th class="product-quantity">Số tiền</th>
                                                <th class="product-quantity">Trạng thái</th>
                                                <th class="product-subtotal">Mã code</th>
                                                <th class="product-subtotal">Xác nhận</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr class="cart_item" v-for="item in rechange" :key="item.rechangeId">

                                                <td class="product-thumbnail">
                                                    <span>{{item.bankAccount}}</span>
                                                </td>

                                                <td data-title="Sự kiện" class="product-name">
                                                    <span>{{item.bankAccountNumber}}</span>
                                                </td>

                                                <td data-title="Giá" class="product-price">
                                                    <span class="amount">{{item.bankName}}</span>
                                                </td>

                                                <td data-title="Số vé" class="product-quantity">
                                                    <span class="amount">{{item.amout}}</span>
                                                </td>
                                                <td data-title="Bắt đầu- kết thúc" class="product-quantity">
                                                    <span class="amount">Đang xử lý</span>
                                                </td>
                                                <td data-title="Tổng" class="product-subtotal">
                                                    <span class="amount">{{ item.code }}</span>
                                                </td>
                                                <td data-title="Tổng" style="" class="product-subtotal">
                                                    <button style="padding:15px; background: #fed700;" @click="myModel1=true, rechangeId = item.rechangeId, code = item.code">Đồng ý</button>
                                                    <button style="margin-left: 15px; padding:15px" @click="myModel2=true,rechangeId = item.rechangeId, code = item.code">Từ chối</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                <div v-if="myModel1">
                                    <transition name="model">
                                    <div class="modal-mask">
                                    <div class="modal-wrapper">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            Tuyệt vời
                                        <button type="button" class="close" @click="myModel1=false"><span aria-hidden="true">&times;</span></button>
                                        </div>
                                        <div class="modal-body">
                                            <h5>Xác nhận giao dịch với mã {{code}} </h5>
                                        <br />
                                        <div align="center">
                                        <button class="" type="button" @click="myModel1=false">Hủy</button>
                                        <button style="background-color: #fed700; margin-left: 10px" type="button" @click="acceptRechange()">Đồng ý</button>
                                        </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                    </transition>
                                </div>
                                <div v-if="myModel2">
                                    <transition name="model">
                                    <div class="modal-mask">
                                    <div class="modal-wrapper">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            Tuyệt vời
                                        <button type="button" class="close" @click="myModel2=false"><span aria-hidden="true">&times;</span></button>
                                        </div>
                                        <div class="modal-body">
                                            <h5>Từ chối giao dịch với mã {{code}}</h5>
                                        <br />
                                        <div align="center">
                                        <button class="" type="button" @click="myModel2=false">Hủy</button>
                                        <button style="background-color: #fed700; margin-left: 10px" type="button" @click="denniRechange()">Đồng ý</button>
                                        </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                    </transition>
                                </div>
                            </div>
                        </main><!-- #main -->
                    </div><!-- #primary -->
                </div><!-- .container -->
            </div><!-- #content -->
        </div><!-- #page -->
    </body>
  </div>
</template>
<script src="../../assets/js/jquery.min.js"></script>
<script src="../../assets/js/tether.min.js"></script>
<script src="../../assets/js/bootstrap.min.js"></script>
<script src="../../assets/js/bootstrap-hover-dropdown.min.js"></script>
<script src="../../assets/js/owl.carousel.min.js"></script>
<script src="../../assets/js/echo.min.js"></script>
<script src="../../assets/js/wow.min.js"></script>
<script src="../../assets/js/jquery.easing.min.js"></script>
<script src="../../assets/js/jquery.waypoints.min.js"></script>
<script src="../../assets/js/electro.js"></script>
<script src="../switchstylesheet/switchstylesheet.js"></script>
<script>
import api from '../api/api'
import jwt_decode from 'jwt-decode'
var paginate = require('vuejs-paginate')
export default {
  name: 'home',
  components: {
    paginate
  },
  data () {
    return {
      count: 0,
      myModel1:false,
      myModel2:false,
      code: '',
      rechangeId: '',
    user: {},
      rechange:[],
      pagination: {
        itemsPerPage: 15,
        page: 1,
        paginationItems: []
      }
    }
  },
  mounted () {
    this.getAllRechange()
    this.getUser()
  },
  methods: {
    async getAllRechange () {
      let result = await api.getAllRechange()
      console.log(result)
      this.rechange = result.data.data
    },
    getUser () {
      let token = localStorage.getItem('accessToken')
      // console.log(token)
      if (token) {
        try {
          this.user = jwt_decode(token)
          console.log(this.user)
        } catch (err) {
          console.log(err)
        }
      }
    },
    async acceptRechange(){
        let result = await api.acceptRechange(this.rechangeId);
        if(result.data.statusCode === 200){
            alert('Thành công')
            this.myModel = false
            window.location.reload();
        }else{
            alert(result.data.message)
            this.myModel = false
        }
    },
    async denniRechange(){
        let result = await api.denniRechange(this.rechangeId);
        if(result.data.statusCode === 200){
            alert('Thành công')
            this.myModel = false
            window.location.reload();
        }else{
            alert(result.data.message)
            this.myModel = false
        }
    }
  }
}
</script>
<style>
  /* @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"); */
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

  .progress {
    --bs-progress-height: 0.75rem;
    --bs-progress-font-size: 0.75rem;
    --bs-progress-bg: #e9ecef;
    --bs-progress-border-radius: 0.375rem;
    --bs-progress-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);
    --bs-progress-bar-color: #fff;
    --bs-progress-bar-bg: #fed700;
    --bs-progress-bar-transition: width 0.6s ease;
    display: flex;
    /* margin-top: -15px; */
    height: var(--bs-progress-height);
    overflow: hidden;
    font-size: var(--bs-progress-font-size);
    background-color: var(--bs-progress-bg);
    border-radius: var(--bs-progress-border-radius);
  }
  .progress-bar-striped {
    background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
    background-size: var(--bs-progress-height) var(--bs-progress-height);
}
.progress-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    color: var(--bs-progress-bar-color);
    text-align: center;
    white-space: nowrap;
    background-color: var(--bs-progress-bar-bg);
    transition: var(--bs-progress-bar-transition);
}
.progress {
    /* display: block; */
    width: 100%;
    height: 0.75rem;
    margin-bottom: 0.2rem;
}
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
</style>
