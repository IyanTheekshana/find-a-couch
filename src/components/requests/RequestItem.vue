<template>
  <div class="card">
    <a :href="emailLink">{{ email }}</a>

    <p>{{ message }}</p>
  </div>
</template>
<script>
export default {
  props: ["email", "message"],
  computed: {
    emailLink() {
      return "mailto:" + this.email;
    },
  },
};
</script>

<style scoped>
.card {
  margin: 1rem 0;
  border: none;
  border-radius: 12px;
  padding: 1rem;
  background: linear-gradient(to top, #ffffff, #ffffff);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

a {
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  color: #7ec384;
  letter-spacing: 1px;
}

p {
  color: #3f7856;
  font-size: 1.1rem;
  letter-spacing: 1px;
}
</style>
