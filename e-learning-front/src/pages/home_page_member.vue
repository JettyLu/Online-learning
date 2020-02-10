<template>
  <div class="container">
    <div class="nav">
<!--      logo与搜索条-->
      <div class="nav_top">
        <img src="../assets/img/logo.png">
          <el-input placeholder="请输入内容" style="border:1px solid #6e6e6e;">
            <template slot="append" >搜索</template>
          </el-input>
        <span class="user">&nbsp;&nbsp;&nbsp;&nbsp;欢迎您：</span><span class="user">{{username}} &nbsp;&nbsp;&nbsp;&nbsp;{{user_rank}} </span>
        <el-button size="small" plain v-if="login_status===1" @click="login">去登录</el-button>
        <el-button size="small" plain v-else @click="logout">注销</el-button>
      </div>
<!--      导航条-->
      <div class="nav_bot">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="white"
          text-color="#000"
          active-text-color="#bf3531">
          <el-submenu index="1" >
            <template slot="title" ><router-link to="/home-course" active-class="active-class">全部课程</router-link></template>
            <el-menu-item index="1-1"><router-link to="/home-course/home-course-English" >英语</router-link></el-menu-item>
            <el-menu-item index="1-2"><router-link to="/home-course/home-course-French">法语</router-link></el-menu-item>
            <el-menu-item index="1-3"><router-link to="/home-course/home-course-German" >德语</router-link></el-menu-item>
            <el-menu-item index="1-4"><router-link to="/home-course/home-course-Japanese" >日语</router-link></el-menu-item>
            <el-menu-item index="1-4"><router-link to="/home-course/home-course-Korean" >韩语</router-link></el-menu-item>
            <el-menu-item index="1-5"><router-link to="/home-course/home-course-Arabic" >阿拉伯语</router-link></el-menu-item>
          </el-submenu>
          <el-menu-item index="2" style="margin-right: 600px;"><router-link to="/home-news" active-class="active-class">新闻中心</router-link></el-menu-item>
          <el-submenu index="3">
            <template slot="title"><router-link to="/home-personal" active-class="active-class">个人中心</router-link></template>
            <el-menu-item index="3-1"><router-link to="/home-personal/home-personal-data">个人信息</router-link></el-menu-item>
            <el-menu-item index="3-2"><router-link to="/home-personal/home-personal-course" >我的课程</router-link></el-menu-item>
            <el-menu-item index="3-3"><router-link to="/home-personal/home-personal-exam" >我的考试</router-link></el-menu-item>
            <el-menu-item index="3-4"><router-link to="/home-personal/home-personal-certificate">我的证书</router-link></el-menu-item>
            <el-menu-item index="3-5"><router-link to="/home-personall/home-personal-upgrade">升级会员</router-link></el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><router-link to="/home-message" active-class="active-class">客服中心</router-link></template>
            <el-menu-item index="4-1"><router-link to="/home-message/home-message-add">新增留言</router-link></el-menu-item>
            <el-menu-item index="4-2"><router-link to="/home-message/home-message-wait">待回复</router-link></el-menu-item>
            <el-menu-item index="4-3"><router-link to="/home-message/home-message-history">历史留言</router-link></el-menu-item>
            <el-menu-item index="4-4"><router-link to="/home-message/home-message-auto">系统消息</router-link></el-menu-item>
          </el-submenu>
          <el-menu-item index="5"><a ><router-link to="/home-about" active-class="active-class">关于我们</router-link></a></el-menu-item>
        </el-menu>
      </div>
    </div>
<!--    路由填充-->
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home_page_member',
  data () {
    return {
      username: '请登录',
      user_rank: '',
      login_status: 1
    }
  },
  methods: {
    handleSelect (key, keyPath) {
    },
    login () {
      this.$router.replace('/login-member')
    },
    logout () {
      this.$router.replace('/login-member')
      localStorage.clear()
    }
  },
  created: function () {
    if (localStorage.getItem('memberID')) {
      this.username = localStorage.getItem('username')
      this.login_status = 0
      let data = {
        'memberID': localStorage.getItem('memberID'),
        'token': localStorage.getItem('token'),
        'username': localStorage.getItem('username'),
        'phoneNum': localStorage.getItem('phoneNum'),
        'rankM': localStorage.getItem('rankM')
      }
      this.user_rank = localStorage.getItem('rankM')
      this.$store.dispatch('saveMember', data)
    }
  }
}
</script>

<style scoped>
.container{
    width: 100%;
  }
.nav{
  width: 1250px;
  height: 120px;
  padding: 20px;
  margin: 0 auto;
  background-color: white;
}
.nav_top{
  width: 1250px;
  height: 70px;
  text-align: left;
  margin: 0 auto;
  line-height: 70px;
}
.nav_top img{
  height: 65px;
  float: left;
}
.nav_top .user{
  font-size: 16px;
}
.el-input{
  float: right;
  margin-top: 15px;
  width: 500px;
  margin-right: 50px;
}
.nav_bot{
  width: 100%;
  margin-top: 10px;
}
/*.home_nav_bot .nav{*/
/*  width: 20%;*/
/*  float: left;*/
/*  height: 50px;*/
/*  text-align: center;*/
/*  line-height: 50px;*/
/*  font-size: 20px;*/
/*  cursor:pointer;*/
/*}*/
  .el-menu{
    width: 1200px;
    margin: 0 auto;
  }
  .content{
    width: 100%;
    margin:0 auto;
    text-align: left;
  }
  .active-class{
    font-weight: bolder;
    color: #bf3531 !important;
    font-size: 20px !important;
  }
</style>
