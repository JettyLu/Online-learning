<template>
  <div class="inner">
    <div style="width: 100%;height: 30px">
      <div style="float:left;width: 40%;overflow: hidden">
        证书ID：001 证书名字
        <span style="margin-left: 20px;">会员ID：001 会员名称</span>
      </div>
      <div style="float: right">
        <el-button type="primary" plain>通过</el-button>
        <el-button type="info" plain>删除</el-button>
      </div>
    </div>
    <div>
      <span style="margin-right: 10px;color:#bf3531">考试成绩：89/（总分100分 及格60分）</span>
      考试时间：2019.10.10 0:00-24:00
      <span style="margin-right: 10px;color:#bf3531">所属课程ID：001 课程名字</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cer_wait',
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
