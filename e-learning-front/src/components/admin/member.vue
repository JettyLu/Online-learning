<template>
  <div class="inner">
    <div style="width: 280px">会员ID：{{memberData.memberID}} 会员名：{{memberData.username}}</div>
    <div style="width: 100px">会员等级：{{rankM}}</div>
    <div>联系方式：{{memberData.phoneNum}}</div>
    <div style="width: 250px">注册时间：{{addTime}}</div>
  </div>
</template>

<script>
import {dateChange} from '@/assets/js/date'
export default {
  name: 'member',
  data () {
    return {
      rankM: '初级会员',
      addTime: ''
    }
  },
  props: ['memberData'],
  created () {
    if (this.memberData.rankM === 0) { this.rankM = '初级会员' }
    if (this.memberData.rankM === 1) { this.rankM = '中级会员' }
    if (this.memberData.rankM === 2) { this.rankM = '高级会员' }
    this.addTime = dateChange(this.memberData.addTime)
  }
}
</script>

<style scoped>
  .inner{
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #f1f1f1;
  }
  .inner div{
    width: 180px;
    display: inline-block;
    overflow: hidden;
    margin-right: 10px;
    height: 30px;
  }
</style>
