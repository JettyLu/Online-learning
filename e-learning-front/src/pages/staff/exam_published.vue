<template>
    <div>
      <div class="staff_title">已发布考试管理</div>
      <div>
        <el-select v-model="c_type" placeholder="请选择课程种类">
          <el-option
            v-for="item in course_type"
            :key="item.value"
            :label="item.value"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="c_rank" placeholder="请选择课程等级">
          <el-option
            v-for="item in course_rank"
            :key="item.value"
            :label="item.value"
            :value="item.value">
          </el-option>
        </el-select>
        <el-input maxlength="20" show-word-limit placeholder="请输入关键字" style="width: 300px"></el-input>
        <el-button plain  icon="el-icon-search">搜索</el-button>
      </div>
      <div class="staff_item_container">
      <div class="small_title">未开始管理</div>
        <exam-un v-for="item in unExam" :key="item.index" :examData="item"></exam-un>
      <div class="small_title">已开始管理</div>
        <exam-ing v-for="item in ingExam" :key="item.index" :examData="item"></exam-ing>
      <div class="small_title">已结束管理</div>
        <exam-ed v-for="item in edExam" :key="item.index" :examData="item"></exam-ed>
      </div>
    </div>
</template>

<script>
import examUn from '@/components/admin_exam/exam_un'
import examIng from '@/components/admin_exam/exam_ing'
import examEd from '@/components/admin_exam/exam_ed'
import {getExam0, getExam1, getExam2} from '@/api/api'
export default {
  name: 'exam_published',
  data () {
    return {
      course_type: [{
        value: '英语'
      }, {
        value: '日语'
      }, {
        value: '法语'
      }, {
        value: '德语'
      }, {
        value: '韩语'
      }, {
        value: '阿拉伯语'
      }],
      c_type: '',
      course_rank: [{
        value: '初级会员'
      }, {
        value: '中级会员'
      }, {
        value: '高级会员'
      }],
      c_rank: '',
      unExam: '',
      ingExam: '',
      edExam: ''
    }
  },
  created () {
    getExam0().then(res => {
      console.log(res)
      this.unExam = res
    })
    getExam1().then(res => {
      console.log(res)
      this.ingExam = res
    })
    getExam2().then(res => {
      console.log(res)
      this.edExam = res
    })
  },
  components: {
    examUn,
    examIng,
    examEd
  }
}
</script>
<style scoped src="../../assets/css/staff.css"></style>
<style scoped>
  .small_title{
    color: #bf3531;
    font-size: 18px;
    margin: 20px 0;
    font-weight: bolder;
  }
</style>
