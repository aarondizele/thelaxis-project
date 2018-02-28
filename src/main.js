import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { Vuetify, VAlert, VApp, VAvatar, VBadge, VBtn, VBtnToggle, VCard, VCarousel, VCheckbox, VChip, VDatePicker, VDialog, VDivider, VExpansionPanel, VFooter, VForm, VGrid, VIcon, VList, VMenu, VNavigationDrawer, VPagination, VRadioGroup, VSelect, VSlider, VSnackbar, VSpeedDial, VStepper, VSubheader, VSwitch, VSystemBar, VTabs, VTextField, VTimePicker, VToolbar, VTooltip, VJumbotron, transitions } from 'vuetify';
import '../node_modules/vuetify/src/stylus/app.styl'
import './stylus/main.styl'
Vue.use(Vuetify, {
  components: {
    VAlert, VApp, VAvatar, VBadge, VBtn, VBtnToggle, VCard, VCarousel, VCheckbox, VChip, VDatePicker, VDialog, VDivider, VExpansionPanel, VFooter, VForm, VGrid, VIcon, VList, VMenu, VNavigationDrawer, VPagination, VRadioGroup, VSelect, VSlider, VSnackbar, VSpeedDial, VStepper, VSubheader, VSwitch, VSystemBar, VTabs, VTextField, VTimePicker, VToolbar, VTooltip, VJumbotron, transitions
  },
  theme: {
    muted: '#646467',
    background: '#f6f9fc'
  }
})
import 'babel-polyfill'
import firebase from 'firebase'
require('firebase/firestore')
import _ from 'lodash'
import VueHead from 'vue-head'
import FloatFilter from './filters/float'
import SimpleLoader from '@/components/static/SimpleLoader'


window._ = _
Vue.config.productionTip = false
Vue.filter('float', FloatFilter)
Vue.use(VueHead)
Vue.component('simple-loader', SimpleLoader)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyDDbARXUUjwFt4sGcnz3KawNUr2obV78nc",
      authDomain: "desanges-sebuliri.firebaseapp.com",
      databaseURL: "https://desanges-sebuliri.firebaseio.com",
      projectId: "desanges-sebuliri",
      storageBucket: "",
      messagingSenderId: "242576872498"
    })
    firebase.firestore().enablePersistence()
      .then(() => {
        return true
      }, () => {
        return false
      })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
        this.$store.dispatch('fetchUserProfile')
      }
    });
  },
  head: {
    title: {
      inner: 'Aaron-Laxis Dizele | Mon réseau social'
    },
    meta: [
      { name: 'application-name', content: 'Aaron-Laxis Dizele' },
      { name: 'description', content: 'Personal social network website' }
    ]
  }
})
