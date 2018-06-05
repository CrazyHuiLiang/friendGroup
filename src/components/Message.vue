<template>
  <div class="message" :class="[platform === 'ios' ? 'is-ios' : '']">
    <div class="left">
      <image class="avatar" :src="userInfo.avatar"></image>
    </div>
    <div class="right">
      <text class="name">{{userInfo.nickName}}</text>
      <text class="content">{{message.content}}</text>
      <image class="image" v-for="img in message.images" resize="cover" :src="img" :key="img"></image>
      <div class="time-container">
        <text class="time">1分钟前</text>
        <image class="favour-comment" :src="ui.favourComment"></image>
      </div>
    </div>
  </div>
</template>

<script>
// const navigator = weex.requireModule('navigator')
import { getImagePath } from '../util/util'
export default {
  name: 'Message',
  data () {
    return {
      ui: {
        favourComment: getImagePath('favour-comment', '.png'),
        favour: getImagePath('favour', '.png')
      },
      platform: weex.config.env.platform.toLowerCase()
    }
  },
  props: {
    userInfo: null,
    message: null
  },
  beforeCreate () {
    // const domModule = weex.requireModule('dom')
    // domModule.addRule('fontFace', {
    //   'fontFamily': "iconfont",
    //   'src': "url('http://at.alicdn.com/t/font_571013_3jfs8b3sidxwdn29.ttf')"
    // })
  },
  methods: {
    onBack () {
      // navigator.pop({
      //   animated: 'true'
      // })
    }
  }
}
</script>

<style scoped>
  .message {
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    flex-direction: row;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: #e1e1df;
  }
  .left {
    width: 85px;
  }
  .right {
    margin-left: 20px;
    flex: 1;
    line-height: 40px;
  }
  .name {
    font-size: 30px;
    color: #586b96;
    line-height: 40px;
  }
  .content {
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 22px;
    color: #000000;
    line-height: 40px;
  }
  .avatar {
    width: 85px;
    height: 85px;
  }
  /*.iconfont {*/
    /*font-family: iconfont;*/
  /*}*/
  /*.navbar {*/
    /*height: 88px;*/
    /*background-color: #50e3a4;*/
    /*flex-direction: row;*/
    /*justify-content: space-between;*/
    /*align-items: center;*/
    /*padding-left: 20px;*/
    /*padding-right: 20px;*/
  /*}*/
  /*.is-ios {*/
    /*height: 128px;*/
    /*padding-top: 40px;*/
  /*}*/
  /*.navbar-title {*/
    /*color: #FFFFFF;*/
    /*font-size: 32px;*/
  /*}*/
  /*.navbar-icon {*/
    /*color: #FFFFFF;*/
    /*font-size: 36px;*/
  /*}*/

  .image {
    width: 300px;
    height: 300px;
  }
  .time-container {
    margin-top: 20px;
    margin-bottom: 20px;
    flex-direction: row;
    justify-content: space-between;
  }
  .time {
    font-size: 20px;
    color: #747474;
  }
  .favour-comment {
    width: 40px;
    height: 30px;
  }
</style>
