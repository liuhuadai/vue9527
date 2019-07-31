<template>
  <div class="goods-container">
    <!-- 轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper>
        </div>
      </div>
    </div>
    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{ goodsinfo.name }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：<del>￥{{ goodsinfo.oldPrice }}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{ goodsinfo.newPrice }}</span>
          </p>
          <p>购买数量：<numbox @getcount="getSelectedCount" :max="goodsinfo.quantity"></numbox></p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
            <!-- 分析： 如何实现加入购物车时候，拿到 选择的数量 -->
            <!-- 1. 经过分析发现： 按钮属于 goodsinfo 页面， 数字 属于 numberbox 组件 -->
            <!-- 2. 由于涉及到了父子组件的嵌套了，所以，无法直接在 goodsinfo 页面zhong 中获取到 选中的商品数量值-->
            <!-- 3. 怎么解决这个问题：涉及到了 子组件向父组件传值了（事件调用机制） -->
            <!-- 4. 事件调用的本质： 父向子传递方法，子调用这个方法， 同时把 数据当作参数 传递给这个方法 -->
          </p>
        </div>
      </div>
    </div>
    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{ goodsinfo.godId }}</p>
          <p>库存情况：{{ goodsinfo.quantity }}件</p>
          <p>上架时间：{{ goodsinfo.addDate | dateFormat }}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
import swiper from '../subcomponents/swiper'
export default {
    data(){
        return{
            id:this.$route.params.id,
            lunbotuList:[],
            goodsinfo:[]
        }
    },
    created(){
        this.getlunboById();
    },
    methods:{
        getlunboById(){
            this.$http.get('api/getgoddetail?godId='+this.id).then(response=>{
                if(response.body.status===1){
                    this.lunbotuList = response.body.god.imgIntro
                    this.goodsinfo = response.body.god
                    console.log(this.lunbotuList)
                }else{
                    Toast('加载数据失败:)')
                }
            })
        }
    },
    components:{
        swiper
    }
};
</script>
<style lang="scss" scoped>
.goods-container{
    background-color: azure;
}
</style>
