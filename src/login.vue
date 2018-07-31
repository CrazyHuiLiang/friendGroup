<template>
  <div class="wrapper">
    <text class="title">登录</text>
    <wxc-cell label="账号"
              :has-arrow="false"
              :has-margin="true">
      <input slot="title" placeholder="请填写账号" v-model="account"/>
    </wxc-cell>
    <wxc-cell label="密码"
              :has-arrow="false"
              :has-margin="true">
      <input slot="title" placeholder="请填写密码" type="password" v-model="password"/>
    </wxc-cell>
    <text @click="gotoRegister">还没有账号</text>
    <WxcButton type="blue" text="登录" @wxcButtonClicked="login"></WxcButton>
  </div>
</template>

<script>
import {
  WxcButton,
  WxcCell
} from 'weex-ui'
import { login } from './api/index'
import store from './store/index'
import {getEntryUrl} from './util/util'
const navigator = weex.requireModule('navigator')
const modal = weex.requireModule('modal')
export default {
  name: 'login',
  store,
  data () {
    return {
      account: 'crazyhuiliang',
      password: 'abcd1234'
    }
  },
  mounted () {
    this.$store.dispatch('getUserInfo').then(userInfo => {
      if (userInfo) {
        this.gotoFriendList()
      }
    })
  },
  methods: {
    login (e) {
      if (!this.account || this.account.length === 0) {
        modal.toast({
          message: '请输入账号'
        })
      } else if (!this.password || this.password.length === 0) {
        modal.toast({
          message: '请输入密码'
        })
      } else {
        login(this.account, this.password).then(({data}) => {
          if (data.state === true) {
            this.$store.commit('setUserInfo', data.info)
            this.gotoFriendList()
          } else {
            modal.toast({
              message: data.info
            })
          }
        }, error => {
          console.log(error)
        })
      }
    },
    gotoRegister (e) {
      navigator.push({
        url: getEntryUrl('register'),
        animated: 'true'
      }, event => {
        // modal.toast({ message: 'callback: ' + event })
      })
    },
    gotoFriendList (e) {
      navigator.push({
        url: getEntryUrl('friendList'),
        animated: 'true'
      }, event => {
        // modal.toast({ message: 'callback: ' + event })
      })
    }
  },
  components: {
    WxcButton,
    WxcCell
  }
}
</script>

<style scoped>
  .wrapper {
  }
  .title {
    font-size: 80px;
    text-align: center;
    margin-top: 100px;
    margin-bottom: 100px;
  }
</style>
