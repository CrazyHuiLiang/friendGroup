<template>
  <div class="wrapper">
    <wxc-minibar title="新的朋友" style="padding-top: 30px;" background-color="#009ff0" text-color="#FFFFFF"></wxc-minibar>
    <div>
      <text v-if="users===null" class="no-user">暂无内容</text>
      <div v-else>
        <div v-for="user in users" :key="user.id" class="user">
          <image style="width:50px;height:50px" :src="user.avatar || gConfig.defaultValues.avatar"></image>
          <text style="flex: 1; margin-left: 20px;">{{user.nickname || gConfig.defaultValues.nickName}}</text>
          <wxc-button v-if="user.flag === 0" text="添加" type='blue' size='small' @wxcButtonClicked="handleRequest(user.userId, 1)"></wxc-button>
          <wxc-button v-if="user.flag === 0" text="拒绝" type='red' size='small' @wxcButtonClicked="handleRequest(user.userId, 2)"></wxc-button>
          <text v-if="user.flag === 1">已添加</text>
          <text v-if="user.flag === 2">已拒绝</text>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  WxcButton,
  WxcMinibar
} from 'weex-ui'
import {getConfig} from './util/util'
import {
  selectAddMyFriendRequest,
  updateAddFriendRequest
} from './api/index'
import store from './store/index'
const modal = weex.requireModule('modal')
// const navigator = weex.requireModule('navigator')

export default {
  name: 'NewFriend',
  props: {
  },
  data () {
    return {
      gConfig: getConfig(),
      users: null
    }
  },
  mounted () {
    this.loadRequests()
  },
  methods: {
    // 查找添加好友的申请
    loadRequests (e) {
      store.dispatch('getUserInfo').then(userInfo => {
        return selectAddMyFriendRequest(userInfo.id)
      }).then(({ data }) => {
        if (data.state) {
          this.users = data.info
        } else {
          modal.toast({
            'message': data.info,
            'duration': 1
          })
        }
      }, error => {
        console.log(error)
      })
    },
    // 处理好友请求
    handleRequest (friendId, flag) {
      store.dispatch('getUserInfo').then(userInfo => {
        return updateAddFriendRequest(userInfo.id, friendId, flag)
      }).then(({ data }) => {
        if (data.state) {
          modal.toast({
            'message': data.info,
            'duration': 1
          })
          this.loadRequests()
        }
      }, error => {
        console.log(error)
      })
    }
  },
  components: {
    WxcButton,
    WxcMinibar
  }
}
</script>

<style scoped>
  .wrapper {
  }
  .no-user {
    text-align: center;
    margin-top: 100px;
  }
  .user {
    padding-top: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
    padding-left: 30px;
    flex-direction: row;
    justify-content: space-between;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #dddddd;
  }
</style>
