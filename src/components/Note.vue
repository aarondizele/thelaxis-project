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
                    <v-card-media
                        src="https://media-cdn.tripadvisor.com/media/photo-s/06/64/e9/88/roma.jpg"
                        height="360px"
                        >
                    </v-card-media>
                    <h4 class="body-1 mt-2 mx-2 muted--text">
                    <v-icon small>schedule</v-icon> Publié: 15 décembre 2017
                    </h4>
                    <div class="my-2 py-0 subheading muted--text font-weight-light">
                        <h1 class="mb-2">Oreland domine les nominations des Victoires de la Musique 2018</h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reiciendis fuga atque eligendi modi expedita accusantium ullam veritatis voluptates sed, voluptas ratione! Repellat magnam dolores expedita in ipsam alias eius. Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Temporibus totam ipsum eveniet assumenda maxime quos rerum nihil voluptatem.<br/> Architecto perspiciatis culpa illo ipsum suscipit? At soluta illo qui vitae doloremque? Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Doloribus dolor dolores nulla incidunt eum asperiores, magni reprehenderit quae sint rerum? Odio rem iure cum totam doloribus autem placeat voluptatum explicabo.<br/> Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Ex quae sed vel atque hic qui beatae possimus nisi temporibus eum saepe at minima aliquid voluptatem fuga soluta officiis, quidem perspiciatis? Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/> Deserunt, placeat, earum corporis et ipsam dolorem recusandae nesciunt doloremque minus nihil quo eius voluptate officiis, magnam similique necessitatibus minima dolore accusantium. <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. In numquam natus dolorem eius mollitia eos vel temporibus corrupti vero assumenda. Corporis pariatur aspernatur voluptate.<br/> Distinctio voluptatem libero magnam accusamus porro.
                    </div>
                    <v-card-actions class="pt-3 px-3">
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
                    <div class="mt-3">
                        <v-chip small class="muted--text">music</v-chip>
                        <v-chip small class="muted--text">poesie</v-chip>
                        <v-chip small class="muted--text">cinema</v-chip>
                        <v-chip small class="muted--text">amour</v-chip>
                        <v-chip small class="muted--text">coding</v-chip>
                    </div>
                    <v-divider class="mt-4"></v-divider>
                    <v-subheader class="headline font-weight-light my-3">Comments</v-subheader>
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