<template>
<div class="inner">
  <div class="inner_title">课程章节</div>
  <div class="inner_content" v-for="item in course" :key="item.sectionID">
    <div>{{item.resTitle}}</div>
  </div>
</div>
</template>

<script>
import {getResourceContent} from '@/api/api'
export default {
  name: 'content_catalogue',
  data () {
    return {
      course: ''
    }
  },
  props: ['courseContent'],
  created () {
    getResourceContent(this.courseContent).then(res => {
      console.log(this.courseContent)
      console.log(res)
      this.course = res
      console.log(this.course)
    })
  }
}
</script>

<style scoped>
  .inner{
    width: 800px;
    min-height: 400px;
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
    font-size: 16px;
    line-height: 50px;
  }
</style>
