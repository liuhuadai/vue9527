<template>
    <div class="photoinfo-container">
    <h3>{{ photoinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoinfo.add_time | dateFormat }}</span>
      <span>点击：{{ photoinfo.click }}次</span>
    </p>

    <hr>

    <!-- 缩略图区域 -->
    <div class="thumbs">
      <img class="preview-img" v-for="(item, index) in list" :src="item.phos[0]" height="100" @click="$preview.open(index, list)" :key="item.id">
    </div>

    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>

    <!-- 放置一个现成的 评论子组件 -->
    <cmt-box :id="this.id"></cmt-box>
  </div>
</template>
<script>
export default {
    data(){
        return{
            photoinfo:
                {title:'萌妹子', add_time:Date.now(), click:1,content:'<h3>不知道写啥的html标签</h3>'},
            list:[],
            id:this.$route.params.id
        }
    },
    created(){
        this.getPhotoInfo();
    },
    methods:{
        getPhotoInfo(){
            this.$http.get('api/getphodetail?phoId='+this.$route.params.id).then(
                response=>{
                    if(response.body.status===1){
                        this.list = response.body.pho
                        console.log(this.list)
                    }else{
                        Toast('加载数据失败:)')
                    }
                }
            )
        }
    }
}
</script>
<style lang="scss" scoped>

</style>


