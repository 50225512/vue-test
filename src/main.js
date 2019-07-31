//入口软件
import Vue from 'Vue'
import app from './App.vue'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import { Header,Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

//路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

//导入 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)


var vm = new Vue({
    el:'#app',
    render: c=> c(app),
    router
})