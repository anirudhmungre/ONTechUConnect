<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <!-- <md-button class="md-icon-button" @click="showNavigation=true">
          <md-icon>menu</md-icon>
        </md-button> -->
        <span class="md-title">ONTechUConnect</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          <img src="./assets/UOIT_Logo_2014.svg.png" />
        </md-toolbar>

        <md-list>
          <router-link to="/">
            <md-list-item>
              <md-icon>home</md-icon>
              <span class="md-list-item-text">Home</span>
            </md-list-item>
          </router-link>
          <router-link to="/about">
            <md-list-item>
              <md-icon>more</md-icon>
              <span class="md-list-item-text">About</span>
            </md-list-item>
          </router-link>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss">
  @import "~vue-material/dist/theme/engine";

  @include md-register-theme("default", (
    primary: #0077CA,
    accent: #009A88,
    theme: light
  ));

  @import "~vue-material/dist/theme/all";

  * {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
</style>

<style lang="scss" scoped>
  .md-app {
    height: 100vh;
  }

  .md-app-content {
    background: #ececec;
  }

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>

<script>
export default {
  props: ['title'],
  name: 'ontechu-connect',
  data: () => ({
  })
}
</script>