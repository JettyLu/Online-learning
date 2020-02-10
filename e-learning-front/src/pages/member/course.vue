<template>
  <div class="container">
<!--    轮播图-->
    <div class="img">
        <el-carousel height="300px">
          <el-carousel-item v-for="item in img" :key="item">
            <img :src="item">
          </el-carousel-item>
        </el-carousel>
    </div>
    <div class="nav">
      <router-link to="/home-course/home-course-English"><img :src="English[$route.name]"></router-link>
      <router-link to="/home-course/home-course-French"><img :src="French[$route.name]"></router-link>
      <router-link to="/home-course/home-course-German"><img :src="German[$route.name]"></router-link>
      <router-link to="/home-course/home-course-Japanese"><img :src="Japanese[$route.name]"></router-link>
      <router-link to="/home-course/home-course-Korean"><img :src="Korean[$route.name]"></router-link>
      <router-link to="/home-course/home-course-Arabic"><img :src="Arabic[$route.name]"></router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {English, Arabic, German, Korean, Japanese, French} from '@/assets/js/data'
export default {
  name: 'course',
  data () {
    return {
      img: {
        img1: require('@/assets/img/home_bg4.jpg'),
        img2: require('@/assets/img/home_bg5.jpg'),
        img3: require('@/assets/img/home_bg.jpg'),
        img4: require('@/assets/img/home_bg3.jpg')
      },
      English: English,
      Arabic: Arabic,
      German: German,
      Korean: Korean,
      Japanese: Japanese,
      French: French
    }
  },
  mounted () {
    console.log(this.$route.name)
  }
}
</script>

<style scoped>
.container{
  position: relative;
}
.img{
  width: 100%;
  height: 300px;
  text-align: center;
}
.nav{
  width: 900px;
  z-index: 10;
  height: 130px;
  position: absolute;
  top: 220px;
  left: 50%;
  transform: translate(-50%, 0);
}
.nav img{
  width: 150px;
  margin: 0 -2px;
}
.el-carousel__item img {
  /*color: #475669;*/
  /*font-size: 14px;*/
  /*opacity: 0.75;*/
  /*line-height: 150px;*/
  /*margin: 0;*/
  width: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
  .content{
    width: 1200px;
    margin: 0 auto;
    padding-top: 80px;
  }
</style>
