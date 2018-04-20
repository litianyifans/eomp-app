import App from '../App'
import Vue from 'vue'
import Router from 'vue-router'
import {routerMode} from "../config/env";


//参考网址https://blog.csdn.net/qq_27626333/article/details/76228578
//vue按需加载组件,数组传入依赖的js ,加载的组件名,模块名称
const home = r => require.ensure([], () => r(require('@/page/home/home.vue')), 'home')




Vue.use(Router)
export default new Router({
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  },
  routes: [
    {
      path: '/',
      component: App,
      children:[
        //根目录跳向首页
        {
          path: '',
          redirect: '/home'
        },
        {
          path: '/home',
          component:home
        }
      ]
    }
  ]
})

