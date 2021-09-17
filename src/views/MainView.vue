<template>
  <!-- Introduction section -->
  <v-container class="pa-0">
    <v-container
        class="elevation-8 pa-10"
        justify="center"
        style="height: auto; min-height: 98vh;"
    >
      <v-row>
        <v-col justify="center">
          <v-img alt="An image of my Apple Memoji"
                 class="mx-auto"
                 lazy-src="../assets/memoji_0.5x.png"
                 src="../assets/memoji_1x.png"
                 width="250px"/>
        </v-col>
      </v-row>
      <v-row class="mb-10" justify="center">
        <headline text="Fletcher Dick"/>
      </v-row>
      <v-row class="my-1" justify="center">📍 Christchurch, New Zealand</v-row>
      <v-row class="text-center my-1" justify="center">
        Welcome to my portfolio! There's going to be a lot changing around here 😮
      </v-row>
      <v-row class="my-1" justify="center">
        <a :href="`mailto:${email}`">
          {{ email }}
        </a>
      </v-row>
      <v-layout class="justify-center" row>
        <v-btn
            v-for="(link, index) in links"
            :key="index"
            :href="link.href"
            color="indigo"
            icon
            target="_blank"
        >
          <em :class="link.iconClass" class="fa-2x" v-bind:style="{ color: iconColour }"/>
        </v-btn>
      </v-layout>
      <v-row class="mt-10" justify="center">
        <!-- Link created at https://sites.google.com/site/gdocs2direct/home -->
        <v-btn
            class="ma-2"
            color="indigo"
            href="https://drive.google.com/uc?export=download&id=1qUQ--AQqD0bHSLeDrIdRflzsyAQ0IyO5"
            outlined
        >
          <v-icon
              class="pr-5"
              dark
              right
          >
            mdi-download
          </v-icon>
          Download CV
        </v-btn>
      </v-row>
    </v-container>

    <v-container id="projects" class="pt-7 justify-center">
      <v-row class="mb-4" justify="center">
        <h1>My Projects</h1>
      </v-row>
      <v-row
          :class="{'skinny': $vuetify.breakpoint.smAndUp}"
          justify="center"
      >
        <v-col
            v-for="x in 5"
            :key="x"
            cols="12"
            md="6"
        >
          <v-card>
            <v-img
                height="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-title>Project name</v-card-title>
            <v-card-text>
              <v-row align="center mx-0">
                <v-chip
                    v-for="x in 3"
                    :key="x"
                    :color="iconColour"
                    class="mr-1"
                    outlined
                    small
                >
                  Tech {{ x }}
                </v-chip>
              </v-row>
              <v-card-subtitle class="px-0">Small plates, salads & sandwiches - an intimate
                setting with 12 indoor seats plus patio seating
              </v-card-subtitle>
              <v-card-actions>
                <v-btn
                    color="indigo"
                    href="http://google.com"
                    icon
                    target="_blank"
                >
                  <em class="fa-2x fab fa-github" v-bind:style="{ color: iconColour }"/>
                </v-btn>
                <v-btn
                    color="indigo"
                    href="http://google.com"
                    icon
                    target="_blank"
                >
                  <em class="fa-2x fas fa-link" v-bind:style="{ color: iconColour }"/>
                </v-btn>
              </v-card-actions>
            </v-card-text>
          </v-card>
        </v-col>

      </v-row>
    </v-container>

    <v-container class="py-7">
      <v-row justify="center">
        <h4>Timeline</h4>
      </v-row>
      <v-row justify="center">
        <v-timeline>
          <v-timeline-item>timeline item</v-timeline-item>
          <v-timeline-item class="text-right">
            timeline item
          </v-timeline-item>
          <v-timeline-item>timeline item</v-timeline-item>
        </v-timeline>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import Headline from '../components/Headline.vue'

export default {
  name: 'MainView',
  components: {
    Headline
  },
  data() {
    return {
      iconColour: 'indigo',
      email: 'fletcherjdick@gmail.com',
      links: [
        {
          iconClass: 'fab fa-linkedin',
          href: 'https://www.linkedin.com/in/fletcher-dick-2b9b361b1/'
        },
        {
          iconClass: 'fab fa-github',
          href: 'https://github.com/fletcherd3'
        }
      ]
    }
  }
}
</script>

<style scoped>

.icon {
  vertical-align: middle;
}

.icon:hover {
  transition: all 100ms ease-in;
  transform: scale(1.1);
}

.container {
  max-width: 100% !important;
}

.skinny {
  margin-left: 15%;
  margin-right: 15%;
}
</style>
