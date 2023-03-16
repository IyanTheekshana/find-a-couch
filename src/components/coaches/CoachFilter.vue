<template>
  <base-card mode="card-two">
    <h2>Find your coach</h2>
    <span class="filter-option">
      <input type="checkbox" id="frontend" checked @change="setFilter" />
      <label for="frontend">FrontEnd</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="backend" checked @change="setFilter" />
      <label for="backend">Backend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="career" checked @change="setFilter" />
      <label for="career">Career</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ["change-filter"],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isAtctive = event.target.checked;
      const updateFilters = {
        ...this.filters,
        [inputId]: isAtctive,
      };
      this.filters = updateFilters;
      this.$emit("change-filter", updateFilters);
    },
  },
};
</script>

<style scoped>
.filter-option:not(:last-child) {
  margin-right: 0.5rem;
}
</style>
