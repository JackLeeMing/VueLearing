import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterDemo from './components/RouterDemo'
import RouterChildrenDemo from './components/RouterChildrenDemo'
import Link from "./components/Link"
// import Menu from './components/Menu'
import MenuDemo from './components/MenuDemo'
import App from './App5.vue'
import Login from './Login.vue'
import Main from '@/components/main'

Vue.use(VueRouter)

  const routes = [
    { path: '/foo', component: RouterDemo, name: '1' },
    { path: '/bar', component: RouterDemo, name: '2' },
    { path: '/index/:id', component: App, name: '4' },
    { path: '/menu/demo', component: MenuDemo, name: '6'},
    { path: '/login', component: Login, name: 'login'},
    // 当 /user/:id 匹配成功，
    // RouterDemo 会被渲染在 App 的 <router-view /> 中
    { path: '/user/:id', 
      component: RouterDemo, 
      name: '3',
      props: true,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // RouterChildrenDemo 会被渲染在 RouterDemo 的 <router-view/> 中
          path: 'profile',
          component: RouterChildrenDemo,
          name: '3-1'
        },
        {
          // 当 /user/:id/posts 匹配成功
          // RouterChildrenDemo 会被渲染在 RouterDemo 的 <router-view/> 中
          path: 'posts',
          component: RouterChildrenDemo
        }
      ]
    },
    { path: '/link', component: Link, name:'link' },
    {
      path: '/',
      name: '_home',
      redirect: '/home',
      component: Main,
      meta: {
        hideInMenu: true,
        notCache: true
      },
      children: [
        {
          path: '/home',
          name: 'home',
          meta: {
            hideInMenu: true,
            title: '首页',
            notCache: true,
            icon: 'md-home'
          },
          component: () => import('@/view/single-page/home')
        }
      ]
    },
    { path: '*', component: RouterDemo, name: '404' }
  ]
  
  const router = new VueRouter({
    mode: 'history',
    routes,
  })
  export default router