<template>
    <v-container fluid fill-height grid-list-md fill>
        <v-layout row wrap>
            <v-flex xs8>
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
                                        <v-flex xs2 justify-center>
                                            <v-card flat class="text-xs-center">
                                                <v-icon size="64" color="primary">add</v-icon>
                                            </v-card>
                                        </v-flex>
                                        <v-flex xs10>
                                            <v-card flat>
                                                <v-card-text>
                                                    The university has many resources available to help you when you are not OK.
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn flat color="accent">HELP</v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-slide-y-transition>
                        </v-card>
                        <v-card class="mb-3">
                            <v-toolbar dark color="accent">
                                <v-toolbar-title class="text-uppercase">Important Information</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon @click="ShowImportant = !ShowImportant">
                                    <v-icon>{{ ShowImportant ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                                </v-btn>
                            </v-toolbar>
                            <v-slide-y-transition>
                                <v-card-text v-show="ShowImportant">
                                    <v-layout row>
                                        <v-flex xs2 justify-center>
                                            <v-card flat class="text-xs-center">
                                                <v-icon size="64" color="primary">add</v-icon>
                                            </v-card>
                                        </v-flex>
                                        <v-flex xs10>
                                            <v-card flat>
                                                <v-card-text>
                                                    The university has many resources available to help you when you are not OK.
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn flat color="accent">HELP</v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-slide-y-transition>
                        </v-card>
                        <v-card class="mb-3">
                            <v-toolbar dark color="accent">
                                <v-toolbar-title class="text-uppercase">Scholarships and Awards</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon @click="ShowAwards = !ShowAwards">
                                    <v-icon>{{ ShowAwards ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                                </v-btn>
                            </v-toolbar>
                            <v-slide-y-transition>
                                <v-card-text v-show="ShowAwards">
                                    <v-layout row>
                                        <v-flex xs2 justify-center>
                                            <v-card flat class="text-xs-center">
                                                <v-icon size="64" color="primary">add</v-icon>
                                            </v-card>
                                        </v-flex>
                                        <v-flex xs10>
                                            <v-card flat>
                                                <v-card-text>
                                                    The university has many resources available to help you when you are not OK.
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn flat color="accent">HELP</v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-slide-y-transition>
                        </v-card>
                        <v-card class="mb-3">
                            <v-toolbar dark color="accent">
                                <v-toolbar-title class="text-uppercase">Thesis</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon @click="ShowThesis = !ShowThesis">
                                    <v-icon>{{ ShowThesis ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                                </v-btn>
                            </v-toolbar>
                            <v-slide-y-transition>
                                <v-card-text v-show="ShowThesis">
                                    <v-layout row>
                                        <v-flex xs2 justify-center>
                                            <v-card flat class="text-xs-center">
                                                <v-icon size="64" color="primary">add</v-icon>
                                            </v-card>
                                        </v-flex>
                                        <v-flex xs10>
                                            <v-card flat>
                                                <v-card-text>
                                                    The university has many resources available to help you when you are not OK.
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn flat color="accent">HELP</v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-slide-y-transition>
                        </v-card>
                        <v-card class="mb-3">
                            <v-toolbar dark color="accent">
                                <v-toolbar-title class="text-uppercase">Announcements</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon @click="ShowAnnouncements = !ShowAnnouncements">
                                    <v-icon>{{ ShowAnnouncements ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                                </v-btn>
                            </v-toolbar>
                            <v-slide-y-transition>
                                <v-card-text v-show="ShowAnnouncements">
                                    <v-layout row>
                                        <v-flex xs2 justify-center>
                                            <v-card flat class="text-xs-center">
                                                <v-icon size="64" color="primary">add</v-icon>
                                            </v-card>
                                        </v-flex>
                                        <v-flex xs10>
                                            <v-card flat>
                                                <v-card-text>
                                                    The university has many resources available to help you when you are not OK.
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn flat color="accent">HELP</v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-slide-y-transition>
                        </v-card>
                        <v-card class="mb-3">
                            <v-toolbar dark color="accent">
                                <v-toolbar-title class="text-uppercase">Upcoming Events</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon @click="ShowEvents = !ShowEvents">
                                    <v-icon>{{ ShowEvents ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                                </v-btn>
                            </v-toolbar>
                            <v-slide-y-transition>
                                <v-card-text v-show="ShowEvents">
                                    <v-layout row>
                                        <v-flex xs2 justify-center>
                                            <v-card flat class="text-xs-center">
                                                <v-icon size="64" color="primary">add</v-icon>
                                            </v-card>
                                        </v-flex>
                                        <v-flex xs10>
                                            <v-card flat>
                                                <v-card-text>
                                                    The university has many resources available to help you when you are not OK.
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn flat color="accent">HELP</v-btn>
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
            <v-flex xs4>
                <v-layout column>
                    <v-flex>
                        <v-card class="mb-3">
                            <v-toolbar dark color="accent">
                                <v-toolbar-title class="text-uppercase">Campus Alerts</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon @click="ShowAlerts = !ShowAlerts">
                                    <v-icon>{{ ShowAlerts ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                                </v-btn>
                            </v-toolbar>
                            <v-slide-y-transition>
                                <v-card-text v-show="ShowAlerts">
                                    <v-layout row>
                                        <v-flex xs2 justify-center>
                                            <v-card flat class="text-xs-center">
                                                <v-icon size="64" color="primary">add</v-icon>
                                            </v-card>
                                        </v-flex>
                                        <v-flex xs10>
                                            <v-card flat>
                                                <v-card-text>
                                                    The university has many resources available to help you when you are not OK.
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn flat color="accent">HELP</v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-flex>
                                    </v-layout>
                                </v-card-text>
                            </v-slide-y-transition>
                        </v-card>
                        <v-card class="mb-3">
                            <v-toolbar dark color="accent">
                                <v-toolbar-title class="text-uppercase">Contact Us</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon @click="ShowContact = !ShowContact">
                                    <v-icon>{{ ShowContact ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                                </v-btn>
                            </v-toolbar>
                            <v-slide-y-transition>
                                <v-card-text v-show="ShowContact">
                                    <v-layout row>
                                        <v-flex xs2 justify-center>
                                            <v-card flat class="text-xs-center">
                                                <v-icon size="64" color="primary">add</v-icon>
                                            </v-card>
                                        </v-flex>
                                        <v-flex xs10>
                                            <v-card flat>
                                                <v-card-text>
                                                    The university has many resources available to help you when you are not OK.
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn flat color="accent">HELP</v-btn>
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
        name: 'Home',
        data: () => ({
            ShowHelp: true,
            ShowImportant: true,
            ShowAwards: true,
            ShowThesis: true,
            ShowAnnouncements: true,
            ShowEvents: true,
            ShowAlerts: true,
            ShowContact: true
        })
    }
</script>
