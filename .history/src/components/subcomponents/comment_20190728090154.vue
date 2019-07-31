<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr />
    <textarea placeholder="请输入想输入的内容（最多120字）" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="commitComment">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in comments" :key="item.comId">
        <div
          class="cmt-title"
        >第{{i+1}}楼&nbsp;&nbsp;用户：{{item.username}}&nbsp;&nbsp;发表时间:{{item.comDate|dateFormat}}</div>
        <div class="cmt-body">{{item.content}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageIndex: 1,
      comments: [],
      msg: ""
    };
  },
  methods: {
    getCommentData() {
      this.$http
        .get("api/getnewscom?newsId=" + this.id + "&pageIdx=" + this.pageIndex)
        .then(response => {
          if (response.body.status === 1) {
            this.comments = this.comments.concat(response.body.comments);
            console.log(this.comments);
          } else {
            Toast("加载数据失败:)");
          }
        });
    },
    commitComment() {
      if (this.msg.trim() == "") {
        Toast("发表评论不能为空!");
      } else {
        this.$http
          .post("api/addnewscom?newsId=" + this.id, {
            username: "匿名用户",
            content: this.msg.trim()
          })
          .then(response => {
            if (response.body.status === 1) {
                this.comments.unshift
              Toast("发表评论成功");
            } else {
              Toast("发表评论失败");
            }
          });
      }
    }
  },
  created: function() {
    this.getCommentData();
  },
  props: ["id"]
};
</script>

<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
        font-size: 14px;
      }
      .cmt-body {
        font-size: 14px;
        text-indent: 2em; //离左边距离
      }
    }
  }
}
</style>
