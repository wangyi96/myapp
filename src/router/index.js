import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import Music from '../pages/music'
import Riddle from '../pages/riddle.vue'
import Joke from '../pages/joke'
import Robot from '../pages/robot'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/music',
      component: Music
    },
    {
      path: '/riddle',
      component: Riddle
    },
    {
      path: '/joke',
      component: Joke
    },
    {
      path: '/robot',
      component: Robot
    }
  ]
})
