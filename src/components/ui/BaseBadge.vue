<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ["title", "type"],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style scoped>
.badge {
  padding: 5px 10px;
  border: none;
  color: white;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  font-size: 0.8rem;
}
.badge:not(:last-child) {
  margin-right: 5px;
}

.frontend {
  background: linear-gradient(119deg, #178a5a, #60e265);
}
.backend {
  background: linear-gradient(119deg, #31c0be, #d6b709);
}

.career {
  background: linear-gradient(119deg, #74c485, #d4ec9a);
}
</style>
