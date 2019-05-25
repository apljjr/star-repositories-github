import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import RepositoriesStars from '@/components/RepositoriesStars'

Vue.use(Router)

export default new Router({
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
