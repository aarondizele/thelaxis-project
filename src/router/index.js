import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: require('@/components/Home').default
    },
    {
      path: '/note/:id',
      component: require('@/components/Note').default,
      props: true
    },
    {
      path: '/event/:id',
      component: require('@/components/Event').default,
      props: true
    },
    {
      path: '/album/:id',
      component: require('@/components/Album').default,
      props: true
    }
  ], 
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
