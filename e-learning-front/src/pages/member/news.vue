<template>
    <div class="news_container">
      <div class="left">
        <div class="scroll_content">
          <el-carousel height="260px">
            <el-carousel-item >
              <div class="scroll_content_left">
                <div class="scroll_title">{{newsData[0].newsTitle}}</div>
                <div class="scroll_text">{{newsData[0].newsFrom}}（记者{{newsData[0].newsAuthor}}&nbsp;）{{newsData[0].newsDescription}}</div>
              </div>
              <div class="scroll_content_right"> <img src="../../assets/tem/e2.jpg"></div>
            </el-carousel-item>
            <el-carousel-item >
              <div class="scroll_content_left">
                <div class="scroll_title">{{newsData[1].newsTitle}}</div>
                <div class="scroll_text">{{newsData[1].newsFrom}}（记者{{newsData[1].newsAuthor}}&nbsp;）{{newsData[1].newsDescription}}</div>
              </div>
              <div class="scroll_content_right"><img src="../../assets/tem/e3.jpg"></div>
            </el-carousel-item>
            <el-carousel-item >
              <div class="scroll_content_left">
                <div class="scroll_title">{{newsData[2].newsTitle}}</div>
                <div class="scroll_text">{{newsData[2].newsFrom}}（记者{{newsData[2].newsAuthor}}&nbsp;）{{newsData[2].newsDescription}}</div>
              </div>
              <div class="scroll_content_right"> <img src="../../assets/tem/e1.jpg"></div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="title">基础教育</div>
        <div class="news">
          <news-item v-for="item in newsData" :key="item.newsID" :newsData="item"/>
        </div>
      </div>
      <div class="right">
        <div class="title">最新发布</div>
        <div class="text" v-for="item in news" :key="item.index">
          {{item}}
        </div>
       <div><img src="../../assets/tem/e2.jpg"></div>
        <div class="title">点击排行</div>
        <div class="text" v-for="item in news" :key="item.index">
          {{item}}
        </div>
        <div><img src="../../assets/tem/e2.jpg"></div>
      </div>
    </div>
</template>

<script>
import newsItem from '@/components/news/news_item'
import {getNewsSome} from '@/api/api'
export default {
  name: 'news',
  data () {
    return {
      newsData: '',
      news: []
    }
  },
  components: {
    newsItem
  },
  created () {
    getNewsSome().then(res => {
      this.newsData = res
      for (let i = 0; i < 10; i++) {
        this.news[i] = this.newsData[i].newsTitle
      }
    })
  },
  methods: {
  }
}
</script>

<style scoped>
  .news_container{
    width: 1200px;
    margin: 0 auto;
    color: #6e6e6e;
  }
  .news_container .left {
    width: 880px;
    float: left;
    padding-top: 10px;
    background-color: #f1f1f1;
  }
  .news_container .left .scroll_content {
    width: 840px;
    height: 260px;
    background-color: white;
    padding: 20px 20px;
    margin-bottom: 20px;
  }
  .scroll_content_left{
    float: left;
    width: 400px;
    height: 260px;
    line-height: 35px;
  }
  .scroll_title {
    width: 400px;
    height: 80px;
    font-size: 20px;
    border-bottom: 2px solid #f1f1f1;
    line-height: 35px;
    overflow: hidden;
  }
  .scroll_text {
    width: 400px;
    height: 150px;
    padding-top: 30px;
    font-size: 14px;
    line-height: 25px;
    overflow: hidden;
  }
  .scroll_content_right{
    width: 400px;
    height: 260px;
    margin-left: 440px;
  }
  .scroll_content_right img{
    width: 400px;
    height: 260px;
  }
  .news_container .left  .news{
    width: 100%;
    background-color: white;
    margin-top: 20px;
  }
  .news_container .right {
    width: 280px;
    height: 200px;
    margin-left: 920px;
    padding-top: 10px;
    background-color: #f1f1f1;
  }
  .title{
    width: 100%;
    height: 35px;
    line-height: 35px;
    border-left: 5px solid #bf3531;
    font-size: 20px;
    padding: 5px;
    letter-spacing: 2px;
    color: black;
    background-color: white;
  }
  .news_container .right .text{
    width: 100%;
    height: 35px;
    line-height: 35px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 14px;
    background-color: white;
    border-bottom: 2px solid #f1f1f1;
  }
  .news_container .right img {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 50px;
  }

</style>
