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
                    <h1 class="headline font-weight-lighter primary--text pa-4">Post photo or video</h1>
                    <v-card-text>
                        <!-- <div> -->
                            <v-text-field
                            label="Place"
                            v-model="place"
                            ></v-text-field>
                            <div>
                                <v-avatar tile size="200">
                                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/06/64/e9/88/roma.jpg" alt="" style="border-radius: 4px !important;">
                                </v-avatar>
                                <v-btn depressed class="font-weight-light ml-4">Upload photo or video</v-btn>
                            </div>
                            <v-btn large color="primary" class="mt-3 font-weight-light" style="width: 10% !important;">Save</v-btn>
                        <!-- </div> -->
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
  </div>
</template>
