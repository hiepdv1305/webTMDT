import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Test from './views/test.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/test',
      name: 'test',
      component: Test
    },
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
      path: '/acceptRechange',
      name: 'acceptRechange',
      component: () => import(/* webpackChunkName: "contact" */ './views/AcceptRechange.vue')
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
      path: '/withdrawal',
      name: 'withdrawal',
      component: () => import(/* webpackChunkName: "contact" */ './views/Withdrawal.vue')

    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "contact" */ './views/Profile.vue')

    },
    {
      path: '/winner',
      name: 'winner',
      component: () => import(/* webpackChunkName: "contact" */ './views/Winner.vue')

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
