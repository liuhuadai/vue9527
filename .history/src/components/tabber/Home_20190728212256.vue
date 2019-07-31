<template>
  <div>
    <!-- 轮播图区域 -->
    <swiper :lunbotuList="lunbotuList"></swiper>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu1.png" />
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="../../images/menu2.png" />
          <div class="mui-media-body">图片资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goods">
          <img src="../../images/menu3.png" />
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" />
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" />
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" />
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
import Swiper from '../subcomponents/swiper'
export default {
  data() {
    return {
      lunbotuList: []
    };
  },
  created: function() {
    this.getSwipeData()
  },
  methods: {
    getSwipeData() {
      this.$http.get("api/getcover").then(response => {
        if(response.body.status===1){
          this.lunbotuList=response.body.imgs;
        }else{
          Toast("加载数据失败:)")
        }
      });
    }
  },
  components:{
    'swiper':Swiper
  }
};
</script>

<style lang="scss" scoped>
div{
    background-color: #fff
}
.mui-grid-view.mui-grid-9  {
background-color: #fff; 
  img {
    width: 60px;
    height: 60px;
  }
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
  font-size: 13px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
</style>

