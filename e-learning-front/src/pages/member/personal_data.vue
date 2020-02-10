<template>
    <div class="data_container">
      <div class="personal_title">
        个人信息
        <button @click="change">修改</button>
      </div>
      <div style="letter-spacing: 4px">用户名：<el-input class="allow" v-model="username" maxlength="10" show-word-limit :disabled="can === 0 ? true : false"/></div>
      <div style="letter-spacing: 3px">会员ID：<el-input v-model="id" :disabled="true"></el-input></div>
      <div style="letter-spacing: 4px">手机号：<el-input v-model="phone"  :disabled="true"/></div>
      <div>会员等级：<el-input v-model="grade"  :disabled="true"/></div>
      <br>
      <div  style="letter-spacing: 10px">性别：
        <el-radio v-model="sex" label="男" :disabled="can === 0 ? true : false">男</el-radio>
        <el-radio v-model="sex" label="女" :disabled="can === 0 ? true : false">女</el-radio>
      </div>
      <div style="letter-spacing: 10px">生日：<el-input v-model="birth" :disabled="can === 0 ? true : false"/></div>
      <div  style="letter-spacing: 10px">邮箱：<el-input  v-model="email" :disabled="can === 0 ? true : false"/></div>
      <br>
      <el-button type="warning" v-if="can === 1">保存修改</el-button>
      <br>
      <div class="personal_title">
        修改密码
      </div>
      <div style="letter-spacing: 4px">新密码：<el-input v-model="pass_word1" placeholder="请输入新密码" show-password  maxlength="15" minlength="6"></el-input></div>
      <div>再次输入：<el-input v-model="pass_word2" placeholder="请再次输入" show-password  maxlength="15" minlength="6"></el-input></div>
      <el-button type="warning" @click="changePassword">保存修改</el-button>
      <br>
    </div>
</template>

<script>
export default {
  name: 'personal_data',
  data () {
    return {
      id: 12343243,
      username: 'XXXXX',
      grade: '初级会员',
      phone: 13143331580,
      email: '283615676@qq.com',
      birth: '1997-7-16',
      sex: '女',
      pass_word1: '',
      pass_word2: '',
      can: 0
    }
  },
  methods: {
    change () {
      this.can = 1
    },
    changePassword () {
      if (this.pass_word1 === this.pass_word2) {
        if (this.pass_word1.length >= 6) {} else alert('密码长度少于6位！')
      } else alert('两次密码输入不同！')
    }
  }
}
</script>
<style scoped src="../../assets/css/member.css"></style>
<style scoped>
  .data_container{
    width: 100%;
    line-height: 30px;
  }
  .data_container div{
    height: 50px;
  }
  .personal_title button{
    color: #3799EA;
    border: none;
    background-color: white;
    margin-left: 30px;
  }
  input{
    width: 200px;
    height: 20px;
    border: none;
    margin-left: 20px;
  }
  .el-input{
    width: 300px;
  }
  .el-button{
    background-color: #bf3531;
    float: right;
  }
</style>
