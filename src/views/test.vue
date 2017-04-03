<template>
  <div>
   <router-link to="/">hello world!</router-link>
   <p>测试sass</p>
   <div class="red-box">
   		<div class="yellow-box"></div>
   </div>
  </div>
</template>

<script type="text/ecmascript-6">
</script>

<style lang="sass" scoped>
	.red-box{
		width: 100px;
		height: 100px;
		background: red;
		position: relative;

		.yellow-box {
			width: 50px;
			height: 50px;
			background: yellow;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
		}
	}
</style>