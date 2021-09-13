<template>
  <!-- Introduction section -->
  <v-container>
    <v-container fill-height>
      <v-row
          align="center"
          fluid
          style="height: 100vh;"
      >
        <div class="pb-16 mt-n16">
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
            <v-btn
                class="ma-2"
                color="indigo"
                href="https://drive.google.com/file/d/1NdNbbqZVTVeapiALfIDcFvOY0rprdotP/view?usp=sharing"
                outlined
                target="_blank"
            >
              My Resume
            </v-btn>
          </v-row>
        </div>
      </v-row>

    </v-container>

    <headline text="Fletcher Dick"/>
    <headline text="Fletcher Dick"/>
    <headline text="Fletcher Dick"/>
    <headline text="Fletcher Dick"/>
    <headline text="Fletcher Dick"/>
    <headline text="Fletcher Dick"/>
    <headline text="Fletcher Dick"/>
    <headline text="Fletcher Dick"/>
    <headline text="Fletcher Dick"/>
    <headline text="Fletcher Dick"/>
  </v-container>
</template>

<script>
import Headline from '../components/Headline.vue'

export default {
  name: 'MainView',
  components: {
    Headline
  }
}
</script>

<style scoped>


</style>
