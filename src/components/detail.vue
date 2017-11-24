<template>
	<div id="app">
		<header>
			<router-link :to="{name:'/'}">
				<a href="">
					<span style="float: left;">
							<i class="iconfont icon-fanhui"></i>	
					
					</span>
				</a>
			</router-link>
			<span style="float: right;">
				<i class="iconfont icon-fenxiang"></i>
			</span>
			<span style="float: right;"	>
				<i class="iconfont icon-shoucang"></i>
			</span>
		</header>
		<article v-if="list">
			<img :src="list.image" style="width: 10.5em;height: 15.6em;float: left;background: #fff;margin-right: 1em;padding: .2em;">
			<div class="films_main" >
				<h2>{{list.titleCn}}</h2>
				<h3>{{list.titleEn}}</h3>
				<p v-if='list.type'>{{list.type[0]}}/{{list.type[1]}}/{{list.type[2]}}</p>
				<p>{{list.runTime}}</p>
				<p v-if='list.release'>{{list.release.date}}{{list.release.location}}上映</p>
				<span>{{list.rating}}</span>
				<aside>
					<a class="wantButton">我想看</a>
				<a class="ratingButton">我要评分</a>
				</aside>
			</div>	
		</article>
		<div class="aa">
			<b>
				{{list.commonSpecial}}
			</b>
			
		</div>
		<div class="btn">
			<a href="">
				查影讯/购票
			</a>
		</div>
		<div class="content">
			<p>{{list.content}}</p>
			<span @click.native='show()'>
				<i class="iconfont icon-jiantouxia"></i>
			</span>
		</div>
		<div class="actor">
			<h2>{{list.personCount}}位演职员</h2>
			<div class="actor_main">
				<div class="one" v-if='list.director'>
					<p>导演</p>
					<img :src="list.director.directorImg" style="width: 8.55em;height: 13em;">
					<p>{{list.director.directorName}}</p>
					<p>{{list.director.directorNameEn}}</p>
				</div>
				<div class="two">
					<p>主要演员</p>
					<ul v-for='item in list.actorList'>
						<li style="float: left;width: 50%">
							<img :src="item.actorImg" style="width: 8.55em;height: 8.55em;" >
							<p>{{item.actor}}</p>
							<p>{{item.actorEn}}</p>
							<img :src="item.roleImg" style="width: 4em;height: 4em;margin-left: 2em" >
							<p>饰：{{item.roleName}}</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	// import { mapGetters } from 'vuex'
	import axios from 'axios';
	
	export default{
		name:'detail',
		data (){
				return{
					list:[],
					type:[]
				}
			},
		mounted:function(){
			this.getMes()
			this.show()
		},
		methods:{

			show:function(){
				$('.content span').click(function(){
		$('.content p').css({
			'overflow':'auto',
			'height':'auto'
		})
		console.log('click');
	})
			},
			getMes:function(){
				var that = this;
				axios.post(`/Service/callback.mi/movie/Detail.api?movieId=${this.$route.params.fid}&locationId=290&t=2017111418501914147`)
				.then(function(res){
					console.log(res);
					that.list = res.data;
					that.type = res.data.type
				});
				
			}
		}

	}

</script>

<style scoped>
	*{
		box-sizing: border-box;
	}
	header{
	    height: 4.4em;
	    position: relative;
	    z-index: 2;
	    padding: 0 1.5em 0 1.4em;
		width: 100%;
		background: #ccc;
	}
	header span{
		text-align: center;
		height: 4.4em;
		line-height: 4.4em;
		width: 4rem;
	}
	article{
	    padding: 0 0 0 1.5em;
	    z-index: 1;
	    background: #f6f6f6;
	    height: 16em;
	    width: 100%
	}
	.films_main{
		float: left;
		position: relative;
	}
	.films_main h2{
	    font-size: 1.8em;
	    line-height: 1.4;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    overflow: hidden;
	}
	.films_main h3{
        white-space: nowrap;
	    text-overflow: ellipsis;
	    -o-text-overflow: ellipsis;
	    overflow: hidden;
	    height: 1.3em;
	    margin-bottom: 1em
	}
	.films_main p{
		font-size: 1.2em;
    	line-height: 1.5em;
	}
	.films_main span{
		background: #659d0e;
	    display: block;
	    width: 2.8em;
	    height: 2.8em;
	    padding: 0;
	    text-align: center;
	    line-height: 2.8em;
	    position: absolute;
   	    right: 0;
	    top: 50%;
	    margin-top: -1.1em;
	}
	aside a{
	    margin-top: .55em;
	    width: 6em;
	    float: left;
	    padding: .5em;
	    display:block;
        border: 1px solid #999;
    	color: #777;
        border-radius: 40em;
    	text-align: center;
    	    font-size: 1.4em;
	}
	.btn{
	    left: 0px;
	    right: 0px;
	    z-index: 10;
	    top: 0px;
	    background-color: rgb(247, 247, 247);
	}
	.btn a{
	    width: auto;
        background: #ff8600;
	    color: #fff;
	    border: 1px solid #ff8600;
	    display: block;
	    padding: .8em 0;
	    margin: 1.2em 1.5em 1.1em;
	    font-size: 1.6em;
	    line-height: 1;
	    font-weight: bold;
        border-radius: 40em;
        text-align: center
	}
	.aa{
		color: #fd8900;
		text-align: center;
		font-size: 1.4em
	}
	.content{
		padding: 1.1em 1.5em 0;
		background-color: rgb(247, 247, 247);
	}
	.content p{
	    font-size: 1.4em;
	    color: #333;
	    line-height: 1.5;
	    overflow: hidden;
	    height: 3em;

	}
	.content span{
		display: block;
		width: 100%;
		text-align: center;
		line-height: 3em;
	}
	 .actor{
 	    padding: .4em 1.5em .2em;
	 }
	.actor h2{
    	font-size: 1.7em;
	    line-height: 1.2;
	    overflow: hidden;
	}
	.one{
		width: 33%;
		float: left;
	}
	.one p{
	    font-size: 1.1em;
    	height: 2em;
    	display: block;
    	width: auto;
	}
	.two{
		width: 66%;
		float: left;
	}
	.two p{
	    font-size: 1.1em;
    	height: 2em;
    	display: block;
    	width: auto;
	}
</style>