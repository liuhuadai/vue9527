<template>
  <div class="goods-list">
    
    <div class="goods-item">
      <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4006394051,947627728&fm=26&gp=0.jpg" />
      <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥899</span>
          <span class="old">￥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>

    <div class="goods-item">
      <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3281070933,157035784&fm=26&gp=0.jpg" alt="">
      <h1 class="title">尼康(Nikon)D3300套机（18-55mm f/3.5-5.6G VRII）（黑色）</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥899</span>
          <span class="old">￥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>

    <div class="goods-item">
      <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4005290759,2485313692&fm=26&gp=0.jpg" alt="">
      <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥899</span>
          <span class="old">￥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>

  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.goods-list{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .goods-item{
        width:49%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;
        img{
            width: 100%;
        }
        .title{
            font-size:16px;
        }
        .info{
            background-color: #ccc;
            .price{
                .now{
                    color: red;
                    font-size:14px;
                }
                .old{
                    text-decoration: line-through;
                    font-size:12px;
                }
            }
            .sell{
                font-size:13px;
                display: flex;
                justify-content: space-between;
            }
        }
    }
}
</style>

