<template>
  <v-container grid-list-xl class="mt-4 mb-5">
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 v-for="n in 12" :key="n" @click.stop="goToEvent(n)" class="pointer">
          <v-card flat class="my-card">
              <v-card-media
              src="https://media-cdn.tripadvisor.com/media/photo-s/06/64/e9/88/roma.jpg"
              height="260px"
              >
              </v-card-media>
              <v-card-title primary-title class="pt-3 pb-0 mb-0">
              <div class="font-weight-lighter">
                  <div><h2 class="title my-1 primary--text font-weight-lighter">Thêatre au musée national</h2></div>
                  <div class="text-truncate"><v-icon small size="12">schedule</v-icon> Wed, Jan 24</div>
                  <div class="text-truncate"><v-icon small size="12">place</v-icon> Paris, Ile de France</div>
              </div>
              </v-card-title>
              <v-card-actions class="pa-3">
                  <div class="d-flex row align-items-center muted--text subheading mr-3">
                    <v-icon class="mr-1">visibility</v-icon> 5
                  </div>
                  <v-spacer></v-spacer>
                  <v-btn small outline color="primary" class="text-uppercase font-weight-light">interessé</v-btn>
              </v-card-actions>
          </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    methods: {
        goToEvent(i) {
            return this.$router.push(`/event/${i}`)
        },
    },
}
</script>
