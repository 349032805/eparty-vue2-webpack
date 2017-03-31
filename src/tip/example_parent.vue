<template>
  <div class="example">
    
    <div class="split-line"></div>
    <!-- 消息提示 -->
    <tipBubble :tipContent="tipContent" :isShowTip="isShowTip"></tipBubble>

    <div class="col-md-5 form-box">
        <form name="userForm" novalidate>
            <div class="form-group">
                  <input type="text" class="form-control" placeholder="手机号" maxlength="11" v-model="phoneNumber">
            </div>

            <div class="form-group">
                <button type="button" class="btn btn-info" @click="handin()">提交</button>
            </div>
        </form>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
    import tipBubble from './tip_parent';

    export default {
      data() {
          return {
            phoneNumber: null, //手机号
            isShowTip: false, //显示提示组件
            tipContent: null //提示的内容
          }
        },
        methods: {
          handin(){
            if(this.phoneNumber == "" || this.phoneNumber == null){
                this.isShowTip = true;
                this.tipContent = '请输入手机号';
                return;
            }

            if(!/^1\d{10}$/gi.test(this.phoneNumber)){
                this.isShowTip = true;
                this.tipContent = '手机号格式错误';
                return;
            }

          }

        },

        components: {
            tipBubble
        }
      
    };
</script>

<style scoped>
 .example{
    text-align: center;
    padding-top:30px;
    position: relative;
 }

 .split-line{
    width:100%;
    border-bottom: 1px dashed #999;
    margin:20px 0;
 }


.form-box{
    margin:0 auto; 
    float:none; 
    background:#fff; 
}
</style>
