<template>
  <div class="home">
    <body class="left-sidebar">
        <div id="page" class="hfeed site">
            <div id="content" class="site-content" tabindex="-1">
                <div class="container">

                    <nav class="woocommerce-breadcrumb" ><a href="/">Trang chủ</a><span class="delimiter"><i class="fa fa-angle-right"></i>Danh sách trúng thưởng</span></nav>

                    <div id="primary" class="content-area">
                        <main id="main" class="site-main">

                            <header class="page-header">
                                <h1>Danh sách trúng thưởng</h1>
                            </header>
                        </main><!-- #main -->
                    </div><!-- #primary -->
                    <table>
                        <tr>
                            <th>Tên</th>
                            <th>Số điểm</th>
                            <th>Sự kiện</th>
                            <th>Con số may mắn</th>
                            <th>Giá trị</th>
                        </tr>
                        <tr v-for="winner in winners" :key="winner.winnerId">
                            <td>{{winner.username}}</td>
                            <td>{{winner.point}}</td>
                            <td>{{winner.eventName}}</td>
                            <td>{{winner.result}}</td>
                            <td>{{winner.eventPrice.toLocaleString('vi', { style: 'currency', currency: 'VND' })}}</td>
                        </tr>
                    </table>
                </div><!-- .container -->
            </div><!-- #content -->
        </div><!-- #page -->
    </body>
  </div>
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
        winners: []
    }
  },
  mounted () {
    this.getAllWinner()
  },
  methods: {
    async getAllWinner(){
        let result = await api.getAllWinner()
        console.log(result)
        this.winners = result.data.data.Items
        this.winners.sort((a,b)=>{
            if (a.createdAt.valueOf()<b.createdAt.valueOf()) return 1;
            if (a.createdAt.valueOf()>b.createdAt.valueOf()) return -1;
            return 0
        })
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
  table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
