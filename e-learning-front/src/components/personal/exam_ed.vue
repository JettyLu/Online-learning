<template>
  <div class="personal_item">
    <div class="personal_item_left">
      <div>课程 名称: {{myExamData.examTitle}}</div>
      <div>考试 时间: {{exam1}} - {{exam2}}</div>
      <div>题型/总分：填空题/100分</div>
      <div>考试时长：60分钟</div>
    </div>
<!--    <el-button type="primary" plain>96分</el-button>-->
    <el-button type="info" plain>已结束</el-button>
  </div>
</template>

<script>
import {dateChange} from '@/assets/js/date'
import {getCoursesContent} from '@/api/api'
export default {
  name: 'exam_ed',
  props: ['myExamData'],
  data () {
    return {
      exam1: '',
      exam2: ''
    }
  },
  created () {
    getCoursesContent(this.myExamData.courseIDexam).then(res => {
      if (res) {
        this.exam1 = dateChange(res[0].examTime1)
        this.exam2 = dateChange(res[0].examTime2)
      }
    })
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
