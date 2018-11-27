<template>
    <v-app>
        <v-navigation-drawer
                v-model="drawer"
                fixed
                clipped
                app
        >
        </v-navigation-drawer>
        <v-toolbar app color="primary" dark fixed clipped-left>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="headline text-uppercase" style="display: flex; justify-content: center; align-items: center;">
                <svg xmlns="http://www.w3.org/2000/svg" class="logo-main" viewBox="0 0 67 85" style="height: 45px; margin-right:0.5em;">
                    <title>uoit-logo</title>
                    <g class="logo-shield" id="shield">
                        <path d="M42.66661,79.91106c-16.48792,0-24.05377-14.73586-24.05377-29.63144,0-14.89231,7.56585-29.62558,24.05377-29.62558,12.43082,0,19.78412,8.371,22.65471,18.87884l-.05886-37.314H1.60447L1.6382,49.97964C2.27173,68.67949,15.91522,81.738,33.426,81.738a26.76729,26.76729,0,0,0,9.35837-1.83037C42.74648,79.90762,42.70877,79.91106,42.66661,79.91106Z"
                              style="fill: #ffffff;"></path>
                        <path d="M42.66661,22.96338c-13.22233,0-14.17858,17.92-14.17858,27.31624,0,9.39863.95624,27.32364,14.17858,27.32364,13.2208,0,14.17875-17.925,14.17875-27.32364C56.84535,40.88341,55.8874,22.96338,42.66661,22.96338Z"
                              style="fill: #ffffff;"></path>
                    </g>
                </svg>
                <span>ONTechU</span>
                <span class="font-weight-light">Connect</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-avatar
                    size="45"
                    color="white"
                    @click="avatarClick"
            >
                <v-icon color="primary">person</v-icon>
            </v-avatar>
        </v-toolbar>
        <v-content>
            <router-view name="content"></router-view>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: 'Dashboard',
        data: () => ({
            drawer: null
        }),
        methods: {
            avatarClick() {
                console.log("THING")
            }
        }
    }
</script>
