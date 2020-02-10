import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/pages/HelloWorld'
import LoginMember from '@/pages/login_member'
import LoginStaffPhone from '@/pages/login_staff_phone'
import LoginStaffWorkerNum from '@/pages/login_staff_woknum'
import HomeMember from '@/pages/home_page_member'
import about from '@/pages/member/about'
import course from '@/pages/member/course'
import Arabic from '@/pages/member/course_Arabic'
import English from '@/pages/member/course_English'
import French from '@/pages/member/course_French'
import German from '@/pages/member/course_German'
import Japanese from '@/pages/member/course_Japanese'
import Korean from '@/pages/member/course_Korean'

import news from '@/pages/member/news'
import personal from '@/pages/member/personal'
import personalData from '@/pages/member/personal_data'
import personalCourse from '@/pages/member/personal_course'
import personalExam from '@/pages/member/personal_exam'
import personalCertificate from '@/pages/member/personal_certificate'
import personalUpgrade from '@/pages/member/personal_upgrade'
import message from '@/pages/member/message'
import messageAuto from '@/pages/member/message_auto'
import messageAdd from '@/pages/member/message_add'
import messageHistory from '@/pages/member/message_history'
import messageWait from '@/pages/member/message_wait'
import HomeStaff from '@/pages/home_page_staff'
import courseContent from '@/pages/member/courseContent'
import classContent from '@/pages/member/classContent'
import newsContent from '@/pages/member/newsContent'
import examContent from '@/pages/member/examContent'

import courseAdd from '@/pages/staff/course_add'
import coursePublished from '@/pages/staff/course_published'
import courseState from '@/pages/staff/course_state'
import newsAdd from '@/pages/staff/news_add'
import newsPublished from '@/pages/staff/news_published'
import messageReplay from '@/pages/staff/message_replay'
import messageAll from '@/pages/staff/message_all'
import examAdd from '@/pages/staff/exam_add'
import certificateWait from '@/pages/staff/certificate_wait'
import certificateAll from '@/pages/staff/certificate_all'
import examPublished from '@/pages/staff/exam_published'
import staffData from '@/pages/staff/staff_data'
import memberAll from '@/pages/staff/member_all'
import staffAll from '@/pages/staff/staff_all'
Vue.use(Router)

export default new Router({
  routes: [
    // {path: '/', name: 'HelloWorld', component: HelloWorld},
    {path: '/login-member', name: 'LoginMember', component: LoginMember},
    {path: '/login-staff-phone', name: 'LoginStaffPhone', component: LoginStaffPhone},
    {path: '/login-staff-work-num', name: 'LoginStaffWorkerNum', component: LoginStaffWorkerNum},
    {path: '/',
      name: 'HomeMember',
      component: HomeMember,
      redirect: '/home-course',
      children: [{
        path: 'home-course',
        name: 'course',
        component: course,
        redirect: '/home-course/home-course-English',
        children: [
          {
            path: 'home-course-Arabic',
            name: 'Arabic',
            component: Arabic
          },
          {
            path: 'home-course-English',
            name: 'English',
            component: English
          },
          {
            path: 'home-course-French',
            name: 'French',
            component: French
          },
          {
            path: 'home-course-German',
            name: 'German',
            component: German
          },
          {
            path: 'home-course-Japanese',
            name: 'Japanese',
            component: Japanese
          },
          {
            path: 'home-course-Korean',
            name: 'Korean',
            component: Korean
          }
        ]
      },
      {
        path: 'home-about',
        name: 'about',
        component: about
      },
      {
        path: 'home-personal',
        name: 'personal',
        component: personal,
        redirect: '/home-personal/home-personal-data',
        children: [
          {
            path: 'home-personal-data',
            name: 'personalData',
            component: personalData
          },
          {
            path: 'home-personal-course',
            name: 'personalCourse',
            component: personalCourse
          },
          {
            path: 'home-personal-exam',
            name: 'personalExam',
            component: personalExam
          },
          {
            path: 'home-personal-certificate',
            name: 'personalCertificate',
            component: personalCertificate
          },
          {
            path: 'home-personal-upgrade',
            name: 'personalUpgrade',
            component: personalUpgrade
          }
        ]
      },
      {
        path: 'home-news',
        name: 'news',
        component: news
      },
      {
        path: 'home-message',
        name: 'message',
        component: message,
        redirect: '/home-message/home-message-add',
        children: [
          {
            path: 'home-message-auto',
            name: 'messageAuto',
            component: messageAuto
          },
          {
            path: 'home-message-add',
            name: 'messageAdd',
            component: messageAdd
          },
          {
            path: 'home-message-wait',
            name: 'messageWait',
            component: messageWait
          },
          {
            path: 'home-message-history',
            name: 'messageHistory',
            component: messageHistory
          }
        ]
      }
      ]
    },
    {path: '/course-content', name: 'courseContent', component: courseContent},
    {path: '/class-content', name: 'classContent', component: classContent},
    {path: '/exam-content', name: 'examContent', component: examContent},
    {path: '/news-content', name: 'newsContent', component: newsContent},
    {path: '/home-staff',
      name: 'HomeStaff',
      component: HomeStaff,
      redirect: '/home-staff/course-add',
      children: [
        {
          path: 'course-add',
          name: 'courseAdd',
          component: courseAdd
        },
        {
          path: 'course-published',
          name: 'coursePublished',
          component: coursePublished
        },
        {
          path: 'course-state',
          name: 'courseState',
          component: courseState
        },
        {
          path: 'exam-add',
          name: 'examAdd',
          component: examAdd
        },
        {
          path: 'exam-published',
          name: 'examPublished',
          component: examPublished
        },
        {
          path: 'news-add',
          name: 'newsAdd',
          component: newsAdd
        },
        {
          path: 'news-published',
          name: 'newsPublished',
          component: newsPublished
        },
        {
          path: 'certificate-wait',
          name: 'certificateWait',
          component: certificateWait
        },
        {
          path: 'certificate-all',
          name: 'certificateAll',
          component: certificateAll
        },
        {
          path: 'message-replay',
          name: 'messageReplay',
          component: messageReplay
        },
        {
          path: 'message-all',
          name: 'messageAll',
          component: messageAll
        },
        {
          path: 'staff-data',
          name: 'staffData',
          component: staffData
        },
        {
          path: 'staff-all',
          name: 'staffAll',
          component: staffAll
        },
        {
          path: 'member-all',
          name: 'memberAll',
          component: memberAll
        }
      ]
    }
    // {path: '/account-monthlyFee',
    //   name: 'monthlyFee',
    //   component: monthlyFee,
    //   redirect: '/account-monthlyFee/chart_recruit',
    //   children: [{
    //     path: 'chart_recruit',
    //     name: 'chart_recruit',
    //     component: chartRecruit
    //   },
    //     {
    //       path: 'chart_apply',
    //       name: 'chart_apply',
    //       component: chartApply
    //     }
  ]
})
