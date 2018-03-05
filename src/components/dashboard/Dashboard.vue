<template>
  <v-container grid-list-xl class="my-4">
      <v-layout column>
          <v-flex xs12 md8 offset-md2 column>
              <v-card tile flat>
                <h1 class="text-xs-center headline font-weight-lighter muted--text pa-4">Welcome back, <strong>{{username}}</strong></h1>
                <v-card-text>
                    <!-- <div> -->
                        <v-btn dark color="amber" tag="button" round to="/dashboard/post-on-album" large depressed class="" style="font-size: 18px !important;">Post on album</v-btn>
                        <v-btn dark color="green" tag="button" round to="/dashboard/create-event" large depressed class="" style="font-size: 18px !important;">Create event</v-btn>
                        <v-btn dark color="deep-purple" tag="button" round to="/dashboard/create-note" large depressed class="" style="font-size: 18px !important;">Create note</v-btn>
                        <v-btn dark color="primary" tag="button" round to="/dashboard/edit-about-me" large depressed class="" style="font-size: 18px !important;">Edit about me</v-btn>
                        <v-btn dark color="secondary" tag="button" round to="/dashboard/edit-website" large depressed class="" style="font-size: 18px !important;">Edit website</v-btn>
                    <!-- </div> -->
                </v-card-text>
            </v-card>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
    data: () => ({
        username: 'Aaron Dizele'
    })
}
</script>