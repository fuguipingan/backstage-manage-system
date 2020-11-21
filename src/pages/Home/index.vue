<template>
  <div class="home">
    <el-container>
      <!-- 侧边栏 start-->
       <el-aside width="200">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          :router="flag"
          :collapse="isCollapse"
        >
          <qf-sub-menu :sideMenu="sideMenu"></qf-sub-menu>
        </el-menu>
      </el-aside>
      <!-- 侧边栏 end -->
      <el-container>
        <!-- 主体header start  -->
        <el-header>
          <div class="header">
            <el-row type="flex" class="row-bg" justify="space-between">
              <el-col :span="6"
                ><div class="grid-content bg-purple">
                  <span class="iconfont icon-zhankai" v-if="isCollapse" @click="isCollapseOK"></span>
                  <span class="iconfont icon-shouqi" v-else @click="isCollapseOK"></span>
                  </div
              ></el-col>
              <el-col :span="6"
                ><div class="grid-content bg-purple-light">
                  后台管理系统
                </div></el-col
              >
              <el-col :span="6"
                ><div class="grid-content bg-purple">
                  <div class="right">
                    <span class="headPortrait iconfont icon-icon-test"></span>
                    <span>欢迎您</span>
                    <span @click="toMy">{{userInfo.nickname}}</span>
                    <span class="signOut" @click="signOut"> 退出</span>
                  </div>
                </div></el-col
              >
            </el-row>
          </div>
        </el-header>
        <!-- 主体header  end -->
        <!-- 主体main  start -->
        <el-main>
           <!-- 面包屑 -->

          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/HomePage' }"
              >首页</el-breadcrumb-item
            >
            <el-breadcrumb-item
              :to="{ path: item.path }"
              v-for="(item, index) in crumbs"
              :key="index"
              >{{ item.meta.name }}</el-breadcrumb-item
            >
          </el-breadcrumb>
          <router-view></router-view>
        </el-main>
        <!-- 主体main  end -->
      </el-container>
    </el-container>
  </div>
</template>
<script>
// import { getLoginLog,getCaptcha,getMenuList } from "@/api/index.js";

import { mapState, mapActions } from "vuex";
export default {
  data() {
   
    return {
      isCollapse: false,
      flag : true,
       
    };
  },
 computed: {
    ...mapState(["userInfo", "sideMenu", "crumbs"])
  },
  mounted() {
   
  },
  methods: {
     tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      //点昵称，跳转我的
    toMy(){
      this.$router.push("/MyCenter")
    },
    //侧边栏伸缩
    isCollapseOK(){
      // console.log(1)
      // console.log(this.isCollapse)
      this.isCollapse = !this.isCollapse
    },
    //点击退出
    signOut() {
      // console.log(1);
      //清除token，h5存储
      localStorage.removeItem("Administration-permission");
      localStorage.removeItem("Administration-token");
      localStorage.removeItem("Administration-userInfo");
      
        this.$router.push("/Login");
        location.reload()
      // this.$nextTick(() => {
      //   this.$router.push({ name: "Blank" });
      // });
    }
  }
};
</script>
<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.right > span {
  cursor: pointer;
  margin: 0px 5px;
}
.el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>


