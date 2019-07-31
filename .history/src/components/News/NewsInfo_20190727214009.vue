<template>
    <div class="newsInfo-container">
        <h3 class="title">
            新闻标题
        </h3>
        <p class="subtitle">
            <span>发表时间：</span>
            <span>点击:0次</span>
        </p>
    </div>
</template>
<script>
export default {
     data(){
         return{
             id:$route.params.id
         }
     },
     methods:{
         getNewsInfo(){
              
         }
     }
}
</script>

<style lang="scss" scoped>

</style>

