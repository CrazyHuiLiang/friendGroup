import { getConfig } from '../util/util'
const stream = weex.requireModule('stream')
const host = getConfig().host
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
  根据用户账号查找用户
  account: 要搜索的用户账号
 */
export function searchUserWithAccount (account) {
  return get(host + `/api/searchUserWithAccount?account=${account}`)
}

/*
  申请添加好友
  userId: 当前用户id
  friendId： 要添加的用户id
  return Promise
 */
export function addFriendWithUserId (userId, friendId) {
  return post(host + '/api/addFriendWithUserId', {
    userId,
    friendId
  })
}

/*
  查看添加我的好友的申请
  userId: 当前用户id
 */
export function selectAddMyFriendRequest (userId) {
  return get(host + `/api/selectAddMyFriendRequest?userId=${userId}`)
}
/*
  处理添加我的好友的申请
  userId: 当前用户id
  friendId： 要添加的用户id
  flag: 0 waiting , 1 agree， 2 disagree
  return Promise
 */
export function updateAddFriendRequest (userId, friendId, flag) {
  return post(host + '/api/updateAddFriendRequest', {
    userId,
    friendId,
    flag
  })
}

/*
  删除好友
  userId: 当前用户id
  friendId： 要添加的用户id
  return Promise
 */
export function removeFriend (userId, friendId) {
  return post(host + '/api/removeFriend', {
    userId,
    friendId
  })
}
/*
  上传文件
  return Promise
 */
export function uploadFile (filename, file) {
  return post(host + '/api/uploadFileBase64', {
    filename,
    file
  })
}

/*
  设置用户头像
  userId: 当前用户id
  url： 头像url
  return Promise
 */
export function setUserAvatar (userId, url) {
  return post(host + '/api/setUserAvatar', {
    userId,
    url
  })
}

/*
  设置用户昵称
  userId: 当前用户id
  nickname：
  return Promise
 */
export function setNickname (userId, nickname) {
  return post(host + '/api/setNickname', {
    userId,
    nickname
  })
}
/*
  发朋友圈
  userId: 当前用户id
  nickname：
  return Promise
 */
export function addNew (userId, content, images) {
  return post(host + '/api/addNew', {
    userId,
    content,
    images
  })
}

/*
  获取朋友圈列表
  userId: 当前用户id
 */
export function listFriendsGroup (userId, pageIndex = 1, pageSize = 10) {
  return get(host + `/api/listFriendsGroup?userId=${userId}&pageIndex=${pageIndex}&pageSize=${pageSize}`)
}
/*
  获取个人相册列表
  userId: 当前用户id
 */
export function listUserAlbum (userId, pageIndex = 1, pageSize = 10) {
  return get(host + `/api/listUserAlbum?userId=${userId}&pageIndex=${pageIndex}&pageSize=${pageSize}`)
}
/*
  点赞/取消点赞
  userId: 当前用户id
  newId：被点赞的朋友圈消息的ID
  return Promise
 */
export function praiseNew (userId, newId) {
  return post(host + '/api/praiseNew', {
    userId,
    newId
  })
}
/*
  评论
  userId: 当前用户id
  newId：被点赞的朋友圈消息的ID
  parentCommentId: 如果是对朋友圈下面的评论进行回复，需要传入所要回复的评论Id
  comment: 评论内容
  return Promise
 */
export function addComment (userId, newsId, parentCommentId, comment) {
  return post(host + '/api/addComment', {
    userId,
    newsId,
    parentCommentId,
    comment
  })
}
