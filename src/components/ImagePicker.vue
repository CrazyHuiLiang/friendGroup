<template>
  <div class="image-picker" hidden>
  </div>
</template>

<script>
let modal = weex.requireModule('modal')
let imagePicker = weex.requireModule('imagePicker')
export default {
  name: 'ImagePicker',
  methods: {
    pick (callback) {
      if (WXEnvironment.platform === 'Web') {
        this.webPick(callback)
      } else if (WXEnvironment.platform === 'android') {
        modal.toast({ message: '功能即将上线，敬请期待' })
      } else {
        imagePicker.pick((data) => {
          let url = data// 'data:image/jpeg;base64,' + data
          callback(url)
        })
      }
    },
    webPick (callback) {
      let imagePicker = document.querySelector('.image-picker')
      let input = document.createElement('input')
      input.accept = 'image/jpeg, image/gif, image/png'
      input.type = 'file'
      imagePicker.appendChild(input)
      input.onchange = (e) => {
        let files = input.files
        if (files.length > 0) {
          let file = files[0]
          let reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = () => {
            imagePicker.removeChild(input)
            callback(reader.result)
          }
        }
      }
      let clickEvent = document.createEvent('MouseEvents')
      clickEvent.initMouseEvent('click')
      input.dispatchEvent(clickEvent)
    }
  }
}
</script>

<style>
</style>
