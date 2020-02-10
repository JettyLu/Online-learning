<template>
    <div>
      <div class="staff_title">已发布课程管理</div>
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
      <div>
      <div class="staff_item_container">
        <published v-for="item in newsData" :key="item.index" :newsData="item"></published>
      </div>
      </div>
    </div>
</template>

<script>
import published from '@/components/admin_news/published'
import {newsAdmin} from '@/api/api'
export default {
  name: 'course_published',
  data () {
    return {
      newsData: '',
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
      c_rank: ''
    }
  },
  components: {
    published
  },
  created () {
    newsAdmin().then(res => {
      if (res) {
        this.newsData = res
        console.log(this.newsData)
      }
    })
  }
}
</script>
<style scoped src="../../assets/css/staff.css"></style>
