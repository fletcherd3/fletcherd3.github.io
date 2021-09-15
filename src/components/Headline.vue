<template>
  <h1 class="name">{{ this.text }}</h1>
</template>

<script>
export default {
  name: 'Headline',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.name {
  background-image: linear-gradient(
      60deg, rgba(239, 0, 143, .5), rgba(110, 195, 244, .5), rgba(112, 56, 255, .5), rgba(255, 186, 39, .5));
  background-size: 400% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  animation: hue 5s infinite alternate;
  line-height: 1.1;
  font-size: 5rem;
}

@keyframes hue {
  0% {
    filter: hue-rotate(0deg);
  }


  100% {
    filter: hue-rotate(-1turn);
  }
}
</style>
