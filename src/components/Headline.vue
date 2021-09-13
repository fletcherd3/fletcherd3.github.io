<template>
  <div class="headline">{{this.text}}</div>
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

<style scoped>
.headline {
    font-family: "NunitoSans-Black",sans-serif;
    background-image: linear-gradient(
60deg,rgba(239,0,143,.5),rgba(110,195,244,.5),rgba(112,56,255,.5),rgba(255,186,39,.5));
    background-size: 400% 100%;
    -webkit-background-clip: text;
    background-clip: none;
    -webkit-text-fill-color: transparent;
    animation: hue 5s infinite alternate;
    line-height: 1.1;
    font-size: 18ex;
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
