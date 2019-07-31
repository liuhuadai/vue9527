<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../../images/shuijiao.jpg">
						<div class="mui-media-body">
							<h1>幸福的人儿</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2019/7/25 23:01</span>
                                <span>点击：0次</span>
                            </p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../../images/muwu.jpg">
						<div class="mui-media-body">
							<h1>幸福的人儿</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2019/7/25 23:01</span>
                                <span>点击：0次</span>
                            </p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../../images/cbd.jpg">
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
export default {
	data(){
		return{
			news:[]
		};
	},
	created:{
		this.getNews()
	},
	methods:{
		getNews(){
			this.$http.get('api/getnews?pageIdx=1').then(response=>{
				if(response.body.status===1){
					console.log(response.body)
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
