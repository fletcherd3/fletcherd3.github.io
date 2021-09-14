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
          <v-img alt="An image of my Apple Memoji" class="mx-auto" src="../assets/memoji_2.png"
                 width="250px"/>
        </v-col>
      </v-row>
      <v-row class="mb-10" justify="center">
        <headline text="Fletcher Dick"/>
      </v-row>
      <v-row class="my-1" justify="center">📍 Christchurch, New Zealand</v-row>
      <v-row class="text-center" justify="center">
        Welcome to my portfolio! There's going to be a lot changing around here 😮
      </v-row>
      <v-row class="mt-10" justify="center">
        <!-- Link created at https://sites.google.com/site/gdocs2direct/home -->
        <v-btn
            class="ma-2"
            color="indigo"
            href="https://drive.google.com/uc?export=download&id=1qUQ--AQqD0bHSLeDrIdRflzsyAQ0IyO5"
            outlined
        >
          Download CV
        </v-btn>
      </v-row>
    </v-container>


    <v-container class="pt-7" color="black">
      <v-row justify="center">
        <h4>Quick Links</h4>
      </v-row>
      <v-row class="mx-sm-16">
        <v-col
            v-for="(link, index) in links" :key="index"
            align="center"
            justify="center"
            cols="12"
            sm="4"
        >
          <a :href="link.href" target="_blank">
            <em :class="link.iconClass" align="center" class="pr-2 pb-1 icon fa-lg"
                v-bind:style="{ color: iconColour }"/>
            <span>{{ link.text }}</span>
          </a>
        </v-col>

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
    let email = 'fletcherjdick@gmail.com';
    return {
      iconColour: 'Black',
      links: [
        {
          iconClass: 'fas fa-paper-plane',
          href: 'mailto:' + email,
          text: email
        },
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
</style>
