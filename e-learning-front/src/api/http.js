import axios from 'axios'
import router from '../router'
import store from '../store/store.js'
// axios.defaults.headers.post['Content-Type'] = 'application/json'

// http request 拦截器**********************************************************************
axios.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers.Authorization = `JWT ${localStorage.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 拦截器**************************************************************************
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          if (localStorage.getItem('staffID')) {
            router.replace({
              path: '/login-staff-phone',
              query: { redirect: router.currentRoute.path }
            })
            store.dispatch('logoutStaff')
          }
          if (localStorage.getItem('memberID')) {
            router.replace({
              path: '/login-member',
              query: { redirect: router.currentRoute.path }
            })
            store.dispatch('logoutMember')
          }
          console.log('未登录')
          break
        case 403:
          console.log('没有操作权限')
          break
        case 500:
          console.log('服务器错误')
          break
        case 404:
          console.log('访问地址不存在')
      }
      return Promise.reject(error.response.data)
    }
    return Promise.reject(error.response.data)
  }
)
export default axios
// http response 拦截器**************************************************************************
// axios.interceptors.response.use(
//   response => {
//     return response
//   },
//   error => {
//     if (error.response) {
//       switch (error.response.status) {
//         case 401:
//           // 401 清除token信息并跳转到登录页面
//           // 只有在当前路由不是登录页面才跳转
//           // router.currentRoute.path !== '/login' ||
//           if (localStorage.getItem('staffID')) {
//             router.replace({
//               path: '/login-staff-phone',
//               query: { redirect: router.currentRoute.path }
//             })
//             store.dispatch('logoutStaff')
//           }
//           if (localStorage.getItem('memberID')) {
//             router.replace({
//               path: '/login-member',
//               query: { redirect: router.currentRoute.path }
//             })
//             store.dispatch('logoutMember')
//           }
//           console.log('未登录')
//           break
//         case 403:
//           console.log('没有操作权限')
//           break
//         case 500:
//           console.log('服务器错误')
//       }
//       return Promise.reject(error.response.data)
//     }
//     return Promise.reject(error.response.data)
//   }
// )
// export default axios
