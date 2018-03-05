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
            <v-flex xs12 md8 offset-md2>
                <v-card flat tile>
                    <h1 class="headline font-weight-lighter primary--text pa-4">Create Note</h1>
                    <v-card-text>
                        <v-text-field
                        label="Title"
                        v-model="title"
                        required
                        ></v-text-field>
                        <v-subheader class="mt-2 mb-1">Image featured</v-subheader>
                        <div>
                            <v-avatar tile size="100">
                                <img src="https://media-cdn.tripadvisor.com/media/photo-s/06/64/e9/88/roma.jpg" alt="" style="border-radius: 4px !important;">
                            </v-avatar>
                            <v-btn depressed class="font-weight-light ml-4">Upload image</v-btn>
                        </div> 
                        <div class="my-3">
                            <v-subheader class="mb-1">Write content</v-subheader>
                            <markdown-editor></markdown-editor>
                        </div>
                        <v-btn large color="primary" class="mt-1 font-weight-light" style="width: 10% !important;">Save</v-btn>   
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
  </div>
</template>
