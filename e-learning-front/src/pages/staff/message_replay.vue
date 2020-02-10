<template>
    <div>
      <div class="staff_title">待回复留言</div>
      <div style="margin-bottom: 10px">
        <el-input maxlength="20" show-word-limit placeholder="请输入关键字" style="width: 500px"></el-input>
        <el-button plain  icon="el-icon-search">搜索</el-button>
      </div>
      <div class="staff_item_container">
        <replay v-for="item in messageData" :key="item.messageID" :messageData="item"/>
      </div>
    </div>
</template>

<script>
import replay from '@/components/admin_message/replay'
import {messageAdmin} from '@/api/api'
export default {
  name: 'message_wait',
  data () {
    return {
      messageData: ''
    }
  },
  components: {
    replay
  },
  created () {
    messageAdmin(0).then(res => {
      this.messageData = res
    })
  }
}
</script>
<style scoped src="../../assets/css/staff.css"></style>
<style scoped>
.mes_replay{
  min-height: 100px;
  padding: 5px 10px;
  -moz-box-shadow: 1px 15px 15px 1px #f1f1f1;-webkit-box-shadow:1px 15px 15px 1px  #f1f1f1;box-shadow:5px 10px 10px 5px #f1f1f1;
}
.mes_replay .name{
  width: 100%;
  color: #6e6e6e;
  font-weight: bolder;
}
.mes_replay .top{
  min-height:20px;
  line-height: 30px;
  border-bottom: 1px solid #f1f1f1;
  margin-bottom: 5px;
}
.mes_replay .bot{
  width: 100%;
  min-height:10px;
}
</style>
