<template>
  <div class="box">
    <div class="twoLayout">
      <div class="left">
        <ul>
          <li>
            <span>图标</span>
            &nbsp;
            <span>商品分类</span>
          </li>
          <li>
            <span>图标</span>
            &nbsp;
            <span>女装/内衣</span>
          </li>
          <li>
            <span>图标</span>&nbsp;
            <span>男装/运动户外</span>
          </li>
          <li>
            <span>图标</span>&nbsp;
            <span>女鞋/男鞋/箱包</span>
          </li>
          <li>
            <span>图标</span>&nbsp;
            <span>美妆/个人护理</span>
          </li>
          <li>
            <span>图标</span>&nbsp;
            <span>手机/数码/电脑办公</span>
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="top">
          <ul>
            <li>天猫超市</li>
            <li>会员</li>
            <li>电气会员</li>
            <li>电器城</li>
          </ul>
        </div>
        <div class="container">
          <div class="lbt">
            <template>
              <el-carousel
                :interval="4000"
                type="card"
                height="200px"
                width="500px"
              >
                <el-carousel-item v-for="item in 6" :key="item">
                  <h3 class="medium">{{ item }}</h3>
                </el-carousel-item>
              </el-carousel>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="interruptRequest"></div>
  </div>
</template>

<script></script>
<style scoped lang="scss">
.twoLayout {
  width: 100%;
  .left {
    position: absolute;
    width: 150px;
    background: rgba(0, 0, 0, 0.2);
    top: 150px;
    left: 20px;
    z-index: 100;
    ul {
      li {
        width: 150px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font: 16px/24px "";
        border-bottom: 1px solid red;
        padding-top: 5px;
      }
    }
  }
  .right {
    .top {
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px;
        li {
          margin: 0px 5px;
          border-radius: 10px;
          padding: 5px 10px;
          background: hotpink;
        }
      }
    }
  }
}
.twoLayout {
  .left ul li:hover {
    background: #fff;
    color: green;
  }
  .right .top ul li:hover {
    background: #ccc;
    color: green;
  }
}
// 轮播图
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
