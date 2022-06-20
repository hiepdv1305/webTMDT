<template>
<div id="sidebar" class="sidebar" role="complementary">
    <aside class="widget woocommerce widget_product_categories electro_widget_product_categories">
                <!-- <h3 class="widget-title">Danh mục sản phẩm</h3> -->
                <ul>
                    <li class="cat-item current-cat"><router-link to="/category/camera">Máy ảnh</router-link></li>
                    <li class="cat-item current-cat"><router-link to="/category/phone">Điện thoại</router-link></li>
                    <li class="cat-item current-cat"><router-link to="/category/TV">TV</router-link></li>
                    <li class="cat-item current-cat"><router-link to="/category/tablet">Máy tính bảng</router-link></li>
                    <li class="cat-item current-cat"><router-link to="/category/laptop">Laptop</router-link>
                    </li>
                </ul>
    </aside>
</div>
</template>

<script>
export default {
  name: 'ScSidebar',
  data () {
    return {
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
  /* @import "../assets/css/owl-carousel.css"; */
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
  .action_button {
  background: #fed700;
  color: #fff;
  font-weight: bold;
  border-color: #fed700;
}
</style>
