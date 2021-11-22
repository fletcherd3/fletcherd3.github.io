<template>
  <v-card>
    <v-carousel
        :hideDelimiters="!(this.project.imageNames.length > 1)"
        :show-arrows="this.project.imageNames.length > 1"
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
    >
      <v-carousel-item
          v-for="(item, i) in images"
          :key="i"
          :src="item"
      />
    </v-carousel>
    <v-card-title>{{ this.project.title }}</v-card-title>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-chip
            v-for="technology in this.project.technologies"
            :key="technology"
            class="mr-1"
            color="primary"
            outlined
            small
        >
          {{ technology }}
        </v-chip>
      </v-row>
      <v-card-subtitle class="px-0" v-html="this.project.description"/>
      <v-card-actions>
        <v-btn
            v-if="this.project.githubLink"
            :href="this.project.githubLink"
            color="secondary"
            icon
            target="_blank"
        >
          <em class="fa-2x fab fa-github"/>
        </v-btn>
        <v-btn
            v-if="this.project.demoLink"
            :href="this.project.demoLink"
            color="secondary"
            icon
            target="_blank"
        >
          <em class="fa-2x fas fa-link"/>
        </v-btn>
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      images: this.test(this.project.imageNames)
    }
  },
  methods: {
    test(imageNames) {
      let i = [];
      imageNames.forEach(imageName => i.push(require(`../assets/${imageName}`)));

      return i;
    }
  }
}
</script>