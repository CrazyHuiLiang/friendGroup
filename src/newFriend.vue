<template>
  <div class="wrapper">
    <wxc-minibar title="新的朋友" style="padding-top: 30px;"
                 background-color="#009ff0"
                 text-color="#FFFFFF"
                 @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
                 @wxcMinibarRightButtonClicked="minibarRightButtonClick"></wxc-minibar>
    <div>
      <text v-if="users===null" class="no-user">暂无内容</text>
      <div v-else>
        <div v-for="user in users" :key="user.id" class="user">
          <image style="width:50px;height:50px" :src="user.avatar"></image>
          <text style="flex: 1; margin-left: 20px;">{{user.nickname}}</text>
          <wxc-button v-if="user.flag === 0" text="添加" type='blue' size='small' @wxcButtonClicked="wxcButtonClicked(user.userId, 1)"></wxc-button>
          <wxc-button v-if="user.flag === 0" text="拒绝" type='red' size='small' @wxcButtonClicked="wxcButtonClicked(user.userId, 2)"></wxc-button>
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
import {
  selectAddMyFriendRequest,
  updateAddFriendRequest
} from './api/index'
import store from './store/index'
const modal = weex.requireModule('modal')
// const navigator = weex.requireModule('navigator')

export default {
  name: '',
  props: {
  },
  data () {
    return {
      users: null
    }
  },
  mounted () {
    this.selectAddMyFriendRequest()
  },
  methods: {
    minibarLeftButtonClick () {
      // navigator.pop()
    },
    minibarRightButtonClick () {
      modal.toast({ 'message': 'click rightButton!', 'duration': 1 })
    },
    selectAddMyFriendRequest (e) {
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
    wxcButtonClicked (friendId, flag) {
      store.dispatch('getUserInfo').then(userInfo => {
        return updateAddFriendRequest(userInfo.id, friendId, flag)
      }).then(({ data }) => {
        if (data.state) {
          modal.toast({
            'message': data.info,
            'duration': 1
          })
          this.selectAddMyFriendRequest()
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
