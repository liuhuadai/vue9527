<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr />
    <textarea placeholder="请输入想输入的内容（最多120字）" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间:2019-7-27 23:05:10</div>
        <div class="cmt-body">锄禾日当午</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>
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
  .cmt-list{
      margin: 5px 0;
      .cmt-item{
          .cmt-title{
            //   line-height: 30px;
              background-color: #ccc;
              font-size: 14px; 
          }
          .cmt-body{
              font-size: 14px; 
              text-indent: 2em;//离左边距离
          }
      }
  }
}
</style>
