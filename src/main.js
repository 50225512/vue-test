//入口软件
import Vue from 'Vue'
import app from './App.vue'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
// import { Header,Swipe, SwipeItem, Button } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

//路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})


//导入 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//配置请求根路径
Vue.http.options.root = 'https://www.apiopen.top'


var vm = new Vue({
    el:'#app',
    render: c=> c(app),
    router
})