<template>
  <div class="person_item_container">
    <div class="personal_title">待回复</div>
    <mes v-for="item in messageData" :key="item.messageID" :messageData="item"/>
  </div>
</template>

<script>
import mes from '@/components/message/mes_wait'
import {getMessage} from '@/api/api'

export default {
  name: 'message_wait',
  components: {
    mes
  },
  data () {
    return {
      messageData: ''
    }
  },
  created () {
    getMessage(0).then(res => {
      this.messageData = res
    })
  }
}
</script>

<style scoped src="../../assets/css/member.css"></style>
