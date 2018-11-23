<template>
  <md-content class="md-layout designer">
    <div class="md-layout-item md-size-33 full-layout-item" style="background:blue;"></div>
    <div class="md-layout-item md-size-66 full-layout-item" style="background: red;"></div>
  </md-content>
</template>


<style lang="scss" scoped>
  .md-content {
    height: 100%;
  }
  .md-layout-item {
    height: 40px;
  }

</style>

<script>
export default {
  data: function() {
    return { }
  },
  methods: { },
  mounted: () => { }
}
</script>