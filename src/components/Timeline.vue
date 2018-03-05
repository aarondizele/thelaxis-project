<template>
    <v-container grid-list-xl class="mt-4 mb-5">
        <v-layout column wrap>
            <v-subheader class="headline mb-3 font-weight-lighter">Mes photos</v-subheader>
            <div class="display-flex row wrap">
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
            </div>
            <v-btn class="mx-auto primary--text mt-3" large round depressed>Load more</v-btn>
            <v-subheader class="headline my-3 font-weight-lighter">Mes notes</v-subheader>
            <div class="display-flex row wrap">
                <v-flex xs12 sm6 md4 v-for="n in 6" :key="n" @click.stop="goToNote(n)" class="pointer">
                    <v-card flat class="my-card">
                        <v-card-media
                        src="https://media-cdn.tripadvisor.com/media/photo-s/06/64/e9/88/roma.jpg"
                        height="260px"
                        >
                        </v-card-media>
                        <v-card-title primary-title class="pt-3 pb-0 mb-0">
                        <div>
                            <div class="subheading muted--text font-weight-lighter">Oreland domine les nominations des Victoires de la Musique 2018</div>
                            <div class="mt-2">
                            <v-chip small class="muted--text">music</v-chip>
                            <v-chip small class="muted--text">poesie</v-chip>
                            <v-chip small class="muted--text">cinema</v-chip>
                            </div>
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
            </div>
            <v-btn class="mx-auto primary--text mt-3" large round depressed>Load more</v-btn>
            <v-subheader class="headline my-3 font-weight-lighter">Mes events</v-subheader>
            <div class="display-flex row wrap">
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
            </div>
            <v-btn class="mx-auto primary--text mt-3" large round depressed>Load more</v-btn>
        </v-layout>
    </v-container>
</template>

<script>

export default {
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
    },
}
</script>
