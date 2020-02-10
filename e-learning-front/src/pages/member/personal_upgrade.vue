<template>
  <div class="person_item_container">
    <div class="personal_title">升级会员</div>
    <div><span class="mine">我的会员等级：中级会员</span>到期时间：2020.01.10</div>
    <div>
      <div class="slider">
        <div>中级会员：500元/月</div>
        <el-slider
          v-model="value1"
          :step="1"
          :max="12"
          :min="0"
          show-input>
        </el-slider>
        <el-button type="danger" plain>升级会员</el-button>
      </div>
      <div class="behind">个月</div>
      <div class="slider">
        <div>高级会员：1000元/月</div>
        <el-slider
          v-model="value2"
          :step="1"
          :max="12"
          :min="0"
          show-input>
        </el-slider>
        <el-button type="danger" plain>升级会员</el-button>
      </div>
      <div class="behind">个月</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'personal_upgrade',
  data () {
    return {
      value1: 0,
      value2: 0
    }
  }
}
</script>
<style scoped src="../../assets/css/member.css"></style>
<style scoped>
.slider{
  width: 90%;
  height: 80px;
  margin-top: 30px;
  float: left;
}
.el-slider{
  width: 90%;
}
  .behind{
    height: 110px;
    line-height: 150px;
  }
  .mine{
    font-size: 20px;
    margin-bottom: 20px;
    margin-right: 20px;
  }
</style>
