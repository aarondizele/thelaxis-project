<template>
    <v-slide-x-transition mode="out-in">
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
            </v-layout>
        </v-container>
    </v-slide-x-transition>
</template>

<script>
export default {
    methods: {
        goToNote (i) {
            return this.$router.push(`/note/${i}`)
        }
    },
}
</script>
