import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/tabber/Home'
import Member from '@/components/tabber/Member'
import Shopcart from '@/components/tabber/Shopcart'
import Search from '@/components/tabber/Search'
import NewsList from '@/components/News/NewsList'
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
      children:[
        {
          path:'newslist'
          component:NewsList
        }
      ]
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
