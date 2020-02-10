<template>
    <div>
      <div class="staff_title">发布新课程</div>
      <div class="staff_item_container">
        <el-form ref="form" :model="form" label-width="80px" >
          <el-form-item label="课程名称">
            <el-input v-model="form.name" maxlength="20" show-word-limit></el-input>
          </el-form-item>

          <el-form-item label="课程种类">
            <el-select v-model="form.cType" placeholder="请选择课程种类">
              <el-option label="英语" value="英语"></el-option>
              <el-option label="德语" value="德语"></el-option>
              <el-option label="日语" value="日语"></el-option>
              <el-option label="法语" value="法语"></el-option>
              <el-option label="韩语" value="韩语"></el-option>
              <el-option label="阿拉伯语" value="阿拉伯语"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="课程等级">
            <el-select v-model="form.permission" placeholder="请选择课程等级">
              <el-option label="初级会员" value="初级会员"></el-option>
              <el-option label="中级会员" value="中级会员"></el-option>
              <el-option label="高级会员" value="高级会员"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="报名时间">
            <el-col :span="5">
              <el-date-picker type="date" placeholder="选择日期" v-model="date1_enter" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="1">&nbsp;</el-col>
            <el-col :span="2">
             0:00
            </el-col>
            <el-col class="line" :span="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;至</el-col>
            <el-col :span="5">
              <el-date-picker type="date" placeholder="选择日期" v-model="date2_enter" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="1">&nbsp;</el-col>
            <el-col :span="2">
             0:00
            </el-col>
          </el-form-item>

          <el-form-item label="上课时间">
            <el-col :span="5">
              <el-date-picker type="date" placeholder="选择日期" v-model="date1_class" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="1">&nbsp;</el-col>
            <el-col :span="2">
             0:00
            </el-col>
            <el-col class="line" :span="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;至</el-col>
            <el-col :span="5">
              <el-date-picker type="date" placeholder="选择日期" v-model="date2_class" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="1">&nbsp;</el-col>
            <el-col :span="2">
              0:00
            </el-col>
          </el-form-item>

          <el-form-item label="考试时间">
            <el-col :span="5">
              <el-date-picker type="date" placeholder="选择日期" v-model="date_exam1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="1">&nbsp;</el-col>
            <el-col :span="2">
              0:00
            </el-col>
            <el-col class="line" :span="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;至</el-col>
            <el-col :span="5">
              <el-date-picker type="date" placeholder="选择日期" v-model="date_exam2" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="1">&nbsp;</el-col>
            <el-col :span="2">
              0:00
            </el-col>
          </el-form-item>

          <el-form-item label="即时推送">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>

          <el-form-item label="课程标签">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="入门" name="type"></el-checkbox>
              <el-checkbox label="基础" name="type"></el-checkbox>
              <el-checkbox label="进阶" name="type"></el-checkbox>
              <el-checkbox label="高级" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item label="课程简介">
            <el-input type="textarea" v-model="form.introduce" maxlength="200" show-word-limit></el-input>
          </el-form-item>

          <el-form-item label="课程图片" style="height: 130px">
            <input type="file" value="" @change="upLoadImg" style="width: 50%"/><br><span style="color:#bf3531;">本地图片上传成功后，将弹出链接，复制链接填入下面链接框。也可直接填入外部链接。</span>
            <el-input type="textarea" v-model="form.course_img" maxlength="500" show-word-limit style="width: 80%;margin-left: 20px"></el-input>
          </el-form-item>

          <el-form-item label="课程资源" style="color:#bf3531;">
            本地资源上传成功后，将弹出链接，复制链接填入下面链接框。也可直接填入外部链接.
          </el-form-item>
          <el-form-item label="资源1" style="height: 250px">
            标题：<el-input v-model="res1.res_title" maxlength="20" show-word-limit style="width: 50%"></el-input><br>
            视频：<input type="file" id="v1"  @change="upLoadVideo" style="width: 50%"/><br>链接输入框<el-input type="textarea" v-model="res1.res_video" maxlength="500" style="width: 80%;margin-left: 20px" show-word-limit></el-input><br>
            文件：<input type="file" id="d1"  @change="upLoadDoc" style="width: 50%"/><br>链接输入框<el-input type="textarea" v-model="res1.res_doc" maxlength="500" style="width: 80%;margin-left: 20px" show-word-limit></el-input>
          </el-form-item>
          <el-form-item label="资源2" style="height: 250px">
            标题：<el-input v-model="res2.res_title" maxlength="20" show-word-limit style="width: 50%"></el-input><br>
            视频：<input type="file" id="v2"  @change="upLoadVideo" style="width: 50%"/><br>链接输入框<el-input type="textarea" v-model="res2.res_video" maxlength="500" style="width: 80%;margin-left: 20px" show-word-limit></el-input><br>
            文件：<input type="file" id="d2"  @change="upLoadDoc" style="width: 50%"/><br>链接输入框<el-input type="textarea" v-model="res2.res_doc" maxlength="500" style="width: 80%;margin-left: 20px" show-word-limit></el-input>
          </el-form-item>
          <el-form-item label="资源3" style="height: 250px">
            标题：<el-input v-model="res3.res_title" maxlength="20" show-word-limit style="width: 50%"></el-input><br>
            视频：<input type="file" id="v3"  @change="upLoadVideo" style="width: 50%"/><br>链接输入框<el-input type="textarea" v-model="res3.res_video" maxlength="500" style="width: 80%;margin-left: 20px" show-word-limit></el-input><br>
            文件：<input type="file" id="d3"  @change="upLoadDoc" style="width: 50%"/><br>链接输入框<el-input type="textarea" v-model="res3.res_doc" maxlength="500" style="width: 80%;margin-left: 20px" show-word-limit></el-input>
          </el-form-item>
        </el-form>
      </div>
