<template>
  <v-container fluid fill-height grid-list-md fill>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-toolbar color="accent" dark>
            <v-tabs v-model="active" color="accent" dark slider-color="primary">
              <v-tab v-for="n in 3" :key="n" ripple>Item {{ n }}</v-tab>
            </v-tabs>
          </v-toolbar>
          <v-card-text>
            <v-tabs-items v-model="active">
              <v-tab-item v-for="n in 3" :key="n">
                <v-card flat>
                  <v-card-text>{{ text }}</v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      active: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  },
  methods: {
    next() {
      const active = parseInt(this.active);
      this.active = active < 2 ? active + 1 : 0;
    }
  }
};
</script>