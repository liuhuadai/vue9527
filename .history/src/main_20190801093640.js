// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入MUI图标样式
import './lib/mui/css/mui.min.css'
import '../static/mui/css/icons-extra.css'
//导入moment插件
import moment from 'moment'
//导入mintui
// import { Header,Swipe, SwipeItem,Button,Lazyload } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name,Button)
// Vue.use(Lazyload)
import MintUI from 'mint-ui'
Vue.use(MintUI)
//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
//全局定义vue-resource配置
Vue.http.options.root = 'http://120.77.181.41:3000'
Vue.http.options.emulateJSON = true;
Vue.config.productionTip = false
//定义全局过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH-mm-ss") {
  return moment(dataStr).format(pattern)
})
//导入vuex
import Vuex from 'vuex'
import { stat } from 'fs';
Vue.use(Vuex)
var car = JSON.parse(localStorage.getItem('car')||'[]')
const store = new Vuex.Store({
  state: {//this.$store.state.***
    car:car //购物车中商品的数据{id:商品的id，count:要购买的数量，price：商品的单价，selected:是否被选中}
  },
  mutations: {//this.$store.commit('方法名称',唯一参数)
    addToCar(state,goodsinfo){
      var flag = false
      state.car.some(item=>{
        if(item.id ===goodsinfo.id){
          item.count += parseInt(goodsinfo.count)
          flag = true;
          return true;
        }
      })
      if(!flag){
        state.car.push(goodsinfo)
      }
      localStorage.setItem('car',JSON.stringify(state.car))
    }
  },
  getters: {//this.$store.getters.***
    getAllCount(state){
      var c = 0;
      state.car.forEach(item=>{
        c+=item.count;
      })
      return c;
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store//挂载store管理状态对象
})
