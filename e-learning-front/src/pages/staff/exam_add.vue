<template>
    <div style="min-height: 1000px">
      <div class="staff_title">发布新考试</div>
      <div class="staff_item_container">
        <el-form ref="form" :model="form" label-width="100px"  style="text-align: left">
          <el-form-item label="所属课程ID">
            <el-input v-model="form.course_id" maxlength="5" show-word-limit type="number" style="width: 200px"></el-input>
          </el-form-item>
          <el-form-item label="试卷标题">
            <el-input v-model="form.exam_title" maxlength="20" show-word-limit  style="width: 400px"></el-input>
          </el-form-item>
          <el-form-item label="试卷总分">
            <el-input v-model="form.exam_score" maxlength="5" show-word-limit type="number" style="width: 200px;margin-right: 10px"></el-input>分
          </el-form-item>
          <el-form-item label="考试时长">
            <el-input v-model="form.exam_time" maxlength="5" show-word-limit type="number" style="width: 200px;margin-right: 10px"></el-input>
            分钟
          </el-form-item>
          <el-form-item label="选择题" style="height: 100px">
            数量:<el-input v-model="form.choose_num" maxlength="5" show-word-limit type="number" style="width: 200px;margin: 0 10px"></el-input>
            分值:<el-input v-model="form.choose_score" maxlength="5" show-word-limit type="number" style="width: 200px;margin: 0 10px"></el-input>/题<br>
            <span style="color: #bf3531">选择题答案：（以英文逗号分隔，如A,B,C,D）</span><br>
            <el-input v-model="form.choose_answer" maxlength="100" show-word-limit></el-input>
            </el-form-item>
<!--          <el-form-item label="填空题">-->
<!--            数量:<el-input v-model="form.name" maxlength="5" show-word-limit type="number"  style="width: 200px;margin: 0 10px"></el-input>-->
<!--            分值:<el-input v-model="form.name" maxlength="5" show-word-limit type="number"  style="width: 200px;margin: 0 10px"></el-input>/题-->
<!--          </el-form-item>-->
          <el-form-item label="试题内容">
          </el-form-item>
          <editors @editorContent="editorContent"/>
        </el-form>
      </div>
      <el-button type="primary" @click="onSubmit" style="float: right;margin-top: 20px">发布</el-button>
    </div>
</template>

<script>
import editors from '@/components/wangedit'
import {addExam} from '@/api/api'

export default {
  name: 'exam_add',
  data () {
    return {
      form: {
        course_id: '',
        exam_title: '',
        exam_score: '',
        exam_time: '',
        choose_num: '',
        choose_score: '',
        choose_answer: '',
        exam_content: ''
      }
    }
  },
  components: {
    editors
  },
  methods: {
    editorContent (val) {
      this.form.exam_content = val
    },
    onSubmit () {
      addExam(this.form).then(res => {
        if (res) {
          this.form.course_id = ''
          this.form.exam_title = ''
          this.form.exam_score = ''
          this.form.exam_time = ''
          this.form.choose_num = ''
          this.form.choose_score = ''
          this.form.choose_answer = ''
          this.form.exam_content = ''
        }
      })
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
  min-height: 800px;
}
  .el-form-item{
    height: 30px;
    margin: 30px 0;
  }
</style>
