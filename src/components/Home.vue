<template>
  <div>
    <v-jumbotron
      src="https://media-cdn.tripadvisor.com/media/photo-s/06/64/e9/88/roma.jpg"
      :gradient="gradient"
      dark
      extendend
    >
      <v-container fluid fill-height>
        <v-layout align-center justify-start>
          <v-flex d-flex row>
            <v-avatar size="120">
              <img src="https://media-cdn.tripadvisor.com/media/photo-s/06/64/e9/88/roma.jpg" alt="avatar">
            </v-avatar>
            <div>
              <h3 class="display-2">Aaron Dizele</h3>
              <h4 class="headline font-weight-lighter mt-3 mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
              <div class="subheading"><v-icon small class="mr-1">gps_fixed</v-icon> Kinshasa, RDC</div>
              <div class="display-flex row wrap mt-4 title">
                <v-btn large depressed dark class="_transparent font-weight-lighter"><strong class="pr-1">5</strong> Photos</v-btn>
                <v-btn large depressed dark class="_transparent font-weight-lighter"><strong class="pr-1">12</strong> Vidéos</v-btn>
                <v-btn large depressed dark class="_transparent font-weight-lighter"><strong class="pr-1">36</strong> Events</v-btn>
                <v-btn large depressed dark class="_transparent font-weight-lighter"><strong class="pr-1">9</strong> Notes</v-btn>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <v-card class="card--flex-toolbar mx-auto elevation-5">
      <v-toolbar card color="white">
        <v-tabs icons-and-text centered>
          <v-tabs-slider color="blue"></v-tabs-slider>
          <v-tab @click="changeComponent('app-timeline')" class="font-weight-light">
            Timeline
            <v-icon>whatshot</v-icon>
          </v-tab>
          <v-tab @click="changeComponent('app-albums')" class="font-weight-light">
            Album
            <v-icon>camera_alt</v-icon>
          </v-tab>
          <v-tab @click="changeComponent('app-events')" class="font-weight-light">
            Events
            <v-icon>insert_invitation</v-icon>
          </v-tab>
          <v-tab @click="changeComponent('app-notes')" class="font-weight-light">
            Notes
            <v-icon>insert_drive_file</v-icon>
          </v-tab>
          <v-tab @click="changeComponent('app-about')" class="font-weight-light">
            About me
            <v-icon>mood</v-icon>
          </v-tab>
        </v-tabs>
      </v-toolbar>
    </v-card>
    <component :is="currentCmp"></component>
  </div>
</template>

<script>
import AppTimeline from './Timeline'
import AppAlbums from './Albums'
import AppEvents from './Events'
import AppNotes from './Notes'
import AppAbout from './About'

export default {
  data: () => ({
    show: false,
    gradient: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)',
    currentCmp: 'AppTimeline'
  }),
  methods: {
    changeComponent (value) {
      switch (value) {
        case 'app-timeline':
          return this.currentCmp = 'AppTimeline'
          break;      
        case 'app-albums':
          return this.currentCmp = 'AppAlbums'
          break;      
        case 'app-events':
          return this.currentCmp = 'AppEvents'
          break;      
        case 'app-notes':
          return this.currentCmp = 'AppNotes'
          break;      
        case 'app-about':
          return this.currentCmp = 'AppAbout'
          break;      
        default:
          return this.currentCmp = 'AppTimeline'
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
  }
}
</script>
