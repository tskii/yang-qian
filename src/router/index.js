import VueRouter from "vue-router";

import GoodsHomeComponent from "../commponent/goods/GoodsHome.vue";
import GoodsDetailComponent from "../commponent/goods/detail/GoodsDetail.vue";
import GoodsMoreComponent from "../commponent/goods/more/GoodsMore.vue";

//配置路由对象
const routerConfig = [
    //默认访问
    { path: '/', redirect: '/goods' },

    { path: '/goods', commponent: GoodsHomeComponent },
    { path: '/goods/detail/:id', commponent: GoodsDetailComponent },
    { path: '/goods/more', commponent: GoodsMoreComponent },

]

export default new VueRouter({
    routes: routerConfig
})