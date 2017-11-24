<template>
	<div class="login">
		<header>
			<router-link :to="{name:'/'}">
				<a href="">
					<span style="float: left;">
							<i class="iconfont icon-fanhui"></i>	
					
					</span>
				</a>
			</router-link>
		</header>
		<div class="box">
			<input class="form-control" id="inputEmail3" placeholder="请输入账号" >
		</div>
		<div class="box">
			<input type="password" class="form-control" id="inputPassword3" placeholder="请输入密码">
		</div>
		<div class="box" style="background: #fff;    padding: 1em 5em;border: 0">
			<button type="submit" class="btn btn-default" @click="login">登录</button>
		</div>
		

	</div>
	

</template>

<script type="text/javascript">
	import axios from 'axios'

	export default {
		name : 'login',
		data : function(){
			return {
			 	// account : '',
     //    		password : ''
			}
		},
		methods: {
			login:function(){
				var that =this;
				var name1 = $('#inputEmail3').val()
				var psw1 = $('#inputPassword3').val()
				axios.post('/users/login',
					{
					    name: name1,
					    psw: psw1
					  }
					).then(function(res){
					console.log(res)
					if(res.data === '登陆成功'){
						that.$router.push('/')
					}
				})
			}
		}
	}
</script>

<style type="text/css">
	input{
		height: 3em;
		border-radius: 1em;
		outline: none;
	}
	header{
		background: #1c2635;
		height: 4.4em;
	    position: relative;
    	z-index: 2;
    	line-height: 4.4em
	}
	header span{
		color: #fff
	}
	.box{
		height: 4rem;
		background: #f6f6f6;
		padding: 1em 8em;
		border-bottom: #ccc;
	}
	button{
		font-size: 1.8em;background: #1e7dd7;
    	border: 1px solid #1e7dd7;
    	width: 12em;
    	height: 2em;
		border-radius: 1em;
	}
</style>