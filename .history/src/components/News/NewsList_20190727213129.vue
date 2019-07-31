<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item._id">
        <router-link to="/home/newsinfo/">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间：{{item.add_time| timeFormat}}</span>
              <span>点击：{{item.clicked}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui"
//导入moment插件，格式化时间
import moment from 'moment'
export default {
  data() {
    return {
      newsList: []
    };
  },
  created: function() {
    this.getNews()
  },
  methods: {
    getNews() {
      this.$http.get("api/getnews").then(response => {
        if (response.body.status === 1) {
          this.newsList = JSON.parse(response.body.news);
        } else {
          Toast("加载数据失败:)");
        }
      });
    }
  },
  filters:{
	  timeFormat:function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
		  return moment(dataStr).format(pattern)
	  }
  }
};
</script>

<style scoped lang="scss">
.mui-media-body {
  h1 {
    font-size: 14px;
  }
}
.mui-ellipsis {
  color: #226aff;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
}
</style>
