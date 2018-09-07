<template>
  <div class="wrapper">
    <text class="title">注册</text>
    <wxc-cell label="账号" :has-arrow="false" :has-margin="true">
      <input slot="title" placeholder="请填写账号" v-model="account"/>
    </wxc-cell>
    <wxc-cell label="密码" :has-arrow="false" :has-margin="true">
      <input slot="title" placeholder="请填写密码" type="password" v-model="password"/>
    </wxc-cell>
    <text class="goto-login" @click="gotoLogin">已有有账号，去登录</text>
    <div class="row-center">
      <WxcButton class="commit-bt" type="blue" text="注册" @click.native="register"></WxcButton>
    </div>
  </div>
</template>

<script>
import {
  WxcButton,
  WxcCell
} from 'weex-ui'
import { register } from './api/index'
const navigator = weex.requireModule('navigator')
const modal = weex.requireModule('modal')
export default {
  name: 'Register',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  created () {
  },
  methods: {
    register (e) {
      if (!this.account || this.account.length === 0) {
        modal.toast({
          message: '请输入账号'
        })
      } else if (!this.password || this.password.length === 0) {
        modal.toast({
          message: '请输入密码'
        })
      } else {
        register(this.account, this.password).then(({ data }) => {
          if (data.state === true) {
            this.gotoLogin()
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
    gotoLogin (e) {
      navigator.pop()
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
  .goto-login {
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
