<template>
  <div class="inner">
    <div style="width: 100%;height: 30px">
      <div style="float:left;width: 40%;overflow: hidden">证书ID：001 证书名字</div>
      <div style="float: right">
        <el-button type="info" plain>删除</el-button>
      </div>
    </div>
    <div>会员ID：001 会员名称</div>
    <div>审核职员ID：001 审核职员名称</div>
    <div>考试成绩：89/（总分100分 及格60分）</div>
     <div>所属课程ID：001 课程名字</div>
    <div>审核时间：2019.10.10 0:00-24:00</div>
    <div>考试时间：2019.10.10 0:00-24:00</div>
  </div>
</template>

<script>
export default {
  name: 'cer_all',
  data () {
    return {
      states: 1
    }
  }
}
</script>

<style scoped>
  .inner{
    height: 210px;
    margin-top: 5px;
    line-height: 30px;
    border-bottom: 1px solid #bf3531;
  }
  .el-button{
    height: 30px;
    line-height: 5px;
  }
</style>
