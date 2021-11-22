<template>
  <!-- Introduction section -->
  <v-container class="pa-0">
    <v-container
        class="elevation-8 pa-10"
        fill-height
        fluid
        justify="center" style="height: auto; min-height: 98vh;"
    >
      <v-row align="center"
             justify="center">
        <v-col>
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
          <v-row class="text-center my-1" justify="center" v-html="introText"/>
          <v-row class="my-1 mt-4" justify="center">📍 Christchurch, New Zealand</v-row>
          <v-row class="my-1" justify="center">
            <!-- Link created at https://sites.google.com/site/gdocs2direct/home -->
            <v-btn
                class="ma-2"
                color="primary"
                href="https://drive.google.com/uc?export=download&id=1T52ddLla1RzZbpn6I2t98Gqaox38gin2"
                outlined
            >
              <v-icon
                  class="pr-5"
                  right
              >
                mdi-download
              </v-icon>
              Download CV
            </v-btn>
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
                color="secondary"
                icon
                target="_blank"
            >
              <em :class="link.iconClass" class="fa-2x"/>
            </v-btn>
          </v-layout>
        </v-col>
        <dark-mode-toggle style="position:absolute; top:5px; right:5px;"/>
      </v-row>
    </v-container>

    <v-container id="projects" class="py-7 justify-center">
      <v-row class="my-6" justify="center">
        <h1>Projects</h1>
      </v-row>
      <v-row
          :class="{'skinny': $vuetify.breakpoint.smAndUp}"
          justify="center"
      >
        <v-col
            v-for="project in projects"
            :key="project.title"
            cols="12"
            md="6"
        >
          <project-card :project="project"/>
        </v-col>
      </v-row>
    </v-container>
    <v-divider class="my-5"/>
    <v-container class="pb-10">
      <v-row class="my-6" justify="center">
        <h1 id="timeline">Experience</h1>
      </v-row>
      <v-row
          :class="{'skinny': $vuetify.breakpoint.smAndUp}"
          class="pa-3"
          justify="center"
      >
        <timeline/>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import Headline from '@/components/Headline.vue'
import ProjectCard from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";
import DarkModeToggle from "@/components/DarkModeToggle";
import projectsJson from '../projects.json';

export default {
  name: 'MainView',
  components: {
    Timeline,
    ProjectCard,
    Headline,
    DarkModeToggle
  },
  data() {
    return {
      introText: "Hi! I'm a Software Engineer with experience in creating modern web apps and RESTful API's to solve real problems"
          +
          "</br>I'm also spending my time learning/sucking-at Guitar 🎸 & Golf 🏌",
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
      ],
      projects: projectsJson.projects
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 100% !important;
}

.skinny {
  margin-left: 15%;
  margin-right: 15%;
}
</style>
