<template>
  <div class="message" :class="[platform === 'ios' ? 'is-ios' : '']">
    <div class="left">
      <image class="avatar" :src="message.userInfo.avatar"></image>
    </div>
    <div class="right">
      <text class="name">{{message.userInfo.nickname}}</text>
      <text class="content">{{message.content}}</text>
      <div class="image-wrap">
        <image class="image" v-for="(img, index) in images" resize="cover" :src="img" :key="index"></image>
      </div>
      <div class="time-container">
        <text class="time">{{time}}</text>
        <text v-if="myPraiseIndex >= 0" @click="praiseNew">取消点赞</text>
        <text v-else @click="praiseNew">点赞</text>
        <image class="favour-comment" :src="ui.favourComment" @click="commentIconClicked"></image>
      </div>
      <div class="praise-wrap" v-if="message.praises.length > 0">
        <image class="praise-icon" :src="ui.favour"></image>
        <text class="praise-name" v-for="(p) in message.praises" :key="p.id">{{p.nickname}} </text>
      </div>
      <div class="comment-wrap">
        <div class="comment" v-for="comment in message.comments" :key="comment.id" @click="commentClicked(comment)">
          <text class="comment-user" v-if="comment.userB">{{comment.userA.nickname}} 回复 {{comment.userB.nickname}}:</text>
          <text class="comment-user" v-else>{{comment.userA.nickname}}:</text>
          <text>{{comment.comment}}</text>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getImagePath } from '../util/util'
import {
  praiseNew,
  addComment
} from '../api/index'
import {
} from 'weex-ui'
import store from '../store/index'
let modal = weex.requireModule('modal')
export default {
  name: 'Message',
  props: {
    message: null
  },
  data () {
    return {
      ui: {
        favourComment: getImagePath('favour-comment', '.png'),
        favour: getImagePath('favour', '.png')
      },
      platform: weex.config.env.platform.toLowerCase(),
      userInfo: {},
      images: []
    }
  },
  computed: {
    time () {
      if (this.message) {
        let date = new Date(this.message.createdTime * 1000)
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      }
    },
    myPraiseIndex () {
      for (let i = 0; i < this.message.praises.length; i++) {
        let praise = this.message.praises[i]
        if (praise.userId === this.userInfo.id) {
          return i
        }
      }
      return -1
    }
  },
  mounted () {
    store.dispatch('getUserInfo').then(userInfo => {
      this.userInfo = userInfo
    })
    this.images = JSON.parse(this.message.images)
  },
  methods: {
    praiseNew () {
      if (this.myPraiseIndex >= 0) {
        console.log('取消')
        this.message.praises.splice(this.myPraiseIndex, 1)
      } else {
        console.log('点赞')
      }
      praiseNew(this.userInfo.id, this.message.id).then(({data}) => {
        this.$emit('reloadData')
      })
    },
    // 发送评论
    sendComment (parentCommentId, comment) {
      addComment(this.userInfo.id, this.message.id, parentCommentId, comment).then(({data}) => {
        if (data.state) {
          this.message.comments.push(data.info)
        }
      })
    },
    // 评论按钮被点击
    commentIconClicked () {
      modal.prompt({
        message: '输入评论',
        cancelTitle: '取消',
        okTitle: '评论',
        duration: 0.3
      }, (value) => {
        if (value.result === '评论') {
          this.sendComment(0, value.data)
        }
      })
    },
    // 评论被点击
    commentClicked (comment) {
      if (comment.userA.id === this.userInfo.id) {
        return
      }
      modal.prompt({
        message: '输入评论',
        cancelTitle: '取消',
        okTitle: '评论',
        duration: 0.3
      }, (value) => {
        if (value.result === '评论') {
          this.sendComment(comment.id, value.data)
        }
      })
    }
  },
  components: {
  }
}
</script>

<style scoped>
  .message {
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    flex-direction: row;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: #e1e1df;
  }
  .left {
    width: 85px;
  }
  .right {
    margin-left: 20px;
    flex: 1;
    line-height: 40px;
  }
  .name {
    font-size: 30px;
    color: #586b96;
    line-height: 40px;
  }
  .content {
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 22px;
    color: #000000;
    line-height: 40px;
  }
  .avatar {
    width: 85px;
    height: 85px;
  }
  .image-wrap {
    justify-content: left;
    align-items: start;
    flex-direction: row;
    width: 500px;
    flex-flow: wrap;
  }
  .image {
    width: 140px;
    height: 140px;
    margin-top: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
  }
  .time-container {
    margin-top: 20px;
    margin-bottom: 20px;
    flex-direction: row;
    justify-content: space-between;
  }
  .time {
    font-size: 20px;
    color: #747474;
  }
  .favour-comment {
    width: 40px;
    height: 30px;
  }
  .praise-wrap {
    flex-direction: row;
    color: #586b96;
    border-bottom-color: #dddddd;
    border-bottom-width: 2px;
    border-bottom-style: solid;
  }
  .praise-icon {
    width: 40px;
    height: 40px;
  }
  .praise-name {
    color: #586b96;
  }
  .comment {
    flex-direction: row;
  }
  .comment-user {
    color: #586b96;
  }
</style>
