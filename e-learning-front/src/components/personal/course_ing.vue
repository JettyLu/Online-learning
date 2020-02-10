<template>
  <div class="personal_item">
    <div class="personal_item_left">
    <div>课程名称: {{myClassData.courseName}}</div>
    <div>报名时间: {{enter1}} - {{enter2}}</div>
    <div>上课时间: {{class1}} - {{class2}}</div>
    <div>考试时间: {{exam1}} - {{exam2}}</div>
    </div>
    <el-button type="danger" plain @click="goTo">去上课</el-button>
  </div>
</template>

<script>
import {dateChange} from '@/assets/js/date'
export default {
  name: 'course_ing',
  props: ['myClassData'],
  data () {
    return {
      enter1: '',
      class1: '',
      exam1: '',
      enter2: '',
      class2: '',
      exam2: ''
    }
  },
  created () {
    this.enter1 = dateChange(this.myClassData.enterTime1)
    this.enter2 = dateChange(this.myClassData.enterTime2)
    this.class1 = dateChange(this.myClassData.classTime1)
    this.class2 = dateChange(this.myClassData.classTime2)
    this.exam1 = dateChange(this.myClassData.examTime1)
    this.exam2 = dateChange(this.myClassData.examTime2)
  },
  methods: {
    goTo () {
      console.log(this.myClassData)
      this.$router.push({
        path: '/class-content',
        name: 'classContent',
        params: {courseData: this.myClassData}
      })
    }
  }
}
</script>
<style scoped src="../../assets/css/member.css"></style>
<style scoped>
  .el-button{
    width: 150px;
    height: 40px;
    float: right;
  }
</style>
