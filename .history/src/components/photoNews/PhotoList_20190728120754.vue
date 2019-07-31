<template>
  <div>
    <!-- 顶部滑动条区域 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a :class="['mui-control-item', i == 0 ? 'mui-active' : '']"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html" 
            v-for="(item,i) in types" 
            :key="item.id">
            {{item}}
            </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//导入mui.js,导入这个时会报错Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
//在严格模式下不被允许，
import mui from "../../lib/mui/js/mui.min.js";
import {Toast} from 'mint-ui'
export default {
    data(){
        return{
            types:[]
        }
    },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  created(){
      this.getphotoType();
  },
  methods:{
        getphotoType(){
            this.$http.get('api/getphotypes').then(response=>{
                if(response.body.status===1){
                    this.types = response.body.types;
                    console.log(this.types)
                }else{
                    Toast('加载数据失败:)')
                }
            })
        }
  }
};
</script>
<style lang="scss" scoped>
</style>


