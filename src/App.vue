<template>
  <the-header></the-header>
  <main>
    <router-view v-slot="slotProps">
      <Transition name="routes" mode="out-in">
        <component :is="slotProps.Component"></component>
      </Transition>
    </router-view>
  </main>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
  created() {
    this.$store.dispatch("autoLog");
  },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    },
  },
  watch: {
    didAutoLogout(curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        this.$router.replace("/coaches");
      }
    },
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

h1 {
  font-size: 2rem;
}

/* .card {
  background: linear-gradient(140deg, #02889b, #06c2ae);
  color: #fff;
} */

main {
  max-width: 1000px;
  padding: 2rem;
  margin: 0 auto;
}

.container {
  margin: auto;
}

.routes-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.routes-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.routes-enter-active {
  transition: all 0ss ease-out;
}
.routes-leave-active {
  transition: all 0.3s ease-in;
}

.routes-enter-to,
.routes-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
