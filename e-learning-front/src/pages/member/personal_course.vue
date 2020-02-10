<template>
  <div class="person_item_container">
  <div class="personal_title">我的课程</div>
  <course-ing v-for="item in myClassData" :key="item.index" :myClassData="item"/>
  <course-ed v-for="item in myClassData2" :key="item.index" :myClassData="item"/>
</div>
</template>

<script>
import courseUn from '@/components/personal/course_un'
import courseIng from '@/components/personal/course_ing'
import courseEd from '@/components/personal/course_ed'
import {getMyClass, getCoursesContent} from '@/api/api'

export default {
  name: 'personal_course',
  data () {
    return {
      myClassData: [], // 未结课
      myClassData2: [] // 已结课
    }
  },
  created () {
    getMyClass(1).then(res => {
      if (res) {
        for (var i = 0; i < res.length; i++) {
          getCoursesContent(res[i].courseID).then(result => {
            if (result) {
              this.myClassData.push(JSON.parse(JSON.stringify(result[0])))
            }
          })
        }
      }
    })
    getMyClass(0).then(res2 => {
      if (res2) {
        for (var j = 0; j < res2.length; j++) {
          getCoursesContent(res2[j].courseID).then(result2 => {
            if (result2) {
              this.myClassData2.push(JSON.parse(JSON.stringify(result2[0])))
            }
          })
        }
      }
      console.log(this.myClassData2)
    })
  },
  components: {
    courseUn,
    courseIng,
    courseEd
  }
}
</script>
<style scoped src="../../assets/css/member.css"></style>
