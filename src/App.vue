<template>
  <v-app>
    <v-main id="app" class="pt-0">
      <Navbar/>
      <main-view/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import MainView from './views/MainView.vue';
import Navbar from './components/Navbar';
import Footer from "@/components/Footer";

export default {
  name: 'App',

  components: {
    Footer,
    MainView,
    Navbar
  },

  data() {
    return {}
  },
  beforeMount() {
    console.log("%cHey! What do you think you're doing back here?",
        "color: orange; font-family: sans-serif; font-size: 2em; font-weight: bolder;");
  }

};
</script>

<style>
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*color: #2c3e50;*/
  height: auto;
}

#app a {
  text-decoration: none;
}
</style>