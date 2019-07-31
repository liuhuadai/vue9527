<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in news" :key="item.img_url">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.summary}}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{item.add_time}}</span>
                                <span>点击：{{item.clicked}}次</span>
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
					console.log(this.news)
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
