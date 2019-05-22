import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import NewsContainer from './components/news/NewsContainer.vue'
import VipContainer from './components/tabbar/VipContainer.vue'
import ShopingContainer from './components/tabbar/ShopingContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsDetailsContainer from './components/news/NewsDetailsContainer.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: HomeContainer
    },
    {
      path:'/home/newslist',
      name: 'newslist',
      component: NewsContainer
    },
    {
      path:'/home/goodslist',
      name: 'goodslist',
      component: GoodsList
    },
    {
      path:'/home/goodsinfo/:id',
      name: 'goodsinfo',
      component: GoodsInfo
    },
    {
      path: '/vip',
      name: 'vip',
      component:VipContainer
    },
    {
      path: '/shoping',
      name: 'shoping',
      component:ShopingContainer
    },
    {
      path: '/search',
      name: 'search',
      component:SearchContainer
    },
    {
      path: '/newsdetail/:id',
      name: 'detail',
      component:NewsDetailsContainer
    }
  ],linkActiveClass:"mui-active"
})
