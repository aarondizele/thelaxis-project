import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard'
import CanEditGuard from './canEdit-guard'

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
    },
    {
      path: '/login',
      component: require('@/components/login/Login').default
    },
    {
      path: '/signin',
      component: require('@/components/login/Signin').default
    },
    {
      path: '/signup',
      component: require('@/components/login/Signup').default
    },
    {
      path: '/dashboard',
      component: require('@/components/dashboard/Dashboard').default,
      children: [
      ]
      // beforeEnter: AuthGuard && CanEditGuard      
    },
    {
      path: '/dashboard/post-on-album',
      component: require('@/components/dashboard/PostAlbum').default
    },
    {
      path: '/dashboard/create-event',
      component: require('@/components/dashboard/CreateEvent').default
    },
    {
      path: '/dashboard/create-note',
      component: require('@/components/dashboard/CreateNote').default
    },
    {
      path: '/dashboard/edit-about-me',
      component: require('@/components/dashboard/EditAboutme').default
    },
    {
      path: '/dashboard/edit-website',
      component: require('@/components/dashboard/EditWebsite').default
    },
  ], 
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
