<template>
  <div class="newsInfo-container">
    <h3 class="title">
      {{news.title}}
    </h3>
    <p class="subtitle">
      <span>发表时间：{{news.add_time}}</span>
      <span>点击:{{news.clicked}}次</span>
    </p>
    <hr>
    <div class="content" v-html="news.content">
    </div>
    <img  :src="news.img_url"/>
    <!-- 评论子组件     -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import comment from '../subcomponents/comment'
export default {
  data() {
    return {
      id: this.$route.params.id,
      news: "" //新闻对象
    };
  },
  created: function() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      this.$http.get("api/getnewsdetail?newsId=" + this.id).then(response => {
        console.log(response)
        this.news = response.body.news;
        console.log(response.body.news);

        Toast("加载数据失败:)");
      });
    }
  },
  components:{
      'comment-box':comment
  }
};
</script>

<style lang="scss" scoped>
.newsInfo-container {
  .title {
    font-size: 16px;
    text-align: center;
    color: red;
    margin: 15px 0;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
}
</style>

