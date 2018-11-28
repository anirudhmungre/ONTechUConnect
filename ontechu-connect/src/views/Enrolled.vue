<template>
    <v-container fluid fill-height grid-list-md fill>
        <v-layout row wrap>
            <v-flex xs10 offset-xs1>
                <v-layout column>
                    <v-flex>
                        <v-card class="mb-3">
                            <v-toolbar dark color="accent">
                                <v-toolbar-title class="text-uppercase">Are you okay?</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon @click="ShowHelp = !ShowHelp">
                                    <v-icon>{{ ShowHelp ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                                </v-btn>
                            </v-toolbar>
                            <v-slide-y-transition>
                                <v-card-text v-show="ShowHelp">
                                    <v-layout row>
                                        <v-flex xs2>
                                            <v-container fill-height>
                                                <v-layout justify-center align-center>
                                                    <v-flex shrink>
                                                        <v-card flat class="text-xs-center">
                                                            <v-icon size="64" color="primary">announcement</v-icon>
                                                        </v-card>
                                                    </v-flex>
                                                </v-layout>
                                            </v-container>
                                        </v-flex>
                                        <v-flex xs10>
                                            <v-card flat>
                                                <v-card-text>
                                                    The university has many resources available to help you when you are
                                                    not OK.
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn href="https://uoit.ca/forms/areyouokay/index.php"
                                                           target="_blank" outline color="accent">HELP
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-slide-y-transition>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'About'
    }
</script>
