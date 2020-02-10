<template>
  <div class="inner">
    <div style="width: 280px">职员ID：{{staffData.staffID}} 职员名：{{staffData.username}}</div>
    <div  style="width: 150px">职员工号：{{staffData.workNum}}</div>
    <div>联系方式：{{staffData.phoneNum}}</div>
    <div style="width: 200px">注册时间：{{addTime}}</div>
  </div>
</template>

<script>
import {dateChange} from '@/assets/js/date'
export default {
  name: 'staff',
  props: ['staffData'],
  data () {
    return {
      addTime: ''
    }
  },
  created () {
    this.addTime = dateChange(this.staffData.addTime)
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
