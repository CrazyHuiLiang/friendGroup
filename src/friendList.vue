<template>
  <div class="wrapper">
    <wxc-minibar title="通讯录"
                 background-color="#111111"
                 text-color="#FFFFFF"
                 left-text=""
                 right-text="搜索"
                 @wxcMinibarRightButtonClicked="gotoSearchUser"></wxc-minibar>
    <div class="new-friend" @click='gotoNewFriend'>
      <text class="new-frined-text">新的朋友</text>
    </div>
    <div class="friend-list">
      <div class="friend" v-for="(item, i) in friendsList" :key="i">
        <text>{{item}}</text>
      </div>
    </div>
    <tab class="tab" :activeIndex="0" @tabClicked="tabClicked"></tab>
  </div>
</template>

<script>
import {
  WxcButton,
  WxcMinibar
} from 'weex-ui'
import Tab from './components/Tab'
import {getEntryUrl} from './util/util'
import {getFriendsList} from './api/index'
const navigator = weex.requireModule('navigator')
export default {
  name: '',
  data () {
    return {
      friendsList: []
    }
  },
  created () {
    this.loadFiendsList()
  },
  methods: {
    tabClicked (index) {
      if (index === 1) {
        navigator.push({
          url: getEntryUrl('userCenter'),
          animated: 'true'
        }, event => {
          // modal.toast({ message: 'callback: ' + event })
        })
      }
    },
    gotoSearchUser () {
      navigator.push({
        url: getEntryUrl('searchUser'),
        animated: 'true'
      }, event => {
        // modal.toast({ message: 'callback: ' + event })
      })
    },
    gotoNewFriend () {
      navigator.push({
        url: getEntryUrl('newFriend'),
        animated: 'true'
      }, event => {
        // modal.toast({ message: 'callback: ' + event })
      })
    },

    loadFiendsList () {
      getFriendsList(1).then(({data}) => {
        if (data.state) {
          this.friendsList = data.info
        }
      }, (error) => {
        console.log(error)
      })
    }
  },
  components: {
    Tab,
    WxcButton,
    WxcMinibar
  }
}
</script>

<style scoped>
  .wrapper {
  }

  .tab {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .new-friend {
    width: 750px;
    height: 80px;
    font-size: 30px;
    background: #dddddd;
  }
  .new-frined-text {
    line-height: 80px;
    text-align: center;
  }
</style>
