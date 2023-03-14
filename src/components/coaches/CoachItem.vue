<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>&euro;{{ rate }}</h4>

    <div class="actions">
      <div>
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
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
</style>
