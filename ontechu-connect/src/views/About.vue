<template>
  <div class="about">
    <h1>About</h1>
    <button v-on:click="fetch_api">Get data</button>
    <h2>Response:</h2>
    <p>{{ message }}</p>
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
      console.log("clicked");
      request("http://localhost:1337/", (error, response, body) => {
        body = JSON.parse(body)
        this.message = body.message
      })
    }
  },
  mounted: () => {
    console.log("mounted")
  }
};
</script>