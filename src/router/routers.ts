import Vue , { AsyncComponent } from 'vue'
import parentView from '@/components/parent-view'
// 首页
const main: AsyncComponent = () => import('@/pages/main/main.vue')
// 富文本编辑器
const textEditor: AsyncComponent = () => import('@/pages/components/text-editor/text-editor.vue')

export default [
  {
    path: '/',
    name: 'Home',
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
  {
    path: '/components',
    name: 'components',
    meta: {
      icon: 'social-buffer',
      title: '组件'
    },
    component: main,
    children: [
      {
        path: 'text_editor',
        name: 'text_editor',
        meta: {
          icon: 'arrow-graph-up-right',
          title: '富文本编辑器'
        },
        component: textEditor
      }
    ]
  },
  // {
  //   path: '/multilevel',
  //   name: 'multilevel',
  //   meta: {
  //     icon: 'arrow-graph-up-right',
  //     title: '多级菜单'
  //   },
  //   component: main,
  //   children: [
  //     {
  //       path: 'level_2_1',
  //       name: 'level_2_1',
  //       meta: {
  //         icon: 'arrow-graph-up-right',
  //         title: '二级-1'
  //       },
  //       component: () => import('@/view/multilevel/level-1.vue')
  //     },
  //     {
  //       path: 'level_2_2',
  //       name: 'level_2_2',
  //       meta: {
  //         access: ['super_admin'],
  //         icon: 'arrow-graph-up-right',
  //         title: '二级-2'
  //       },
  //       component: parentView,
  //       children: [
  //         {
  //           path: 'level_2_2_1',
  //           name: 'level_2_2_1',
  //           meta: {
  //             icon: 'arrow-graph-up-right',
  //             title: '三级'
  //           },
  //           component: () => import('@/view/multilevel/level-2/level-2-1.vue')
  //         }
  //       ]
  //     },
  //     {
  //       path: 'level_2_3',
  //       name: 'level_2_3',
  //       meta: {
  //         icon: 'arrow-graph-up-right',
  //         title: '二级-3'
  //       },
  //       component: parentView,
  //       children: [
  //         {
  //           path: 'level_2_3_1',
  //           name: 'level_2_3_1',
  //           meta: {
  //             access: ['super_admin'],
  //             icon: 'arrow-graph-up-right',
  //             title: '三级-1'
  //           },
  //           component: () => import('@/view/multilevel/level-2/level-2-1.vue')
  //         },
  //         {
  //           path: 'level_2_3_2',
  //           name: 'level_2_3_2',
  //           meta: {
  //             access: ['super_admin', 'admin'],
  //             icon: 'arrow-graph-up-right',
  //             title: '三级-2'
  //           },
  //           component: () => import('@/view/multilevel/level-2/level-2-1.vue')
  //         }
  //       ]
  //     }
  //   ]
  // },
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
