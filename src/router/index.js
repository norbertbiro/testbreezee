import Vue from 'vue'
import Router from 'vue-router'
import Detect from '@/detect/index.js'

Vue.use(Router)

console.log('Is mobile?', Detect.isMobile())

const $router = new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Detect.isMobile()
        ? () => import('@/layouts/DashboardMobile.vue')
        : () => import('@/layouts/DashboardDesktop.vue')
    },
    {
      path: '/notes',
      name: 'Notes List',
      component: Detect.isMobile()
        ? () => import('@/layouts/NotesListMobile.vue')
        : () => import('@/layouts/NotesListDesktop.vue')
    }
  ]
})

export default $router
