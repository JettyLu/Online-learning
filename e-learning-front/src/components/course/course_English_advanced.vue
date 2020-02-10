<template>
  <div class="course_content">
    <div v-for="item in course" :key="item.courseID" class="con" @click="goTo(item.courseID)">
      <img :src="item.imgURL">
      <div class="title">{{item.courseName}}</div>
      <div class="introduce">{{item.introduction}}</div>
    </div>
  </div>
</template>

<script>
import {getCourses2} from '@/api/api'
export default {
  name: 'course_English_content',
  data () {
    return {
      course: ''
    }
  },
  methods: {
    goTo (id) {
      this.$router.push({
        path: '/course-content',
        name: 'courseContent',
        params: {id: id}
      })
    }
  },
  created () {
    getCourses2().then(res => {
      console.log(res)
      this.course = res
    })
  }
}
</script>
<style src="../../assets/css/member.css" scoped></style>
