<template>

</template>

<script>
    export default {
        name: "HomePage",
        data: () => ({}),
        mounted() {
            if (sessionstorage.getItem('sid')) {
                this.$router.push('/dashboard')
            } else {
                this.$router.push('/login')
            }
        }
    };
</script>

<style lang="scss" scoped>


</style>