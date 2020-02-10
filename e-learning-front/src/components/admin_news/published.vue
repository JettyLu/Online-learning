<template>
  <div class="inner">
    <div style="float:left;width: 40%;overflow: hidden;text-overflow:ellipsis; white-space: nowrap;">ID：{{newsData.newsID}} {{newsData.newsTitle}}</div>
    <span style="margin: 10px;color:#bf3531;">发布时间：{{addTime}}</span>
    <span style="margin: 10px;">职员ID：{{newsData.staffIDnews}} {{newsData.staffUserName}}</span>
    <el-button type="info" plain style="float: right;margin-top: 5px" @click="deleteNewsClick" >删除新闻</el-button>
  </div>
</template>

<script>
import {dateChange} from '@/assets/js/date'
import {deleteNews} from '@/api/api'
export default {
  name: 'published',
  props: ['newsData'],
  data () {
    return {
      addTime: ''
    }
  },
  methods: {
    deleteNewsClick () {
      deleteNews(this.newsData.newsID).then(res => {
        // console.log(this.newsData.newsID)
        // console.log(res)
        if (res) {
          location.reload()
        }
      })
    }
  },
  created () {
    this.addTime = dateChange(this.newsData.publishTime)
  }
}
</script>

<style scoped>
  .inner{
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #f1f1f1;
  }
  .el-button{
    height: 30px;
    line-height: 5px;
  }
</style>
