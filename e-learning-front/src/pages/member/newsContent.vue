<template>
  <div class="container">
    <div class="news_container">
      <div class="left">
        <div class="news_content">
          <div class="nav"><span @click="goTo">新闻首页</span> > 当前页</div>
          <div class="news_title">{{newsData.newsTitle}}</div>
          <div class="author">发布时间：{{publishTime}} 作者：{{newsData.newsAuthor}}  来源：{{newsData.newsFrom}}</div>
          <div class="news" v-html="newsData.newsContent">
            {{newsData.newsContent}}
          </div>
        </div>
      </div>
<!--      <div class="right">-->
<!--        <div class="title">最新发布</div>-->
<!--        <div class="text">2019年全国大学生英语四六级考试时间</div><div class="text">2019年全国大学生英语四六级考试时间</div><div class="text">2019年全国大学生英语四六级考试时间</div><div class="text">2019年全国大学生英语四六级考试时间</div>-->
<!--        <div class="text">2019年全国大学生英语四六级考试时间</div><div class="text">2019年全国大学生英语四六级考试时间</div><div class="text">2019年全国大学生英语四六级考试时间</div><div class="text">2019年全国大学生英语四六级考试时间</div>-->
<!--        <div><img src="../../assets/tem/e2.jpg"></div>-->
<!--        <div class="title">点击排行</div>-->
<!--        <div class="text">2019年全国大学生英语四六级考试时间</div><div class="text">2019年全国大学生英语四六级考试时间</div><div class="text">2019年全国大学生英语四六级考试时间</div><div class="text">2019年全国大学生英语四六级考试时间</div>-->
<!--        <div class="text">2019年全国大学生英语四六级考试时间</div><div class="text">2019年全国大学生英语四六级考试时间</div><div class="text">2019年全国大学生英语四六级考试时间</div><div class="text">2019年全国大学生英语四六级考试时间</div>-->
<!--        <div><img src="../../assets/tem/e2.jpg"></div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import introduce from '@/components/course/content_introduce'
import contentTime from '@/components/course/content_time'
import exam from '@/components/course/content_exam'
import catalogue from '@/components/course/content_catalogue'
import {getNewsContent} from '@/api/api'
import {dateChange} from '@/assets/js/date'
export default {
  name: 'newsContent',
  data () {
    return {
      div_show: 1,
      activeIndex1: '1',
      newsData: '',
      publishTime: ''
    }
  },
  created () {
    console.log(this.$route.params.id)
    getNewsContent(this.$route.params.id).then(res => {
      this.newsData = JSON.parse(JSON.stringify(res[0]))
      console.log(this.newsData)
      this.publishTime = dateChange(this.newsData.publishTime)
    })
  },
  methods: {
    handleSelect (key, keyPath) {
      this.div_show = key
      console.log(this.en_show)
    },
    goTo () {
      this.$router.replace('/home-news')
    }
  },
  components: {
    introduce,
    contentTime,
    exam,
    catalogue
  }
}
</script>
<style scoped>
  .container{
    width: 100%;
    min-height: 1000px;
    background-color: #f1f1f1;
    text-align: left;
  }
  .news_container{
    width: 1000px;
    min-height: 800px;
    margin: 0 auto;
    color: #6e6e6e;
    background-color: #f1f1f1;
  }
  .news_container .left {
    width: 900px;
    /*float: left;*/
    padding-top: 20px;
    min-height: 800px;
    margin: 0 auto;
    background-color: #f1f1f1;
  }
  .news_container .left .news_content {
    width: 820px;
    background-color: white;
    padding: 20px 20px;
    margin-bottom: 20px;
  }
  .news_container .left .news_content .nav{
    color: #bf3531;
    cursor: pointer;
    width: 100%;
    height: 30px;
    border-bottom: 2px solid #f1f1f1;
  }
  .news_container .left .news_content .news_title{
    width: 100%;
    height: 80px;
    overflow: hidden;
    line-height: 80px;
    font-size: 28px;
  }
  .news_container .left .news_content .author{
    height: 30px;
    border-bottom: 2px solid #f1f1f1;
  }
  .news_container .left  .news_content .news{
    width: 100%;
    min-height: 600px;
    background-color: white;
    margin-top: 20px;
    line-height: 25px;
    padding-bottom: 50px;
  }
  /*.news_container .right {*/
  /*  width: 280px;*/
  /*  min-height: 800px;*/
  /*  !*float: right;*!*/
  /*  margin-left: 920px;*/
  /*  padding-top: 20px;*/
  /*  position: fixed;*/
  /*  right: 0;*/
  /*  top: 0;*/
  /*}*/
  /*.news_container .right .title{*/
  /*  width: 100%;*/
  /*  height: 35px;*/
  /*  line-height: 35px;*/
  /*  border-left: 5px solid #bf3531;*/
  /*  font-size: 20px;*/
  /*  padding: 5px;*/
  /*  letter-spacing: 2px;*/
  /*  color: black;*/
  /*}*/
  /*.news_container .right .text{*/
  /*  width: 100%;*/
  /*  height: 35px;*/
  /*  line-height: 35px;*/
  /*  text-overflow: ellipsis;*/
  /*  white-space: nowrap;*/
  /*  overflow: hidden;*/
  /*  font-size: 14px;*/
  /*  border-bottom: 2px solid #f1f1f1;*/
  /*}*/
  /*.news_container .right img {*/
  /*  width: 100%;*/
  /*  margin-top: 20px;*/
  /*  margin-bottom: 50px;*/
  /*}*/
</style>
