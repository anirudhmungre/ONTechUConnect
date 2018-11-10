<template>
  <div class="home">
    <md-empty-state
      md-icon=""
      md-label=""
      md-description="">
      <img src="../assets/logo.png"/>
      <div class="md-title">Welcome Home</div>
      <div class="md-subhead">The ONTechU Hub</div>
      <md-button class="md-primary md-raised" @click="al=true">Get started</md-button>
    </md-empty-state>
    <md-dialog-alert
      :md-active.sync="al"
      md-title="Post created!"
      md-content="Your post <strong>Material Design is awesome</strong> has been created." />
  </div>
</template>

<script>
export default {
  name: 'About',
  data: () => ({
    al: false
  })
}
</script>

<style lang="scss" scoped>

</style>