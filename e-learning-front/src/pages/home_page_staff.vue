<template>
  <div class="container">
    <div class="top">
      <div class="home_nav">
      <!--      logo与搜索条-->
        <img src="../assets/img/logo.png">
        <span class="user">&nbsp;&nbsp;&nbsp;&nbsp;欢迎您：</span><span class="user">{{username}}  </span>
        <el-button size="small" plain v-if="login_status===1" @click="login">去登录</el-button>
        <el-button size="small" plain v-else @click="logout">注销</el-button>
        <span class="title">职员管理版</span>
    </div>
    </div>
    <!--    路由填充-->
    <div class="home">
      <div class="left">
        <el-col :span="24">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-vertical-demo"
            background-color="white"
            text-color="#000"
            active-text-color="#bf3531">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-notebook-2"></i>
                <span>课程管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1"><router-link to="/home-staff/course-add" active-class="on">发布新课程</router-link></el-menu-item>
                <el-menu-item index="1-2"><router-link to="/home-staff/course-published" active-class="on">已发布管理</router-link></el-menu-item>
<!--                <el-menu-item index="1-3"><router-link to="/home-staff/course-state" active-class="on">状态管理</router-link></el-menu-item>-->
              </el-menu-item-group>
            </el-submenu>
<!--              <el-submenu index="1-4">-->
<!--                <template slot="title">选项4</template>-->
<!--                <el-menu-item index="1-4-1">选项1</el-menu-item>-->
<!--              </el-submenu>-->
            <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-folder-opened"></i>
                  <span>考试管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1"><router-link to="/home-staff/exam-add" active-class="on">发布新考试</router-link></el-menu-item>
                  <el-menu-item index="2-2"><router-link to="/home-staff/exam-published" active-class="on">管理已发布</router-link></el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-news"></i>
                <span>新闻管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1"><router-link to="/home-staff/news-add" active-class="on">发布新新闻</router-link></el-menu-item>
                <el-menu-item index="3-2"><router-link to="/home-staff/news-published" active-class="on">管理已发布</router-link></el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-dish"></i>
                <span>留言管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1"><router-link to="/home-staff/message-replay" active-class="on">待回复留言</router-link></el-menu-item>
                <el-menu-item index="4-2"><router-link to="/home-staff/message-all" active-class="on">已回复留言</router-link></el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-trophy"></i>
                <span>证书审核</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="5-1"><router-link to="/home-staff/certificate-wait" active-class="on">待审核</router-link></el-menu-item>
                <el-menu-item index="5-2"><router-link to="/home-staff/certificate-all" active-class="on">已审核</router-link></el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="6" style="text-align: left">
              <i class="el-icon-edit"></i>
              <span slot="title"><router-link to="staff-data"  active-class="on">个人信息</router-link> </span>
            </el-menu-item>
            <el-menu-item index="7" style="text-align: left">
              <i class="el-icon-s-data"></i>
              <span slot="title">数据统计</span>
            </el-menu-item>
            <el-menu-item index="8" style="text-align: left">
              <i class="el-icon-user"></i>
              <span slot="title"><router-link to="member-all"  active-class="on">所有会员</router-link></span>
            </el-menu-item>
            <el-menu-item index="9" style="text-align: left">
              <i class="el-icon-user"></i>
              <span slot="title"><router-link to="staff-all"  active-class="on">所有职员</router-link></span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </div>
      <div class="right">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store/store.js'
export default {
  name: 'home_page_staff',
  data () {
    return {
      username: '请登录',
      login_status: 1,
      activeIndex: '1-1'
    }
  },
  beforeMount () {
    switch (this.$route.name) {
      case 'courseAdd':
        this.activeIndex = '1-1'
        break
      case 'coursePublished':
        this.activeIndex = '1-2'
        break
      // case 'courseState':
      //   this.activeIndex = '1-3'
      //   break
      case 'newsAdd':
        this.activeIndex = '3-1'
        break
      case 'newsPublished':
        this.activeIndex = '3-2'
        break
      case 'messageReplay':
        this.activeIndex = '4-1'
        break
      case 'messageAll':
        this.activeIndex = '4-2'
        break
    }
    console.log(this.activeIndex)
  },
  created: function () {
    if (localStorage.getItem('staffID')) {
      this.username = localStorage.getItem('username')
      this.login_status = 0
      let data = {
        'staffID': localStorage.getItem('staffID'),
        'token': localStorage.getItem('token'),
        'username': localStorage.getItem('username'),
        'phoneNum': localStorage.getItem('phoneNum'),
        'workNum': localStorage.getItem('workNum')}
      store.dispatch('saveStaff', data)
    }
  },
  methods: {
    login () {
      this.$router.replace('/login-staff-phone')
    },
    logout () {
      this.$router.replace('/login-staff-phone')
      localStorage.clear()
    }
  }
}
</script>

<style scoped>
  .container{
    width: 100%;
    min-height: 1200px;
    background-color: #f1f1f1;
  }
  .top{
    width: 100%;
    background-color: white;
    margin-bottom: 20px;
  }
  .home_nav{
    width: 1200px;
    height: 120px;
    text-align: left;
    margin: 0 auto;
    line-height: 70px;
  }
  .home_nav img{
    height: 80px;
    float: left;
  }
  .home_nav  .user{
    font-size: 20px;
  }
  .home_nav  .title{
    font-size: 20px;
    color: #bf3531;
    font-weight: bolder;
    float: right;
  }
  .home{
    width: 1200px;
    margin:0 auto;
    text-align: left;
  }
  .home .left{
    width: 230px;
    min-height: 800px;
    background-color: white;
    float: left;
  }
  .home .right{
    margin-left: 240px;
    min-height: 800px;
    width: 900px;
    padding: 10px 30px;
    background-color: white;
  }
  .el-menu{
    padding-left: 10px;
  }
  .el-menu-item{
    text-align: center;
  }
  .on{
    color: #bf3531 !important;
  }
</style>
