<template>
  <section>
    <div class="controls">
      <div>
        <coach-filter @change-filter="setFilters"></coach-filter>
      </div>
      <div>
        <base-button mode="outline">Refresh</base-button>
        <base-button v-if="isCoach" mode="flat" link to="/register"
          >Register as coach</base-button
        >
      </div>
    </div>
    <div>
      <div v-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        ></coach-item>
      </div>
      <h3 v-else>No coaches found</h3>
    </div>
  </section>
</template>

<script>
import CoachItem from "../../components/coaches/CoachItem.vue";
import CoachFilter from "@/components/coaches/CoachFilter.vue";
export default {
  components: { CoachItem, CoachFilter },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters["coaches/coaches"];
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes("frontend")) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes("backend")) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes("career")) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
    isCoach() {
      return this.$store.getters["coaches/isCoach"];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
      console.log(updatedFilters);
    },
  },
};
</script>

<style scoped>
h1 {
  display: flex;
  text-align: center;
}
ul {
  list-style: none;
  max-width: 1000px;
}
section {
  width: 100%;
}

.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border-bottom: 1px solid black; */

  flex-wrap: wrap;
}
</style>
