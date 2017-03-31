<template>
  <div class="main">
	<div class="store-theme">
		<img src="../images/store_bg.png" class="store-bg">
		<!-- 透明度背景 -->
		<div class="bg-layer"></div>

		<!-- 店名和餐台 -->
		<div class="store-table">
		 	<p style="font-size: 24px;">弄堂里（文三路店）</p>
		 	<p style="font-size: 20px;">餐台 A120</p>
		</div>

		<!-- 店铺logo -->
		<div class="store-logo"></div>
	</div>

	<!-- 广播 -->
	<div class="broadcast">
		 <img src="../images/broadcast_icon.png" class="broadcast-icon">
		 <span class="broadcast-content">全场在线点菜满100减5</span>
	</div>

	<!-- 四个选项卡 -->
	<div class="four-labels">
		<div class="row">
      <router-link to="/goods">
  			<div class="click-box float-left" style="background: #fbf6f1;">
          <div class="go-label">
    				<img src="../images/order_food.png" class="box-icon">
    				<p>堂食点餐</p>
          </div>
  			</div>
      </router-link>
      
      <router-link to="/test">
  			<div class="click-box float-right" style="background: #e8fae4;">
          <div class="go-label">
    				<img src="../images/weixin_pay.png" class="box-icon">
    				<p>微信支付</p>
          </div>
  			</div>
      </router-link>
		</div>

		<div class="row" style="margin-top:10px;">
      <router-link to="/list">
  			<div class="click-box float-left" style="background: #eef7fc;">
          <div class="go-label">
    				<img src="../images/has_order.png" class="box-icon">
    				<p style="position: relative;">已点订单<span class="order-num">5</span></p>
          </div>
  			</div>
      </router-link>

      <router-link to="/example?id=101&tableCode=A01">
  			<div class="click-box float-right" style="background: #fef3f0;">
          <div class="go-label">
    				<img src="../images/comment.png" class="box-icon">
    				<p>评价打赏</p>
          </div>
  			</div>
      </router-link>
		</div>

	</div>
  </div>
</template>

<script type="text/ecmascript-6">
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../common/stylus/base.styl"

  .store-theme
    width: 100%
    height: 260px
    position: relative

    .store-bg
      width: 100%
      height: 100%

  	.bg-layer
      width: 100%
      height: 100%
      background: #000
      opacity: 0.3
      position: absolute
      top: 0
      left: 0
      z-index: 100

    .store-table
      width: 100%
      text-align: center
      position: absolute
      top: 40%
      left: 0
      color: white
      line-height: 40px
      z-index: 200
  
    .store-logo
      width: 82px
      height: 82px
      border-radius: 50%
      position: absolute
      bottom: -41px
      left: 50%
      margin-left: -41px
      z-index: 200
      background: url('../images/store_logo.png') no-repeat center
      background-size: 100% 100%

  .broadcast
    text-align: center
    margin-top: 60px

    .broadcast-icon
      width: 15px
      height: 15px
      vertical-align: bottom

    .broadcast-content
      font-size: 15px
      margin-left: 10px

  .four-labels
    padding: 0 10px
    margin-top: 20px

    .row
      height: 92px

    .click-box
      width: 49%
      height: 100%
      text-align: center
      font-size: 15px
      color: #333

    .go-label
      padding-top: 15px

    .box-icon
      width: 40px
      height: 40px

    .order-num
      width: 14px
      height: 14px
      line-height: 14px
      text-align: center
      border-radius: 50%
      background: #f34a29
      position: absolute
      top: -5px
      right: 24%
      font-size: 12px
      color: white
  
</style>
