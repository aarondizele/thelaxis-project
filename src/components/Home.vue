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
          <v-tab href="#tab-0" class="font-weight-light">
            All
            <v-icon>whatshot</v-icon>
          </v-tab>
          <v-tab href="#tab-1" class="font-weight-light">
            Album
            <v-icon>camera_alt</v-icon>
          </v-tab>
          <v-tab href="#tab-2" class="font-weight-light">
            Events
            <v-icon>insert_invitation</v-icon>
          </v-tab>
          <v-tab href="#tab-3" class="font-weight-light">
            Notes
            <v-icon>insert_drive_file</v-icon>
          </v-tab>
          <v-tab href="#tab-4" class="font-weight-light">
            About me
            <v-icon>mood</v-icon>
          </v-tab>
        </v-tabs>
      </v-toolbar>
    </v-card>
    <v-container grid-list-lg class="mt-4 mb-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 v-for="n in 6" :key="n" @click.stop="goToNote(n)" class="pointer">
          <v-card flat>
            <v-card-media
              src="https://media-cdn.tripadvisor.com/media/photo-s/06/64/e9/88/roma.jpg"
              height="260px"
            >
            </v-card-media>
            <v-card-title primary-title class="pt-3 pb-0 mb-0">
              <div>
                <div class="subheading muted--text font-weight-light">Oreland domine les nominations des Victoires de la Musique 2018</div>
                <div class="mt-2">
                  <v-chip small class="muted--text">music</v-chip>
                  <v-chip small class="muted--text">poesie</v-chip>
                  <v-chip small class="muted--text">cinema</v-chip>
                </div>
              </div>
            </v-card-title>
            <v-card-actions class="py-2 px-3">
              <div class="d-flex row align-items-center muted--text mr-3">
                <v-icon class="mr-1">visibility</v-icon> 5
              </div>
              <div class="d-flex row align-items-center muted--text mr-3">
                <v-icon class="mr-1">favorite_border</v-icon> 291
              </div>
              <div class="d-flex row align-items-center muted--text">
                <v-icon class="mr-1">comment</v-icon> 291
              </div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 v-for="n in 3" :key="n" @click.stop="goToAlbum(n)" class="pointer">
          <v-card flat>
            <v-toolbar flat color="white">
              <div class="pa-3 align-items-center muted--text font-weight-light">
                <div class="text-truncate"><v-icon small size="12" class="mr-1">schedule</v-icon> Wed, Jan 24</div>
                <div class="text-truncate"><v-icon small size="12" class="mr-1">place</v-icon> Paris, Ile de France</div>
              </div>
            </v-toolbar>
            <v-card-media
              src="https://media-cdn.tripadvisor.com/media/photo-s/06/64/e9/88/roma.jpg"
              height="260px"
            >
            </v-card-media>
            <v-card-title primary-title class="pt-3 pb-0 mb-0">
              <div class="subheading muted--text font-weight-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reiciendis fuga atque eligendi modi expedita accusantium ullam veritatis voluptates sed, voluptas ratione! Repellat magnam dolores expedita in ipsam alias eius.
              </div>
            </v-card-title>
            <v-card-actions class="py-2 px-3">
              <div class="d-flex row align-items-center muted--text mr-3">
                <v-icon class="mr-1">visibility</v-icon> 5
              </div>
              <div class="d-flex row align-items-center muted--text mr-3">
                <v-icon class="mr-1">favorite_border</v-icon> 291
              </div>
              <div class="d-flex row align-items-center muted--text">
                <v-icon class="mr-1">comment</v-icon> 291
              </div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 v-for="n in 12" :key="n" @click.stop="goToEvent(n)" class="pointer">
          <v-card flat>
            <v-card-media
              src="https://media-cdn.tripadvisor.com/media/photo-s/06/64/e9/88/roma.jpg"
              height="260px"
            >
            </v-card-media>
            <v-card-title primary-title class="pt-3 pb-0 mb-0">
              <div class="font-weight-light">
                <div class="text-truncate"><v-icon small size="12">schedule</v-icon> Wed, Jan 24</div>
                <div><h2 class="subheading error--text">Thêatre au musée national</h2></div>
                <div class="text-truncate"><v-icon small size="12">place</v-icon> Paris, Ile de France</div>
              </div>
            </v-card-title>
            <v-card-actions class="pt-2 pb-3 px-3">
              <div class="d-flex row align-items-center muted--text">
                <v-icon class="mr-1">favorite_border</v-icon> 21
              </div>
              <v-spacer></v-spacer>
              <v-btn small outline color="error" class="text-uppercase">interessé</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      show: false,
      gradient: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)'
    }),
    methods: {
      goToAlbum (i) {
        return this.$router.push(`/album/${i}`)
      },
      goToNote (i) {
        return this.$router.push(`/note/${i}`)
      },
      goToEvent(i) {
        return this.$router.push(`/event/${i}`)
      },
    }
  }
</script>
