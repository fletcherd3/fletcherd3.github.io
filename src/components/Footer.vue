<template>
  <v-footer padless>
    <v-col
        class="text-center"
        cols="12"
    >
      {{ new Date().getFullYear() }} — Designed and Developed by me
    </v-col>
  </v-footer>
</template>

<script>

export default {
  name: 'Footer',
  data() {
    return {}
  }
}
</script>