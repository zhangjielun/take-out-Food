import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    redirect:'/shop',
    children:[
      {
        path: '/shop',
        name: 'Shop',
        component: () => import('../views/Shop.vue')
      },
      {
        path: '/person',
        name: 'Person',
        component: () => import('../views/Person.vue')
      },
      {
        path: '/orders',
        name: 'orders',
        component: () => import('../views/orders.vue')
      },
    ]
  },
  {
    path: '/addressList',
    name: 'addressList',
    component: () => import('../views/addressList.vue')
  },
  {
    path: '/shopCart',
    name: 'shopCart',
    component: () => import('../views/shopCart.vue')
  },
  {
    path: '/shopInfo',
    name: 'shopInfo',
    component: () => import('../views/shopInfo.vue')
  }

]

const router = new VueRouter({
  mode:'history',
  base:'/takeOutFood',
  routes
})

export default router
