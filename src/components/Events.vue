<template>
  <v-slide-x-transition mode="out-in">
    <v-container grid-list-lg class="mt-4 mb-5">
      <v-layout row wrap>
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
  </v-slide-x-transition>
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
