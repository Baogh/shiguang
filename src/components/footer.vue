<template>
	<div id="app">
		<nav>
			<ul>
				<li><a href="">首页</a></li>
				<li><a href="">购票</a></li>
				<li><a href="">商城</a></li>
				<li><a href="">发现</a></li>
				<li><a href="">我的</a></li>
			</ul>
		</nav>
		<div class="fot">
			<ul>
				<li><a href="">pc版</a></li>
				<li><a href="">客户端下载</a></li>
				<li><a href="">意见反馈</a></li>
				<li><a href="">帮助中心</a></li>
			</ul>
			<div class="copy">
			<p>北京动艺时光网络科技有限公司</p>
			<p>Copyright 2006-2017 Mtime.com Inc. All rights reserved.</p>
		</div>
		</div>
		
	</div>
</template>

<script type="text/javascript">
	// import { mapGetters } from 'vuex'
	import axios from 'axios';
	
	export default{
		name:'footer_a',
		data (){
				return{

				}
			},
		methods:{

		}

	}

</script>

<style scoped>
	*{
		box-sizing: border-box;
		list-style: none;
	}
	nav{
		width: 100%;
		height: auto;
	}
	nav ul{
		width: 100%
	}
	nav li{
		width: 20%;
		float: left;
	}
	nav a{	
	    color: #0074c5;
    	font-size: 1.5em;
		display: block;
		width: 100%;
		height: 4em;
		line-height: 4em;
		text-align: center;
	}
	.fot{
		width: 100%;
		height: auto;
	}
	.fot ul{
		width: 100%
	}
	.fot li{
		width: 25%;
		float: left;
	}
	.fot a{	
	    color: #333;
    	font-size: 1.5em;
		display: block;
		width: 100%;
		border-right: 1px solid #ccc;
		height: 3em;
		line-height: 3em;
		text-align: center;
	}
	.fot li:last-of-type a{
		border:0;
	}
	.copy{
		text-align: center;
		font-size: 1.1em
	}
</style>