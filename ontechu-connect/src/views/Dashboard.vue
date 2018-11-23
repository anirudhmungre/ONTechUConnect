<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <div class="left-menu">
          <md-button class="md-icon-button showMainMenuButton" @click="showMainMenu=true">
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title">ONTechUConnect</span>
        </div>
        <div class="right-menu">
          <md-button @click="showUserMenu=true" class="md-icon-button md-raised md-accent">
            <md-icon>home</md-icon>
          </md-button>
        </div>
      </md-app-toolbar>
      <md-app-drawer md-permanent="full" :md-active.sync="showMainMenu">
        <md-toolbar class="md-transparent" md-elevation="0">
          <img src="../assets/UOIT_Logo_2014.svg.png" />
        </md-toolbar>
        <md-list>
          <router-link to="/dashboard">
            <md-list-item>
              <md-icon>home</md-icon>
              <span class="md-list-item-text">Home</span>
            </md-list-item>
          </router-link>
          <router-link to="/dashboard/designer">
            <md-list-item>
              <md-icon>paint</md-icon>
              <span class="md-list-item-text">Designer</span>
            </md-list-item>
          </router-link>
          <router-link to="/dashboard/about">
            <md-list-item>
              <md-icon>more</md-icon>
              <span class="md-list-item-text">About</span>
            </md-list-item>
          </router-link>
        </md-list>
      </md-app-drawer>
      <md-app-content>
        <md-drawer class="md-right" :md-active.sync="showUserMenu">
          <md-toolbar class="md-primary" md-elevation="0">
            <span class="md-title">User</span>
          </md-toolbar>
        </md-drawer>
        <router-view name="content"/>
        <!-- <md-snackbar md-position="center" md-duration="1000" md-active="false">
          <span>Connection timeout. Showing limited messages!</span>
          <md-button class="md-primary" @click="showSnackbar = false">Retry</md-button>
        </md-snackbar> -->
      </md-app-content>
    </md-app>
  </div>
</template>


<style lang="scss" scoped>
  .md-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .right-menu, .left-menu {
      display:flex;
      justify-content:center;
      align-items:center;
      height: 100%;
    }
  }
  .md-app {
    height: 100vh;
  }

  html, .md-app-content {
    background: #dddddd;
  }

  .md-app-content {
    height: auto;
    min-height: 100%;
    overflow-x: hidden;
  }

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  @media (min-width:600px) {
    .showMainMenuButton {
      display:none;
    }
  }
</style>

<script>
export default {
  props: ['title'],
  name: 'Dashboard',
  data: () => ({
    showUserMenu: false,
    showMainMenu: false
  })
}
</script>