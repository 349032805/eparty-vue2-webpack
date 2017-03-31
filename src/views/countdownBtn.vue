<template>
    <button type="button" class="btn btn-info" @click="send" :disabled="time > 0">
        {{ text }}
    </button>
</template>

<script type="text/ecmascript-6">

  export default {
  	props: {
        second: {
            type: Number,
            default: 60
        }
    },
    data() {
        return {
            time: 0
        }
    },
    methods: {
        send() {
            this.time = this.second
            this.timer()
            this.$emit('send')
        },
        timer() {
            if (this.time > 0) {
                this.time = this.time - 1
                setTimeout(this.timer, 1000)
            }
        }
    },
    computed: {
        text() {
            return this.time > 0 ? '获取验证码(' + this.time + 's)' : '获取验证码'
        }
    }
  };
</script>

<style scoped>

</style>
