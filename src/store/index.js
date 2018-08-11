import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
const storage = weex.requireModule('storage')
Vue.use(Vuex)
const ViewAlbumUserAccountKey = 'ViewAlbumUserAccountKey'
const ViewUserKey = 'ViewUserKey'

const store = new Vuex.Store({
  state: {
    viewAlbumUserAccount: '',
    viewUser: null
  },
  mutations: {
    // 设置要查看相册的用户的账号
    setViewAlumUserAccount (state, account) {
      state.viewAlbumUserAccount = account
      storage.setItem(ViewAlbumUserAccountKey, account)
    },
    // 设置要浏览的用户的信息
    setViewUserInfo (state, userInfo) {
      state.viewUser = userInfo
      storage.setItem(ViewUserKey, JSON.stringify(userInfo))
    }
  },
  actions: {
    getViewAlbumUserAccount ({ state, commit }) {
      return new Promise((resolve, reject) => {
        if (state.viewAlbumUserAccount) {
          resolve(state.viewAlbumUserAccount)
        } else {
          storage.getItem(ViewAlbumUserAccountKey, response => {
            let viewAlbumUserAccount = null
            if (response.result === 'success') {
              viewAlbumUserAccount = response.data
            }
            resolve(viewAlbumUserAccount)
          })
        }
      })
    },
    getViewUserInfo ({ state, commit }) {
      return new Promise((resolve, reject) => {
        if (state.viewUser) {
          resolve(state.viewUser)
        } else {
          storage.getItem(ViewUserKey, response => {
            let userInfo = null
            if (response.result === 'success') {
              userInfo = JSON.parse(response.data)
            }
            resolve(userInfo)
          })
        }
      })
    }
  },
  modules: {
    user
  }
})

export default store
