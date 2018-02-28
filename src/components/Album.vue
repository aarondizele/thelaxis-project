<template>
  <v-container fluid class="mt-4 mb-5">
      <v-layout>
          <v-flex xs12 md6 offset-md3>
            <v-card>
                <v-toolbar flat color="white" height="auto">
                    <div class="pa-3 align-items-center font-weight-lighter">
                    <div class="subheading text-truncate mb-1"><v-icon class="mr-1">schedule</v-icon> Wed, Jan 24</div>
                    <div class="subheading text-truncate"><v-icon class="mr-1">place</v-icon> Paris, Ile de France</div>
                    </div>
                </v-toolbar>
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