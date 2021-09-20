<template>
  <div>
    <v-tooltip v-if="!$vuetify.theme.dark" left>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" class="font" dark fab small @click="darkMode">
          🌚
        </v-btn>
      </template>
      <span>Dark Mode On</span>
    </v-tooltip>

    <v-tooltip v-else left>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" fab light small @click="darkMode">
          🌞
        </v-btn>
      </template>
      <span>Dark Mode Off</span>
    </v-tooltip>
  </div>
</template>

<script>

export default {
  name: 'DarkModeToggle',
  data() {
    return {}
  },
  methods: {
    darkMode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  },
}
</script>

<style scoped>
.v-btn {
  font-size: 2em !important;
}
</style>