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
            市场价：<del>￥{{ goodsinfo.oldPrice }}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{ goodsinfo.newPricex }}</span>
          </p>
          <p>购买数量：<numbox @getcount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox></p>
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
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</div>
      </div>
      <div class="mui-card-footer">页脚</div>
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
