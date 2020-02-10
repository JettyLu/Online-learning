<template>
  <div class="container">
    <div class="news_container">
      <div class="left">
        <div class="news_content">
          <div class="nav"><span @click="goTo">个人中心</span> > 当前页</div>
          <div class="news_title">{{myExam.examTitle}}</div>
          <div class="author">总分：100分 考试时长：30分钟 <span style="margin-left: 58%;color:#bf3531;font-size: 18px">计时：{{hour}}:{{minutes}}:{{seconds}}</span></div>
            <div class="news" >
            <div v-if="show" v-html="myExam.examContent">{{myExam.examContent}}</div>
            <div v-if="answerShow" style="color:#bf3531;">正确答案：{{answer}}</div>
            <el-button  v-if="!show" style="margin:100px 0 0 45%" @click="start">开始考试</el-button>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="title">答题卡</div>
        <div class="text">
          <p>第一题</p>
          <div>
            <el-radio v-model="myAnswer[0]" label="A">A</el-radio>
            <el-radio v-model="myAnswer[0]" label="B">B</el-radio>
            <el-radio v-model="myAnswer[0]" label="C">C</el-radio>
            <el-radio v-model="myAnswer[0]" label="D">D</el-radio>
          </div>
        </div>
        <div class="text">
          <p>第二题</p>
          <div>
            <el-radio v-model="myAnswer[1]" label="A">A</el-radio>
            <el-radio v-model="myAnswer[1]" label="B">B</el-radio>
            <el-radio v-model="myAnswer[1]" label="C">C</el-radio>
            <el-radio v-model="myAnswer[1]" label="D">D</el-radio>
          </div>
        </div>
        <div class="text">
          <p>第三题</p>
          <div>
            <el-radio v-model="myAnswer[2]" label="A">A</el-radio>
            <el-radio v-model="myAnswer[2]" label="B">B</el-radio>
            <el-radio v-model="myAnswer[2]" label="C">C</el-radio>
            <el-radio v-model="myAnswer[2]" label="D">D</el-radio>
          </div>
        </div>
        <div class="text">
          <p>第四题</p>
          <div>
            <el-radio v-model="myAnswer[3]" label="A">A</el-radio>
            <el-radio v-model="myAnswer[3]" label="B">B</el-radio>
            <el-radio v-model="myAnswer[3]" label="C">C</el-radio>
            <el-radio v-model="myAnswer[3]" label="D">D</el-radio>
          </div>
        </div>
        <div class="text">
          <p>第五题</p>
          <div>
            <el-radio v-model="myAnswer[4]" label="A">A</el-radio>
            <el-radio v-model="myAnswer[4]" label="B">B</el-radio>
            <el-radio v-model="myAnswer[4]" label="C">C</el-radio>
            <el-radio v-model="myAnswer[4]" label="D">D</el-radio>
          </div>
        </div>
        <div class="text">
          <p>第六题</p>
          <div>
            <el-radio v-model="myAnswer[5]" label="A">A</el-radio>
            <el-radio v-model="myAnswer[5]" label="B">B</el-radio>
            <el-radio v-model="myAnswer[5]" label="C">C</el-radio>
            <el-radio v-model="myAnswer[5]" label="D">D</el-radio>
          </div>
        </div>
        <div class="text">
          <p>第七题</p>
          <div>
            <el-radio v-model="myAnswer[6]" label="A">A</el-radio>
            <el-radio v-model="myAnswer[6]" label="B">B</el-radio>
            <el-radio v-model="myAnswer[6]" label="C">C</el-radio>
            <el-radio v-model="myAnswer[6]" label="D">D</el-radio>
          </div>
        </div>
        <div class="text">
          <p>第八题</p>
          <div>
            <el-radio v-model="myAnswer[7]" label="A">A</el-radio>
            <el-radio v-model="myAnswer[7]" label="B">B</el-radio>
            <el-radio v-model="myAnswer[7]" label="C">C</el-radio>
            <el-radio v-model="myAnswer[7]" label="D">D</el-radio>
          </div>
        </div>
        <div class="text">
          <p>第九题</p>
          <div>
            <el-radio v-model="myAnswer[8]" label="A">A</el-radio>
            <el-radio v-model="myAnswer[8]" label="B">B</el-radio>
            <el-radio v-model="myAnswer[8]" label="C">C</el-radio>
            <el-radio v-model="myAnswer[8]" label="D">D</el-radio>
          </div>
        </div>
        <div class="text">
          <p>第十题</p>
          <div>
            <el-radio v-model="myAnswer[9]" label="A">A</el-radio>
            <el-radio v-model="myAnswer[9]" label="B">B</el-radio>
            <el-radio v-model="myAnswer[9]" label="C">C</el-radio>
            <el-radio v-model="myAnswer[9]" label="D">D</el-radio>
          </div>
        </div>
        <div style="text-align: center;margin: 10px">
          <el-button @click="submitExam" v-if="butShow">提交答案</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import introduce from '@/components/course/content_introduce'
