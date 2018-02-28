<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      flat
      scroll-off-screen
      color="white"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title" class="font-weight-lighter"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        icon
        class="mx-1 grey--text text--darken-4 hidden-sm-and-down"
      >
        <v-icon size="24px" color="muted">{{ icon }}</v-icon>
      </v-btn>
      <v-btn dark depressed round color="blue" class="font-weight-light ml-4">Connecte-toi</v-btn>
    </v-toolbar>
    <v-content>
      <v-slide-y-transition mode="out-in">
        <router-view/>
      </v-slide-y-transition>
    </v-content>
    <v-footer absolute app height="auto">
      <v-container fluid>
        <v-layout class="_footer">
          <div>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              icon
              class="mx-1 grey--text text--darken-4"
            >
              <v-icon size="24px" color="muted">{{ icon }}</v-icon>
            </v-btn>
          </div>
          <div class="subheading muted--text display-flex row align-items-center">
            <img src="../static/img/thelaxis.svg" alt="" height="18px" class="px-1">
            <router-link tag="strong" to="/" class="pointer">TheLaxis</router-link> <span class="pl-1">&copy; {{ new Date().getFullYear() }}</span>
          </div>
        </v-layout>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      title: 'Aaron-Laxis',
      icons: ['fa-facebook-official', 'fa-twitter', 'fa-instagram', 'fa-snapchat']
    }
  },
  beforeUpdate () {
    if (this.$vuetify.breakpoint.mdAndup) {
      this.drawer = false
    }
  },
  name: 'App'
}
</script>
