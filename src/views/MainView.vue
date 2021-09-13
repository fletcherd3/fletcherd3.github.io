<template>
  <!-- Introduction section -->
  <div>
    <img src="../assets/memoji_3.png" width="300">
    <headline text="Fletcher Dick" />
    <div>📍 Christchurch, New Zealand</div>
    <div>Welcome to my portfolio! There's going to be a lot changing around here 😮</div>
  </div>
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
