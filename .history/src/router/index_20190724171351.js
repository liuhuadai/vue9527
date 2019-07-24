import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
     path:'/',
     component:home
    },
    {
      path:'/home',
      component:home
    },
    {
      path:'/home',
      component:home
    },
    {
      path:'/home',
      component:home
    },
    {
      path:'/home',
      component:home
    }
  ],
  linkActiveClass:'mui-active'
  // router-link-active
})
