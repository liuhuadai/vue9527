// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入MUI图标样式
import './lib/mui/css/mui.min.css'
import '../static/mui/css/icons-extra.css'
//导入mui.js,导入这个时会报错Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
//在严格模式下不被允许， 
// import './lib/mui/js/mui.min.js'
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
//导入moment插件
import moment from 'moment'
//导入mintui
import { Header,Swipe, SwipeItem,Button } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name,Button)
//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
//全局定义vue-resource配置
Vue.http.options.root = 'http://120.77.181.41:3000'
Vue.http.options.emulateJSON = true;
Vue.config.productionTip = false
//定义全局过滤器
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH-mm-ss"){
  return moment(dataStr).format(pattern)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
