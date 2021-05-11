<template>
  <Letter />
</template>

<script>
import Letter from "./components/Letter.vue";
export default {
  name: "App",
  components: {
    Letter: Letter,
  },
};
</script>

<style>
#app {
  font-family: "PinyonScriptRegular";
  font-weight: normal;
  font-style: normal;
  font-size: xx-large;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
