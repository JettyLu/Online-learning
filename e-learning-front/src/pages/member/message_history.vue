<template>
  <div class="person_item_container">
    <div class="personal_title">已回复记录</div>
    <mes v-for="item in messageData" :key="item.messageID" :messageData="item"/>
  </div>
</template>

<script>
import mes from '@/components/message/mes_his'
import {getMessage} from '@/api/api'
export default {
  name: 'message_history',
  components: {
    mes
  },
  data () {
    return {
      messageData: ''
    }
  },
  created () {
    getMessage(1).then(res => {
      this.messageData = res
    })
  }
}
</script>

<style scoped src="../../assets/css/member.css"></style>
