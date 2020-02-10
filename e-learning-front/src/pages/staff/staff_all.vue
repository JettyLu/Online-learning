<template>
    <div>
      <div class="staff_title">所有职员查询</div>
      <div>
        <el-select v-model="c_type" placeholder="请选择查询条件">
          <el-option
            v-for="item in course_type"
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
        <staff v-for="item in staffData" :key="item.index" :staffData="item"></staff>
      </div>
      </div>
    </div>
</template>

<script>
import staff from '@/components/admin/staff'
import {getAllStaff} from '@/api/api'
export default {
  name: 'staff_all',
  data () {
    return {
      staffData: 2,
      course_type: [{
        value: 'ID'
      }, {
        value: '工号'
      }, {
        value: '手机号'
      }, {
        value: '性别'
      }],
      c_type: '',
      c_rank: ''
    }
  },
  components: {
    staff
  },
  created () {
    getAllStaff().then(res => {
      if (res) {
        this.staffData = res
        console.log(this.staffData)
      }
    })
  }
}
</script>
<style scoped src="../../assets/css/staff.css"></style>
