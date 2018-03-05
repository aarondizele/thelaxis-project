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
                    <h1 class="headline font-weight-lighter primary--text pa-4">Edit About me</h1>
                    <v-card-text>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
  </div>
</template>
