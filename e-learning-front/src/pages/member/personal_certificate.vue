<template>
  <div>
    <div class="personal_title">我的证书</div>
    <div class="person_item_container">
      <certificate v-for="item in myData" :key="item.certificateID" :myData="item"/>
    </div>
  </div>
</template>

<script>
import certificate from '@/components/personal/certificate'
import {getMyClass, getCertificateContent} from '@/api/api'
export default {
  name: 'personal_certificate',
  data () {
    return {
      myData: []
    }
  },
  components: {
    certificate
  },
  created () {
    getMyClass(0).then(res => {
      if (res) {
        for (var j = 0; j < res.length; j++) {
          getCertificateContent(res[j].courseID).then(result => {
            if (result) {
              this.myData.push(JSON.parse(JSON.stringify(result[0])))
            }
          })
        }
      }
      console.log(this.myData)
    })
  }
}
</script>
<style scoped src="../../assets/css/member.css"></style>
