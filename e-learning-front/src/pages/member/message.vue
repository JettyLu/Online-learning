<template>
  <div class="personal_container" >
    <div class="container">
      <div class="left">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="white"
          text-color="#000"
          :default-active="activeIndex"
          active-text-color="#bf3531">
          <router-link to="/home-message/home-message-add"><el-menu-item index="1"><i class="el-icon-circle-plus"></i>新增留言</el-menu-item></router-link><br>
          <router-link to="/home-message/home-message-wait"><el-menu-item index="2"><i class="el-icon-question"></i>待客服回复</el-menu-item></router-link><br>
          <router-link to="/home-message/home-message-history"><el-menu-item index="3"><i class="el-icon-info"></i>历史留言</el-menu-item></router-link><br>
          <router-link to="/home-message/home-message-auto"><el-menu-item index="4"><i class="el-icon-warning"></i>系统消息</el-menu-item></router-link><br>
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
  name: 'message',
  data () {
    return {
      activeIndex: '1'
    }
  },
  beforeMount () {
    switch (this.$route.name) {
      case 'messageAdd':
        this.activeIndex = '1'
        break
      case 'messageWait':
        this.activeIndex = '2'
        break
      case 'messageHistory':
        this.activeIndex = '3'
        break
      case 'messageAuto':
        this.activeIndex = '4'
        break
    }
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
    width: 150px;
    text-align: left;
    margin-left: 20px;
  }
</style>
