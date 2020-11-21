const dynamicRouters = [
    {
        path: "/",
        name: "Home",
        redirect:"/HomePage",
        component: () => import(/* webpackChunkName:'Home' */ "./../pages/Home"),
        children: [],
    },
    {
        path: "*",
        component: () => import(/* webpackChunkName:'404' */ "../pages/page404")
    }
];
export default dynamicRouters