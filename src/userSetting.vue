<template>
  <div class="wrapper">
    <wxc-minibar title="个人设置" style="padding-top: 30px;"
                 background-color="#009ff0"
                 text-color="#FFFFFF"></wxc-minibar>

    <wxc-cell v-if="userInfo" label="头像"
              :has-arrow="true"
              @wxcCellClicked="wxcCellClicked"
              :has-top-border="false">
      <image slot="value" class="avatar" :src="userInfo.avatar"></image>
    </wxc-cell>
    <wxc-cell v-if="userInfo" label="昵称"
              :has-arrow="true"
              :has-top-border="false">
      <input slot="value" class="nickName" v-model="nickName">
      <wxc-button text="确定" type="blue" size="small" @wxcButtonClicked="wxcButtonClicked"></wxc-button>
    </wxc-cell>
    <image-picker ref="imagePicker"></image-picker>
  </div>
</template>

<script>
import {
  WxcButton,
  WxcMinibar,
  WxcCell
} from 'weex-ui'
import {
  uploadFile,
  setUserAvatar,
  setNickname
} from './api/index'
import store from './store/index'
import ImagePicker from './components/ImagePicker'
const modal = weex.requireModule('modal')
export default {
  name: '',
  props: {
  },
  data () {
    return {
      userInfo: null,
      nickName: ''
    }
  },
  mounted () {
    store.dispatch('getUserInfo').then(userInfo => {
      if (userInfo) {
        this.userInfo = userInfo
        this.nickName = userInfo.nickname
      }
    })
  },
  methods: {
    wxcCellClicked (e) {
      let imagePicker = this.$refs.imagePicker
      imagePicker.pick((file) => {
        uploadFile(file.name, file.url).then(({data}) => {
          if (data.state) {
            let imageUrl = data.info
            setUserAvatar(this.userInfo.id, imageUrl).then(({data}) => {
              modal.toast({
                message: data.info
              })
              if (data.state) {
                this.userInfo.avatar = imageUrl
                store.commit('setUserInfo', this.userInfo)
              }
            }, error => {
              console.log(error)
            })
          }
        }, error => {
          console.error(error)
        })
      })
    },
    wxcButtonClicked (e) {
      setNickname(this.userInfo.id, this.nickName).then(({data}) => {
        modal.toast({
          message: data.info
        })
        if (data.state) {
          this.userInfo.nickname = this.nickName
          store.commit('setUserInfo', this.userInfo)
        }
      }, error => {
        console.log(error)
      })
    }
  },
  components: {
    WxcButton,
    WxcMinibar,
    WxcCell,
    ImagePicker
  }
}
</script>

<style scoped>
  .wrapper {
  }
  .avatar {
    width: 120px;
    height: 120px;
  }
</style>
