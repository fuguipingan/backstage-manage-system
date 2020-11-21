<template>
  <div class="box">
    <div class="waterfall">
      <vue-waterfall-easy
        ref="waterfall"
        :imgsArr="imgsArr"
        @scrollReachBottom="getData"
      >
        <div class="info" slot-scope="props">第{{ props.index + 1 }}张图片</div>
      </vue-waterfall-easy>
    </div>
  </div>
</template>
<script>
import vueWaterfallEasy from "vue-waterfall-easy";
export default {
  components: {
    vueWaterfallEasy
  },
  data() {
    return {
      imgsArr: [],
      page: 0
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    scrollReachBottom(e) {
      console.log(e);
    },
    getData() {
      var list = [
        {
          src:
            "https://sucai.suoluomei.cn/sucai_zs/images/20201027152322-15.jpg"
        },
        {
          src:
            "https://sucai.suoluomei.cn/sucai_zs/images/20201027152321-13.jpg"
        },
        {
          src:
            "https://sucai.suoluomei.cn/sucai_zs/images/20201027152322-14.jpg"
        },
        {
          src:
            "https://sucai.suoluomei.cn/sucai_zs/images/20201027152321-12.jpg"
        },
        {
          src:
            "https://sucai.suoluomei.cn/sucai_zs/images/20201027152320-10.jpg"
        },
        {
          src:
            "https://sucai.suoluomei.cn/sucai_zs/images/20201027152320-11.jpg"
        },
        {
          src: "https://sucai.suoluomei.cn/sucai_zs/images/20201027152318-8.jpg"
        },
        {
          src: "https://sucai.suoluomei.cn/sucai_zs/images/20201027152319-9.jpg"
        },
        {
          src: "https://sucai.suoluomei.cn/sucai_zs/images/20201027152300-7.jpg"
        },
        {
          src: "https://sucai.suoluomei.cn/sucai_zs/images/20201027152300-6.jpg"
        }
      ];
      this.page += 1;
      if (this.page == 6) {
        this.$refs.waterfall.waterfallOver();
      } else {
        this.imgsArr = this.imgsArr.concat(list);
      }
    }
  }
};
</script>

<style scoped>
.waterfall {
  width: 100%;
  height: 500px;
}
.info {
  text-align: center;
}
</style>
