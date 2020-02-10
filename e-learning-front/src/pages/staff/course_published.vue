<template>
    <div>
      <div class="staff_title">已发布课程管理</div>
      <div style="margin-bottom: 20px">
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
      <div class="small_title">初级会员课程</div>
        <published v-for="item in primaryCourse" :key="item.index" :courseData="item"></published>
        <div class="small_title">中级会员课程</div>
        <published v-for="item in interCourse" :key="item.index" :courseData="item"></published>
        <div class="small_title">高级会员课程</div>
        <published v-for="item in advanceCourse" :key="item.index" :courseData="item"></published>
      </div>
    </div>
</template>

<script>
import published from '@/components/admin_course/published'
import {getCourses0, getCourses1, getCourses2} from '@/api/api'
export default {
  name: 'course_published',
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
      primaryCourse: '',
      interCourse: '',
      advanceCourse: ''
    }
  },
  created () {
    getCourses0().then(res => {
      console.log(res)
      this.primaryCourse = res
    })
    getCourses1().then(res => {
      console.log(res)
      this.interCourse = res
    })
    getCourses2().then(res => {
      console.log(res)
      this.advanceCourse = res
    })
  },
  components: {
    published
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
