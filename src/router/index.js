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
    path: '/deliver',
    name: 'deliver',
    component: () => import('../views/deliver.vue'),
    redirect:'/dlList',
    children:[
      {
        path: '/dlList',
        name: 'dlList',
        component: () => import('../views/dlList.vue')
      },
      {
        path: '/dlInfo',
        name: 'dlInfo',
        component: () => import('../views/dlInfo.vue')
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
    path: '/userSetting',
    name: 'userSetting',
    component: () => import('../views/userSetting.vue')
  },
  {
    path: '/shopInfo',
    name: 'shopInfo',
    component: () => import('../views/shopInfo.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
]



const router = new VueRouter({
  mode:'history',
  base:'/takeOutFood',
  routes
})

// router.beforeEach((to, from, next) => {
  //to表示要访问的路径  from表示从那个路径来   next函数表示放行
  // if (to.path === "/login") return next();
  // //获取token
  // const token = window.sessionStorage.getItem("token");
  // if (!token) {
  //   window.sessionStorage.removeItem("active")
  //   window.sessionStorage.removeItem("id")
  //   return next("./login");
  // }
  // next();
// });

export default router
