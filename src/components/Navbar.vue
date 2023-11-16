<template>
  <v-container style="padding:0">
    <v-overlay
        :value="drawer"
        opacity="0.15"
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
            @click="scroll(item.componentId)"
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
        :collapse="!drawer"
        flat
        :style="[drawer ? {} : {'width': '58px'}]"
        :dark="!this.$vuetify.theme.dark"
        :light="this.$vuetify.theme.dark"
        dense
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
        {title: 'Experience', icon: 'mdi-timeline-clock', componentId: 'timeline'},
        {title: 'Projects', icon: 'mdi-file-code', componentId: 'projects'}
      ]
    }
  },
  methods: {
    scroll(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      });
      this.drawer = false;
    }
  }
}
</script>