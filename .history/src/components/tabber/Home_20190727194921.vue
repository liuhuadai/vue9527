<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in imgs" :key="item.id">
        <img :src="item"/>
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu1.png" />
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu2.png" />
          <div class="mui-media-body">图片资讯</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu3.png" />
          <div class="mui-media-body">商品购买</div>
        </a>
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
export default {
  data() {
    return {
      imgs: []
    };
  },
  created: function() {
    this.getSwipeData()
  },
  methods: {
    getSwipeData() {
      this.$http.get("http://120.77.181.41:3000/api/getcover").then(response => {
        console.log(response.body)
        if(response.body.status===1){
          this.imgs=response.body.imgs;
          console.log(this.imgs)
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
div{
    background-color: #fff
}
.mint-swipe {
  height: 170px;

  .mint-swipe-item {
    &:nth-child(1) {
      background-color: green;
    }
    &:nth-child(2) {
      background-color: black;
    }
    &:nth-child(3) {
      background-color: red;
    }
    img{
      width:100%;
    }
  }
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

