import Vue , { AsyncComponent } from 'vue'
import parentView from '@/components/parent-view'
const login: AsyncComponent = () => import('@/pages/login/login.vue')
// 首页
const main: AsyncComponent = () => import('@/pages/main/main.vue')
// 文章发布
const articlePublish: AsyncComponent = () => import('@/pages/article/article-publish.vue')

export default [
  // 登陆页面
  {
    path: '/login',
    name: 'login',
    meta: {
      hideInMenu: true
    },
    component: login
  },
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
    component: main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {
          hideInMenu: true,
          notCache: true
        },
        component: () => import('@/pages/single-page/home/index.vue')
      }
    ]
  },
  // 文章编辑
  {
    path: '/article',
    meta: {
      icon: 'briefcase',
      title: '文章'
    },
    name: 'article',
    component: main,
    children: [
        {
          path: 'publish',
          meta: {
            title: '文章发布',
            icon: 'compose'
          },
          name: 'artical-publish',
          component: articlePublish
        }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    component: () => import('@/pages/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    component: () => import('@/pages/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    component: () => import('@/pages/error-page/404.vue')
  }
]
