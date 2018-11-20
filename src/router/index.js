import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/AppHome'
import RandomFirst from '@/components/RandomFirst'
import RandomSecond from '@/components/RandomSecond'
import RandomThird from '@/components/RandomThird'
import RandomForth from '@/components/RandomForth'
import HowToWebsites from '@/components/AppHowToCode'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: AppHome
    },
    {
      path: '/1',
      component: RandomFirst
    },
    {
      path: '/2',
      component: RandomSecond
    },
    {
      path: '/3',
      component: RandomThird
    },
    {
      path: '/4',
      component: RandomForth
    },
    {
      path: '/howtomakewebsites',
      component: HowToWebsites
    }
  ]
})
