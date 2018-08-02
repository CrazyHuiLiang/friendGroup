import { getImagePath } from '../util/util'
const storage = weex.requireModule('storage')
const stream = weex.requireModule('stream')
const host = ''

// 封装发送get请求的方法
function get (url, processHandler) {
  return new Promise((resolve, reject) => {
    stream.fetch({
      method: 'GET',
      url,
      headers: {
        'Content-Type': 'application/json'
      },
      type: 'json'
    }, function (ret) {
      if (ret.ok) {
        resolve(ret)
      } else {
        reject(ret)
      }
    }, processHandler)
  })
}
// 封装发送post请求的方法
function post (url, body, processHandler) {
  return new Promise((resolve, reject) => {
    stream.fetch({
      method: 'POST',
      url,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
      type: 'json'
    }, function (ret) {
      if (ret.ok) {
        resolve(ret)
      } else {
        reject(ret)
      }
    }, processHandler)
  })
}
/*
  登录
  account: 账号
  password： 密码
  return Promise
 */
export function login (account, password) {
  return post(host + '/api/login', {
    account,
    password
  })
}
/*
  注册
  account: 账号
  password： 密码
  return Promise
 */
export function register (account, password) {
  return post(host + '/api/register', {
    account,
    password
  })
}
/*
  获取通讯录/我的好友
  userId: 当前登录用户的userId
 */
export function getFriendsList (userId) {
  return get(host + `/api/getFriends?userId=${userId}`)
}

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
      content: '太漂亮了',
      images: [
        'https://img.zcool.cn/community/01f3445b1a45a5a8012034f7fbe6a7.jpg@1280w_1l_2o_100sh.jpg'
      ]
    }
  ]
  callback(list)
}
