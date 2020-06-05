import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Beranda',
    meta: { title: 'Tempat Nongkrong Balikpapan' },
    component: Home
  },
  {
    path: '/about',
    name: 'Tentang',
    meta: { title: 'Tentang' },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/recomend',
    name: 'Rekomendasi',
    meta: { title: 'Rekomendasi' },
    component: () => import('../views/Recomend.vue')
  },
  {
    path: '/popular',
    name: 'Tempat Populer',
    meta: { title: 'Tempat Populer' },
    component: () => import('../views/Popular.vue')
  },
  {
    path: '/detail/kedai27',
    name: 'Kedai 27',
    meta: { title: 'Kedai 27' },
    component: () => import('../views/kedai.vue')
  },
  {
    path: '/detail/laperpoll',
    name: 'Angkringan Laperpoll',
    meta: { title: 'Angkringan Laperpoll' },
    component: () => import('../views/laperpoll.vue')
  },
  {
    path: '/detail/kopimantan',
    name: 'Kopi Rumah Mantan',
    meta: { title: 'Kopi Rumah Mantan' },
    component: () => import('../views/kopimantan.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
