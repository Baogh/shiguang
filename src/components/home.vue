<template>
	<div id="app">
		<header>
			<ul>
				<li><a href=""><i></i></a></li>
				<li><a href="" style="border-bottom: 2px solid #fff;color: #fff;font-weight: bold;"	>首页</a></li>
				<li><a href="">购票</a></li>
				<li><a href="">商城</a></li>
				<li><a href="">发现</a></li>
				<li>
					<router-link :to='{name:"login"}'>
						<a href="">
							<i ></i>
						</a>
					</router-link>
				</li>
			</ul>
		</header>
		<div class="move_search">
			<div class="search">
				<div class="city">
					北京
				</div>
				<p class="search_box">
					<router-link :to='{name:"search"}'>
						<span>影片/影院/影人，任你搜</span>
					</router-link>
				</p>
			</div>
		</div>
		<Swipe></Swipe>
		<films_hot></films_hot>
		<footer_a></footer_a>
		</div>
</template>

<script type="text/javascript">
	import axios from 'axios';
	export default{
		name:'home',
		date:function(){
				return{

				}
			},
		mounted:function(){
			//this.getMes()
		},
		methods:{
			// getMes:function(){
			// 	var that = this;
			// 	axios.get('/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=201711132065037704')
			// 	.then(function(res){
			// 		console.log(res);

			// 	})
			// }
		}

	}

</script>

<style scoped>
*{
	list-style: none;
}
	header{
		
	}
	ul{
		overflow: hidden;
		width: 100%;
		background: #1c2635;
		display: flex;
		justify-content: space-between;
		font-size: 1.3em
	}
	li{
	    text-align: center;
        box-sizing: border-box;
	}
	li a{
	    display:block;
	    height: 4.0em;
	    line-height: 4.0em;
	    position: relative;
	    color: #bbb;
	}
	li:first-of-type a i{
	    width: 5.6em;
	    height: 1.8em;
	    background: url(//static1.mtime.cn/html5/20171113115608/images/2014/logo_mtime.png) no-repeat;
	    background-size: contain;
	    display: inline-block;
	    vertical-align: middle;
	    margin-left: 1rem;
	}
	li:nth-last-child(1) a i{
	    width: 1.4em;
		height: 1.8em;
		display: inline-block;
		vertical-align: middle;
		background: url(//static1.mtime.cn/html5/20171113115608/images/2014/ico_my.png) no-repeat;
		background-size: cover;
		margin-right: 1rem;
}
	.move_search{

	}
	.move_search .search{
		background: #f6f6f6;
		padding: .1em 2.5em .75em;
/*    	padding: .8em 1.5em .75em;*/
    	display: flex;
/*    	justify-content: space-around;*/
    	box-sizing: border-box;
	}
	.city{
	    margin-right: 1.5em;
	    height: 3.0em;
	    line-height: 3.0em;
        font-size: 1.6em;
	}
	.search_box{
	    font-size: 1.4em;
	    height: 1.9em;
	    line-height: 1.9em;
	    padding: 0 1.8em 0 2em;
	    border-radius: .5em;
	    background: #fff url(//static1.mtime.cn/html5/20171113115608/images/2014/search_ico_01.png) no-repeat .5em center;
	    background-size: 1.3em 1.3em;
	    position: relative;
	    z-index: 0;
	    margin-top: 1.1rem;
        border: 1px solid #bbb;
	}

</style>