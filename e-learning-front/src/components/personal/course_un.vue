<template>
  <div class="personal_item">
    <div class="personal_item_left">
    <div>课程名称: 六级英语入门</div>
    <div>报名时间: 2019.10.10 20:00</div>
    <div>上课时间: 2019.10.10-2019.12.10</div>
    <div>考试时间: 2019.12.15 0:00-24:00</div>
    </div>
    <el-button  type="warning" plain>未开课</el-button>
  </div>
</template>

<script>
export default {
  name: 'course_un'
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
