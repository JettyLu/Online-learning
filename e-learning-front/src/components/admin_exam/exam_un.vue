<template>
  <div class="inner">
    <div style="width: 100%;height: 30px">
      <div style="float:left;width: 40%;overflow: hidden">考试ID：{{examData.examID}} {{examData.examTitle}} </div>
      <div style="float: right">
        <el-button type="primary" plain>修改</el-button>
        <el-button type="info" plain @click="deleteClick">删除</el-button>
      </div>
    </div>
    <div>
      <span style="margin-right: 10px;color:#bf3531">当前状态：未开始</span>
      试卷总分：{{examData.score}}分  考试时长：{{examData.examTime}}分钟 <span style="margin-right: 10px;color:#bf3531"> 所属课程ID：{{examData.courseIDexam}}</span>
      发布职员ID：{{examData.staffIDexam}} {{examData.staffUserName}}
    </div>
  </div>
</template>

<script>
import {deleteExam} from '@/api/api'
export default {
  name: 'exam_un',
  props: ['examData'],
  data () {
    return {
      states: 1
    }
  },
  methods: {
    deleteClick () {
      deleteExam(this.examData.examID).then(res => {
        if (res) { location.reload() }
      })
    }
  }
}
</script>

<style scoped>
  .inner{
    height: 60px;
    margin-top: 5px;
    line-height: 30px;
    border-bottom: 1px solid #f1f1f1;
  }
  .el-button{
    height: 30px;
    line-height: 5px;
  }
</style>
