<template>
  <div class="goods-container">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</div>
      </div>
    </div>
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
export default {
    data(){
        return{
            id:this.$route.params.id,
            lunbotuList:[]
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
                    console.log(this.lunbotuList)
                }else{
                    Toast('加载数据失败:)')
                }
            })
        }
    }
};
</script>
<style lang="scss" scoped>
.goods-container{
    background-color: azure;
}
</style>
