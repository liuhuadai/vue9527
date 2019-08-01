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
Vue.use(Vuex)
var car = JSON.parse(localStorage.getItem('car')||'[]')
const store = new Vuex.Store({
  state: {//this.$store.state.***
    car:car //购物车中商品的数据{id:商品的id，count:要购买的数量，price：商品的单价，selected:是否被选中}
  },
  mutations: {//this.$store.commit('方法名称',唯一参数)
    addToCar(state,goodsinfo){
      // 点击加入购物车，把商品信息，保存到 store 中的 car 上
      // 分析：
      // 1. 如果购物车中，之前就已经有这个对应的商品了，那么，只需要更新数量
      // 2. 如果没有，则直接把 商品数据，push 到 car 中即可

      // 假设 在购物车中，没有找到对应的商品
      var flag = false

      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count)
          flag = true
          return true
        }
      })

      // 如果最终，循环完毕，得到的 flag 还是 false，则把商品数据直接 push 到 购物车中
      if (!flag) {
        state.car.push(goodsinfo)
      }
       // 当 更新 car 之后，把 car 数组，存储到 本地的 localStorage 中
       localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsInfo(state,goodsinfo){
      state.car.some(item=>{
        if(item.id==goodsinfo.id){
          item.count = goodsinfo.count
          return true;
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsSelected(state, info) {
      state.car.some(item => {
        if (item.id == info.id) {
          item.selected = info.selected
        }
      })
      // 把最新的 所有购物车商品的状态保存到 store 中去
      localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  getters: {//this.$store.getters.***
    getAllCount(state){
      var c = 0;
      state.car.forEach(item=>{
        c+=item.count;
      })
      return parseInt(c);
    },
    getGoodsCount(state){
      var o ={};
      state.car.forEach(item=>{
        o[item.id]=item.count
      })
      return o;
    },
    getGoodsSelected(state){
      var o ={};
      state.car.forEach(item=>{
        o[item.id]=item.selected
      })
      return o;
    },
    getGoodsCountAndAmount(state){
      var o = {
        count:0,
        amount:0
      };
      state.car.forEach(item=>{
        o.count+=item.count;
        o.amount+=(item.count*item.price)
      })
      return o;
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
