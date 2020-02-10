<template>
    <div class="personal_container" >
      <div class="container">
        <div class="left">
          <div class="user">会员名</div>
          <div class="grade" style="color: #bf3531"><img src="../../assets/iconfont/grade.png">初级会员</div>
          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="white"
            text-color="#000"
            :default-active="activeIndex"
            active-text-color="#bf3531">
            <router-link to="/home-personal/home-personal-data"><el-menu-item index="1"><i class="el-icon-postcard"></i>个人信息</el-menu-item></router-link><br>
            <router-link to="/home-personal/home-personal-course"><el-menu-item index="2"><i class="el-icon-collection"></i>我的课程</el-menu-item></router-link><br>
            <router-link to="/home-personal/home-personal-exam"><el-menu-item index="3"><i class="el-icon-notebook-2"></i>我的考试</el-menu-item></router-link><br>
            <router-link to="/home-personal/home-personal-certificate"><el-menu-item index="4"><i class="el-icon-medal-1"></i>我的证书</el-menu-item></router-link><br>
            <router-link to="/home-personal/home-personal-upgrade"><el-menu-item index="5"><i class="el-icon-star-off"></i>升级会员</el-menu-item></router-link>
          </el-menu>
        </div>
        <div class="right">
          <router-view/>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'personal',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(this.$route.name)
    }
  },
  beforeMount () {
    switch (this.$route.name) {
      case 'personalData':
        this.activeIndex = '1'
        break
      case 'personalCourse':
        this.activeIndex = '2'
        break
      case 'personalExam':
        this.activeIndex = '3'
        break
      case 'personalCertificate':
        this.activeIndex = '4'
        break
      case 'personalUpgrade':
        this.activeIndex = '5'
        break
    }
    console.log(this.activeIndex)
  }
}
</script>

<style scoped>
  .personal_container{
    width: 100%;
    padding-top: 50px;
    background-color: #f1f1f1;
  }
  .personal_container .container{
    width: 1000px;
    min-height: 900px;
    margin: 0 auto;
  }
  .personal_container .container .left{
    width: 200px;
    min-height: 700px;
    float: left;
    padding-top: 20px;
    background-color: white;
    border: 3px solid #f1f1f1;
  }
  .user{
    width: 100%;
    font-size: 18px;
    text-align: center;
    height: 50px;
    line-height: 50px;
    overflow: hidden;
  }
  .grade{
    width: 45%;
    font-size: 14px;
    text-align: center;
    height: 30px;
    line-height: 20px;
    overflow: hidden;
    margin: 0 auto 30px auto;
  }
  .grade img{
    width: 20px;
    margin-right: 5px;
    float: left;
  }
  .personal_container .container .right{
    width: 700px;
    padding:20px 50px ;
    margin-left: 210px;
    min-height: 700px;
    background-color: white;
  }
  .el-menu-item{
    width: 200px;
    text-align: center;
  }
  .el-menu{
    border-top: 2px solid #f1f1f1;
  }
</style>
