import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import RepositoriesStars from '@/views/RepositoriesStars'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/repositories-stars/:username',
      name: 'RepositoriesStars',
      component: RepositoriesStars
    }
  ]
})
