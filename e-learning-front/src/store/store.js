import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: '',
    staffID: '',
    username: '',
    phoneNum: '',
    workNum: '',
    memberID: ''
  },
  actions: {
    loginStaff ({commit}, data) { commit(types.LOGINSTAFF, data) },
    logoutStaff ({commit}) { commit(types.LOGOUTSTAFF) },
    loginMember ({commit}, data) { commit(types.LOGINMEMBER, data) },
    logoutMember ({commit}) { commit(types.LOGOUTMEMBER) },
    saveStaff ({commit}, data) { commit(types.SAVESTAFF, data) },
    saveMember ({commit}, data) { commit(types.SAVEMEMBER, data) }
  },
  getters: {},
  mutations: {
    [types.LOGINSTAFF]: (state, res) => {
      localStorage.clear()
      state.token = res.data.token
      state.staffID = res.data.staffID
      state.username = res.data.username
      state.phoneNum = res.data.phoneNum
      state.workNum = res.data.workNum
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('staffID', res.data.staffID)
      localStorage.setItem('username', res.data.username)
      localStorage.setItem('phoneNum', res.data.phoneNum)
      localStorage.setItem('workNum', res.data.workNum)
    },
    [types.LOGOUTSTAFF]: (state) => {
      state.token = ''
      state.staffID = ''
      state.username = ''
      state.phoneNum = ''
      state.workNum = ''
      localStorage.clear()
    },
    [types.LOGINMEMBER]: (state, res) => {
      localStorage.clear()
      state.token = res.data.token
      state.memberID = res.data.memberID
      state.username = res.data.username
      state.phoneNum = res.data.phoneNum
      state.rankM = res.data.rankM
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('memberID', res.data.memberID)
      localStorage.setItem('username', res.data.username)
      localStorage.setItem('phoneNum', res.data.phoneNum)
      localStorage.setItem('rankM', res.data.rankM)
    },
    [types.LOGOUTMEMBER]: (state) => {
      state.token = null
      state.memberID = null
      state.username = null
      state.phoneNum = null
      localStorage.clear()
    },
    [types.SAVESTAFF]: (state, data) => {
      state.token = data.token
      state.staffID = data.staffID
      state.username = data.username
      state.phoneNum = data.phoneNum
      state.workNum = data.workNum
    },
    [types.SAVEMEMBER]: (state, data) => {
      localStorage.clear()
      state.token = data.token
      state.memberID = data.memberID
      state.username = data.username
      state.phoneNum = data.phoneNum
    }
  }
})
// eslint-disable-next-line no-tabs
// 	state: {
// eslint-disable-next-line no-tabs
// 	  token: ''
//   },
//   actions: {
//     login ({commit}, data) {
//       commit(types.LOGIN, data)
//     },
//     // 注销
//     logout ({commit}) {
//       commit(types.LOGOUT)
//     }
//   },
// eslint-disable-next-line no-tabs
// 	mutations: {
//     [types.LOGIN]: (state, data) => {
// eslint-disable-next-line no-tabs
//     	localStorage.setItem('token', data)
// eslint-disable-next-line no-tabs
//     	state.token = data
//     },
//     [types.LOGOUT]: (state) => {
// eslint-disable-next-line no-tabs
//     		localStorage.removeItem('token')
// eslint-disable-next-line no-tabs
//     		state.token = null
//     }
//   }

export default store
