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
const uni = require('../assets/uni.png');

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
          dateStart: 'Feb 2023',
          dateEnd: 'Present',
          roleName: 'Graduate Software Engineer',
          description: "Leading projects through all stages of the SDLC, ensuring timely delivery by collaborating with developers and non-technical stakeholders.\n" +
              "Contributing to large-scale C++ codebases, emphasising precision where each microsecond matters.\n" +
              "Proactively expanding responsibilities, showcasing eagerness for continuous learning. Regularly deepening understanding of C++, actively contributing to team success.",
          logoSrc: optiver
        },
        {
          companyName: 'University of Canterbury',
          site: 'https://www.canterbury.ac.nz/',
          location: 'Christchurch, New Zealand',
          dateStart: 'Feb 2022',
          dateEnd: 'Feb 2023',
          roleName: 'Full Stack Developer',
          description: "Led the development of a speech analysis application automating error pattern detection in children’s speech, transforming it from an MVP to a productionised web application with beta users.\n" +
              "Developed Python algorithms, significantly reducing error pattern analysis time from hours to seconds.\n" +
              "Implemented UX-enhancing features with React and extended functionality with Node.js/Express RESTful API. Using PostgreSQL for our database.",
          logoSrc: uni
        },
        {
          companyName: 'Optiver',
          site: 'https://www.optiver.com/',
          location: 'Sydney, Australia',
          dateStart: 'Nov 2021',
          dateEnd: 'Feb 2022',
          roleName: 'Intern Software Engineer',
          description: "Developed Jupyter notebook extension to streamline the Options Research team’s inadequate & manual process.\n" +
              "Enabled researchers to format & export their research findings to our internal wiki to promote discussion.",
          logoSrc: optiver
        },
        {
          companyName: 'ANZ',
          site: 'https://www.anz.co.nz/about-us/our-company/anz-new-zealand/',
          location: 'Wellingtion, New Zealand',
          dateStart: 'Nov 2020',
          dateEnd: 'Feb 2021',
          roleName: 'Intern Backend Developer',
          description: 'Worked in an Agile team adding functionality to large-scale Java Spring Boot microservices.\n'
              + 'Developed, dockerised and deployed my Spring Boot application to OpenShift allowing for auto-scaling.',
          logoSrc: anz
        },
        {
          companyName: 'Ryman',
          site: 'https://www.rymanhealthcare.co.nz/',
          location: 'Christchurch, New Zealand',
          dateStart: 'Nov 2019',
          dateEnd: 'Feb 2020',
          roleName: 'InternSoftware Engineer',
          description: 'Developed greenfield web application using C# (.Net Core) and React.js. Helped residents in retirement homes to share and upload photos with their families.',
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