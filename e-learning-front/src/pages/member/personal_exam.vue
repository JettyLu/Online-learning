<template>
  <div class="person_item_container">
    <div class="personal_title">我的考试</div>
    <exam-ing v-for="item in myExamData" :key="item.examID" :myExamData="item" />
    <exam-ed v-for="item in myExamData2" :key="item.examID" :myExamData="item" />
  </div>
</template>

<script>
import examUn from '@/components/personal/exam_un'
import examIng from '@/components/personal/exam_ing'
import examEd from '@/components/personal/exam_ed'
import {getMyClass, getExamContent} from '@/api/api'
export default {
  name: 'personal_exam',
  data () {
    return {
      myExamData: [],
      myExamData2: []
    }
  },
  created () {
    getMyClass(1).then(res => {
      if (res) {
        for (var i = 0; i < res.length; i++) {
          getExamContent(res[i].courseID).then(result => {
            if (result) {
              this.myExamData.push(result[0])
            }
          })
        }
      }
      // console.log(this.myExamData)
    })
    getMyClass(0).then(res2 => {
      if (res2) {
        for (var j = 0; j < res2.length; j++) {
          getExamContent(res2[j].courseID).then(result2 => {
            if (result2) {
              this.myExamData2.push(result2[0])
            }
          })
        }
      }
      // console.log(this.myExamData)
    })
  },
  components: {
    examUn,
    examIng,
    examEd
  }
}
</script>

<style scoped src="../../assets/css/member.css"></style>
