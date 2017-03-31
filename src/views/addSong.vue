<template>
  <div>
  	<ul>
  		<li>七里香</li>
  		<li>有点甜</li>
  		<li>甜甜的</li>
  	</ul>

  	<ul>
  		<li v-for="item in songList">{{ item }}</li>
  	</ul>

  	<form>
	  <div class="form-group">
	  	<div class="col-xs-8">
	    	<input type="text" class="form-control" placeholder="输入歌曲名" v-model="songInput">
	    </div>
	  </div>
  		<button type="button" class="btn btn-info col-xs-3" @click="addSong()">添加歌曲</button>
	</form>

  </div>
</template>

<script type="text/ecmascript-6">

  export default {
  	data(){
  		return {
  			songInput:'',
  			songList:[]
  		}
  	},
    methods: {
      addSong(event) {
        let songName = this.songInput;
      	console.log(songName);
      	if(songName != ""){
      		this.songList.push(songName);
      		this.songInput = '';
      	}
        // this.$emit('add');
      }
    }
  };
</script>

<style scoped>
	ul li {
		height:30px;
	}

</style>