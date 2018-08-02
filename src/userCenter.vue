<template>
  <div class="wrapper">
    <tab class="tab" :activeIndex="1" @tabClicked="tabClicked"></tab>
  </div>
</template>

<script>
import { WxcButton } from 'weex-ui'
import Tab from './components/Tab'
import {getEntryUrl} from './util/util'
const navigator = weex.requireModule('navigator')
export default {
  name: '',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    tabClicked (index) {
      if (index === 0) {
        navigator.push({
          url: getEntryUrl('friendList'),
          animated: 'true'
        }, event => {
          // modal.toast({ message: 'callback: ' + event })
        })
      }
    }
  },
  components: {
    Tab,
    WxcButton
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
</style>
