<template>
    <div class="data_container">
      <div class="personal_title">
        发布新留言
      </div>
      <div class="message_text">
        <el-input
        type="textarea"
        maxlength="200"
        :autosize="{ minRows: 2, maxRows: 5}"
        placeholder="请输入内容"
        v-model="messageContent"
        show-word-limit>
      </el-input>
      </div>
      <div><el-button type="danger" @click="submit">发布留言</el-button></div>
    </div>
</template>

<script>
import {publishMessage} from '@/api/api'
export default {
  name: 'message_add',
  data () {
    return {
      messageContent: ''
    }
  },
  methods: {
    submit () {
      publishMessage(this.messageContent).then(res => {
        if (res) {
          this.messageContent = ''
        }
      })
    }
    // changePassword () {
    //   if (this.pass_word1 === this.pass_word2) {
    //     if (this.pass_word1.length >= 6) {} else alert('密码长度少于6位！')
    //   } else alert('两次密码输入不同！')
    // }
  }
}
</script>
<style scoped src="../../assets/css/member.css"></style>
<style scoped>
  .data_container{
    width: 100%;
    min-width: 600px;
    line-height: 30px;
  }
  .data_container div{
    height: 50px;
  }
  .message_text{
    width: 100%;
    height: 500px;
    margin-bottom: 100px;
  }
  .el-input{
    width: 300px;
  }
  .el-button{
    background-color: #bf3531;
  }
</style>
