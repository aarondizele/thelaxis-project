<template>
  <div>
      <v-toolbar color="primary" flat dense>
        <v-toolbar-title>
            <v-btn flat dark round @click="$router.back()">
            <v-icon left>arrow_back</v-icon> Back
            </v-btn>
        </v-toolbar-title>
    </v-toolbar>
    <v-container class="my-4">
        <v-layout>
            <v-flex xs12 md6 offset-md3>
                <v-card flat tile>
                    <h1 class="headline font-weight-lighter primary--text pa-4">Edit Website</h1>
                    <v-card-text>
                        <v-text-field
                            label="Your name"
                            v-model="name"
                            required
                            ></v-text-field> 
                        <v-text-field
                            label="Your quote"
                            v-model="quote"
                            ></v-text-field> 
                        <v-text-field
                            label="Your location"
                            v-model="location"
                            ></v-text-field> 
                        <v-subheader class="mb-1">Avatar</v-subheader>
                        <div>
                            <v-avatar size="80">
                                <img src="https://media-cdn.tripadvisor.com/media/photo-s/06/64/e9/88/roma.jpg" alt="">
                            </v-avatar>
                            <v-btn depressed class="font-weight-light ml-4">Upload new image</v-btn>
                        </div> 
                        <v-subheader class="mt-3 mb-1">Background</v-subheader>
                        <div>
                            <v-avatar tile size="200">
                                <img src="https://media-cdn.tripadvisor.com/media/photo-s/06/64/e9/88/roma.jpg" alt="" style="border-radius: 4px !important;">
                            </v-avatar>
                            <v-btn depressed class="font-weight-light ml-4">Upload new image</v-btn>
                        </div>                
                        <v-btn large color="primary" class="mt-3 font-weight-light" style="width: 10% !important;">Save</v-btn>
                    </v-card-text>
                </v-card>   
            </v-flex>
        </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
    data: () => ({
        name: 'Aaron Dizele',
        quote: 'Software Developer, CEO of TheLaxis.co, Founder of LaxisList and Speaker.',
        location: 'Kinshasa, RDC'
    })
}
</script>
