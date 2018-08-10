<template>
  <div class="wrapper">
    <wxc-minibar title="个人中心"
                 background-color="#111111"
                 text-color="#FFFFFF"
                 left-text=""
                 right-text=""></wxc-minibar>
    <div v-if="userInfo !== null" class='user-center-wrap'>
      <div class="user-info-wrap">
        <image class="avatar" :src="userInfo.avatar"></image>
        <div class='name-wrap'>
          <text>{{userInfo.nickname}}</text>
          <text>{{userInfo.account}}</text>
        </div>
      </div>

      <div class='entry-wrap'>
        <text class="entry-row" @click="gotoFriendGroup">朋友圈</text>
        <text class="entry-row" @click="gotoAlbum">相册</text>
        <text class="entry-row" @click="gotoUserSetting">个人设置</text>
      </div>

      <text class="logout" @click="logout">退出登录</text>
    </div>
    <tab class="tab" :activeIndex="1" @tabClicked="tabClicked"></tab>
  </div>
</template>

<script>
import {
  WxcMinibar,
  WxcButton
} from 'weex-ui'
import Tab from './components/Tab'
import {getEntryUrl} from './util/util'
import store from './store/index'
const navigator = weex.requireModule('navigator')
export default {
  name: '',
  data () {
    return {
      userInfo: null
    }
  },
  mounted () {
    store.dispatch('getUserInfo').then(userInfo => {
      this.userInfo = userInfo
      console.log(userInfo)
    })
  },
  methods: {
    // 切换tab
    tabClicked (index) {
      if (index === 0) {
        navigator.push({
          url: getEntryUrl('friendList'),
          animated: 'true'
        }, event => {
          // modal.toast({ message: 'callback: ' + event })
        })
      }
    },
    // 跳转到朋友圈
    gotoFriendGroup () {
      navigator.push({
        url: getEntryUrl('friendGroup'),
        animated: 'true'
      }, event => {
        // modal.toast({ message: 'callback: ' + event })
      })
    },
    // 跳转到个人相册
    gotoAlbum () {
      navigator.push({
        url: getEntryUrl('album'),
        animated: 'true'
      }, event => {
        // modal.toast({ message: 'callback: ' + event })
      })
    },
    gotoUserSetting () {
      navigator.push({
        url: getEntryUrl('userSetting'),
        animated: 'true'
      }, event => {
        // modal.toast({ message: 'callback: ' + event })
      })
    },
    // 退出登录
    logout () {
      console.log('logout')
    }
  },
  components: {
    Tab,
    WxcMinibar,
    WxcButton
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
  .user-center-wrap {
    background-color: #eeeeee;
  }
  .user-info-wrap {
    flex-direction: row;
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-bottom-color: grey;
    background-color: #ffffff;
  }
  .avatar {
    width: 100px;
    height: 100px;
    background-color: #eeeeee;
    margin-right: 20px;
  }
  .name-wrap {
    flex-direction: column;
  }
  .entry-wrap {
    margin-top: 40px;
    margin-bottom: 40px;
    background-color: #ffffff;
  }
  .entry-row {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    height: 80px;
    line-height: 80px;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-bottom-color: #eeeeee;
  }
  .logout {
    text-align: center;
    color: white;
    background-color: red;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
  }
</style>
