<template>
    <v-slide-x-transition mode="out-in">
        <v-container grid-list-lg class="mt-4 mb-5">
            <v-layout row wrap>
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
            </v-layout>
        </v-container>
    </v-slide-x-transition>
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
