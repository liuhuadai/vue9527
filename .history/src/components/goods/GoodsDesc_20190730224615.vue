<template>
  <div class="goodsdesc-container">
    <p>
        {{intro}}
    </p>
    <div v-for="item in imgintro" :key="item">
        <img :src="item" />
    </div>
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
            this.intro = response.body.god.intro
            this.imgintro = response.body.imgintro
            console.log(this.imgintro)
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
