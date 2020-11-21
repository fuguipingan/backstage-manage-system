import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//移动端适配插件

import "lib-flexible"; //引入插件

//图片懒加载
import VueLazyLoad from "vue-lazyload";

Vue.use(VueLazyLoad, {
  error: "data-src", //加载图片出错了，显示的图片
  loading: "data-src", //加载中，显示的图片（预加载显示的图片）
  attempt: 3, //尝试加载的图片数量
  preLoad: 1.3, //预加载的高度比例
  listenEvents: ["scroll"] //触发的事件 (监听)
});

//引入element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 引入animate.style
import animated from "animate.css";
Vue.use(animated);

import qfSubMenu from "qf-sub-menu"; //引入侧边栏插件
Vue.use(qfSubMenu);

//导入进度条插件
import NProgress from "nprogress";
import "nprogress/nprogress.css";

//引入css样式
import "@/assets/css/global.css";
import "@/assets/css/el-reset.css";

import "./assets/fonts/iconfont.css";

Vue.config.productionTip = false;

//路由前置钩子（导航守卫）
router.beforeEach((to, from, next) => {
  // NProgress.start(); //进度条出现
  // store.dispatch("FETCH_MENULIST")
  // console.log(to)
  // console.log(from)
  let token = localStorage.getItem("Administration-token");
  if (token) {
    //如果是注册或者登陆页面，直接放行；
    if (!store.state.sideMenu.length) {
      // 判断是否为第一次进入页面，是sodeMenu为空数组
      store
        .dispatch("FETCH_MENULIST")
        .then(res => {
          next({ path: to.path }); //
          //这里要注意, next里面要传参数即要进入的页面的路由信息，因为next传参数后，当前要进入的路由会被废止，转而进入参数对应的路由，虽然是同一个路由，这么做主要是为了确保addRoutes生效了。
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      //
      next();
    }
  } else {
    //没有token，
    if (
      to.path === "/login" ||
      to.path === "/waterFall" ||
      to.path === "/twoLayout" ||
      to.path === "/adaptation"
    ) {
      //访问登陆页面可以
      next();
    } else {
      //没有访问登陆页，跳转到登录页
      next({ path: "/login" });
    }
  }
  // next();
});

//使用路由后置钩子处理面包屑
router.afterEach((to, from) => {
  NProgress.done(); //进度条消失
  // console.log(to)
  //name: "HomePage", meta: {…}, path: "/HomePage", hash: "", query: {…}, …
  //path: "/StudentManager/studentProject" 当前路径
  //matched:[0,1,2]里面是当时需要的路径名称matched: {name: "学员管理"}
  // console.log(from)
  let crumbList = to.matched.slice(1);
  // console.log(crumbList)
  store.commit("SET_CRUMBS", crumbList);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
