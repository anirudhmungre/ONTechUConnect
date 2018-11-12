<template>
  <div class="about">
    <md-card md-with-hover>
      <md-card-header>
        <div class="md-title">API Test</div>
        <div class="md-subhead">Look at this fancy card</div>
      </md-card-header>

      <md-card-content>
        <button v-on:click="fetch_api">Get data</button>
        <h2>Response:</h2>
        <p>{{ message }}</p>
      </md-card-content>
    </md-card>
  </div>
</template>


<style lang="scss" scoped>
</style>


<script>
import request from "request"

export default {
  data: function() {
    return {
      message: "-"
    }
  },
  methods: {
    fetch_api: function() {
      request("https://api.ontechuconnect.tk/v1/test", (error, response, body) => {
        if (body) {
          body = JSON.parse(body)
          this.message = body.message
        } else {
          this.message = "error: cannot read response..."
        }
      })
    }
  },
  mounted: () => {}
}
</script>