import contentTime from '@/components/course/content_time'
import exam from '@/components/course/content_exam'
import catalogue from '@/components/course/content_catalogue'
import {updateAttend, addCertificate} from '@/api/api'
// import {dateChange} from '@/assets/js/date'
export default {
  name: 'newsContent',
  data () {
    return {
      div_show: 1,
      show: false,
      butShow: false,
      answerShow: false,
      activeIndex1: '1',
      newsData: '',
      publishTime: '',
      myAnswer: [10],
      hour: 0,
      minutes: 30,
      seconds: 0,
      myExam: '',
      answer: ''
    }
  },
  created () {
    this.myExam = this.$route.params.examData
    this.answer = this.myExam.chooseAnswer.split(',')
    console.log(this.answer)
    // getNewsContent(this.$route.params.id).then(res => {
    //   this.newsData = JSON.parse(JSON.stringify(res[0]))
    //   console.log(this.newsData)
    //   this.publishTime = dateChange(this.newsData.publishTime)
    // })
  },
  methods: {
    start (e) {
      this.butShow = true
      this.show = true
      this.timer()
      e.target.disabled = true
    },
    handleSelect (key, keyPath) {
      this.div_show = key
      console.log(this.en_show)
    },
    goTo () {
      this.$router.replace('/home-personal/home-personal-exam')
    },
    submitExam () {
      // eslint-disable-next-line no-unused-vars
      let all = this.myExam.score
      let title = this.myExam.examTitle + '结课证书'
      let count = 0
      let score = 0
      let content = ''
      for (let i = 0; i < 10; i++) {
        // eslint-disable-next-line no-undef,eqeqeq
        if (this.myAnswer[i] === this.answer[i]) {
          count++
        }
      }
      score = count * this.myExam.chooseScore
      if (score < all * 0.6) {
        content = '不及格'
      } else if ((score > all * 0.6 || score === all * 0.6) && score < all * 0.7) {
        content = '及格'
      } else if ((score > all * 0.7 || score === all * 0.7) && score < all * 0.8) {
        content = '中等'
      } else if ((score > all * 0.8 || score === all * 0.8) && score < all * 0.9) {
        content = '良好'
      } else if (score > all * 0.9 || score === all * 0.9) {
        content = '优秀'
      }
      addCertificate(score, title, content, this.myExam.courseIDexam).then(res => {
        if (res) {
          console.log(res)
          updateAttend(this.myExam.courseIDexam, res, score, 0).then(result => {
            if (result) {
              this.answerShow = true
              this.butShow = false
            }
          })
        }
      })
    },
    timer () {
      let _this = this
      // 创建一个定时器
      let time = window.setInterval(function () {
        // 如果秒数为0 && 分钟数还没有为0
        if (_this.seconds === 0 && _this.minutes !== 0) {
          // 秒数变为59  分钟数--
          _this.seconds = 59
          _this.minutes -= 1
          // 都为0的时候 清除定时器
        } else if (_this.minutes === 0 && _this.seconds === 0 && _this.hour === 0) {
          window.clearInterval(time)
          this.submitExam()
          // 分钟数和秒数同时为0  小时数--  分钟数和秒数都变为59
        } else if (_this.minutes === 0 && _this.seconds === 0) {
          _this.seconds = 59
          _this.minutes = 59
          _this.hour -= 1
        } else {
          _this.seconds -= 1
        }
      }, 1000)
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
    padding-top: 20px;
  }
  .news_container{
    width: 1000px;
    min-height: 800px;
    margin: 0 auto;
    color: #6e6e6e;
    background-color: #f1f1f1;
  }
  .news_container .left {
    width: 860px;
    float: left;
    min-height: 800px;
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
  .news_container .right {
    width: 280px;
    min-height: 800px;
    margin-left: 900px;
    padding: 20px;
    /*position: fixed;*/
    /*right: 0;*/
    /*top: 0;*/
    background-color: white;
  }
  .news_container .right .title{
    width: 100%;
    height: 35px;
    line-height: 35px;
    border-left: 5px solid #bf3531;
    font-size: 20px;
    padding: 5px;
    margin-bottom: 10px;
    letter-spacing: 2px;
    color: black;
  }
  .news_container .right .text{
    width: 100%;
    height: 65px;
    line-height: 30px;
    font-size: 14px;
    border-bottom: 2px solid #f1f1f1;
  }
  /*.news_container .right img {*/
  /*  width: 100%;*/
  /*  margin-top: 20px;*/
  /*  margin-bottom: 50px;*/
  /*}*/
  .el-button{
    background-color: #bf3531;
    color: white;
  }
</style>
