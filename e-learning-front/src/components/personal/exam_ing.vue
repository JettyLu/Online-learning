<template>
  <div class="personal_item">
    <div class="personal_item_left">
      <div>课程 名称: {{myExamData.examTitle}}</div>
      <div>考试 时间: {{exam1}} - {{exam2}}</div>
      <div>题型/总分：填空题/100分</div>
      <div>考试 时长：30分钟</div>
    </div>
      <el-button type="danger" plain @click="goTo">去考试</el-button>
<!--    </div>-->
  </div>
</template>

<script>
import {dateChange} from '@/assets/js/date'
import {getCoursesContent} from '@/api/api'
export default {
  name: 'exam_ing',
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
  },
  methods: {
    goTo () {
      this.$router.push({
        path: '/exam-content',
        name: 'examContent',
        params: {examData: this.myExamData}
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
