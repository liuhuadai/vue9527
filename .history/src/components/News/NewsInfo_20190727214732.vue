<template>
    <div class="newsInfo-container">
        <h3 class="title">
            新闻标题
        </h3>
        <p class="subtitle">
            <span>发表时间：</span>
            <span>点击:0次</span>
        </p>
        <br>
    </div>
</template>
<script>
export default {
     data(){
         return{
             id:$route.params.id,
             news:[]
         }
     },
     methods:{
         getNewsInfo(){
              this.$http.get('api/getnewsdetail?newsId='+this.id).then(response=>{
                  if(response.body.status===1){
                      this.news = response.body.news;
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

