<template>
  <div class="goodsdesc-container">
    <h3>{{ info.name }}</h3>

    <hr>

    <div class="content" v-html="info.content"></div>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
  data() {
    return {
      intro: '',
      imgintro:[]
    };
  },
  created(){
      this.getGoodsDesc()
  },
  methods: {
    getGoodsDesc() {
      this.$http.get("api/getgoddetail?godId=" + this.$route.params.id).then(response => {
        if (response.body.status === 1) {
            this.info = response.body.god
            console.log(this.info)
        } else {
          Toast("加载数据失败:)");
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.goodsdesc-container {
  padding: 4px;
  h3 {
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
  }
  .content{
    img{
      width: 100%;
    }
  }
}
</style>
