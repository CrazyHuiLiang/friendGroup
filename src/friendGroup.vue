<template>
  <div class="wrapper" :class="[platform === 'ios' ? 'is-ios' : '']">
    <wxc-minibar title="朋友圈" style="padding-top: 30px;" background-color="#009ff0" text-color="#FFFFFF">
      <div class="add-message-container" slot="right" @click="gotoAddMessage">
        <image class="add-message" :src="ui.addMassage"></image>
      </div>
    </wxc-minibar>
    <list v-if="userInfo" class="page-content" :style="{height: ui.pageHeight + 'px'}">
      <cell>
        <image class="user-background" :src="userInfo.avatar" resize="cover"></image>
      </cell>
      <cell class="user-info-container">
        <!--<div class="avatar-container">-->
          <!--<image class="avatar" :src="userInfo.avatar" resize="cover"></image>-->
        <!--</div>-->
        <text class="nickname">{{userInfo.nickname}}</text>
      </cell>
      <cell class="message-container">
        <Message class="row" v-for="(item, index) in list" :message="item" :ref="'item'+index" :key="item.id" @reloadData="reloadData"></Message>
      </cell>
    </list>
    <image-picker ref="imagePicker"></image-picker>
  </div>
</template>

<script>
import {getImagePath, getEntryUrl} from './util/util'
import {
  listFriendsGroup
} from './api/index'
import ImagePicker from './components/ImagePicker'
import Message from './components/Message.vue'
import store from './store/index'
import {
  Utils,
  WxcButton,
  WxcMinibar,
  WxcCell
} from 'weex-ui'
let navigator = weex.requireModule('navigator')
// let modal = weex.requireModule('modal')

export default {
  name: 'FriendGroup',
  data () {
    return {
      ui: {
        pageHeight: Utils.env.getPageHeight(),
        back: getImagePath('back', '.png'),
        addMassage: getImagePath('addMessage', '.png')
      },
      platform: weex.config.env.platform.toLowerCase(),
      userInfo: null,
      list: []
    }
  },
  mounted () {
    store.dispatch('getUserInfo').then(userInfo => {
      this.userInfo = userInfo
      // 获取朋友圈列表
      this.listFriendsGroup()
    })
  },
  methods: {
    listFriendsGroup () {
      listFriendsGroup(this.userInfo.id, 0, 10).then(({data}) => {
        if (data.state) {
          this.list = data.info
        } else {
          console.log(data.info)
        }
      }, error => {
        console.error(error)
      })
    },
    gotoAddMessage () {
      navigator.push({
        url: getEntryUrl('add'),
        animated: 'true'
      }, event => {
      })
    },
    reloadData () {
      this.listFriendsGroup()
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
    /*height: 1335px;*/
    /*background: gray;*/
  }
  .user-background {
    background-color: #666666;
    width: 750px;
    height: 500px;
  }
  .user-info-container {
    /*flex-direction: row-reverse;*/
    /*margin-top: -100px;*/
    /*margin-right: 20px;*/
    border-bottom-color: #dddddd;
    border-bottom-style: solid;
    border-bottom-width: 2px;
  }
  /*.avatar-container {*/
    /*width: 150px;*/
    /*height: 150px;*/
    /*background-color: #ffffff;*/
    /*padding-top: 4px;*/
    /*padding-right: 4px;*/
    /*padding-bottom: 4px;*/
    /*padding-left: 4px;*/
    /*border-style: solid;*/
    /*border-color: #cccccc;*/
    /*border-width: 2px;*/
  /*}*/
  /*.avatar {*/
    /*width: 138px;*/
    /*height: 138px;*/
  /*}*/
  .nickname {
    /*color: #ffffff;*/
    color: #000000;
    font-size: 36px;
    margin-left: 45px;
    text-align: left;
    line-height: 100px;
  }
  .message-container {
  }
</style>
