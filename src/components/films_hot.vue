<template>
	<div id="app">
		<article>
			<h2>
				<a href="" class="film_top">
					<span>正在热映({{films.length}}部)</span>
					<i class="iconfont icon-jiantouyou"></i>
				</a>
			</h2>
			<ul>
				<li v-for="item in showList">
					<a>
						<router-link :to='{name:"detail",params:{fid:item.id}}'>
						<img :src="item.img" style="border: 1px solid #ddd;width: 100%;height:auto;" >
						<span>{{item.t}}</span>
						<p>{{item.r}}</p>
						</router-link>
					</a>
				</li>
			</ul>
			<h2>
				<a href="" class="film_top">
					<span>即将上映({{num}}部)</span>
					<i class="iconfont icon-jiantouyou"></i>
				</a>
			</h2>
		</article>
		<main>
			<h2>
				<a href="" class="film_top">
					<span>今日热点</span>
				</a>
			</h2>
			<ul>
				<li v-for="item in news" >
					<a href="">
						<img :src="item.img" style="border: 1px solid #ddd;height:8rem;float: left;margin-right: 1em;" >
						<div style="float: left;">
							<span style="font-size: 1.6em;line-height: 1.1;">{{item.title}}</span>
							<p>{{item.desc}}</p>
							<p>{{item.publishTime}}</p>
						</div>

					</a>
				</li>
			</ul>
		</main>
	</div>
</template>

<script type="text/javascript">
	// import { mapGetters } from 'vuex'
	import axios from 'axios';
	export default{
		name:'films_hot',
		data (){
				return{
					films: [],
					showAll:false,
					num:0,
					news:[],
				}
			},
		mounted:function(){
			this.getMes()
		},
		computed:{
			showList:function(){
				if(this.showAll == false){
					var showList = [];
					if(this.films.length > 8){
						for(var i = 0;i<8;i++){
							showList.push(this.films[i])
						}
					}
					return showList;
				}
			}
		},
		methods:{
			getMes:function(){
				var that = this;
				axios.get('/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=201711132065037704')
				.then(function(res){
					console.log(res);
					that.films = res.data.ms;
					that.num = res.data.totalComingMovie;
				});
				axios.get('/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=201711141552141392')
				.then(function(res){
					console.log(res);
					that.news = res.data.hotPoints;
				});

			}
		}

	}

</script>

<style scoped>
	*{
		list-style: none;
		color: #333;
		box-sizing:border-box;

	}
	article{
		padding: .5em 1.5em 1.5em;
	}
	article h2 a {
	    font-size: 1.5em;
		display: block;
		line-height: 2rem;
		width: 100%;
	}
	article h2 a i{
		float: right;
		font-size: 1.5rem;
		color: #ccc
	}
	article ul{
		margin-top: 1rem;
		
	}
	article ul li{
		float: left;
	    display: block;
	    width: 25%;
	    height: 15rem;
	    padding: .2rem;
	    text-align: center;
		position: relative;
	}
	
	article ul li span{
		font-size: 1.4em;
    	line-height: 1.2;
    	width:100%;
		word-break:break-all;
		display:-webkit-box;
		-webkit-line-clamp:2;
		-webkit-box-orient:vertical;
		overflow:hidden;
	}
	article ul li p{
		position: absolute;
		background:#659d0e;
		font-size: 1.1em;
		color:#fff;
		line-height: 1.8em;
    	text-align: center;
    	top: 0.4rem;
    	right: 0.4rem;
	}
	main{
		padding: .5em 1.5em 1.5em;
	}
	main h2 a {
	    font-size: 1.5em;
		display: block;
		line-height: 2rem;
		width: 100%;
	}
	main h2 a i{
		float: right;
		font-size: 1.5rem;
		color: #ccc
	}
	main ul{
		margin-top: 1rem;
	}
	main ul li{
	    display: block;
	    width: 100%;
		height: 11rem;
	    border-bottom: 1px solid #d8d8d8;
   		padding: 1.3em 0 1.3em 0;
	}
	main div{
		float: left;
	}
	main ul li span{
		font-size: 1.4em;
    	line-height: 1.2;
    	width:10em;
    	font-weight: bold;
		 word-break:break-all;
		 display:-webkit-box;
		 -webkit-line-clamp:2;
		 -webkit-box-orient:vertical;
		 overflow:hidden;
	}
	main ul li p{
		font-size: 1.1em;
		color:#777;
		line-height: 1.8em;
	}

</style>