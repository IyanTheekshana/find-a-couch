<template>
  <the-header></the-header>
  <main>
    <router-view></router-view>
  </main>
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

@import url("https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;

  color: #020112;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Jost", sans-serif;
  text-transform: uppercase;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: linear-gradient(0deg, #19335a, #697a98);
  color: transparent;
  letter-spacing: 0.1rem;
}

.card {
  background: linear-gradient(140deg, #02889b, #06c2ae);
  color: #fff;
}

main {
  max-width: 1400px;
  padding: 2rem;
  margin: 0 auto;
}
</style>
