<template>
  <div class="home-tab">
    <div class="tab-item" @click="tabClicked(0)">
      <text class="title" :class="[activeIndex === 0? 'active-title': '']">通讯录</text>
    </div>
    <div class="tab-item" @click="tabClicked(1)">
      <text class="title" :class="[activeIndex === 1? 'active-title': '']">我的</text>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
  }),
  created () {
  },
  methods: {
    tabClicked (index) {
      // this.activeIndex = index
      this.$emit('tabClicked', index)
    }
  },
  components: {
  }
}
</script>

<style scoped>
  .home-tab {
    width: 750px;
    height: 100px;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    background-color: #f2f3f4;
    border-top-style: solid;
    border-top-color: #cccccc;
    border-top-width: 2px;
  }

  .active-title {
    color: #009ff0;
  }

</style>
