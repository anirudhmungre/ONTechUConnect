<template>
    <v-app id="inspire">
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex d-flex xs10>
                        <v-card class="elevation-3">
                            <v-card-text>
                                <v-form>
                                    <v-container grid-list-xs pa-5>
                                        
                                    </v-container>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import sessionstorage from 'sessionstorage'

    export default {
        name: 'RegisterCourses',
        data: () => ({ }),
        mounted() {
            if (!sessionstorage.getItem('sid')) {
                this.$router.push('/login')
            }
        },
        methods: { }
    }
</script>
