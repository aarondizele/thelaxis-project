<template>
    <v-container grid-list-xl class="mt-4 mb-5">
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 v-for="n in 5" :key="n" @click.stop="goToAlbum(n)" class="pointer">
                <v-card flat class="my-card">
                    <v-card-media
                    src="https://media-cdn.tripadvisor.com/media/photo-s/06/64/e9/88/roma.jpg"
                    height="260px"
                    >
                    </v-card-media>
                    <v-card-title primary-title class="pt-3 pb-0 mb-0">
                    <div class="subheading muted--text font-weight-lighter">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    </v-card-title>
                    <v-card-actions class="pa-3">
                        <div class="d-flex row align-items-center muted--text subheading mr-3">
                            <v-icon class="mr-1">visibility</v-icon> 5
                        </div>
                        <div class="d-flex row align-items-center muted--text subheading mr-3">
                            <v-icon class="mr-1">favorite_border</v-icon> 291
                        </div>
                        <div class="d-flex row align-items-center muted--text subheading">
                            <v-icon class="mr-1">comment</v-icon> 291
                        </div>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    methods: {
        goToAlbum (i) {
            return this.$router.push(`/album/${i}`)
        }
    },
}
</script>
