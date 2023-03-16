<template>
  <base-card>
    <h2>{{ fullName }}</h2>
    <h3>${{ rate }} per hour</h3>
  </base-card>

  <base-card>
    <base-badge
      v-for="area in areas"
      :key="area"
      :type="area"
      :title="area"
    ></base-badge>
    <p>{{ description }}</p>
  </base-card>

  <base-card mode="card-two">
    <header>
      <h4>Interested? Reach out now!</h4>
      <base-button mode="outline" link :to="contactLink">Contact</base-button>
    </header>
    <router-view></router-view>
  </base-card>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + " " + this.selectedCoach.lastName;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },

    contactLink() {
      return this.$route.path + "/contact";
    },
    areas() {
      return this.selectedCoach.areas;
    },
    description() {
      return this.selectedCoach.description;
    },
  },
  created() {
    this.selectedCoach = this.$store.getters["coaches/coaches"].find(
      (coach) => coach.id === this.id
    );
  },
};
</script>

<style scoped>
p {
  margin-top: 30px;
}
</style>
