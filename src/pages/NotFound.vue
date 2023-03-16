<template>
  <base-card>
    <section>
      <h2>Page Not Found</h2>
      <base-button link mode="outline" to="/">Go to home</base-button>
    </section>
  </base-card>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
