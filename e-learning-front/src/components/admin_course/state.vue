<template>
  <div class="inner">
    <div style="float:left;width: 40%;overflow: hidden">ID：001 大学英语六级入门</div><span style="margin: 20px;">阿拉伯语</span>
    <el-radio-group v-model="states">
      <el-radio :label="1">报名中</el-radio>
      <el-radio :label="2">进行中</el-radio>
      <el-radio :label="3">已结束</el-radio>
    </el-radio-group>
    <el-button type="primary" plain style="margin-left: 30px;">更改状态</el-button>
    <div>
      <span style="margin-right: 10px;color:#bf3531">当前状态：报名中</span>
      报名时间：2019.10.10 10:00 上课时间：2019.10.10 10:00
    </div>
  </div>
</template>

<script>
export default {
  name: 'state',
  data () {
    return {
      states: 1
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
