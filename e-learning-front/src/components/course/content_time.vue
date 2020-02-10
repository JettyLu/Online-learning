<template>
<div class="inner">
  <div class="inner_title">课程时间</div>
  <div class="inner_content">
    报名时间：{{courseContent.enter1}}-{{courseContent.enter2}}<br>
    开课时间：{{courseContent.class1}}<br>
    结课时间：{{courseContent.class2}}<br>
  </div>
</div>
</template>

<script>
export default {
  name: 'content_time',
  props: ['courseContent']
}
</script>

<style scoped>
  .inner{
    width: 800px;
    height: 140px;
    border-radius: 10px;
    margin: 0 auto;
    margin-bottom: 50px;
    background-color: white;
    -moz-box-shadow: 1px 15px 15px 1px #dadada;-webkit-box-shadow:1px 15px 15px 1px #dadada;box-shadow:1px 15px 15px 1px #dadada;
  }
  .inner_title{
    width: 97%;
    height: 40px;
    line-height: 40px;
    padding-left:3%;
    text-align: left;
    border-bottom: 2px solid #bf3531;
    font-size: 18px;
  }
  .inner_content{
    width: 97%;
    height: 90px;
    line-height: 25px;
    padding-left:3%;
    padding-top: 10px;
  }
</style>