<!--      <span style="margin: 5px">课程图片</span><input type="file" id="front" @change="upLoad"/>-->
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
<!--      <video :src="img" controls="controls"/>-->
    </div>
</template>

<script>
import {addCourse, addResource} from '@/api/api'
import {apiURL} from '@/api/apiURL'
export default {
  name: 'course_add',
  data () {
    return {
      date1_enter: '',
      date2_enter: '',
      date1_class: '',
      date2_class: '',
      date_exam1: '',
      date_exam2: '',
      form: {
        name: '',
        cType: '',
        permission: '',
        date1_enter: '',
        date2_enter: '',
        date1_class: '',
        date2_class: '',
        date_exam1: '',
        date_exam2: '',
        introduce: '',
        delivery: false,
        type: [],
        course_img: ''
      },
      res1: {
        res_id: 1,
        res_title: '',
        res_video: '',
        res_doc: ''
      },
      res2: {
        res_id: 2,
        res_title: '',
        res_video: '',
        res_doc: ''
      },
      res3: {
        res_id: 3,
        res_title: '',
        res_video: '',
        res_doc: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      // let enter1 = this.date1_enter
      // let enter2 = this.date2_enter
      // let class1 = this.date1_class
      // let class2 = this.date2_class
      // let exam1 = this.date_exam1
      // let exam2 = this.date_exam2
      this.form.date1_enter = this.date1_enter
      this.form.date2_enter = this.date2_enter
      this.form.date1_class = this.date1_class
      this.form.date2_class = this.date2_class
      this.form.date_exam1 = this.date_exam1
      this.form.date_exam2 = this.date_exam1
      addCourse(this.form).then(res => {
        if (res) {
          console.log(res)
          addResource(res, this.res1)
          addResource(res, this.res2)
          addResource(res, this.res3)
        }
      })
    },
    async upLoadImg (e) {
      let photoFile = e.target
      let fileExt = photoFile.files[0].name.substring(photoFile.files[0].name.lastIndexOf('.')).toLowerCase()
      let types = '.jpg,.jpeg,.png,.gif' // 文件格式
      let result = types.indexOf(fileExt)
      if (result < 0) { // 验证图片格式
        alert('图片格式不对')
        return false
      }
      apiURL(photoFile.files[0])
      // this.form.course_img = await apiURL(photoFile.files[0])
    },
    upLoadVideo (e) {
      let photoFile = e.target
      // let id = e.target.id
      let fileExt = photoFile.files[0].name.substring(photoFile.files[0].name.lastIndexOf('.')).toLowerCase()
      let types = '.mp4,.avi,.png,.gif' // 文件格式
      let result = types.indexOf(fileExt)
      if (result < 0) { // 验证图片格式
        alert('视频格式不对')
        return false
      }
      apiURL(photoFile.files[0])
    },
    upLoadDoc (e) {
      let photoFile = e.target
      // let id = e.target.id
      let fileExt = photoFile.files[0].name.substring(photoFile.files[0].name.lastIndexOf('.')).toLowerCase()
      let types = '.doc,.docx,.pdf,.ppt,.pptx' // 文件格式
      let result = types.indexOf(fileExt)
      if (result < 0) { // 验证图片格式
        alert('文件格式不对')
        return false
      }
      apiURL(photoFile.files[0])
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
  min-height: 1500px;
}
  .el-form-item{
    height: 30px;
    margin: 30px 0;
  }
</style>
