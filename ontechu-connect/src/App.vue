<template>
    <router-view></router-view>
</template>

<script>
    export default {
        name: 'App',
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
