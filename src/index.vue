<template>
  <div class="wrapper">
    <div class="header">
      <div class="back-container">
        <image class="back-icon" src="/source/img/back.png"></image>
        <text class="back-title">发现</text>
      </div>
      <text class="title">朋友圈</text>
      <div class="add-message-container">
        <image class="add-message" src="/source/img/发朋友圈.png"></image>
      </div>
    </div>

    <scroller class="page-content">
      <image class="user-background" :src="userInfo.background"></image>
      <div class="user-info-container">
        <image class="avatar" :src="userInfo.avatar"></image>
        <text class="nickname">{{userInfo.nickname}}</text>
      </div>
      <div class="message-container">
        <Message class="row" v-for="(item, index) in list" :ref="'item'+index" :key="index"></Message>
      </div>
    </scroller>
  </div>
</template>

<script>
import Message from './components/Message.vue'
export default {
  name: 'App',
  data () {
    return {
      userInfo: {
        nickname: '点我更改昵称',
        avatar: '/source/img/defaultAvatar.png',
        background: '/source/img/defaultBackground.png'
      },
      list: []
    }
  },
  mounted () {
    this.list = ['', '']
  },
  components: {
    Message
  }
}
</script>

<style scoped>
  .wrapper {
    /*justify-content: center;*/
    /*align-items: center;*/
  }
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 750px;
    height: 100px;
    background-color: #373a3f;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
  }
  .back-container {
    flex: 1;
    width: 100px;
    height: 36px;
    flex-direction: row;
    align-items: center;
  }
  .back-icon {
    width: 20px;
    height: 35px;
  }
  .back-title {
    margin-left: 15px;
    color: #ffffff;
  }
  .title {
    flex: 2;
    color: #ffffff;
    text-align: center;
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
    width: 100%;
    height: 1335px;
    /*background: gray;*/
  }
  .user-background {
    width: 100%;
    height: 500px;
  }
  .user-info-container {
    flex-direction: row-reverse;
    top: -100px;
    right: 20px;
  }
  .avatar {
    width: 150px;
    height: 150px;
    border: 4px solid #ffffff;
  }
  .nickname {
    color: #ffffff;
    font-size: 36px;
    margin-right: 45px;
    text-align: right;
    line-height: 100px;
  }
</style>
