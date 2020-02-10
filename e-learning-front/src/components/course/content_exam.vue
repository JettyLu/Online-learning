<template>
  <div class="inner">
    <div class="inner_title">考试安排</div>
    <div class="inner_content">
      考试时间：{{courseContent.exam1}} -24:00:00<br>
      考试时长：30分钟<br>
      试卷总分：10分<br>
      试卷题型：填空题<br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'content_exam',
  props: ['courseContent']
}
</script>

<style scoped>
  .inner{
    width: 800px;
    height: 160px;
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
    height: 110px;
    line-height: 25px;
    padding-left:3%;
    padding-top: 10px;
  }
</style>
