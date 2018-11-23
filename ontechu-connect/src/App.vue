<template>
  <div class="page-container">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import "~vue-material/dist/theme/engine";
  @include md-register-theme("default", (
    primary: #0077CA,
    accent: #009A88,
    theme: light
  ));
  @import "~vue-material/dist/theme/all";
  .md-card {
    margin-bottom: 2em;
  }
  .md-app-container {
    overflow-x: hidden !important;
  }
</style>