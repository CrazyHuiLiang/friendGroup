<template>
  <div class="message" :class="[platform === 'ios' ? 'is-ios' : '']">
    <div class="left">
      <image class="avatar" :src="message.userInfo.avatar"></image>
    </div>
    <div class="right">
      <text class="name">{{message.userInfo.nickname}}</text>
      <text class="content">{{message.content}}</text>
      <div class="image-wrap">
        <image class="image" v-for="(img, index) in images" resize="cover" :src="img" :key="index"></image>
      </div>
      <div class="time-container">
        <text class="time">1分钟前</text>
        <image class="favour-comment" :src="ui.favourComment"></image>
      </div>
    </div>
  </div>
</template>

<script>
import { getImagePath } from '../util/util'
export default {
  name: 'Message',
  props: {
    message: null
  },
  data () {
    return {
      ui: {
        favourComment: getImagePath('favour-comment', '.png'),
        favour: getImagePath('favour', '.png')
      },
      platform: weex.config.env.platform.toLowerCase(),
      images: []
    }
  },
  mounted () {
    this.images = JSON.parse(this.message.images)
  },
  methods: {
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
  .image-wrap {
    justify-content: left;
    align-items: start;
    flex-direction: row;
    width: 500px;
    flex-flow: wrap;
  }
  .image {
    width: 140px;
    height: 140px;
    margin-top: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
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
