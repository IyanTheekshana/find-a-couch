<template>
  <div class="card" :class="mode">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardTwo: false,
    };
  },
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style scoped>
.card {
  padding: 1rem 2.5rem 1rem 0;
  margin: 2rem auto;
  max-width: 1000px;
  background: linear-gradient(to top, #f2f5fa, #ffffff);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border: none;
  border-radius: 12px;
  padding: 1rem;
}

.card-two {
  background: linear-gradient(240deg, #67ebfa, #98f8e1, #fff 80%);

  padding: 1rem 2.5rem 1rem 0;
  margin: 2rem auto;
  max-width: 1000px;

  border: none;
  border-radius: 12px;
  padding: 1rem;
}
</style>
