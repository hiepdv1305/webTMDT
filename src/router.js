import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "contact" */ './views/Login.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import(/* webpackChunkName: "contact" */ './views/Category.vue')
    },
    {
      path: '/event/:id',
      name: 'event',
      component: () => import(/* webpackChunkName: "contact" */ './views/Event/_id.vue')

    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import(/* webpackChunkName: "contact" */ './views/Cart.vue')
    },
    {
      path: '/rechange',
      name: 'rechange',
      component: () => import(/* webpackChunkName: "contact" */ './views/Rechange.vue')

    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "contact" */ './views/Profile.vue')

    },
    {
      path: '*',
      name: 'Error',
      meta: {
        layout: 'error'
      }
    }
  ]
})
