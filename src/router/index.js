import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import detail from '@/components/detail'
import login from '@/components/login'
import register from '@/components/register'
import search from '@/components/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: home
    },
    {
    	path:'/detail/:fid',
    	name:'detail',
    	component: detail
    },
    {
      path:'/login',
      name:'login',
      component: login
    },
    {
      path:'/register',
      name:'register',
      component: register
    },
    {
      path:'/search',
      name:'search',
      component: search
    }
  ]
})
