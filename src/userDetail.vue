<template>
  <div class="wrapper">
    <wxc-minibar title="好友详情" style="padding-top: 30px;" background-color="#009ff0" text-color="#FFFFFF" right-text=""></wxc-minibar>
    <div v-if="userInfo !== null" class='user-center-wrap'>
      <div class="user-info-wrap">
        <image class="avatar" :src="userInfo.avatar || gConfig.defaultValues.avatar"></image>
        <div class='name-wrap'>
          <text>{{userInfo.nickname || gConfig.defaultValues.nickName}}</text>
          <text>{{userInfo.account}}</text>
        </div>
      </div>
      <div class='entry-wrap'>
        <text class="entry-row" @click="gotoAlbum">相册</text>
      </div>
      <text class="logout" @click="removeFriend">删除好友</text>
    </div>
  </div>
</template>

<script>
import {
  WxcMinibar,
  WxcButton
} from 'weex-ui'
import Tab from './components/Tab'
import {getEntryUrl, getConfig} from './util/util'
import store from './store/index'
import {removeFriend} from './api/index'
const navigator = weex.requireModule('navigator')
const modal = weex.requireModule('modal')
export default {
  name: 'UserDetail',
  data () {
    return {
      gConfig: getConfig(),
      userInfo: null
    }
  },
  mounted () {
    store.dispatch('getViewUserInfo').then(userInfo => {
      this.userInfo = userInfo
    })
  },
  methods: {
    // 跳转到个人相册
    gotoAlbum () {
      store.commit('setViewAlumUserAccount', this.userInfo.account)
      navigator.push({
        url: getEntryUrl('album'),
        animated: 'true'
      }, event => {
      })
    },
    // 删除好友
    removeFriend () {
      store.dispatch('getUserInfo').then(userInfo => {
        return removeFriend(userInfo.id, this.userInfo.id)
      }).then(({data}) => {
        modal.toast({message: data.info})
        navigator.pop()
      })
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
