<template>
  <div class="example">

	<div class="split-line"></div>
    <p>姓名: <input type="text" class="form-control" v-model="myName"></p>
    <p>你输入的为: {{ myName }}</p>

    <p><input type="text" class="form-control" v-model="hello"></p>
    <p><button type="button" class="btn btn-info" @click="getModelValue()">获取model值</button>
    </p>

    <div class="split-line"></div>

     <div>
        <button class="btn" :class="{'btn-info':season === 'spring'}" @click="season='spring'">春天</button>
        <button class="btn" :class="{'btn-info':season === 'summer'}" @click="season='summer'">夏天</button>
        <button class="btn" :class="{'btn-info':season === 'fall'}" @click="season='fall'">秋天</button>
        <button class="btn" :class="{'btn-info':season === 'winter'}" @click="season='winter'">冬天</button>
    </div>

    <div class="split-line"></div>

   <!--  <h3>表单验证示例</h3>
    <div class="col-md-5 form-box">
        <form name="userForm" novalidate>
            <div class="form-group">
                 <div class="input-group">
                  <input type="text" class="form-control" placeholder="手机号" maxlength="11" v-model="phoneNumber">
                  <span class="input-group-btn">
                    <button class="btn btn-default" type="button">获取验证码</button>
                  </span>
                </div>
            </div>

             <div class="form-group">
                <input type="text" placeholder="验证码" class="form-control" required/>
            </div>

            <div class="form-group">
                <button type="submit" class="btn btn-info" @click="handin()">提交</button>
            </div>
        </form>
    </div> -->

    <!-- <button type="button" class="btn btn-info" @click="countdown()">获取验证码</button> -->
    <countdownBtn :second="10"></countdownBtn>
     <button type="button" class="btn btn-info" @click="getUrlParam()">获取地址栏参数</button>
     <button type="button" class="btn btn-info" @click="go()">js跳转</button>

    <div class="split-line"></div>

    <div>
      <h4>气泡提示框(4种)</h4>
      <p><router-link to="/exampleEvent">事件</router-link></p>
      <p><router-link to="/exampleModel">v-model</router-link></p>
      <p><router-link to="/exampleParent">父组件状态(值)</router-link></p>
      <p><router-link to="/exampleVuex">vuex全局状态</router-link>(还没写,好难...)</p>
    </div>

    <div class="split-line"></div>

    <div>
      <h4>参考资料</h4>
      <p><a href="https://github.com/ustbhuangyi/vue-sell" target="_blank">慕课网高仿饿了么</a></p>
      <p><a href="https://github.com/unclemeric/vue2-elm" target="_blank">github 高仿饿了么</a></p>
      <p><a href="https://github.com/bailicangdu/vue2-happyfri" target="_blank">vuex 简单案例</a></p>
      <p><a href="https://zhuanlan.zhihu.com/p/23134551" target="_blank">新手向：Vue 2.0 的建议学习顺序</a></p>
      <p><a href="http://yuche.github.io/vue-strap/" target="_blank">vue结合bootstrap</a></p>
      <p><a href="https://cn.vuejs.org/" target="_blank">vuejs中文网</a></p>
      <p><a href="https://vuex.vuejs.org/zh-cn/" target="_blank">vuex中文文档</a></p>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">

    import countdownBtn from './countdownBtn';

    export default {
      data() {
          return {
            myName: null,
            hello: null,
            season: 'spring'
          }
        },
        methods: {
          getModelValue() {
            alert(this.hello);
          },
          getUrlParam(){
            alert(this.$route.query.id);
            alert(this.$route.query.tableCode);
          },
          go(){
            this.$router.push('/');
            // this.$router.push('/list');
          }
        },
       components: {
        countdownBtn
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
