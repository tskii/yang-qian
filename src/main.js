// 导入第三方包
import Vue from "vue";

//导入根组件
import AppComponent from "./commponent/App.vue";

new Vue({
    el: 'app',
    render: c => c(AppComponent)
})