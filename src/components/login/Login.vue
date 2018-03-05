<template>
    <div>
        <v-toolbar color="primary" flat dense>
            <v-toolbar-title>
                <v-btn flat dark round @click="$router.back()">
                <v-icon left>arrow_back</v-icon> Back
                </v-btn>
            </v-toolbar-title>
        </v-toolbar>
        <v-container fluid class="my-5">
            <v-layout>
                <v-flex xs12 md6 offset-md3>
                    <v-card>
                        <v-card-title class="d-flex column">
                            <h1 class="mb-3 display-1 text-xs-center font-weight-light">Connectez-vous</h1>
                            <div>
                                <v-btn color="blue" dark round depressed large to="/signup" class="font-weight-light">
                                    <v-icon left>person_add</v-icon>Inscription
                                </v-btn>
                                <v-btn color="blue" dark round depressed large to="/signin" class="font-weight-light">
                                    <v-icon left>person</v-icon>Connexion
                                </v-btn>
                            </div>
                        </v-card-title>
                    </v-card>
                </v-flex>
            </v-layout>
            <!-- <v-layout class="my-5">
                <v-flex xs12 md6 offset-md3>
                    <markdown-editor></markdown-editor>
                </v-flex>
            </v-layout> -->
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['extended'])
  },
  created () {
  }
}
</script>
