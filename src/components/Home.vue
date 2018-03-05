<template>
  <div>
      <v-jumbotron
        src="https://vuetifyjs.com/static/doc-images/parallax/material.jpg"
        :gradient="gradient"
        dark
        extendend
      >
        <v-container fluid fill-height>
          <v-layout align-center>
            <v-flex>
              <div class="display-flex row wrap align-items-start justify-content-center">
                <v-avatar size="100">
                  <img src="https://www.laxislist.com/static/img/profile.50e3add.jpg" class="my-avatar" alt="avatar">
                </v-avatar>
                <div class="ml-4">
                  <h3 class="display-2">Aaron Dizele, Laxis</h3>
                  <h4 class="headline font-weight-lighter mt-2 mb-1 display-flex author__quote">
                    <v-icon color="" class="pr-2">check_circle</v-icon>  Software Developer, Graphic Designer, founder of LaxisList and thelaxis.co, Public Speaker.</h4>
                  <div class="subheading display-flex"><v-icon small class="mr-1">gps_fixed</v-icon> Kinshasa, RDC</div>
                  <div class="display-flex row wrap mt-4 title hidden-sm-and-down">
                    <button class="my-btn font-weight-lighter"><strong class="pr-1">5</strong> Photos
                    </button>
                    <button class="my-btn font-weight-lighter"><strong class="pr-1">12</strong> Vidéos
                    </button>
                    <button class="my-btn font-weight-lighter"><strong class="pr-1">36</strong> Events
                    </button>
                    <button class="my-btn font-weight-lighter"><strong class="pr-1">9</strong> Notes
                      </button>
                  </div>
                </div>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
    <v-card flat class="card--flex-toolbar mx-auto">
      <v-toolbar flat card color="white">
        <v-tabs icons-and-text centered>
          <!-- <v-tabs-slider :color="colorTab"></v-tabs-slider> -->
          <v-tabs-slider color="primary"></v-tabs-slider>
          <v-tab @click="changeComponent('app-timeline')" class="font-weight-light">
            Timeline
            <!-- <v-icon class="amber--text text--darken-1">whatshot</v-icon> -->
            <v-icon color="primary">whatshot</v-icon>
          </v-tab>
          <v-tab @click="changeComponent('app-albums')" class="font-weight-light">
            Album
            <!-- <v-icon class="green--text text--darken-3">camera_alt</v-icon> -->
            <v-icon color="primary">camera_alt</v-icon>
          </v-tab>
          <v-tab @click="changeComponent('app-events')" class="font-weight-light">
            Events
            <!-- <v-icon class="red--text text--darken-4">insert_invitation</v-icon> -->
            <v-icon color="primary">insert_invitation</v-icon>
          </v-tab>
          <v-tab @click="changeComponent('app-notes')" class="font-weight-light">
            Notes
            <!-- <v-icon class="deep-purple--text text--darken-4">insert_drive_file</v-icon> -->
            <v-icon color="primary">insert_drive_file</v-icon>
          </v-tab>
          <v-tab @click="changeComponent('app-about')" class="font-weight-light">
            About me
            <!-- <v-icon class="blue--text text--darken-4">mood</v-icon> -->
            <v-icon color="primary">mood</v-icon>
          </v-tab>
        </v-tabs>
      </v-toolbar>
    </v-card>
    <v-slide-y-transition mode="out-in" appear-active-class>
      <component :is="currentCmp"></component>
    </v-slide-y-transition>
  </div>
</template>../assets/ny.jpg

<script>
import { mapGetters } from 'vuex'
import AppTimeline from './Timeline'
import AppAlbums from './Albums'
import AppEvents from './Events'
import AppNotes from './Notes'
import AppAbout from './About'

export default {
  data: () => ({
    show: false,
    // gradient: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)',
    gradient: '258deg, rgba(52, 152, 219,.7), rgba(41, 128, 185,.7)',
    // gradient: '258deg,#3b3d61,#4d4a78',
    currentCmp: 'AppTimeline',
    colorTab: 'amber'
  }),
  computed: {
    ...mapGetters(['extended'])
  },
  methods: {
    changeComponent (value) {
      switch (value) {
        case 'app-timeline':
          this.colorTab = 'amber'
          this.currentCmp = 'AppTimeline'
          break;      
        case 'app-albums':
          this.colorTab = 'green'
          this.currentCmp = 'AppAlbums'
          break;      
        case 'app-events':
          this.colorTab = 'red'
          this.currentCmp = 'AppEvents'
          break;      
        case 'app-notes':
          this.colorTab = 'deep-purple'
          this.currentCmp = 'AppNotes'
          break;      
        case 'app-about':
          this.colorTab = 'blue'
          this.currentCmp = 'AppAbout'
          break;      
        default:
          this.colorTab = 'amber'
          this.currentCmp = 'AppTimeline'
          break;
      }
    },
    goToAlbum (i) {
      return this.$router.push(`/album/${i}`)
    },
    goToNote (i) {
      return this.$router.push(`/note/${i}`)
    },
    goToEvent(i) {
      return this.$router.push(`/event/${i}`)
    },
  },
  components: {
    AppTimeline,
    AppAlbums,
    AppEvents,
    AppNotes
  },
  created () {
  }
}
</script>
