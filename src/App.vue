<template>
  <v-app>
    <v-main id="app" class="pt-0">
      <Navbar/>
      <main-view/>
    </v-main>
  </v-app>
</template>

<script>
import MainView from './views/MainView.vue';
import Navbar from './components/Navbar';

export default {
  name: 'App',

  components: {
    MainView,
    Navbar
  },

  data() {
    return {}
  },
  beforeMount() {
    console.log("%cHey! What do you think you're doing back here?",
        "color: orange; font-family: sans-serif; font-size: 2em; font-weight: bolder;");
  },
  mounted() {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      this.$vuetify.theme.dark = true;
    } else {
      this.$vuetify.theme.dark = false;
    }
    darkThemeMq.addListener(e => {
      if (e.matches) {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    });
  }

};
</script>

<style>
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: auto;
}

#app a {
  text-decoration: none;
}

.v-application {
  background-color: var(--v-background-base) !important;
}
</style>