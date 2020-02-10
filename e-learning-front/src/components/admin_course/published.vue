<template>
  <div class="inner">
    <div style="float:left;width: 35%;overflow: hidden">ID：{{courseData.courseID}} {{courseData.courseName}}</div>
    <div style="margin:0 10px;display: inline-block;width: 80px;overflow: hidden;">{{courseData.courseType}}</div>
    <div style="display: inline-block;width: 80px;overflow: hidden;">职员ID：{{courseData.staffIDcourse}}</div>
    <el-button type="primary" plain>修改信息</el-button>
    <el-button type="success" plain>管理资源</el-button>
    <el-button type="info" plain >删除课程</el-button>
    <div>
      <span style="margin-right: 10px;color:#bf3531">当前状态：{{status}}</span>
      报名时间：{{enterTime1}} - {{enterTime2}} 上课时间：{{classTime1}} - {{classTime2}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'published',
  props: ['courseData'],
  data () {
    return {
      enterTime1: '',
      enterTime2: '',
      classTime1: '',
      classTime2: '',
      status: ''
    }
  },
  created () {
    // eslint-disable-next-line no-undef
    let course = this.courseData
    let enter1 = course.enterTime1
    let enter2 = course.enterTime2
    let class1 = course.classTime1
    let class2 = course.classTime2
    this.enterTime1 = enter1.slice(0, 10).replace(/-/g, '.')
    this.enterTime2 = enter2.slice(0, 10).replace(/-/g, '.')
    this.classTime1 = class1.slice(0, 10).replace(/-/g, '.')
    this.classTime2 = class2.slice(0, 10).replace(/-/g, '.')
    if (course.courseStatus === 0) { this.status = '报名中' }
    if (course.courseStatus === 1) { this.status = '进行中' }
    if (course.courseStatus === -1) { this.status = '进行中' }
  }
}
</script>

<style scoped>
  .inner{
    height: 80px;
    line-height: 30px;
    border-bottom: 1px solid #f1f1f1;
  }
  .el-button{
    height: 30px;
    line-height: 5px;
  }
</style>
