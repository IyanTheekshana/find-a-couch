<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>&euro;{{ rate }}</h4>

    <div class="actions">
      <div>
        <span v-for="area in areas" :key="area">{{ area }}</span>
      </div>
      <div>
        <base-button mode="outline" link :to="coachContactLink"
          >Contact</base-button
        >
        <base-button mode="flat" link :to="coachDetailsLink"
          >Details</base-button
        >
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "firstName", "lastName", "rate", "areas"],
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    coachContactLink() {
      return this.$route.path + "/" + this.id + "/contact";
    },
    coachDetailsLink() {
      return this.$route.path + "/" + this.id;
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
span {
  background: linear-gradient(to top, #06623b, #649d66);
  padding: 5px;
  border: none;
  color: white;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
span:not(:last-child) {
  margin-right: 5px;
}

li {
  margin: 1rem 0;
  border: none;
  border-radius: 12px;
  padding: 1rem;
  background: linear-gradient(to top, #f2f5fa, #ffffff);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

h4 {
  font-size: 1.25rem;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: linear-gradient(0deg, #3f7856, #7ec384);
  color: transparent;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 3px;
}

/* a {
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
  border: 1px solid #7ec384;
  font-weight: bold;
}

a:active,
a:hover,
a.router-link-active {
  color: white;
  background: linear-gradient(140deg, #3f7856, #7ec384);
  border: none;
  box-shadow: #7ec384 3px 3px 6px 0px inset, #3f7856 -3px -3px 6px 1px inset;
} */
</style>
