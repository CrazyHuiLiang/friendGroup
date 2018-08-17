<template>
  <div class="wrapper">
    <wxc-minibar title="通讯录"
                 background-color="#009ff0"
                 text-color="#FFFFFF"
                 leftButton=""
                 right-text="添加"
                 @wxcMinibarRightButtonClicked="gotoSearchUser" style="padding-top: 30px;"></wxc-minibar>
    <div class="new-friend" @click='gotoNewFriend'>
      <text class="new-frined-text">新的朋友</text>
    </div>
    <div class="friend-list">
      <div class="friend" v-for="(user) in friendsList" :key="user.id" @click="userClicked(user)">
        <image style="width:50px;height:50px" :src="user.avatar"></image>
        <text style="flex: 1; margin-left: 20px;">{{user.nickname}}</text>
      </div>
    </div>
    <tab class="tab" :activeIndex="0" @tabClicked="tabClicked"></tab>
  </div>
</template>

<script>
import {
  WxcButton,
  WxcMinibar
} from 'weex-ui'
import store from './store/index'
import Tab from './components/Tab'
import {getEntryUrl} from './util/util'
import {getFriendsList} from './api/index'
const navigator = weex.requireModule('navigator')
export default {
  name: '',
  data () {
    return {
      friendsList: []
    }
  },
  created () {
    this.loadFiendsList()
  },
  methods: {
    tabClicked (index) {
      if (index === 1) {
        navigator.push({
          url: getEntryUrl('userCenter'),
          animated: 'true'
        }, event => {
          // modal.toast({ message: 'callback: ' + event })
        })
      }
    },
    gotoSearchUser () {
      navigator.push({
        url: getEntryUrl('searchUser'),
        animated: 'true'
      }, event => {
        // modal.toast({ message: 'callback: ' + event })
      })
    },
    gotoNewFriend () {
      navigator.push({
        url: getEntryUrl('newFriend'),
        animated: 'true'
      }, event => {
        // modal.toast({ message: 'callback: ' + event })
      })
    },

    loadFiendsList () {
      store.dispatch('getUserInfo').then(userInfo => {
        return getFriendsList(userInfo.id)
      }).then(({data}) => {
        if (data.state) {
          this.friendsList = data.info
        }
      }, (error) => {
        console.log(error)
      })
    },
    userClicked (user) {
      store.commit('setViewUserInfo', user)
      navigator.push({
        url: getEntryUrl('userDetail'),
        animated: 'true'
      }, event => {
        // modal.toast({ message: 'callback: ' + event })
      })
    }
  },
  components: {
    Tab,
    WxcButton,
    WxcMinibar
  }
}
</script>

<style scoped>
  .wrapper {
  }

  .tab {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .new-friend {
    width: 750px;
    height: 80px;
    font-size: 30px;
    background-color: #dddddd;
  }
  .new-frined-text {
    line-height: 80px;
    text-align: center;
  }

  .friend {
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
