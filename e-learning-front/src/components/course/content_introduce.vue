<template>
  <div class="inner">
    <div class="inner_title">课程简介</div>
    <div class="inner_content">
      <div class="left">
        <img :src="imgURL">
      </div>
      <div class="right">{{courseContent}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'content_introduce',
  props: ['courseContent', 'imgURL']
}
</script>

<style scoped>
.inner{
  width: 800px;
  height: 200px;
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
    height: 130px;
    padding-left:3%;
    padding-top: 10px;
  }
.inner_content .left{
  float: left;
  width: 30%;
  height: 100%;
}
.inner_content .left img{
  height: 100%;
}
.inner_content .right{
  width: 60%;
  margin-left: 35%;
  height: 100%;
  line-height: 40px;
  overflow: hidden;
  text-align: left;
}
</style>
