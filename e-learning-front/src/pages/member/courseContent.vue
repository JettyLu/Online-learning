<template>
  <div class="container">
    <div class="container_top">
      <div class="container_top_content">
        <div><span @click="goTo">全部课程</span> > <span @click="goTo">{{course.courseType}}</span> > {{courseRank}}</div>
        <div class="title">{{course.courseName}}<el-button type="warning" @click="enter">{{buttonText}}</el-button></div>
        <div>会员等级：{{courseRank}}</div>
      </div>
    </div>
    <div class="container_nav">
      <div class="container_nav_menu">
        <el-menu
          :default-active="activeIndex1"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="white"
          text-color="#000"
          active-text-color="#bf3531">
          <el-menu-item index="1" >课程信息</el-menu-item>
          <el-menu-item index="2">课程简介</el-menu-item>
          <el-menu-item index="3" >课程时间安排</el-menu-item>
          <el-menu-item index="4">课程考试安排</el-menu-item>
          <el-menu-item index="5">课程章节</el-menu-item>
        </el-menu>
      </div>
    </div>
    <div class="content" v-if="div_show == 1">
      <introduce :courseContent="course.introduction" :imgURL="course.imgURL"/><content-time :courseContent="classTime"/><exam :courseContent="exam"/><catalogue :courseContent="course.courseID"/>
    </div>
    <div class="content" v-if="div_show == 2" style="height: 600px">
      <introduce :courseContent="course.introduction" :imgURL="course.imgURL"/>
    </div>
    <div class="content" v-if="div_show == 3" style="height: 600px">
      <content-time :courseContent="classTime"/>
    </div>
    <div class="content" v-if="div_show == 4" style="height: 600px">
      <exam :courseContent="exam"/>
    </div>
    <div class="content" v-if="div_show == 5" style="height: 600px">
      <catalogue :courseContent="course.courseID"/>
    </div>
  </div>
</template>

<script>
import introduce from '@/components/course/content_introduce'
import contentTime from '@/components/course/content_time'
import exam from '@/components/course/content_exam'
import catalogue from '@/components/course/content_catalogue'
import {getCoursesContent, enterClass} from '@/api/api'
import {dateChange} from '@/assets/js/date'

export default {
  name: 'courseContent',
  data () {
    return {
      div_show: 1,
      buttonText: '点击报名',
      activeIndex1: '1',
      course: '',
      courseRank: '',
      exam: {
        exam1: '',
        exam2: '',
        id: ''
      },
      classTime: {
        class1: '',
        class2: '',
        enter1: '',
        enter2: ''
      }
      // activeIndex2: '1',
      // activeIndex3: '1',
      // activeIndex4: '1'

    }
  },
  created () {
    getCoursesContent(this.$route.params.id).then(res => {
      this.course = JSON.parse(JSON.stringify(res[0]))
      if (this.course.permission === 0) {
        this.courseRank = '初级会员'
      }
      if (this.course.permission === 1) {
        this.courseRank = '中级会员'
      }
      if (this.course.permission === 2) {
        this.courseRank = '高级会员'
      }
      this.classTime.enter1 = dateChange(this.course.enterTime1)
      this.classTime.enter2 = dateChange(this.course.enterTime2)
      this.classTime.class1 = dateChange(this.course.classTime1)
      this.classTime.class2 = dateChange(this.course.classTime2)
      this.exam.exam1 = dateChange(this.course.examTime1)
      this.exam.exam2 = dateChange(this.course.examTime2)
      this.exam.id = dateChange(this.course.courseID)
    })
  },
  methods: {
    handleSelect (key, keyPath) {
      this.div_show = key
    },
    goTo () {
      this.$router.replace('/home-course')
    },
    enter () {
      enterClass(this.course.courseID).then(res => {
        if (res) this.buttonText = '已报名'
      })
    }
  },
  components: {
    introduce,
    contentTime,
    exam,
    catalogue
  }
}
</script>
<style scoped>
  .container{
    width: 100%;
    min-height: 800px;
    background-color: #f1f1f1;
  }
  .container_top{
    width: 100%;
    height: 150px;
    padding: 20px;
    margin: 0 auto;
    background-color: #6e6e6e;
  }
  .container_top_content{
    width: 800px;
    margin: 0 auto;
    color: white;
    text-align: left;
  }
  .container_top_content .title{
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 36px;
    letter-spacing: 5px;
    margin: 30px 0;
  }
  .container_top_content  .el-button {
    background-color: #bf3531;
    letter-spacing: 2px;
    float: right;
    border: none;
  }
  .container_top_content span {
    cursor: pointer;
  }
  .container_nav{
    width: 100%;
    height: 60px;
    background-color: white;
    -moz-box-shadow: 1px 15px 15px 1px #afb0b4;-webkit-box-shadow:1px 15px 15px 1px  #afb0b4;box-shadow:1px 15px 15px 1px #afb0b4;
  }
  .container_nav_menu{
    width:800px;
    margin: 0 auto;
  }
  .el-menu-item{
    width: 20%;
  }
  .content{
    width: 100%;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 50px;
  }

</style>
