<template>
  <div class="wrapper">
    <text class="title">登录</text>
    <wxc-cell label="账号" :has-arrow="false" :has-margin="true">
      <input slot="title" placeholder="请填写账号" v-model="account"/>
    </wxc-cell>
    <wxc-cell label="密码" :has-arrow="false" :has-margin="true">
      <input slot="title" placeholder="请填写密码" type="password" v-model="password"/>
    </wxc-cell>
    <text class="goto-register" @click="gotoRegister">还没有账号</text>
    <div class="row-center">
      <WxcButton type="blue" text="登录" @click.native="login"></WxcButton>
    </div>
  </div>
</template>

<script>
import {
  WxcButton,
  WxcCell
} from 'weex-ui'
import {
  login
} from './api/index'
import store from './store/index'
import {getEntryUrl} from './util/util'
const navigator = weex.requireModule('navigator')
const modal = weex.requireModule('modal')
export default {
  name: 'Login',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  created () {
    store.dispatch('getUserInfo').then(userInfo => {
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
          console.log('login data:', data)
          if (data.state === true) {
            store.commit('setUserInfo', data.info)
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
    // 跳转到注册页面
    gotoRegister (e) {
      navigator.push({
        url: getEntryUrl('register'),
        animated: 'true'
      }, event => {
      })
    },
    // 跳转到通讯录页面
    gotoFriendList (e) {
      navigator.push({
        url: getEntryUrl('friendList'),
        animated: 'true'
      }, event => {
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
  .goto-register {
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
    color: #238FFF;
  }
  .row-center {
    flex-direction: row;
    justify-content: center;
  }
</style>
