import * as api from '../src/api/index'
export function runTest () {
  // addFriendWithUserId()
  // selectAddMyFriendRequest()
  // updateAddFriendRequest()
  // removeFriend()
  // setUserAvatar()
  // setNickname()
  // addNew()
  // listFriendsGroup()
  // listUserAlbum()
  // praiseNew()
  addComment()
}

function addFriendWithUserId () {
  api.addFriendWithUserId(1, 6).then(({data}) => {
    console.log(data)
  }, error => {
    console.error(error)
  })
}

function selectAddMyFriendRequest () {
  api.selectAddMyFriendRequest(6).then(({data}) => {
    console.log(data)
  }, error => {
    console.error(error)
  })
}

function updateAddFriendRequest () {
  api.updateAddFriendRequest(6, 1, 1).then(({data}) => {
    console.log(data)
  }, error => {
    console.error(error)
  })
}

function removeFriend () {
  api.removeFriend(6, 1).then(({data}) => {
    console.log('removeFriend', data)
  }, error => {
    console.error('removeFriend', error)
  })
}
function setUserAvatar () {
  api.setUserAvatar(6, 'https://img.zcool.cn/community/01f3445b1a45a5a8012034f7fbe6a7.jpg@1280w_1l_2o_100sh.jpg').then(({data}) => {
    console.log('setUserAvatar', data)
  }, error => {
    console.error('setUserAvatar', error)
  })
}

function setNickname () {
  api.setNickname(6, 'test6').then(({data}) => {
    console.log('setNickname', data)
  }, error => {
    console.error('setNickname', error)
  })
}

function addNew () {
  api.addNew(6, 'test new', ['test.png']).then(({data}) => {
    console.log('addNew', data)
  }, error => {
    console.error('addNew', error)
  })
}

function listFriendsGroup () {
  api.listFriendsGroup(6).then(({data}) => {
    console.log('listFriendsGroup', data)
  }, error => {
    console.error('listFriendsGroup', error)
  })
}
function listUserAlbum () {
  api.listUserAlbum(6).then(({data}) => {
    console.log('listUserAlbum', data)
  }, error => {
    console.error('listUserAlbum', error)
  })
}
function praiseNew () {
  api.praiseNew(6, 8).then(({data}) => {
    console.log('praiseNew', data)
  }, error => {
    console.error('praiseNew', error)
  })
}

function addComment () {
  api.addComment(6, 8, 0, '给你一个好评').then(({data}) => {
    console.log('addComment', data)
  }, error => {
    console.error('addComment', error)
  })
}
