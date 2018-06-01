<template>
  <div class="wrapper">
    <div class="header">
      <div class="back-container" @click="goBack">
        <!--<image class="back-icon" :src="ui.back"></image>-->
        <text class="back-title">取消</text>
      </div>
      <text class="title">发朋友圈</text>
      <div class="add-message-container" @click="gotoAddMessage">
        <image class="add-message" :src="ui.addMassage"></image>
      </div>
    </div>
    <scroller class="page-content">
      <text>添加朋友圈</text>
      <text>添加朋友圈</text>
      <text>添加朋友圈</text>
      <text>添加朋友圈</text>
      <text>添加朋友圈</text>
      <text>添加朋友圈</text>
      <text>添加朋友圈</text>
      <text>添加朋友圈</text>
      <text>添加朋友圈</text>
      <text>添加朋友圈</text>
    </scroller>
  </div>
</template>

<script>
import {getImagePath} from './util/util'
import Message from './components/Message.vue'
let navigator = weex.requireModule('navigator')
export default {
  name: 'Add',
  data () {
    return {
      ui: {
        back: getImagePath('back', '.png'),
        addMassage: getImagePath('addMessage', '.png')
      },
      userInfo: {
        nickname: '点我更改昵称',
        avatar: getImagePath('defaultAvatar', '.png'),
        background: getImagePath('defaultBackground', '.png')
      },
      list: []
    }
  },
  mounted () {
    this.list = ['', '']
  },
  methods: {
    goBack () {
      navigator.pop({
        animated: 'true'
      })
    },
    gotoAddMessage () {
      navigator.push({
        url: 'http://dotwe.org/raw/dist/519962541fcf6acd911986357ad9c2ed.js',
        animated: 'true'
      }, event => {
        // modal.toast({ message: 'callback: ' + event })
      })
    }
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
    top: -100px;
    right: 20px;
  }
  .avatar {
    width: 150px;
    height: 150px;
    border-style: solid;
    border-color: #ffffff;
    border-width: 4px;
  }
  .nickname {
    color: #ffffff;
    font-size: 36px;
    margin-right: 45px;
    text-align: right;
    line-height: 100px;
  }
</style>
