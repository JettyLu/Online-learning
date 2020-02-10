<template>
    <div style="min-height: 900px">
      <div class="staff_title">发布新新闻</div>
      <div class="staff_item_container">
        <el-form ref="form" :model="form" label-width="80px" >
          <el-form-item label="新闻标题">
            <el-input v-model="form.newsTitle" maxlength="30" show-word-limit></el-input>
          </el-form-item>
          <el-form-item label="作者">
            <el-input v-model="form.newsAuthor" maxlength="20" show-word-limit></el-input>
          </el-form-item>
          <el-form-item label="来源">
            <el-input v-model="form.newsFrom" maxlength="20" show-word-limit></el-input>
          </el-form-item>
          <el-form-item label="新闻摘要">
            <el-input type="textarea" v-model="form.newsDescription" maxlength="2000" show-word-limit></el-input>
          </el-form-item>

          <el-form-item label="新闻内容">
          </el-form-item>
          <editors @editorContent="editorContent"/>
        </el-form>
      </div>
      <el-button type="primary" @click="onSubmit" style="float: right;margin-top: 10px;z-index: 10">发布</el-button>
<!--      <span style="margin: 5px">课程图片</span><input type="file" id="front" @change="upLoad"/>-->
<!--      <el-button>取消</el-button>-->
    </div>
</template>

<script>
import editors from '@/components/wangedit'
import {addNews} from '@/api/api'
export default {
  name: 'news_add',
  data () {
    return {
      form: {
        newsTitle: '',
        newsContent: '',
        newsFrom: '',
        newsAuthor: '',
        newsDescription: ''
      }
    }
  },
  components: {
    editors
  },
  methods: {
    editorContent (val) {
      this.form.newsContent = val
    },
    onSubmit () {
      addNews(this.form).then(res => {
        if (res) {
          this.form.newsTitle = ''
          this.form.newsContent = ''
          this.form.newsFrom = ''
          this.form.newsAuthor = ''
          this.form.newsDescription = ''
        }
      })
      console.log('submit!')
    },
    upLoad (e) {
      let photoFile = e.target
      let val = e.target.value
      let id = e.target.id
      let file = photoFile.files[0]
      console.log(val)
      let name = file.name
      let size = file.size
      let types = '.jpg,.jpeg,.png,.gif' // 文件格式
      let fileExt = name.substring(name.lastIndexOf('.')).toLowerCase()
      let result = types.indexOf(fileExt)
      if (result < 0) { // 验证图片格式
        // alertshow('图片格式不对')
        return false
      }
      if (size > 5 * 1024 * 1024) {
        // alertshow('图片大小不能大于5M')
        return false
      }
      this.form.course_img = photoFile.files[0]
      if (id === 'front') {
        // this.front_image = photoFile.files[0]
        // this.front_img = window.URL.createObjectURL(e.target.files[0]) // 将用户选择的图片显示在页面上
      }
      if (id === 'behind') {
        // this.behind_image = photoFile.files[0]
        // this.behind_img = window.URL.createObjectURL(e.target.files[0])
      }
    },
    load (e) {
      let files = e.target
      let val = e.target.value
      // let id = e.target.id
      let file = files.files[0]
      console.log(val)
      let name = file.name
      let size = file.size
      let types = '.doc,.docx,.pdf' // 文件格式
      let fileExt = name.substring(name.lastIndexOf('.')).toLowerCase()
      let result = types.indexOf(fileExt)
      if (result < 0) { // 验证图片格式
        // alertshow('图片格式不对')
        return false
      }
      if (size > 10 * 1024 * 1024) {
        // alertshow('图片大小不能大于5M')
        return false
      }
    }
  }
}
</script>

<style scoped>
.staff_title{
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom: 2px solid #afb0b4;
  font-size: 22px;
  margin-bottom: 20px;
}
.staff_item_container{
  width: 100%;
  line-height: 30px;
  height: 700px;
}
  .el-form-item{
    height: 30px;
    margin: 30px 0;
  }
</style>
