<template>
  <div class="certificate_item">
    <div class="certificate_item_title">结课证书</div>
    <div class="div_item">证书  ID：{{myData.certificateID}}</div>
    <div>证书名称：{{myData.title}}</div>
    <div class="div_item">证书成绩：{{myData.content}} / {{myData.score}}</div>
    <div>获取时间：<br>{{getTime}}</div>
  </div>
</template>

<script>
import {dateChange} from '@/assets/js/date'
export default {
  name: 'certificate',
  data () {
    return {
      getTime: ''
    }
  },
  props: ['myData'],
  created () {
    this.getTime = dateChange(this.myData.getTime)
  }
}
</script>

<style scoped>
  .certificate_item{
    width: 28%;
    height: 180px;
    padding: 10px 10px;
    border-radius: 15px;
    margin: 10px 6px;
    border: 1px solid #f1f1f1;
    line-height: 25px;
    float: left;
    -moz-box-shadow: 1px 15px 15px 1px #f1f1f1;-webkit-box-shadow:1px 15px 15px 1px  #f1f1f1;box-shadow:5px 10px 10px 5px #f1f1f1;
  }
  .certificate_item_title{
    color: #bf3531;
    font-size: 20px;
    width: 100%;
    text-align: center;
    margin-bottom: 5px;
  }
  .certificate_item .div_item{
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
</style>
