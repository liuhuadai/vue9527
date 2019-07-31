<template>
    <div>
        <h1>新闻详情{{$route.params.id}}</h1>
    </div>
</template>
<script>
export default {
     data(){
         return{
             id:$route.params.id
         }
     }
}
</script>

<style lang="scss" scoped>

</style>

