<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in news" :key="item.id">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>幸福的人儿</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2019/7/25 23:01</span>
                                <span>点击：0次</span>
                            </p>
						</div>
					</a>
				</li>
			</ul>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
	data(){
		return{
			news:[]
		};
	},
	created:function(){
		this.getNews();
	},
	methods:{
		getNews(){
			this.$http.get('api/getnews?pageIdx=1').then(response=>{
				if(response.body.status===1){
					this.news=response.body.news;
					console.log(response.body)
				}else{
					Toast('加载数据失败:)')
				}
			})
		}
	}
}
</script>

<style scoped lang="scss">
.mui-media-body{
	h1{
		font-size:14px;
	}
}
.mui-ellipsis{
	color:#226aff;
	font-size:12px;
	display: flex;
	justify-content: space-between;
}
</style>
