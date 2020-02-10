<template>
  <div class="news_item">
    <div class="news_title" @click="goTo">{{newsData.newsTitle}}</div>
    <div class="news_text">{{newsData.newsDescription}}</div>
    <div class="news_detail">作者：{{newsData.newsAuthor}}&nbsp;&nbsp;&nbsp;&nbsp;来源：{{newsData.newsFrom}}&nbsp;&nbsp;&nbsp;&nbsp;发布时间：{{publishTime}}</div>
  </div>
</template>

<script>
import {dateChange} from '@/assets/js/date'
export default {
  name: 'news_item',
  props: ['newsData'],
  data () {
    return {
      publishTime: ''
    }
  },
  methods: {
    goTo () {
      this.$router.push({
        path: '/news-content',
        name: 'newsContent',
        params: {id: this.newsData.newsID}
      })
    }
  },
  created () {
    this.publishTime = dateChange(this.newsData.publishTime)
  }
}
</script>

<style scoped>
  .news_item{
    width: 98%;
    padding: 10px 1%;
    height: 120px;
    border-bottom: 2px solid #f1f1f1;
    margin-bottom: 20px;
    cursor: pointer;
  }
  .news_item .news_title{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 18px;
    width: 98%;
    height: 35px;
    line-height: 30px;
  }
  .news_item .news_text{
    width: 98%;
    height: 60px;
    overflow: hidden;
    font-size: 14px;
    line-height: 20px;
  }
  .news_item .news_detail{
    width:98%;
    height: 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 12px;
    margin-top: 5px;
    color: gray;
  }
</style>
