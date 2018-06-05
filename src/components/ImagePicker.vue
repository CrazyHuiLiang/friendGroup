<template>
  <div class="image-picker">
  </div>
</template>

<script>
let modal = weex.requireModule('modal')
export default {
  name: 'ImagePicker',
  methods: {
    pick (callback) {
      if (WXEnvironment.platform === 'Web') {
        this.webPick(callback)
      } else if (WXEnvironment.platform === 'android') {
        modal.toast({ message: '功能即将上线，敬请期待' })
      } else {
        modal.toast({ message: '功能即将上线，敬请期待' })
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
  .image-picker {
    display: none;
  }
</style>
