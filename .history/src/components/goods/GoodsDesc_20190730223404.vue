<template>
  <div>
    <h3>商品介绍</h3>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
  data() {
    return {
      info: {}
    };
  },
  methods: {
    getGoodsDesc() {
      this.$http.get("api/getgoddetail?godId=" + this.$route.params.id).then(response => {
        if (response.body.status === 1) {
            this.info = response.body.god
        } else {
          Toast("加载数据失败:)");
        }
      });
    }
  }
};
</script>
