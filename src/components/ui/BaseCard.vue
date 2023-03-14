<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

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
</style>
