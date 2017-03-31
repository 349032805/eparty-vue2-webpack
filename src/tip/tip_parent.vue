<template>
    <div class="tip-bubble" v-if="isShowTip">{{ tipContent }}</div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      tipContent: {
        type: String,
        default: null
      },
      isShowTip: {
        type: Boolean,
        default: false
      }
    },
    methods:{
        close(){
            console.log("close");
            // this.$parent.isShowTip = false;
            // this.$parent.tipContent = null;

            this.$parent.$data.isShowTip = false;
            this.$parent.$data.tipContent = null;
            return;
        },
        countdown(){
            console.log("countdown");
            setTimeout(() => {
                this.close()
            }, 2000)
        }
    },
    watch:{
        isShowTip(){
          this.countdown();
        }
    }

  };
</script>

<style scoped>

.tip-bubble{
    padding-left:20px;
    padding-right:20px;
    border-radius: 30px;
    text-align: center;
    background-color: #000;
    opacity: 0.7;
    font-size: 12px;
    color:white;
    z-index: 10000;
    border:none;
    cursor: default;
    height:30px;
    line-height: 30px;

    position: fixed;
    left:0;
    right:0;
    bottom: 90px;
    margin:auto;
    max-width:35%;
}

</style>
