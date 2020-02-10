<template>
  <div class="bg">
    <div class="top"><span>职员登录入口 / </span><span class="to_member" @click="goToMember">去会员登录入口</span></div>
    <div class="container">
      <div class="left">
        <p>职员注册</p>
        <el-input placeholder="请输入手机号码" v-model="phone_num" maxlength="11" show-word-limit>
          <template slot="prepend"><img src="../assets/iconfont/call.png"></template>
        </el-input>
        <el-input placeholder="请输入工号" v-model="work_num" maxlength="6" show-word-limit>
          <template slot="prepend"><img src="../assets/iconfont/setting.png"></template>
        </el-input>
        <el-input placeholder="请输入用户名" v-model="user_name" maxlength="10" show-word-limit>
          <template slot="prepend"><img src="../assets/iconfont/data.png"></template>
        </el-input>
        <el-input placeholder="请输入密码"  v-model="pass_word1" maxlength="15" minlength="6" show-password>
          <template slot="prepend"><img src="../assets/iconfont/account-2.png"></template>
        </el-input>
        <el-input placeholder="请再次输入密码"  v-model="pass_word2" maxlength="15" minlength="6" show-password>
          <template slot="prepend"><img src="../assets/iconfont/complete.png"></template>
        </el-input>
        <br>
        <el-button round @click="reg">注册</el-button>
      </div>
      <div class="right">
        <p>手机号登录</p>
        <el-input placeholder="请输入手机号码" v-model="phone" maxlength="11" show-word-limit>
          <template slot="prepend"><img src="../assets/iconfont/call.png"></template>
        </el-input>
        <el-input placeholder="请输入密码" v-model="password" maxlength="15" minlength="6" show-password>
          <template slot="prepend"><img src="../assets/iconfont/account-2.png"></template>
        </el-input>
        <span class="change"  @click="goTo">....... 切换工号登录</span>
        <br>
        <br>
        <el-button round @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {loginStaff, regStaff} from '@/api/api'
export default {
  name: 'login_staff',
  data () {
    return {
      phone_num: '',
      work_num: '',
      user_name: '',
      pass_word1: '',
      pass_word2: '',
      phone: '',
      password: ''
    }
  },
  methods: {
    goTo () {
      this.$router.replace('/login-staff-work-num')
    },
    goToMember () {
      this.$router.replace('/login-member')
    },
    login () {
      if (this.phone && this.password) loginStaff(this.phone, null, this.password)
      else alert('请填写完整！')
    },
    reg () {
      if (this.phone_num && this.work_num && this.user_name && this.pass_word1 && this.pass_word2) {
        if (this.pass_word1 === this.pass_word2) {
          if (this.pass_word1.length >= 6) regStaff(this.phone_num, this.work_num, this.user_name, this.pass_word1)
          else alert('密码长度少于6位！')
        } else alert('两次密码输入不同！')
      } else alert('请填写完整！')
    }
  }
}
</script>

<style scoped>
  .bg{
    width: 80%;
    height: 100%;
    padding: 10%;
    background-image: url("../assets/img/staff_bg.jpg");
    background-size: 100%;
    background-repeat: repeat;
  }
  .top{
    position: absolute;
    right: 20px;
    top: 20px;
    color: white;
    font-size: 18px;
    letter-spacing: 1px;
  }
  .container{
    width: 650px;
    height: 420px;
    margin: 0px auto;
    color: white;
  }
  .container .left{
     width: 260px;
    height: 100%;
     float: left;
    border-radius: 10px;
    padding: 0 20px;
    background-color:rgba(128,128,128,0.5);
    text-align: left;
    line-height: 50px;
  }
  .container .right{
    width: 260px;
    height: 98.8%;
    margin-left: 350px;
    border-radius: 10px;
    background-color:rgba(128,128,128,0.5);
    padding: 0.6% 20px;
    text-align: left;
    line-height: 50px;
  }
  .container p{
    font-size: 26px;
    margin: 10px;
  }
  .container img{
    width: 20px;
  }
  .change{
    float: right;
  }
  .change:hover{
    color: #3799EA;
    cursor:pointer;
  }
  .to_member:hover{
    color: #3799EA;
    cursor:pointer;
  }
  .el-button{
    margin-left: 10%;
    width: 80%;
  }
</style>
