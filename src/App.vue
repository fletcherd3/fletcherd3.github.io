<template>
  <v-app>
    <v-overlay
        :value="drawer"
        opacity="0.05"
        z-index="4"
    >
    </v-overlay>
    <v-navigation-drawer
        v-model="drawer"
        :style="{ top: $vuetify.application.top + 'px', zIndex: 4 }"
        app
        clipped
        hide-overlay
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
        app
        clipped-left
        color="white"
        dense
        flat
        hide-on-scroll
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main id="app" class="pa-2 mx-auto">
      <main-view/>
    </v-main>
  </v-app>
</template>

<script>
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
        {title: 'Dashboard', icon: 'mdi-view-dashboard'},
        {title: 'Photos', icon: 'mdi-image'},
        {title: 'About', icon: 'mdi-help-box'},
      ]
    }
  }

};
</script>

<style>
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>