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

    <v-container class="py-7">
      <v-row justify="center">
        <h4>Quick Links</h4>
      </v-row>
      <v-row class="mx-sm-16">
        <v-col
            v-for="(link, index) in links" :key="index"
            align="center"
            cols="12"
            justify="center"
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

    <v-container class="pt-7 elevation-8" color="black">
      <v-card
          :loading="loading"
          class="mx-auto my-12"
          max-width="374"
      >
        <template slot="progress">
          <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
          ></v-progress-linear>
        </template>

        <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>

        <v-card-title>Cafe Badilico</v-card-title>

        <v-card-text>
          <v-row
              align="center"
              class="mx-0"
          >
            <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
            ></v-rating>

            <div class="grey--text ms-4">
              4.5 (413)
            </div>
          </v-row>

          <div class="my-4 text-subtitle-1">
            $ • Italian, Cafe
          </div>

          <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus
            patio seating.
          </div>
        </v-card-text>


        <v-divider class="mx-4"></v-divider>

        <v-card-title>Tonight's availability</v-card-title>

        <v-card-text>
          <v-chip-group
              v-model="selection"
              active-class="deep-purple accent-4 white--text"
              column
          >
            <v-chip>5:30PM</v-chip>

            <v-chip>7:30PM</v-chip>

            <v-chip>8:00PM</v-chip>

            <v-chip>9:00PM</v-chip>
          </v-chip-group>
        </v-card-text>

        <v-card-actions>
          <v-btn
              color="deep-purple lighten-2"
              text
              @click="reserve"
          >
            Reserve
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card
          :loading="loading"
          class="mx-auto my-12"
          max-width="374"
      >
        <template slot="progress">
          <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
          ></v-progress-linear>
        </template>

        <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>

        <v-card-title>Cafe Badilico</v-card-title>

        <v-card-text>
          <v-row
              align="center"
              class="mx-0"
          >
            <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
            ></v-rating>

            <div class="grey--text ms-4">
              4.5 (413)
            </div>
          </v-row>

          <div class="my-4 text-subtitle-1">
            $ • Italian, Cafe
          </div>

          <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus
            patio seating.
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Tonight's availability</v-card-title>

        <v-card-text>
          <v-chip-group
              v-model="selection"
              active-class="deep-purple accent-4 white--text"
              column
          >
            <v-chip>5:30PM</v-chip>

            <v-chip>7:30PM</v-chip>

            <v-chip>8:00PM</v-chip>

            <v-chip>9:00PM</v-chip>
          </v-chip-group>
        </v-card-text>

        <v-card-actions>
          <v-btn
              color="deep-purple lighten-2"
              text
              @click="reserve"
          >
            Reserve
          </v-btn>
        </v-card-actions>
      </v-card>
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
      iconColour: 'indigo',
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
