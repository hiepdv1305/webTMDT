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
    text-align: center;">
                        <!-- Profile picture image-->
                        <div style="display: flex; justify-content: center;">
                            <img class="img-account-profile rounded-circle mb-2"
                                src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="">
                        </div>
                        <!-- Profile picture help block-->
                        <div class=" font-italic text-primary mb-4"><b>{{ user.username }}</b></div>
                        <div class=" font-italic text-muted mb-4" style="padding: 8.5%;">Số dư tài khoản:<b> {{
                            user.balance }}</b></div>
                        <!-- Profile picture upload button-->
                        <!-- <button class="btn btn-primary" type="button">Cập nhật</button> -->
                    </div>
                </div>
            </div>
            <div class="col-xl-8">
                <!-- Account details card-->
                <div class="card mb-4">
                    <div class="card-header" style="display: flex; justify-content: space-between; ">
                        <div>Thông tin tài khoản</div>
                        <div style="display: flex;">
                            <div v-if="!edit" @click="myModel = true"
                                style="text-decoration: underline; cursor: pointer; color: #0062bd;margin-right: 10px;">
                                Đổi mật khẩu</div>
                            <div v-if="!edit" @click="edit = true"
                                style="text-decoration: underline; cursor: pointer; color: #0062bd;"><i
                                    class="fa fa-pencil"></i> Cập nhật</div>
                            <div v-if="edit" @click="edit = false"
                                style="text-decoration: underline; cursor: pointer; color: #0062bd;"><i
                                    class="fa fa-close"></i> Đóng</div>
                        </div>
                    </div>
                    <div class="card-body" v-if="!edit" style="padding: 10px 20px;">
                        <div>
                            <label class="small mb-1" for="inputUsername">Họ tên</label>
                            <div>{{ user.fullname }}</div>
                        </div>
                        <div>
                            <label class="small mb-1" for="inputUsername">Số điện thoại</label>
                            <div>{{ user.phonenumber }}</div>
                        </div>
                        <div>
                            <label class="small mb-1" for="inputUsername">Email</label>
                            <div>{{ user.email }}</div>
                        </div>
                        <div>
                            <label class="small mb-1" for="inputUsername">Địa chỉ</label>
                            <div>{{ user.address }}</div>
                        </div>
                        <div style="display: flex; justify-content: flex-end;">
                            <button @click="logout" class="btn btn-primary" type="button">Đăng xuất</button>
                        </div>
                    </div>
                    <div v-if="myModel">
                        <transition name="model">
                            <div class="modal-mask">
                                <div class="modal-wrapper">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                Đổi mật khẩu
                                                <button type="button" class="close" @click="myModel = false"><span
                                                        aria-hidden="true">&times;</span></button>
                                            </div>
                                            <div class="modal-body">
                                                <div>
                                                    <label v-if="checkInvalid" style="color: red;">Xác thực mật khẩu
                                                        không chính xác</label>
                                                    <p class="form-row form-row-wide">
                                                        <label for="reg_email">Mật khẩu cũ<span
                                                                class="required">*</span></label>
                                                        <input v-model="changePasswordSchema.oldPassword"
                                                            type="password" class="input-text" />
                                                    </p>
                                                    <p class="form-row form-row-wide">
                                                        <label for="reg_email">Mật khẩu mới<span
                                                                class="required">*</span></label>
                                                        <input v-model="changePasswordSchema.newPassword"
                                                            type="password" class="input-text" />
                                                    </p>
                                                    <p class="form-row form-row-wide">
                                                        <label for="reg_email">Nhập lại mật khẩu mới<span
                                                                class="required">*</span></label>
                                                        <input v-model="changePasswordSchema.confirmPassword"
                                                            type="password" class="input-text" />
                                                    </p>
                                                </div>
                                                <br />
                                                <div align="center">
                                                    <button class="" type="button" @click="myModel = false">Hủy</button>
                                                    <button style="background-color: #fed700; margin-left: 10px"
                                                        type="button" @click="changePassword">Đổi mật khẩu</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </div>
                    <div class="card-body" v-if="edit" style="padding: 10px 20px;">
                        <div class="mb-3">
                            <label class="small mb-1">Họ tên</label>
                            <input v-model="user.fullname" class="form-control" id="inputEmailAddress" type="text"
                                placeholder="Enter your email address">
                        </div>
                        <div class="mb-3">
                            <label class="small mb-1">Số điện thoại</label>
                            <input v-model="user.phonenumber" class="form-control" id="inputEmailAddress" type="text">
                        </div>
                        <!-- Form Group (email address)-->
                        <div class="mb-3">
                            <label class="small mb-1">Email</label>
                            <input v-model="user.email" class="form-control" id="inputEmailAddress" type="email">
                        </div>
                        <div class="mb-3">
                            <label class="small mb-1">Địa chỉ</label>
                            <input v-model="user.address" class="form-control" id="inputEmailAddress" type="text">
                        </div>
                        <!-- Save changes button-->
                        <button @click="updateUser" class="btn btn-primary" type="button" style="margin-top: 15px;">Cập
                            nhật</button>
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
        user: {},
        edit: false,
        myModel:false,
        checkInvalid: false,
        changePasswordSchema: {
            oldPassword: '',
            newPassword: '',
            confirmPassword: ''
        }
    }
  },
  mounted () {
    this.getUserInfomation()
  },
  methods: {
    async getUserInfomation(){
        let res = await api.getUserInfomation();
        // console.log(res)
        if(res.data.statusCode === 200){
            this.user = res.data.data
            console.log(this.user)
            this.user.balance = this.user.balance.toLocaleString('vi', { style: 'currency', currency: 'VND' })
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
        // console.log(this.user)
        let res = await api.updateUser({
            fullname: this.user.fullname,
            address: this.user.address,
            phonenumber: this.user.phonenumber,
            email: this.user.email
        })
        if(res.status === 200){
            alert("Cập nhật thông tin cá nhân thành công");
            window.location.reload();
        }
    },
    async changePassword(){
        if(this.changePasswordSchema.oldPassword === ''|| this.changePasswordSchema.newPassword === ''|| this.changePasswordSchema.confirmPassword === '') alert('Không được để trống')
        else if(this.changePasswordSchema.newPassword !== this.changePasswordSchema.confirmPassword) this.checkInvalid = true
        else{
            let result = await api.changePassword(this.changePasswordSchema)
            // console.log(result)
            if(result.data.statusCode ===200) {
                alert('Thay đổi mật khẩu thành công')
                this.myModel= false
            }
            else{
                alert(result.data.message)
            }
        }
    }
  }
}
</script>
<style>
body {
    margin-top: 20px;
    background-color: #f2f6fc;
    color: #69707a;
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

.form-control,
.dataTable-input {
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
