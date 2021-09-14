<template>
  <v-container style="padding:0">
    <v-overlay
        :value="drawer"
        dense
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
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: 'Navbar',
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
}
</script>