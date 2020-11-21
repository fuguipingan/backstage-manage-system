import Vue from "vue";
import VueRouter from "vue-router";

//解决路由导航到统一路径重复报错的问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/Login",
    name: "Login",
    component: () => import(/* webpackChunkName:'Home' */ "./../pages/Login")
  },
  {
    path: "/waterFall",
    name: "waterFall",
    component: () =>
      import(/* webpackChunkName:'waterFall' */ "./../pages/WaterFall")
  },
  {
    path: "/twoLayout",
    name: "twoLayout",
    component: () =>
      import(/* webpackChunkName:'twoLayout' */ "./../pages/TwoLayout")
  },
  {
    path: "/adaptation",
    name: "adaptation",
    component: () =>
      import(/* webpackChunkName:'adaptation' */ "./../pages/Adaptation")
  }
];

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes
// });
const router = new VueRouter({
  routes
});

export default router;
