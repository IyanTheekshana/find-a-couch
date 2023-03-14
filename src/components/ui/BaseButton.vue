<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  to: {
    type: String,
    required: false,
    default: "/",
  },
};
</script>

<style scoped>
a,
button {
  text-decoration: none;
}
.outline {
  margin-right: 0.5rem;
  text-decoration: none;
  cursor: pointer !important;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: none;
  transition: all 0.3s;
  border-radius: 0.5rem;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: linear-gradient(0deg, #3f7856, #7ec384);
  color: transparent;
  border: 1px solid #7ec384;
  font-weight: bold;
}

.outline:not(:last-child) {
  margin-right: 0.5rem;
}

.outline:hover {
  color: white;
  background: linear-gradient(140deg, #3f7856, #7ec384);
  border: none;
  box-shadow: #7ec384 3px 3px 6px 0px inset, #3f7856 -3px -3px 6px 1px inset;
}

.flat {
  text-decoration: none;

  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: none;
  transition: all 0.3s;
  border-radius: 0.5rem;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: linear-gradient(0deg, #3f7856, #7ec384);
  color: transparent;
  /* border: 1px solid #7ec384; */
  font-weight: bold;
}

.flat:active,
.flat:hover,
.flat.router-link-active {
  color: white;
  background: linear-gradient(140deg, #3f7856, #7ec384);
  border: none;
  box-shadow: #7ec384 3px 3px 6px 0px inset, #3f7856 -3px -3px 6px 1px inset;
}
</style>
