<template>
  <div class="wrapper" :class="[platform === 'ios' ? 'is-ios' : '']">
    <wxc-minibar title="个人相册" style="padding-top: 30px;"
                 background-color="#009ff0"
                 text-color="#FFFFFF">
    </wxc-minibar>

    <list v-if="userInfo" class="page-content">
      <cell>
        <image class="user-background" :src="userInfo.avatar" resize="cover"></image>
      </cell>
      <cell class="user-info-container">
        <div class="avatar-container">
          <image class="avatar" :src="userInfo.avatar" resize="cover"></image>
        </div>
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
import {getImagePath} from './util/util'
import {
  searchUserWithAccount,
  listUserAlbum
} from './api/index'
import ImagePicker from './components/ImagePicker'
import Message from './components/Message.vue'
import store from './store/index'
import {
  WxcButton,
  WxcMinibar,
  WxcCell
} from 'weex-ui'
// let navigator = weex.requireModule('navigator')
// let modal = weex.requireModule('modal')

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
    store.dispatch('getViewAlbumUserAccount').then(account => {
      return searchUserWithAccount(account)
    }).then(({data}) => {
      if (data.state && data.info.length > 0) {
        this.userInfo = data.info[0]
        // 获取个人相册
        this.listUserAlbum()
      }
    })
  },
  methods: {
    listUserAlbum () {
      listUserAlbum(this.userInfo.id, 0, 10).then(({data}) => {
        if (data.state) {
          this.list = data.info
        } else {
          console.log(data.info)
        }
      }, error => {
        console.error(error)
      })
    },
    reloadData () {
      this.listUserAlbum()
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
