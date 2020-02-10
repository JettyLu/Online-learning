<template>
  <div class="mes_item">
    <div class="mes_title">留言时间：{{publishedTime}} 回复时间：{{replyTime}}</div>
    <div class="mes_ask">{{messageData.content}}</div>
    <div class="mes_replay"><span style="color: gray">职员 {{messageData.staffUserName}} ：</span>{{messageData.reply}}</div>
  </div>
</template>

<script>
import {dateChange} from '@/assets/js/date'
export default {
  name: 'mes_his',
  props: ['messageData'],
  data () {
    return {
      publishedTime: '',
      replyTime: ''
    }
  },
  created () {
    this.publishedTime = dateChange(this.messageData.publishTime)
    this.replyTime = dateChange(this.messageData.replyTime)
  }
}
</script>

<style scoped src="../../assets/css/member.css"></style>
