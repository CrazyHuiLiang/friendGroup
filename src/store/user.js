const storage = weex.requireModule('storage')
const UserInfoKey = 'UserInfoKey'

export default {
  state: {
    userInfo: null
  },
  getters: {
  },
  mutations: {
    // 设置用户信息
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
      storage.setItem(UserInfoKey, JSON.stringify(userInfo))
    }
  },
  actions: {
    getUserInfo ({ state, commit }) {
      return new Promise((resolve, reject) => {
        if (state.userInfo) {
          resolve(state.userInfo)
        } else {
          storage.getItem(UserInfoKey, response => {
            let userInfo = JSON.parse(response.data)
            resolve(userInfo)
          })
        }
      })
    }
  }
}
