import VueRouter from "vue-router";

import GoodsHomeComponent from "../commponent/goods/GoodsHome.vue";
import GoodsDetailComponent from "../commponent/goods/detail/GoodsDetail.vue";
import GoodsMoreComponent from "../commponent/goods/more/GoodsMore.vue";

//配置路由对象
const routerConfig = [
    //默认访问
    { path: '/', redirect: '/goods' },

    { name: 'g', path: '/goods', component: GoodsHomeComponent },
    { name: 'gd', path: '/goods/detail/:id', component: GoodsDetailComponent },
    { name: 'gm', path: '/goods/more', component: GoodsMoreComponent },

]

export default new VueRouter({
    routes: routerConfig
})