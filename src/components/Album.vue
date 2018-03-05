<template>
    <div>
        <v-toolbar color="primary" flat dense>
            <v-toolbar-title>
                <v-btn flat dark round @click="$router.back()">
                <v-icon left>arrow_back</v-icon> Back
                </v-btn>
            </v-toolbar-title>
        </v-toolbar>
        <v-container fluid class="mt-4 mb-5">
            <v-layout>
                <v-flex xs12 md6 offset-md3>
                    <v-card flat style="border-radius: 0 !important;">
                        <v-card-media
                        src="https://media-cdn.tripadvisor.com/media/photo-s/06/64/e9/88/roma.jpg"
                        height="500px"
                        >
                        </v-card-media>
                        <v-card-title primary-title class="my-3 py-0">
                        <div class="subheading muted--text font-weight-lighter">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reiciendis fuga atque eligendi modi expedita accusantium ullam veritatis voluptates sed, voluptas ratione! Repellat magnam dolores expedita in ipsam alias eius.
                        </div>
                        </v-card-title>
                        <v-card-actions class="pb-3 pt-0 px-3">
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
                    <v-subheader class="headline font-weight-lighter my-3">Commentaires</v-subheader>
                    <v-card flat class="my-card">
                        <v-card-title>
                            <v-avatar size="40">
                                <img src="https://media-cdn.tripadvisor.com/media/photo-s/06/64/e9/88/roma.jpg" alt="avatar">
                            </v-avatar>
                            <v-text-field
                                name="input-1"
                                label="Write a comment . . ."
                                id="testing"
                                solo
                                flat
                                auto-grow
                                ></v-text-field>
                        </v-card-title>
                    </v-card>
                    <div class="my-4">
                        <v-card flat v-for="n in 5" :key="n" class="my-card mb-3">
                            <v-card-title class="muted--text">
                                <div class="display-flex row wrap">
                                    <v-avatar size="40">
                                        <img src="https://media-cdn.tripadvisor.com/media/photo-s/06/64/e9/88/roma.jpg" alt="avatar">
                                    </v-avatar>
                                    <div class="ml-3">
                                        <div>Aaron Dizele</div>
                                        <div class="caption">Mar 12, 2018</div>
                                    </div>
                                </div>
                                <v-card-text class="font-weight-lighter">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga iste perferendis pariatur alias? Quos numquam dolor culpa fuga accusamus voluptas delectus consequuntur. Dolores omnis necessitatibus unde autem delectus eaque natus!
                                </v-card-text>
                            </v-card-title>
                        </v-card>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    data: () => ({
        
    })
}
</script>