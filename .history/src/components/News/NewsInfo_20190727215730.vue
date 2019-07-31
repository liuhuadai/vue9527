<template>
    <div class="newsInfo-container">
        <h3 class="title">
            新闻标题
        </h3>
        <p class="subtitle">
            <span>发表时间：{{news.add_time}}</span>
            <span>点击:{{news.clicked}}次</span>
        </p>
        <br>
    </div>
</template>
<script>
export default {
     data(){
         return{
             id:$route.params.id,
             news:{}//新闻对象
         }
     },
     methods:{
         getNewsInfo(){
              this.$http.get('api/getnewsdetail?newsId='+this.id).then(response=>{
                  if(response.body.status===1){
                      this.news = response.body.news;
                  }else{
                      Toast('加载数据失败:)')
                  }
              })
         }
     }
}
</script>

<style lang="scss" scoped>
.newsInfo-container{
    .title{
        font-size: 16px;
        text-align:center;
        color:red;
    }
    .subtitle{
        font-size: 13px;
        color:#226aff;
        display:flex;
        justify-content: space-between;
    }
}
</style>

