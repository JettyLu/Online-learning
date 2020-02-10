<template>
  <div class="course_content">
    <div v-for="item in 12" :key="item" class="con">
      <img src="../../assets/tem/e2.jpg">
      <div class="title">德语</div>
      <div class="introduce">这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'course_English_content'
}
</script>

<style src="../../assets/css/member.css" scoped></style>
