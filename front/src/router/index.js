import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Repositories from '@/components/Repositories'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/repositories/:username',
      name: 'Repositories',
      component: Repositories
    }
  ]
})
