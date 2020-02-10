<template>
    <div>
      <div class="staff_title">全部消息</div>
      <div  style="margin-bottom: 10px">
        <el-input maxlength="20" show-word-limit placeholder="请输入关键字" style="width: 500px"></el-input>
        <el-button plain  icon="el-icon-search">搜索</el-button>
      </div>
      <div class="staff_item_container">
        <all-message v-for="item in messageData" :key="item.messageID" :messageData="item"/>
      </div>
    </div>
</template>

<script>
import allMessage from '@/components/admin_message/all'
import {messageAdmin} from '@/api/api'
export default {
  name: 'message_all',
  components: {
    allMessage
  },
  data () {
    return {
      messageData: ''
    }
  },
  created () {
    messageAdmin(1).then(res => {
      this.messageData = res
    })
  }
}
</script>
<style scoped src="../../assets/css/staff.css"></style>
