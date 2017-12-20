// 导入第三方包
import Vue from "vue";
import VueRouter from "vue-router";

//导入公共css
import "./css/style.css";

//启用vue组件
Vue.use(VueRouter);

//导入根组件
import AppComponent from "./commponent/App.vue";

import router from "./router";


new Vue({
    el: '#app',
    render: c => c(AppComponent),
    router
})