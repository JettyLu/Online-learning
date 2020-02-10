<template>
    <div>
      <div class="staff_title">待审核证书</div>
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
      <certificate/><certificate/><certificate/><certificate/>
      </div>
    </div>
</template>

<script>
import certificate from '@/components/admin_certificate/cer_wait'
export default {
  name: 'certificate_wait',
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
      c_rank: ''
    }
  },
  components: {
    certificate
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
