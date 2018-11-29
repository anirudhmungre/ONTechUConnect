<template>
    <div class="homepage"></div>
</template>

<script>
    import sessionstorage from 'sessionstorage'
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
