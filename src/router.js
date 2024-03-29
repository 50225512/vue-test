import VueRouter from 'vue-router'
//导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import NewsList from './components/news/NewsList.vue'
import PhotoList from './components/photos/PhotoList.vue'


// 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/', redirect:'/home'},
    {path:'/home', component:HomeContainer },
    {path:'/member', component:MemberContainer },
    {path:'/search', component:SearchContainer },
    {path:'/shopcar', component:ShopcarContainer },
    {path:'/home/newslist', component:NewsList},
    {path:'/home/photolist', component: PhotoList }
  ],
  linkActiveClass:'mui-active'
})

// 把路由对象暴露出去
export default router