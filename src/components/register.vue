<template>
	<div class="login">
		<input class="form-control" id="inputEmail3" placeholder="请输入账号" ><br>
		<input type="password" class="form-control" id="inputPassword3" placeholder="请输入密码"><br>
		<input type="email" class="form-control" id="inputemail3" placeholder="请输入邮箱"><br>
		<button type="submit" class="btn btn-default" @click="login" >注册</button>
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
				var that = this;
				var name1 = $('#inputEmail3').val()
				var psw1 = $('#inputPassword3').val()
				var eml1 = $('#inputemail3').val()
				axios.post('/users/register',
					{
					    name: name1,
					    psw: psw1,
					    eml:eml1
					  }
					).then(function(res){
						console.log(res)
					if(res.data === '注册成功'){
						that.$router.push('/#/login')
					}
				})
			}
		}
	}
</script>

<style type="text/css">
	input{
		height: 2em
	}
</style>