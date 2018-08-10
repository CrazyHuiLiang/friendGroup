<template>
  <div class="wrapper">
    <wxc-minibar left-text="取消" title="发朋友圈" right-text="确定" background-color="#009ff0" text-color="#FFFFFF" @wxcMinibarRightButtonClicked="addMessage"></wxc-minibar>
    <textarea class="textarea" :rows="3" v-model="content"></textarea>
    <div class="image-wrap">
      <image class="image" v-for="(image, index) in images" :key='index' :src="image" @click="removeImage(index)"></image>
      <div v-if="images.length < 9" class="image add-image" @click="addImage">
        <text style="text-align: center; width: 100%;font-size: 120px;color: #666666;">+</text>
      </div>
    </div>
    <wxc-loading :show="showLoading" type="default" :needMask="true" loading-text="发布中"></wxc-loading>
    <image-picker ref="imagePicker"></image-picker>
  </div>
</template>

<script>
import ImagePicker from './components/ImagePicker'
import store from './store/index'
import {
  WxcButton,
  WxcMinibar,
  WxcCell,
  WxcLoading
} from 'weex-ui'
import {
  uploadFile,
  addNew
} from './api/index'
let navigator = weex.requireModule('navigator')
export default {
  name: 'Add',
  data () {
    return {
      content: '',
      images: [],
      showLoading: false
    }
  },
  mounted () {
  },
  methods: {
    // 添加图片
    addImage () {
      let imagePicker = this.$refs.imagePicker
      imagePicker.pick(image => {
        uploadFile(image.name, image.url).then(({data}) => {
          this.images.push(data.info)
        }, error => {
          console.error(error)
        })
      })
    },
    removeImage (index) {
      this.images.splice(index, 1)
    },
    addMessage () {
      this.showLoading = true
      store.dispatch('getUserInfo').then(userInfo => {
        addNew(userInfo.id, this.content, this.images).then(({data}) => {
          this.showLoading = false
          if (data.state) {
            navigator.pop({
              animated: 'true'
            })
          } else {
            console.log(data.info)
          }
        }, error => {
          this.showLoading = false
          console.error(error)
        })
      })
    }
  },
  components: {
    WxcButton,
    WxcMinibar,
    WxcCell,
    WxcLoading,
    ImagePicker
  }
}
</script>

<style scoped>
  .wrapper {
  }

  .textarea {
    font-size: 30px;
    width: 650px;
    margin-top: 50px;
    margin-left: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    color: #666666;
    border-width: 2px;
    border-style: solid;
    border-color: #dddddd;
  }
  .image-wrap {
    width: 650px;
    margin-top: 50px;
    margin-left: 50px;
    flex-direction: row;
    flex-wrap: wrap;
    color: #666666;
  }
  .image {
    width: 160px;
    height: 160px;
    margin-top: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
  }
  .add-image {
    background-color: #dddddd;
    text-align: center;
    flex-direction: row;
    align-items: center;
  }
</style>
