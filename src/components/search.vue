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
			<input type="text" placeholder="影片/影院/影人，任你搜" id="searchText" v-model="films">
			<span style="float: right;"	>
				<i class="iconfont icon-sousuo"></i>
			</span>
		</header>
		<div class="ban">
			<mt-swipe :auto="4000" class="spc" v-if='banDate'>
			  	<mt-swipe-item v-for="item in banDate" :key="item.url" >
					<img :src="item.url" width="100%" height="auto">
			  	</mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="hot_f" >
			<a href="" v-for='item in data'>
				<span>{{item}}</span>
			</a>
			{{films}}
		</div>
		<footer_a></footer_a>	
	</div>
</template>

<script type="text/javascript">
	// import { mapGetters } from 'vuex'
	import axios from 'axios';
	
	export default{
		name:'search',
		data:function (){
				return{
					banDate:null,
					data:null,
					films:''
				}
			},
		mounted:function(){
			this.getMes()
		},
		methods:{
			getMes:function(){
				
				var that = this;
				axios.get('/Service/callback.mi/Advertisement/MobileAdvertisementInfo.api?locationId=290&t=2017111613532597904')
				  .then(function (response) {
				    console.log(response);
				    that.banDate = response.data.advList.slice(0, 2);
				    that.data = response.data.advList				
				  })
				  .catch(function (error) {
				    console.log(error);
				  });

				  axios.get('/Service/callback.mi/Search/HotKeyWords.api?t=201711161916921249')
				  .then(function (response) {
				    console.log(response);
				   
				    that.data = response.data.keywords				
				  })
				  .catch(function (error) {
				    console.log(error);
				  });
				  
				  	$('input').bind("input propertychange",function(){
				
					console.log(that.films)
					axios.get('/Service/callback.mi/Search/SearchSuggestionNew.api',{
				  	keyword : that.films,
				  })
				  .then(function (response) {
				    console.log(response);
				   			
				  })
				  .catch(function (error) {
				    console.log(error);
				  });
				}
			)
			}
		}

	}

</script>

<style scoped>
	*{
		box-sizing: border-box;
		list-style: none;
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
		width: 2rem;
	}
	header input{
		height: 4.4em;
		outline: none;
	    font-size: 1.4em;
	    height: 2.4em;
	    line-height: 1.2;
	    padding: 0 1.8em 0 2em;
	    border-radius: .5em;
	    background: #fff url(//static1.mtime.cn/html5/20171113115608/images/2014/search_ico_01.png) no-repeat .5em center;
	    background-size: 1.3em 1.3em;
	    /*position: relative;
	    z-index: 0;*/
	    margin-left: .5rem;
	    margin-top: .5em;
	}
	.spc {
		height:10em;
	}
	.hot_f{
		min-height: 27em
	}
	.hot_f span{
	    font-size: 1.4em;
	}
	.hot_f a{
	    display: inline-block;
	    vertical-align: middle;
	    color: #1e7dd7;
	    padding: .6em 1.2em;
	    border: .1em solid #b6dcff;
	    border-radius: 3em;
	    margin: .95em -0.3em .5em 1em;
	    float: left;
	}
</style>