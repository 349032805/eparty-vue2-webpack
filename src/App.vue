<template>
  <div>
      <transition name="fade">
        <div class="load-flash" v-if="isloading">
            <img src="./load.gif" width="100%" class="load-img">
        </div>
      </transition>
      <transition name="fade-view">
          <router-view></router-view>
      </transition>
  </div>
</template>

<script>
  import {urlParse} from 'common/js/util';
  import data from './data.js';

  const ERR_OK = 0;

  export default {
    data () {
      return {
        isloading: true,
        seller: {
          id: (() => {
            let queryParam = urlParse();
            return queryParam.id ? queryParam.id : 1;
          })()
        }
      };
    },
    created() {
      // this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
      //   response = response.body;
      //   if (response.errno === ERR_OK) {
      //     this.seller = Object.assign({}, this.seller, response.data);
      //     window.localStorage.setItem('seller', JSON.stringify(this.seller));
      //   }
      // });
      window.localStorage.setItem('seller', JSON.stringify(data.TEST_DATA.seller));
    },
    mounted: function() {
      setTimeout(() => {
         this.isloading = false;
      }, 2000);
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .load-flash
    width:100%
    height:100%
    z-index: 1000
    position: absolute
    top:0
    left:0
    background: white

    .load-img
     transform: translateY(50%)

</style>