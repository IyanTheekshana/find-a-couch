<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='w-full h-full' viewBox='0 0 400 400'%3E%3Cdefs%3E%3Cpattern id='bg_pattern' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cline x1='40' y1='40' x2='60' y2='60' stroke='%237ec384' stroke-width='6' stroke-linecap='round' opacity='0.3'%3E%3C/line%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='%23ffffff' opacity='0.3'%3E%3C/rect%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23bg_pattern)' opacity='0.3'%3E%3C/rect%3E%3C/svg%3E");
  color: #020112;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Roboto Slab", serif;
  text-transform: uppercase;
}

.card {
  background: linear-gradient(140deg, #02889b, #06c2ae);
  color: #fff;
}
</style>
