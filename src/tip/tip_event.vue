<template>
  <!-- <div class="tip-bubble" :style="{bottom: bottom}" v-show="isShowTip">{{ tipContent }}</div> -->
  <div class="tip-bubble" v-show="isShowTip">{{ tipContent }}</div>
</template>

<script>
  export default {
    props: {
      defaultTipContent: {
        type: String,
        default: null
      },
      defaultIsShowTip: {
        type: Boolean,
        default: false
      },
      // bottom: {
      //   type: String,
      //   default: '70px'
      // }
    },
    data() {
      return {
        tipContent: null,
        isShowTip: false
      }
    },
    created () {
      this.tipContent = this.defaultTipContent
      this.isShowTip = this.defaultIsShowTip
      this.$emit('input', this.isShowTip)
    },
    methods: {
      close () {
        this.isShowTip = false
        this.tipContent = null
        // 触发change事件
        this.$emit('change', this.isShowTip)
      },
      countdown () {
        setTimeout(() => {
          this.close()
        }, 2000)
      }
    },
    watch: {
      isShowTip() {
        this.countdown()
      },
      defaultIsShowTip () {
        this.isShowTip = this.defaultIsShowTip
        this.tipContent = this.defaultTipContent
      },
      defaultTipContent () {
        this.tipContent = this.defaultTipContent
      }
    }

  };
</script>

<style scoped>
  .tip-bubble {
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 30px;
    text-align: center;
    background-color: #000;
    opacity: 0.7;
    font-size: 12px;
    color: white;
    z-index: 10000;
    border: none;
    cursor: default;
    height: 30px;
    line-height: 30px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 90px;
    margin: auto;
    max-width: 35%;
  }
</style>
