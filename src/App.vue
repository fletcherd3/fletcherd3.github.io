<template>
  <v-app>
    <v-overlay
      :value="drawer"
      z-index="4"
      opacity="0.05"
    >
    </v-overlay>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      hide-overlay
      :style="{ top: $vuetify.application.top + 'px', zIndex: 4 }"
    >
    <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Scroll to
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      clipped-left
      app
      dense
      flat
      hide-on-scroll
      color="white"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- <v-toolbar-title>Fletcher Dick</v-toolbar-title> -->
    </v-app-bar>

    <v-main id="app">
      <main-view/>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import MainView from './views/MainView.vue';

export default {
  name: 'App',

  components: {
    MainView,
  },

  data() {
    return {
      drawer: false,
      items: [
            { title: 'Dashboard', icon: 'mdi-view-dashboard' },
            { title: 'Photos', icon: 'mdi-image' },
            { title: 'About', icon: 'mdi-help-box' },
          ]
      }
  }
    
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>