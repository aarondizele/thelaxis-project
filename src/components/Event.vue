<template>
  <v-container fluid class="mt-4 mb-5">
      <v-layout>
          <v-flex xs12 md6 offset-md3 class="muted--text">
            <div class="mb-3">
                <h1 class="font-weight-light">Thêatre au musée national</h1>
                <h4 class="body-1 mt-2">
                    <v-icon small>schedule</v-icon> Publié: 15 décembre 2017
                </h4>
            </div>
            <v-carousel :hide-delimiters="true" :lazy="true" dark>
                <v-carousel-item v-for="n in 4" src="https://media-cdn.tripadvisor.com/media/photo-s/06/64/e9/88/roma.jpg" 
                :key="n"></v-carousel-item>
            </v-carousel>
            <div class="title text-truncate mt-3 font-weight-light"><v-icon>place</v-icon> Paris, Ile de France</div>
            <v-card-title primary-title class="subheading font-weight-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa necessitatibus libero distinctio nostrum fugit laboriosam quaerat, temporibus quos natus earum enim eveniet? Nulla blanditiis modi, adipisci dolorum voluptatem quibusdam laudantium.
            </v-card-title>
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
                <v-spacer></v-spacer>
                <v-btn outline color="error" class="text-uppercase">interessé</v-btn>
            </v-card-actions>
            <h2 class="headline font-weight-lighter muted--text mt-4"><strong>Comments</strong></h2>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
    data: () => ({
        
    })
}
</script>