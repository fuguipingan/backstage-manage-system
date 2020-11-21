<template>
  <div class="myCenter">
    <h1>myCenter</h1>
    <div class="waterfall">
      <h1>手写瀑布流</h1>
      <div class="mian">
        <img src="../../../assets/imgs/waterfall/img14.jpg" alt="" />
        <img src="../../../assets/imgs/waterfall/img02.jpg" alt="" />
        <img src="../../../assets/imgs/waterfall/img05.jpg" alt="" />
        <img src="../../../assets/imgs/waterfall/img14.jpg" alt="" />
        <img src="../../../assets/imgs/waterfall/img02.jpg" alt="" />
        <img src="../../../assets/imgs/waterfall/img05.jpg" alt="" />
        <img src="../../../assets/imgs/waterfall/J.png" alt="" />
        <img src="../../../assets/imgs/waterfall/J.png" alt="" />
        <img src="../../../assets/imgs/waterfall/J.png" alt="" />
        <img src="../../../assets/imgs/waterfall/J.png" alt="" />
        <img src="../../../assets/imgs/waterfall/img05.jpg" alt="" />
        <img src="../../../assets/imgs/waterfall/img05.jpg" alt="" />
        <img src="../../../assets/imgs/waterfall/img05.jpg" alt="" />
        <img src="../../../assets/imgs/waterfall/img05.jpg" alt="" />

        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605678938044&di=2db03cbc6bde31875dbe7736d2784a4d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201308%2F06%2F20130806220019_sjhz8.jpeg"
          alt=""
        />
      </div>
    </div>
    <div class="zujian">
      <h1>插件写瀑布流</h1>
      <waterFall></waterFall>
    </div>
  </div>
</template>

<script>
//引入瀑布流插件
import waterFall from "./WaterFall";
export default {
  data() {
    return {
      imgsArr: [], //存放所有已加载图片的数组（即当前页面会加载的所有图片）
      fetchImgsArr: [] //存放每次滚动时下一批要加载的图片的数组
    };
  },
  components: {
    waterFall
  }
};
</script>
<style scoped lang="scss">
.myCenter {
  width: 100%;
  h1 {
    text-align: center;
  }
  .waterfall {
    border: 1px #ccc solid;
    width: 400px;
    position: relative;
    text-align: center;
    .mian {
      display: flex;
      flex-flow: wrap;
      width: 100%;
      img {
        margin: 10px;
        width: calc(100% / 3 - 22px);
        border: 1px solid green;
        height: auto;
      }
    }
  }
  .zujian {
    height: 500px;
    margin: 100px auto;
  }
}
</style>
