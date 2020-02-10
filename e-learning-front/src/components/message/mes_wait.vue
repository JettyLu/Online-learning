<template>
  <div class="mes_item">
    <div class="mes_title">留言时间：{{publishedTime}}</div>
    <div class="mes_text">{{messageData.content}}</div>
  </div>
</template>

<script>
import {dateChange} from '@/assets/js/date'

export default {
  name: 'mes_wait',
  props: ['messageData'],
  data () {
    return {
      publishedTime: ''
    }
  },
  created () {
    this.publishedTime = dateChange(this.messageData.publishTime)
  }
}
</script>

<style scoped src="../../assets/css/member.css"></style>
