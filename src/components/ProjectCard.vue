<template>
  <v-card>
    <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>
    <v-card-title>Project name</v-card-title>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-chip
            v-for="x in 3"
            :key="x"
            color="primary"
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
            href="http://google.com"
            icon
            target="_blank"
            color="secondary"
        >
          <em class="fa-2x fab fa-github"/>
        </v-btn>
        <v-btn
            href="http://google.com"
            icon
            target="_blank"
            color="secondary"
        >
          <em class="fa-2x fas fa-link"/>
        </v-btn>
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ProjectCard'
}
</script>