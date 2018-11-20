<template>
  <div class="home">
    <md-empty-state
      md-icon=""
      md-label=""
      md-description="">
      <div class="md-title">Welcome Home</div>
      <div class="md-subhead">The ONTechU Hub</div>
      <md-button class="md-primary md-raised" @click="al=true">Get started</md-button>
    </md-empty-state>
    <md-dialog-alert
      :md-active.sync="al"
      md-title="Sticky Campus!"
      md-content="Welcome to ontechu" />
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