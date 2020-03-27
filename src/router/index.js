import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import data_iklan from '../views/data_iklan.vue'
import Login from '../views/Login.vue'
import Navbar from '../views/layouts/Navbar.vue'
import Footer from '../views/layouts/Footer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    components: { default: Home, header: Navbar, footer: Footer },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/data_iklan',
    name: 'data_iklan',
    components: { default: data_iklan, header: Navbar, footer: Footer },
    meta:
    {
      requiresAuth: true
    }
  },

  {
    path: '/profile',
    name: 'profile',
    components: { default: Profile, header: Navbar, footer: Footer },
    meta: {
      requiresAuth: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
``