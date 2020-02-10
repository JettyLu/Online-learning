import axios from './http'
import router from '../router'
import store from '../store/store.js'
const baseURL = 'http://localhost:3000/'
axios.defaults.baseURL = baseURL

// 登录注册请求*****************************************************************************************
export const loginStaff = (phone, wNum, p) => {
  return axios({
    method: 'post',
    timeout: 1000 * 60,
    url: '/users/login_admin',
    dataType: 'json',
    data: {
      phoneNum: phone,
      workNum: wNum,
      password: p
    }
  }).then(res => {
    console.log(res)
    if (res.data && res.data.token) {
      store.dispatch('loginStaff', res)
      alert('登录成功')
      router.replace('/home-staff')
    } else if (res.data && res.data.status === 0) {
      alert(res.data.msg)
    } else console.log('登录失败，请稍后重试')
    // eslint-disable-next-line handle-callback-err
  }).catch(function (error) {
    console.log('登录失败，请稍后重试', error)
  })
}
export const loginMember = (phone, p) => {
  return axios({
    method: 'post',
    timeout: 1000 * 60,
    url: '/users/login',
    dataType: 'json',
    data: {
      phoneNum: phone,
      password: p
    }
  })
    .then(res => {
      console.log(res)
      if (res.data && res.data.token) {
        store.dispatch('loginMember', res)
        alert('登录成功')
        router.replace('/')
      } else if (res.data && res.data.status === 0) {
        alert(res.data.msg)
      } else console.log('登录失败，请稍后重试')
      // eslint-disable-next-line handle-callback-err
    }).catch(function (error) {
      console.log('登录失败，请稍后重试')
    })
}
export const regStaff = (phone, wNum, uName, p) => {
  return axios({
    method: 'post',
    timeout: 1000 * 60,
    url: '/users/reg_admin',
    dataType: 'json',
    data: {
      phoneNum: phone,
      workNum: wNum,
      username: uName,
      password: p
    }
  })
    .then(res => {
      console.log(res)
      if (res.data && res.data.status === 1) {
        alert('注册成功，登录手机号为：' + phone + '，工号为：' + wNum)
      } else if (res.data && res.data.status === 0) {
        alert(res.data.msg)
      } else {
        console.log('注册失败，请稍后重试')
        alert('注册失败，请稍后重试')
      }
      // eslint-disable-next-line handle-callback-err
    }).catch(function (error) {
      console.log('注册失败，请稍后重试')
      alert('注册失败，请稍后重试')
    })
}
export const regMember = (phone, uName, e, p) => {
  return axios({
    method: 'post',
    timeout: 1000 * 60,
    url: '/users/reg',
    dataType: 'json',
    data: {
      phoneNum: phone,
      email: e,
      username: uName,
      password: p
    }
  })
    .then(res => {
      console.log(res)
      if (res.data && res.data.status === 1) {
        alert('注册成功，登录手机号为：' + phone)
      } else if (res.data && res.data.status === 0) {
        alert(res.data.msg)
      } else {
        alert('注册失败，请稍后重试')
        console.log('注册失败，请稍后重试')
      }
      // eslint-disable-next-line handle-callback-err
    }).catch(function (error) {
      console.log('注册失败，请稍后重试')
      alert('注册失败，请稍后重试')
    })
}
// 职员发布课程信息***********************************************************************************
export const addCourse = (form) => {
  if (!localStorage.getItem('staffID')) {
    alert('请登陆职员账号')
    return false
  }
  let per
  if (form.permission === '初级会员') {
    per = 0
  }
  if (form.permission === '中级会员') {
    per = 1
  }
  if (form.permission === '高级会员') {
    per = 2
  }
  console.log('per:', per)
  return axios({
    method: 'post',
    timeout: 1000 * 60,
    url: '/add/course',
    dataType: 'json',
    // headers: {
    //   staffID: localStorage.getItem('staffID')
    // },
    data: {
      courseName: form.name, // 课程名称
      permission: per, // 课程等级
      courseType: form.cType, // 课程种类
      introduction: form.introduce, // 课程简介
      enterTime1: form.date1_enter,
      enterTime2: form.date2_enter,
      classTime1: form.date1_class,
      classTime2: form.date2_class,
      examTime1: form.date_exam1,
      examTime2: form.date_exam2,
      imgURL: form.course_img, // 课程图片
      staffID: localStorage.getItem('staffID'),
      staffUserName: localStorage.getItem('username')
    }
  })
    .then(res => {
      console.log(res)
      if (res.data && res.data.status === 1) {
        alert('课程信息发布成功，资源上传中' + '课程ID为：' + res.data.courseID)
        return res.data.courseID
      } else if (res.data && res.data.status === 0) {
        alert(res.data.msg)
      } else {
      }
      // eslint-disable-next-line handle-callback-err
    }).catch(function (error) {
      console.log('发布课程信息失败，请稍后重试')
      alert('发布课程信息失败，请稍后重试')
    })
}
// 职员发布课程资源***********************************************************************************
export const addResource = (id, resContent) => {
  if (!localStorage.getItem('staffID')) {
    alert('请登陆职员账号')
    return false
  }
  return axios({
    method: 'post',
    timeout: 1000 * 60,
    url: '/add/resource',
    dataType: 'json',
    headers: {
      staffID: localStorage.getItem('staffID')
    },
    data: {
      resTitle: resContent.res_title,
      resVideo: resContent.res_video,
      resDoc: resContent.res_doc,
      sectionID: resContent.res_id,
      courseIDres: id,
      staffID: localStorage.getItem('staffID'),
      staffUserName: localStorage.getItem('username')
    }
  })
    .then(res => {
      if (res.data && res.data.status === 1) {
        alert('资源' + resContent.res_id + '上传成功')
      } else if (res.data && res.data.status === 0) {
        alert('资源' + resContent.res_id + res.data.msg)
      } else {
        alert('资源' + resContent.res_id + '上传失败')
      }
      // eslint-disable-next-line handle-callback-err
    }).catch(function (error) {
    })
}
// 职员发布考试内容***********************************************************************************
export const addExam = (form) => {
  if (!localStorage.getItem('staffID')) {
    alert('请登陆职员账号')
    return false
  }
  return axios({
    method: 'post',
    timeout: 1000 * 60,
    url: '/add/exam',
    dataType: 'json',
    // headers: {
    //   staffID: localStorage.getItem('staffID')
    // },
    data: {
      examTitle: form.exam_title, // 试卷标题
      score: form.exam_score, // 试卷总分
      examTime: form.exam_time, // 考试时长
      examContent: form.exam_content, // 试卷内容
      chooseNum: form.choose_num, // 题数
      chooseScore: form.choose_score, // 单题分数
      chooseAnswer: form.choose_answer, // 答案
      courseIDexam: form.course_id, // 课程id
      staffID: localStorage.getItem('staffID'),
      staffUserName: localStorage.getItem('username')
    }
  })
    .then(res => {
      console.log(res)
      if (res.data && res.data.status === 1) {
        alert(res.data.msg)
        return true
      } else if (res.data && res.data.status === 0) {
        alert(res.data.msg)
        return false
      } else {
        alert('发布考试信息失败，请稍后重试')
        return false
      }
      // eslint-disable-next-line handle-callback-err
    }).catch(function (error) {
      console.log('发布考试信息失败，请稍后重试')
      alert('发布考试信息失败，请稍后重试')
    })
}
// 职员发布新闻信息***********************************************************************************
export const addNews = (form) => {
  if (!localStorage.getItem('staffID')) {
    alert('请登陆职员账号')
    return false
  }
  return axios({
    method: 'post',
    timeout: 1000 * 60,
    url: '/add/news',
    dataType: 'json',
    // headers: {
    //   staffID: localStorage.getItem('staffID')
    // },
    data: {
      newsTitle: form.newsTitle, // 新闻标题
      newsContent: form.newsContent, // 新闻内容
      newsFrom: form.newsFrom, // 新闻来源
      newsAuthor: form.newsAuthor, // 新闻作者
      newsDescription: form.newsDescription, // 新闻摘要
      staffID: localStorage.getItem('staffID'),
      staffUserName: localStorage.getItem('username')
    }
  })
    .then(res => {
      console.log(res)
      if (res.data && res.data.status === 1) {
        alert(res.data.msg)
        return true
      } else if (res.data && res.data.status === 0) {
        alert(res.data.msg)
        return false
      } else {
        alert('新闻发布失败，请稍后重试')
        return false
      }
      // eslint-disable-next-line handle-callback-err
    }).catch(function (error) {
      console.log('发布新闻失败，请稍后重试')
      alert('发布新闻失败，请稍后重试')
    })
}
// 新闻部分信息*职员管理**********************************************************************************
export const newsAdmin = () => {
  return axios({
    method: 'get',
    url: '/query/news_admin'
    // url: (url + '?search=' + search)
  }).then(res => {
    console.log(res)
    if (res.data && res.data.status === 1) {
      return res.data.result
    } else if (res.data && res.data.status === 0) {
      alert(res.data.msg)
      return false
    } else {
      alert('获取数据失败，清稍后重试')
      return false
    }
    // eslint-disable-next-line handle-callback-err
  }).catch(function (error) {
    console.log(error)
  })
}
// 新闻部分信息*新闻中心**********************************************************************************
export const getNewsSome = () => {
  return axios({
    method: 'get',
    url: '/query/news_some'
    // url: (url + '?search=' + search)
  }).then(res => {
    if (res.data && res.data.status === 1) {
      return res.data.result
    } else if (res.data && res.data.status === 0) {
      alert(res.data.msg)
      return false
    } else {
      alert('获取新闻信息失败，清稍后重试')
      return false
    }
    // eslint-disable-next-line handle-callback-err
  }).catch(function (error) {
    console.log(error)
  })
}
// 某条新闻的全部信息***********************************************************************************
export const getNewsContent = (newsID) => {
  return axios({
    method: 'get',
    url: '/query/news_all' + '/?newsID=' + newsID
    // url: (url + '?search=' + search)
  }).then(res => {
    if (res.data && res.data.status === 1) {
      return res.data.result
    } else if (res.data && res.data.status === 0) {
      alert(res.data.msg)
      return false
    } else {
      alert('获取新闻详情失败，清稍后重试')
      return false
    }
    // eslint-disable-next-line handle-callback-err
  }).catch(function (error) {
    console.log(error)
  })
}
// 课程资源信息***********************************************************************************
export const getResourceContent = (courseID) => {
  return axios({
    method: 'get',
    url: '/query/resourceContent' + '/?courseID=' + courseID
    // url: (url + '?search=' + search)
  }).then(res => {
    if (res.data && res.data.status === 1) {
      return res.data.result
    } else if (res.data && res.data.status === 0) {
      alert(res.data.msg)
      return false
    } else {
      alert('获取资源信息失败，清稍后重试')
      return false
    }
    // eslint-disable-next-line handle-callback-err
  }).catch(function (error) {
    console.log(error)
  })
}
// 考试信息***********************************************************************************
export const getExamContent = (courseID) => {
  return axios({
    method: 'get',
    url: '/query/examContent' + '/?courseID=' + courseID
    // url: (url + '?search=' + search)
  }).then(res => {
    if (res.data && res.data.status === 1) {
      return res.data.result
    } else if (res.data && res.data.status === 0) {
      alert(res.data.msg)
      return false
    } else {
      alert('获取考试信息失败，清稍后重试')
      return false
    }
    // eslint-disable-next-line handle-callback-err
  }).catch(function (error) {
    console.log(error)
  })
}
// 课程信息***********************************************************************************
export const getCoursesContent = (courseID) => {
  if (!localStorage.getItem('memberID')) {
    alert('请登陆会员账号')
    return false
  }
  return axios({
    method: 'get',
    url: '/query/courseContent' + '/?courseID=' + courseID
    // url: (url + '?search=' + search)
  }).then(res => {
    if (res.data && res.data.status === 1) {
      return res.data.result
    } else if (res.data && res.data.status === 0) {
      alert(res.data.msg)
      return false
    } else {
      alert('获取课程信息失败，请稍后重试')
      return false
    }
    // eslint-disable-next-line handle-callback-err
  }).catch(function (error) {
    console.log(error)
  })
}
// 会员课程部分信息***********************************************************************************
export const getCourses = () => {
  return axios({
    method: 'get',
    url: '/query/course'
    // url: (url + '?search=' + search)
  }).then(res => {
    if (res.data && res.data.status === 1) {
      return res.data.result
    } else if (res.data && res.data.status === 0) {
      alert(res.data.msg)
      return false
    } else {
      alert('获取课程信息失败，清稍后重试')
      return false
    }
    // eslint-disable-next-line handle-callback-err
  }).catch(function (error) {
    console.log(error)
  })
}
// 初级会员课程部分信息***********************************************************************************
export const getCourses0 = () => {
  return axios({
    method: 'get',
    url: '/query/course0'
    // url: (url + '?search=' + search)
  }).then(res => {
    if (res.data && res.data.status === 1) {
      return res.data.result
    } else if (res.data && res.data.status === 0) {
      alert(res.data.msg)
      return false
    } else {
      alert('获取初级会员课程信息失败，清稍后重试')
      return false
    }
    // eslint-disable-next-line handle-callback-err
  }).catch(function (error) {
    console.log(error)
  })
}
// 中级会员课程部分信息***********************************************************************************
export const getCourses1 = () => {
  return axios({
    method: 'get',
    url: '/query/course1'
    // url: (url + '?search=' + search)
  }).then(res => {
    if (res.data && res.data.status === 1) {
      return res.data.result
    } else if (res.data && res.data.status === 0) {
      alert(res.data.msg)
      return false
    } else {
      alert('获取中级会员课程信息失败，清稍后重试')
      return false
    }
    // eslint-disable-next-line handle-callback-err
  }).catch(function (error) {
    console.log(error)
  })
}
// 高级会员课程部分信息***********************************************************************************
export const getCourses2 = () => {
  return axios({
    method: 'get',
    url: '/query/course1'
    // url: (url + '?search=' + search)
  }).then(res => {
    if (res.data && res.data.status === 1) {
      return res.data.result
    } else if (res.data && res.data.status === 0) {
      alert(res.data.msg)
      return false
    } else {
      alert('获取中级会员课程信息失败，清稍后重试')
      return false
    }
    // eslint-disable-next-line handle-callback-err
  }).catch(function (error) {
    console.log(error)
  })
}
// 未开始考试部分信息***********************************************************************************
export const getExam0 = () => {
  return axios({
    method: 'get',
    url: '/query/exam0'
    // url: (url + '?search=' + search)
  }).then(res => {
    if (res.data && res.data.status === 1) {
      return res.data.result
    } else if (res.data && res.data.status === 0) {
      alert(res.data.msg)
      return false
    } else {
      alert('获取未开始考试信息失败，清稍后重试')
      return false
    }
    // eslint-disable-next-line handle-callback-err
  }).catch(function (error) {
    console.log(error)
  })
}
// 已开始考试部分信息***********************************************************************************
export const getExam1 = () => {
  return axios({
    method: 'get',
    url: '/query/exam1'
    // url: (url + '?search=' + search)
  }).then(res => {
    if (res.data && res.data.status === 1) {
      return res.data.result
    } else if (res.data && res.data.status === 0) {
      alert(res.data.msg)
      return false
    } else {
      alert('获取进行中考试信息失败，清稍后重试')
      return false
    }
    // eslint-disable-next-line handle-callback-err
  }).catch(function (error) {
    console.log(error)
  })
}
// 已结束考试部分信息***********************************************************************************
export const getExam2 = () => {
  return axios({
    method: 'get',
    url: '/query/exam2'
    // url: (url + '?search=' + search)
  }).then(res => {
    if (res.data && res.data.status === 1) {
      return res.data.result
    } else if (res.data && res.data.status === 0) {
      alert(res.data.msg)
      return false
    } else {
      alert('获取已结束考试信息失败，清稍后重试')
      return false
    }
    // eslint-disable-next-line handle-callback-err
  }).catch(function (error) {
    console.log(error)
  })
}
// 职员管理 全部职员信息***********************************************************************************
export const getAllStaff = () => {
  if (!localStorage.getItem('staffID')) {
    alert('请登陆职员账号')
    return false
  }
  return axios({
    method: 'get',
    url: '/query/staff_admin'
    // url: (url + '?search=' + search)
  }).then(res => {
    if (res.data && res.data.status === 1) {
      return res.data.result
    } else if (res.data && res.data.status === 0) {
      alert(res.data.msg)
      return false
    } else {
      alert('获取全部职员信息失败，清稍后重试')
      return false
    }
    // eslint-disable-next-line handle-callback-err
  }).catch(function (error) {
    console.log(error)
  })
}
// 职员管理 全部会员信息***********************************************************************************
export const getAllMember = () => {
  if (!localStorage.getItem('staffID')) {
    alert('请登陆职员账号')
    return false
  }
  return axios({
    method: 'get',
    url: '/query/member_admin'
    // url: (url + '?search=' + search)
  }).then(res => {
    if (res.data && res.data.status === 1) {
      return res.data.result
    } else if (res.data && res.data.status === 0) {
      alert(res.data.msg)
      return false
    } else {
      alert('获取全部会员信息失败，清稍后重试')
      return false
    }
    // eslint-disable-next-line handle-callback-err
  }).catch(function (error) {
    console.log(error)
  })
}
// 会员发布留言**************************************************************************************
export const publishMessage = (content) => {
  if (!localStorage.getItem('memberID')) {
    alert('请登陆会员账号')
    return false
  }
  return axios({
    method: 'post',
    timeout: 1000 * 60,
    url: '/add/messageAdd',
    dataType: 'json',
    // headers: {
    //   staffID: localStorage.getItem('staffID')
    // },
    data: {
      content: content,
      memIDmes: localStorage.getItem('memberID'),
      memberUserName: localStorage.getItem('username')
    }
  })
    .then(res => {
      if (res.data && res.data.status === 1) {
        alert(res.data.msg)
        return true
      } else if (res.data && res.data.status === 0) {
        alert(res.data.msg)
        return false
      } else {
        alert(res.data.msg)
        return false
      }
      // eslint-disable-next-line handle-callback-err
    }).catch(function (error) {
    })
}
// 职员回复留言**************************************************************************************
export const replyMessage = (id, content) => {
  return axios({
    method: 'post',
    timeout: 1000 * 60,
    url: '/update/messageReply',
    dataType: 'json',
    // headers: {
    //   staffID: localStorage.getItem('staffID')
    // },
    data: {
      messageID: id,
      reply: content,
      staffID: localStorage.getItem('staffID'),
      staffUserName: localStorage.getItem('username')
    }
  })
    .then(res => {
      if (res.data && res.data.status === 1) {
        alert(res.data.msg)
        return true
      } else if (res.data && res.data.status === 0) {
        alert(res.data.msg)
        return false
      } else {
        alert(res.data.msg)
        return false
      }
      // eslint-disable-next-line handle-callback-err
    }).catch(function (error) {
    })
}
// 会员获取留言信息**************************************************************************************
export const getMessage = (replyType) => {
  if (!localStorage.getItem('memberID')) {
    alert('请登陆会员账号')
    return false
  }
  let memIDmes = localStorage.getItem('memberID')
  return axios({
    method: 'get',
    url: '/query/getMessage' + '/?memIDmes=' + memIDmes + '&replyType=' + replyType
    // url: (url + '?search=' + search)
  }).then(res => {
    if (res.data && res.data.status === 1) {
      return res.data.result
    } else if (res.data && res.data.status === 0) {
      alert(res.data.msg)
      return false
    } else {
      alert('获取留言信息失败，清稍后重试')
      return false
    }
    // eslint-disable-next-line handle-callback-err
  }).catch(function (error) {
    console.log(error)
  })
}
// 职员获取留言信息**************************************************************************************
export const messageAdmin = (replyType) => {
  return axios({
    method: 'get',
    url: '/query/messageAdmin' + '/?replyType=' + replyType
    // url: (url + '?search=' + search)
  }).then(res => {
    if (res.data && res.data.status === 1) {
      return res.data.result
    } else if (res.data && res.data.status === 0) {
      alert(res.data.msg)
      return false
    } else {
      alert('获取留言信息失败，清稍后重试')
      return false
    }
    // eslint-disable-next-line handle-callback-err
  }).catch(function (error) {
    console.log(error)
  })
}
// 职员获取留言信息**************************************************************************************
export const enterClass = (courseID) => {
  // if (!localStorage.getItem('staffID')) return false
  return axios({
    method: 'post',
    timeout: 1000 * 60,
    url: '/add/attend',
    dataType: 'json',
    data: {
      courseID: courseID,
      memberID: localStorage.getItem('memberID')
    }
  })
    .then(res => {
      console.log(res)
      if (res.data && res.data.status === 1) {
        alert(res.data.msg)
        return true
      } else if (res.data && res.data.status === 0) {
        alert(res.data.msg)
        return false
      } else {
        alert('报名失败，请稍后重试')
        return false
      }
      // eslint-disable-next-line handle-callback-err
    }).catch(function (error) {
      alert('报名失败，请稍后重试')
    })
}
// 获取报名信息**************************************************************************************
export const getMyClass = (classType) => {
  if (!localStorage.getItem('memberID')) {
    alert('请登陆会员账号')
    return false
  }
  let memID = localStorage.getItem('memberID')
  return axios({
    method: 'get',
    url: '/query/myClass' + '/?memberID=' + memID + '&classType=' + classType
    // url: (url + '?search=' + search)
  }).then(res => {
    if (res.data && res.data.status === 1) {
      return res.data.result
    } else if (res.data && res.data.status === 0) {
      alert(res.data.msg)
      return false
    } else {
      alert('获取参加信息失败，清稍后重试')
      return false
    }
    // eslint-disable-next-line handle-callback-err
  }).catch(function (error) {
    console.log(error)
  })
}
// 完成考试，更新信息**************************************************************************************
export const addCertificate = (score, title, content, courseID) => {
  return axios({
    method: 'post',
    timeout: 1000 * 60,
    url: '/add/certificate',
    dataType: 'json',
    // headers: {
    //   staffID: localStorage.getItem('staffID')
    // },
    data: {
      score: score,
      title: title,
      content: content,
      courseID: courseID,
      memberID: localStorage.getItem('memberID')
    }
  })
    .then(res => {
      if (res.data && res.data.status === 1) {
        // alert(res.data.msg)
        return res.data.certificate_id
      } else if (res.data && res.data.status === 0) {
        alert(res.data.msg)
        return false
      } else {
        alert(res.data.msg)
        return false
      }
      // eslint-disable-next-line handle-callback-err
    }).catch(function (error) {
      alert('考试信息提交失败，请稍后重试')
    })
}
export const updateAttend = (courseID, certificateID, score, type) => {
  return axios({
    method: 'post',
    timeout: 1000 * 60,
    url: '/update/attend',
    dataType: 'json',
    // headers: {
    //   staffID: localStorage.getItem('staffID')
    // },
    data: {
      certificateID: certificateID,
      courseID: courseID,
      memberID: localStorage.getItem('memberID'),
      mark: score,
      type: type
    }
  })
    .then(res => {
      if (res.data && res.data.status === 1) {
        alert(res.data.msg)
        return true
      } else if (res.data && res.data.status === 0) {
        alert(res.data.msg)
        return false
      } else {
        alert(res.data.msg)
        return false
      }
      // eslint-disable-next-line handle-callback-err
    }).catch(function (error) {
      alert('考试信息提交失败，请稍后重试')
    })
}
// 证书信息***********************************************************************************
export const getCertificateContent = (courseID) => {
  if (!localStorage.getItem('memberID')) {
    alert('请登陆会员账号')
    return false
  }
  let memID = localStorage.getItem('memberID')
  return axios({
    method: 'get',
    url: '/query/certificateContent' + '/?courseIDcer=' + courseID + '&memIDcer=' + memID
    // url: (url + '?search=' + search)
  }).then(res => {
    if (res.data && res.data.status === 1) {
      return res.data.result
    } else if (res.data && res.data.status === 0) {
      alert(res.data.msg)
      return false
    } else {
      alert('获取证书信息失败，请稍后重试')
      return false
    }
    // eslint-disable-next-line handle-callback-err
  }).catch(function (error) {
    console.log(error)
  })
}
// 删除新闻***********************************************************************************
export const deleteNews = (newsID) => {
  if (!localStorage.getItem('staffID')) {
    alert('请登陆职员账号')
    return false
  }
  return axios({
    method: 'post',
    url: '/delete/news',
    data: {
      newsID: newsID
    }
  }).then(res => {
    if (res.data && res.data.status === 1) {
      return true
    } else if (res.data && res.data.status === 0) {
      alert(res.data.msg)
      return false
    } else {
      alert('删除新闻失败，请稍后重试')
      return false
    }
    // eslint-disable-next-line handle-callback-err
  }).catch(function (error) {
    console.log(error)
  })
}
// 删除考试**********************************************************************************
export const deleteExam = (examID) => {
  if (!localStorage.getItem('staffID')) {
    alert('请登陆职员账号')
    return false
  }
  return axios({
    method: 'post',
    url: '/delete/exam',
    data: {
      examID: examID
    }
  }).then(res => {
    if (res.data && res.data.status === 1) {
      return true
    } else if (res.data && res.data.status === 0) {
      alert(res.data.msg)
      return false
    } else {
      alert('删除新闻失败，请稍后重试')
      return false
    }
    // eslint-disable-next-line handle-callback-err
  }).catch(function (error) {
    console.log(error)
  })
}
