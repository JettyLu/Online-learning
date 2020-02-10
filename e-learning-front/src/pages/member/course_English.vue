<template>
    <div>
      <el-menu
        :default-active="activeIndex1"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="white"
        text-color="#000"
        active-text-color="#bf3531">
       <el-menu-item index="1" >全部</el-menu-item>
       <el-menu-item index="2">初级会员</el-menu-item>
       <el-menu-item index="3" >中级会员</el-menu-item>
       <el-menu-item index="4">高级会员</el-menu-item>
      </el-menu>
      <all v-if="en_show == 1"/>
      <primary v-if="en_show == 2"/>
      <inter v-if="en_show == 3"/>
      <advanced v-if="en_show == 4"/>
    </div>
</template>

<script>
import all from '@/components/course/course_English_all'
import primary from '@/components/course/course_English_primary'
import inter from '@/components/course/course_English_inter'
import advanced from '@/components/course/course_English_advanced'
export default {
  name: 'course_English',
  data () {
    return {
      en_show: 1,
      activeIndex1: '1'
      // activeIndex2: '1',
      // activeIndex3: '1',
      // activeIndex4: '1'

    }
  },
  mounted () {
  },
  methods: {
    handleSelect (key, keyPath) {
      this.en_show = key
      console.log(this.en_show)
    }
  },
  components: {
    all,
    primary,
    inter,
    advanced
  }
}
</script>

<style scoped>
.el-menu{
  width: 600px;
  margin: 0 auto;
}
.el-menu-item{
  width: 25%;
  text-align: center;
}
</style>
