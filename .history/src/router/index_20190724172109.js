import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Member from '@/components/Member'
import Shopcart from '@/components/Shopcart'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
     path:'/',
     component:Home
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/member',
      component:Member
    },
    {
      path:'/shopcart',
      component:Shopcart
    },
    {
      path:'/search',
      component:Search
    }
  ],
  linkActiveClass:'mui-active'
  // router-link-active
})
