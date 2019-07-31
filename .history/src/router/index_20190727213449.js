import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/tabber/Home'
import Member from '@/components/tabber/Member'
import Shopcart from '@/components/tabber/Shopcart'
import Search from '@/components/tabber/Search'
import NewsList from '@/components/News/NewsList'
import NewsInfo from '@/components/News/NewsInfo'
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
    },
    {
      path:'/home/newslist',
      component:NewsList
    },
    {
      path:'/home/newsinfo/:id',
      component:NewsInfo
    }
  ],
  linkActiveClass:'mui-active'
  // router-link-active
})
