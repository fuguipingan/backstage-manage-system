import Vue from "vue";
import Vuex from "vuex";

import {getMenuList} from "@/api/index.js"

import recursionRouters from "../utils/recursionRoutes";//递归函数
import allRouters from "../router/allRouter";//全部的路由
import dynamicRouter from "../router/dynamicRouter"; //动态路由
import router from "../router/index";//展示的路由

Vue.use(Vuex);

let permission = localStorage.getItem("Administration-permission")
let token = localStorage.getItem("Administration-token") 
let userInfo =localStorage.getItem("Administration-userInfo")

permission  = permission ? JSON.parse(permission) : ""; 
token  = token ? token : ""; 
userInfo  = userInfo ? JSON.parse(userInfo) : ""; 

export default new Vuex.Store({
  state: {
    permission, 
    token,
    userInfo,
    crumbs: [],//处理面包屑
    sideMenu:[],
  },
  mutations: {
    SET_PERMISSION(state, paylody){
      state.permission = paylody;
    },
    SET_TOKEN(state, paylody){
      state.token = paylody;
    },
    SET_USERINFO(state, paylody){
      state.userInfo = paylody;
    },
    //把请求到的数据放入state中
    SET_SINEMENU(state,payload){
      // console.log(allRouters)
      // console.log(payload)
      let newRouter = recursionRouters(allRouters,payload)
      // console.log(newRouter )
      state.sideMenu = newRouter;//把递归出来的路由放入vuex中
      let target = dynamicRouter.find(item=>item.path === "/")//找出home路由
      target.children = [...newRouter];//放入home的子路中
      router.addRoutes([...dynamicRouter]);//再放入动态路由中
    },
    SET_CRUMBS(state, payload) {
      //处理面包屑同步到crumbs中
      state.crumbs = payload;
    },
  },
  actions: {
    //请求侧边栏数据
    async FETCH_MENULIST({commit},payload){
      let res = await getMenuList()
      // console.log(res)
      if(res && res.data){
        // console.log(res)
        commit("SET_SINEMENU",res.data.menuList)
      }
    }
  },
  modules: {},
  getters:{},
});
