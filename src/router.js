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
      path: '/singleproduct',
      name: 'singleproduct',
      component: () => import(/* webpackChunkName: "contact" */ './views/Single_product.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import(/* webpackChunkName: "contact" */ './views/Cart.vue')
    },
    // {
    //   path: '/checkout',
    //   name: 'checkout',
    //   component: () => import(/* webpackChunkName: "contact" */ './views/Checkout.vue')

    // },
    {
      path: '*',
      name: 'Error',
      meta: {
        layout: 'error'
      }
    }
  ]
})
