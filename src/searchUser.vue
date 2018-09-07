<template>
  <div class="wrapper">
    <wxc-minibar title="添加朋友" style="padding-top: 30px;" background-color="#009ff0" text-color="#FFFFFF"></wxc-minibar>
    <wxc-searchbar ref="wxc-searchbar" @wxcSearchbarCancelClicked="cancelSearch" @wxcSearchbarInputReturned="search"></wxc-searchbar>
    <div>
      <text v-if="user===null" class="no-user">请输入好友账号进行搜索</text>
      <div v-else class="user">
        <image style="width:50px;height:50px" :src="user.avatar || gConfig.defaultValues.avatar"></image>
        <text style="flex: 1; margin-left: 20px;">{{user.nickname || gConfig.defaultValues.nickName}}</text>
        <wxc-button text="添加好友" type='blue' size='small' @click.native="requestAddFriend"></wxc-button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  WxcButton,
  WxcMinibar,
  WxcSearchbar
} from 'weex-ui'
import {
  searchUserWithAccount,
  addFriendWithUserId
} from './api/index'
import {getConfig} from './util/util'
import store from './store/index'
const modal = weex.requireModule('modal')
export default {
  name: 'SearchUser',
  props: {
  },
  data () {
    return {
      gConfig: getConfig(),
      searchKey: '',
      user: null
    }
  },
  mounted () {
  },
  methods: {
    cancelSearch () {
    },
    search (e) {
      searchUserWithAccount(e.value).then(({data}) => {
        if (data.state) {
          this.user = data.info[0]
        } else {
          modal.toast({
            'message': data.info,
            'duration': 1
          })
        }
      }, error => {
        console.log(error)
      })
    },
    requestAddFriend (e) {
      store.dispatch('getUserInfo').then(userInfo => {
        return addFriendWithUserId(userInfo.id, this.user.id)
      }).then(({ data }) => {
        if (data.state) {
          modal.toast({
            'message': data.info,
            'duration': 1
          })
        }
      }, error => {
        console.log(error)
      })
    }
  },
  components: {
    WxcButton,
    WxcMinibar,
    WxcSearchbar
  }
}
</script>

<style scoped>
  .wrapper {
  }
  .no-user {
    text-align: center;
    margin-top: 100px;
  }
  .user {
    padding-top: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
    padding-left: 30px;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
