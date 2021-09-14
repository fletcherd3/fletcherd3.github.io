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
      <v-row justify="center">📍 Christchurch, New Zealand</v-row>
      <v-row class="text-center" justify="center">
        Welcome to my portfolio! There's going to be a lot changing around here 😮
      </v-row>
      <v-row class="mt-16" justify="center">
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


    <v-container class="pt-7">
      <v-row justify="center">
        <h4>Quick Links</h4>
      </v-row>
      <v-row>
        <v-col
            align="center"
            cols="12"
            sm="4"
        >

          <a :href="'mailto:'+email">
            <em class="fab fa-linkedin fa-2x" v-bind:style="{ color: iconColour }"/>
            {{ email }}
          </a>
        </v-col>
        <v-col
            align="center"
            cols="12"
            justify="center"
            sm="4"
        >
          <em class="fab fa-linkedin fa-2x" v-bind:style="{ color: iconColour }"/>
        </v-col>
        <v-col
            align="center"
            cols="12"
            justify="center"
            sm="4"
        >
          <em class="fab fa-linkedin fa-2x" v-bind:style="{ color: iconColour }"/>
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
    return {
      iconColour: 'Tomato',
      email: 'fletcherjdick@gmail.com'
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 100% !important;
}
</style>
