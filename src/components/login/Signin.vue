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
                        <v-card-text class="d-flex column wrap align-items-center">
                                <div>
                                    <v-btn large dark round class="font-weight-light" depressed color="primary">
                                        <v-icon :size="14" left>fa-facebook-official</v-icon>
                                        Facebook
                                    </v-btn>
                                    <v-btn large dark round class="font-weight-light" depressed color="red">
                                        <v-icon :size="14" left>fa-google</v-icon>
                                        Google
                                    </v-btn>
                                    <v-btn large dark round depressed @click.native="show = !show" color="cyan" class="font-weight-light">
                                        <v-icon left>mail</v-icon>Email
                                    </v-btn>
                                </div>
                        </v-card-text>
                        <v-slide-y-transition>
                            <v-card-text v-show="show" class="pt-0">
                                <v-form v-model="valid" class="px-3">
                                    <v-text-field
                                    label="E-mail"
                                    v-model="email"
                                    :rules="emailRules"
                                    required
                                    ></v-text-field>
                                    <v-text-field
                                    label="Password"
                                    v-model="password"
                                    :rules="passwordRules"
                                    required
                                    ></v-text-field>
                                    <v-btn large depressed round dark color="cyan">Sign in</v-btn>
                                </v-form>
                            </v-card-text>
                        </v-slide-y-transition>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data: () => ({
        show: false,
        email: '',
        emailRules: '',
        password: '',
        passwordRules: '',
        valid: false
    }),
    computed: {
        ...mapGetters(['extended'])
    },
    created () {
    }
}
</script>
