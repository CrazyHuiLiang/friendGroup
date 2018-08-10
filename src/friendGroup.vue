<template>
  <div class="wrapper" :class="[platform === 'ios' ? 'is-ios' : '']">
    <wxc-minibar title="朋友圈"
                 background-color="#009ff0"
                 text-color="#FFFFFF">
      <div class="add-message-container" slot="right" @click="gotoAddMessage">
        <image class="add-message" :src="ui.addMassage"></image>
      </div>
    </wxc-minibar>

    <scroller v-if="userInfo" class="page-content">
      <image class="user-background" :src="userInfo.background" @click="userBackgroundClicked"></image>
      <div class="user-info-container">
        <div class="avatar-container">
          <image class="avatar" :src="userInfo.avatar" @click="userAvatarClicked"></image>
        </div>
        <text class="nickname" @click="nickNameClicked">{{userInfo.nickName}}</text>
      </div>
      <div class="message-container">
        <Message class="row" v-for="(item, index) in list" :userInfo="userInfo" :message="item" :ref="'item'+index" :key="index"></Message>
      </div>
    </scroller>
    <image-picker ref="imagePicker"></image-picker>
  </div>
</template>

<script>
import {getImagePath, getEntryUrl} from './util/util'
import { getMessageList, getUserInfo, updateUserInfo } from './api/index'
import ImagePicker from './components/ImagePicker'
import Message from './components/Message.vue'
import {
  WxcButton,
  WxcMinibar,
  WxcCell
} from 'weex-ui'
let navigator = weex.requireModule('navigator')
let modal = weex.requireModule('modal')

export default {
  name: 'App',
  data () {
    return {
      ui: {
        back: getImagePath('back', '.png'),
        addMassage: getImagePath('addMessage', '.png')
      },
      platform: weex.config.env.platform.toLowerCase(),
      userInfo: null,
      list: []
    }
  },
  mounted () {
    getUserInfo((response) => {
      this.userInfo = response
    })
    getMessageList((response) => {
      this.list = response
    })
  },
  methods: {
    gotoAddMessage () {
      navigator.push({
        url: getEntryUrl('add'),
        animated: 'true'
      }, event => {
        // modal.toast({ message: 'callback: ' + event })
      })
    },
    nickNameClicked () {
      modal.prompt({
        message: '请输入您的昵称',
        okTitle: '确定',
        cancelTitle: '取消'
      }, r => {
        if (r.result === '确定') {
          updateUserInfo({nickName: r.data}, newInfo => {
            this.userInfo = newInfo
          })
        }
      })
    },
    userBackgroundClicked () {
      let imagePicker = this.$refs.imagePicker
      imagePicker.pick((url) => {
        updateUserInfo({background: url}, newInfo => {
          this.userInfo = newInfo
        })
      })
    },
    userAvatarClicked () {
      let imagePicker = this.$refs.imagePicker
      imagePicker.pick((url) => {
        updateUserInfo({avatar: url}, newInfo => {
          this.userInfo = newInfo
        })
      })
    }
  },
  components: {
    WxcButton,
    WxcMinibar,
    WxcCell,
    ImagePicker,
    Message
  }
}
</script>

<style scoped>
  .wrapper {
    /*justify-content: center;*/
    /*align-items: center;*/
  }
  .add-message-container {
    flex: 1;
    /*justify-content: flex-end;*/
    flex-direction: row-reverse;
  }
  .add-message {
    width: 46px;
    height: 36px;
  }
  .page-content {
    width: 750px;
    height: 1335px;
    /*background: gray;*/
  }
  .user-background {
    width: 750px;
    height: 500px;
  }
  .user-info-container {
    flex-direction: row-reverse;
    margin-top: -100px;
    margin-right: 20px;
  }
  .avatar-container {
    width: 150px;
    height: 150px;
    background-color: #ffffff;
    padding-top: 4px;
    padding-right: 4px;
    padding-bottom: 4px;
    padding-left: 4px;
    border-style: solid;
    border-color: #cccccc;
    border-width: 2px;
  }
  .avatar {
    width: 138px;
    height: 138px;
  }
  .nickname {
    color: #ffffff;
    font-size: 36px;
    margin-right: 45px;
    text-align: right;
    line-height: 100px;
  }
  .message-container {
  }
</style>
