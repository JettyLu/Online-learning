<template>
  <div class="mes_replay">
    <div class="name">
      ID：<span style="color: #afb0b4;font-size: 16px;margin:0 20px 0 5px;">{{messageData.memIDmes}}</span>
      用户名：<span style="color: #afb0b4;font-size: 16px;">{{messageData.memberUserName}}</span><span style="float: right">留言时间：{{time1}}</span></div>
    <div class="top">{{messageData.content}}</div>
    <div style="width: 100%" v-if="replay === false"><el-button type="primary" style="margin-left: 92%" @click="replayType">回复</el-button></div>
    <div class="bot" v-if="replay === true">
      <div><el-input
        type="textarea"
        maxlength="200"
        show-word-limit
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入内容"
        v-model="replay_content">
      </el-input></div>
      <div style="width: 100%;height: 40px;margin-top: 5px" ><el-button type="info" style="margin-left: 82%" @click="replayType">取消</el-button><el-button type="primary" @click="reply">发送</el-button></div>
    </div>
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
import {dateChange} from '@/assets/js/date'
import {replyMessage} from '@/api/api'

export default {
  name: 'replay',
  props: ['messageData'],
  data () {
    return {
      replay: false,
      replay_content: '',
      time1: '',
      isRouterAlive: true
    }
  },
  created () {
    this.time1 = dateChange(this.messageData.publishTime)
  },
  methods: {
    reply () {
      console.log(this.replay_content)
      replyMessage(this.messageData.messageID, this.replay_content).then(res => {
        if (res) this.reload()
      })
      location.reload()
    },
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    },
    replayType () {
      this.replay = !this.replay
    }
  }
}
</script>
<style scoped src="../../assets/css/staff.css"></style>
