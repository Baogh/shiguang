<template>
	<div id="app" class="swiper">
		<mt-swipe :auto="4000" class="spc" v-if='lunData'>
		  	<mt-swipe-item v-for="item in lunData" :key="item.imageUrl">
				<img :src="item.imageUrl" width="100%">
		  	</mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script type="text/javascript">
	import axios from 'axios'
	export default {
		name :'Swipe',
		data :function(){
			return {
				lunData:[]
				
			}
		},
		mounted:function(){
			this.getLunData();
			//console.log(lunData)
		},
		methods:{
			getLunData: function() {
				var that = this;
				// 调用ajax接口
				// axios.get('/v4/api/film/now-playing?__t=1510714983357&page=1&count=5')
				//   .then(function (response) {
				//     console.log(response);
				//     that.lunData = response.data.data.films;
				axios.get('/v4/api/billboard/home?__t=1510192699833')
				  .then(function (response) {
				    console.log(response);
				    that.lunData = response.data.data.billboards;
				  })
				  .catch(function (error) {
				    console.log(error);
				  });
			}
		}
	}
</script>

<style type="text/css">
	.swiper {

	}
	.spc {
		height: 200px;
	}
</style>