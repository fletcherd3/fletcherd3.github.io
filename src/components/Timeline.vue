<template>
  <v-timeline :dense="isMini">
    <v-timeline-item
        v-for="(job, index) in jobs"
        :key="index"
        large
    >
      <template v-slot:icon>
        <v-btn :href="job.site" icon target="_blank">
          <v-avatar>
            <v-img :src="job.logoSrc"/>
          </v-avatar>
        </v-btn>
      </template>
      <template v-slot:opposite>
        <a :href="job.site" class="link" target="_blank">{{ job.companyName }}</a>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="text-break">
          {{ job.roleName }}
        </v-card-title>
        <v-card-subtitle v-if="isMini" class="py-0">
          <a :href="job.site" class="link" target="_blank">{{ job.companyName }}</a>
        </v-card-subtitle>
        <v-card-subtitle class="pt-0">
          {{ job.dateStart }} - {{ job.dateEnd }}
        </v-card-subtitle>
        <v-card-text v-if="job.description">
          <ul>
            <li v-for="(paragraph, index) in job.description.split('\n')" :key="index">
              {{ paragraph }}
            </li>
          </ul>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
const anz = require('../assets/anz.jpeg');
const optiver = require('../assets/optiver.jpeg');
const ryman = require('../assets/ryman.png');

export default {
  name: 'Timeline',
  data() {
    return {
      baseUrl: window.location.origin,
      jobs: [
        {
          companyName: 'Optiver',
          site: 'https://www.optiver.com/',
          location: 'Sydney, Australia',
          dateStart: 'Nov 2021',
          dateEnd: 'Feb 2022',
          roleName: 'Software Engineer Intern',
          description: '',
          logoSrc: optiver
        },
        {
          companyName: 'ANZ',
          site: 'https://www.anz.co.nz/about-us/our-company/anz-new-zealand/',
          location: 'Wellingtion, New Zealand',
          dateStart: 'Nov 2020',
          dateEnd: 'Feb 2021',
          roleName: 'Backend Developer Intern',
          description: 'Working in a functioning Agile team adding functionality to large scale microservices.\n'
              + 'Building, testing and deploying my own work to production systems.\n'
              + 'Creating Docker Applications and deploying them to a containerisation platform (OpenShift)',
          logoSrc: anz
        },
        {
          companyName: 'Ryman',
          site: 'https://www.rymanhealthcare.co.nz/',
          location: 'Christchurch, New Zealand',
          dateStart: 'Nov 2019',
          dateEnd: 'Feb 2020',
          roleName: 'Software Engineer Intern',
          description: 'Delivered a greenfield scalable web-app which allows residents in Ryman rest homes to share and upload photos with their family.\n'
              + 'Collaborated on all stages of systems development lifecycle, from requirement gathering to production releases.\n'
              + 'I learnt web technologies such as ReactJs, OAuth and Googles Material UI framework.\n'
              + 'As well as backend technologies such as GraphQL, C# for building API\'s and Docker for containerisation.',
          logoSrc: ryman
        }
      ]
    }
  },
  computed: {
    isMini() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return true
        case 'sm':
          return true
        case 'md':
          return true
        case 'lg':
          return false
        case 'xl':
          return false
        default:
          return false
      }
    }
  }
}
</script>

<style>
.link:hover {
  text-decoration: underline !important;
}
</style>