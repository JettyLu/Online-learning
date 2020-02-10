<template>
  <div class="mes_replay">
    <div class="name">ID:<span style="font-size: 16px;margin:0 20px 0 5px;color: #afb0b4">{{messageData.memIDmes}}</span>用户名：{{messageData.memberUserName}}<span style="float: right">留言时间：{{time1}}</span></div>
    <div class="top">{{messageData.content}}</div>
    <div class="name">
      ID:<span style="font-size: 16px;margin:0 20px 0 5px;color: #afb0b4">{{messageData.staffIDmes}}</span>
      职员名：{{messageData.staffUserName}}<span style="float: right">回复时间：{{time2}}</span></div>
    <div class="all_bot">{{messageData.reply}}</div>
  </div>
</template>

<script>
import {dateChange} from '@/assets/js/date'
export default {
  name: 'all',
  props: ['messageData'],
  data () {
    return {
      time1: '',
      time2: ''
    }
  },
  created () {
    this.time1 = dateChange(this.messageData.publishTime)
    this.time2 = dateChange(this.messageData.replyTime)
  }
}
</script>
<style scoped src="../../assets/css/staff.css"></style>
