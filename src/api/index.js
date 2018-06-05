import { getImagePath } from '../util/util'
const storage = weex.requireModule('storage')
/*
* 用户信息
* */
const UserInfoKey = 'UserInfoKey'
const defaultUserInfo = {
  nickName: '点我编辑昵称',
  avatar: getImagePath('defaultAvatar', '.png'), // 'http://7xt2se.com1.z0.glb.clouddn.com/zhl-avatar.jpeg',
  background: getImagePath('defaultBackground', '.png')// 'https://img.zcool.cn/community/01ee3b5b1124f0a801212d57af516c.jpg@1280w_1l_2o_100sh.jpg'
}

/*
* 获取用户信息
* */
export function getUserInfo (callback) {
  storage.getItem(UserInfoKey, event => {
    let userInfo
    if (event.data === 'undefined') {
      userInfo = defaultUserInfo
    } else {
      userInfo = JSON.parse(event.data)
    }
    // console.log(userInfo)
    callback(userInfo)
  })
}

/*
* 更改用户信息
* info: 类似上面defaultUserInfo的结构
* */
export function updateUserInfo (info, callback) {
  getUserInfo(userInfo => {
    let newInfo = {
      ...userInfo, ...info
    }
    storage.setItem(UserInfoKey, JSON.stringify(newInfo), r => {
      callback(newInfo)
    })
  })
}

/*
* 获取朋友圈列表
* */
export function getMessageList (callback) {
  let list = [
    {
      content: 'weex的文档写的真是糟糕通了，都三四年的项目了，文档还这么乱，真不害臊',
      images: [
        'https://img.zcool.cn/community/012047575fc8330000012e7e28d77b.jpg@1280w_1l_2o_100sh.jpg'
      ]
    }
  ]
  callback(list)
}
