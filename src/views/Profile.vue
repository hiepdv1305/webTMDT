<template>
<div class="container-xl px-4 mt-4" style="
    margin-top: 30px;
">
    <div class="row">
        <div class="col-xl-4">
            <!-- Profile picture card-->
            <div class="card mb-4 mb-xl-0">
                <div class="card-header">Ảnh đại diện</div>
                <div class="card-body text-center" style="
    padding: 10px 20px;
    text-align: center;
">
                    <!-- Profile picture image-->
                   <div style="display: flex;
    justify-content: center;">
                     <img class="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="">
                   </div>
                    <!-- Profile picture help block-->
                    <div class=" font-italic text-primary mb-4"><b>{{user.username}}</b></div>
                    <div class=" font-italic text-muted mb-4">Số dư tài khoản: {{user.amout.toLocaleString('vi', { style: 'currency', currency: 'VND' })}}</div>
                    <!-- Profile picture upload button-->
                    <button class="btn btn-primary" type="button">Cập nhật</button>
                </div>
            </div>
        </div>
        <div class="col-xl-8">
            <!-- Account details card-->
            <div class="card mb-4">
                <div class="card-header" style="display: flex; justify-content: space-between; ">
                    <div>Thông tin tài khoản</div>
                    <div v-if="!edit" @click="edit=true" style="text-decoration: underline; cursor: pointer; color: #0062bd;"><i class="fa fa-pencil"></i> Cập nhật</div>
                    <div v-if="edit" @click="edit=false" style="text-decoration: underline; cursor: pointer; color: #0062bd;"><i class="fa fa-close"></i> Đóng</div>
                </div>
                <div class="card-body" v-if="!edit" style="padding: 10px 20px;">
                    <div>
                        <label class="small mb-1" for="inputUsername">Họ tên</label>
                        <div>{{user.fullname}}</div>
                    </div>
                    <div>
                        <label class="small mb-1" for="inputUsername">Số điện thoại</label>
                        <div>{{user.phonenumber}}</div>
                    </div>
                    <div>
                        <label class="small mb-1" for="inputUsername">Email</label>
                        <div>{{user.email}}</div>
                    </div>
                    <div>
                        <label class="small mb-1" for="inputUsername">Địa chỉ</label>
                        <div>{{user.address}}</div>
                    </div>
                    <div style="display: flex; justify-content: flex-end;">
                        <button @click="logout" class="btn btn-primary" type="button">Đăng xuất</button>
                    </div>
                </div>
                <div class="card-body" v-if="edit" style="padding: 10px 20px;">
                    <div class="mb-3">
                        <label class="small mb-1" for="inputEmailAddress">Họ tên</label>
                        <input v-model="user.fullname" class="form-control" id="inputEmailAddress" type="text" placeholder="Enter your email address" >
                    </div>
                    <div class="mb-3">
                        <label class="small mb-1" for="inputPhone">Số điện thoại</label>
                        <input v-model="user.phonenumber" class="form-control" id="inputPhone" type="tel" >
                    </div>
                    <!-- Form Group (email address)-->
                    <div class="mb-3">
                        <label class="small mb-1" for="inputEmailAddress">Email</label>
                        <input v-model="user.email" class="form-control" id="inputEmailAddress" type="email">
                    </div>
                    <div class="mb-3">
                        <label class="small mb-1" for="inputEmailAddress">Địa chỉ</label>
                        <input v-model="user.address" class="form-control" id="inputEmailAddress" type="text" >
                    </div>
                    <!-- Save changes button-->
                    <button @click="updateUser" class="btn btn-primary" type="button" style="margin-top: 15px;">Cập nhật</button>
                </div>
            </div>
        </div>
    </div>
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
        user: null,
        edit: false
    }
  },
  mounted () {
    this.getUserInfomation()
  },
  methods: {
    async getUserInfomation(){
        let res = await api.getUserInfomation();
        console.log(res)
        if(res.data.statusCode === 200){
            this.user = res.data.data
        }else{
            window.location.replace('/login')
        }

    },

    async logout () {
      localStorage.removeItem('accessToken')
      window.location.replace('/')
    //   window.location.reload();
    },
    async updateUser(){
        let res=await api.updateUser({
            fullname: this.user.fullname,
            address: this.user.address,
            phonenumber: this.user.phonenumber,
            email: this.user.email
        })
        if(res.status === 200){
            alert("Cập nhật thông tin cá nhân thành công");
            window.location.reload();
        }
    }
  }
}
</script>
<style>
  body{margin-top:20px;
background-color:#f2f6fc;
color:#69707a;
}
.img-account-profile {
    height: 10rem;
}
.rounded-circle {
    border-radius: 50% !important;
}
.card {
    box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
}
.card .card-header {
    font-weight: 500;
}
.card-header:first-child {
    border-radius: 0.35rem 0.35rem 0 0;
}
.card-header {
    padding: 1rem 1.35rem;
    margin-bottom: 0;
    background-color: rgba(33, 40, 50, 0.03);
    border-bottom: 1px solid rgba(33, 40, 50, 0.125);
}
.form-control, .dataTable-input {
    display: block;
    width: 100%;
    padding: 0.875rem 1.125rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1;
    color: #69707a;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #c5ccd6;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.35rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.nav-borders .nav-link.active {
    color: #0061f2;
    border-bottom-color: #0061f2;
}
.nav-borders .nav-link {
    color: #69707a;
    border-bottom-width: 0.125rem;
    border-bottom-style: solid;
    border-bottom-color: transparent;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0;
    padding-right: 0;
    margin-left: 1rem;
    margin-right: 1rem;
}
</style>
