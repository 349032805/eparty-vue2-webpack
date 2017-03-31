<template>
  <div class="example">

  <tipBubble :default-tip-content="errorContent" :default-is-show-tip="showTip" v-model="showTip"></tipBubble>

  <div class="split-line"></div>
   
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
    import tipBubble from './tip_model';

    export default {
      data() {
          return {
            phoneNumber: null, //手机号
            showTip: false, //显示提示组件
            errorContent: null //提示的内容
          }
        },
        methods: {
          handin(){
            if(this.phoneNumber == "" || this.phoneNumber == null){
                this.showTip = true;
                this.errorContent = '请输入手机号';
                return;
            }

            if(!/^1\d{10}$/gi.test(this.phoneNumber)){
                this.showTip = true;
                this.errorContent = '手机号格式错误';
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
