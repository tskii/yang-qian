// 导入第三方包
import Vue from "vue";
import VueRouter from "vue-router";
import ElementUI from "element-ui";
import Filter from "./filter/index.js";
import 'element-ui/lib/theme-chalk/index.css'

//导入公共css
import "./css/style.css";

//启用vue组件
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Filter);

//把axios和api配置对象注入到Vue原型中
import axios from "./js/axios_config.js";
import api from "./js/api_config.js";
Vue.prototype.$http = axios;
Vue.prototype.$api = api;

//导入根组件
import AppComponent from "./commponent/App.vue";

import router from "./router/index.js";



new Vue({
    el: '#app',
    render: c => c(AppComponent),
    router
})