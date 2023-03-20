<template>
  <div>
    <base-dialog
      :show="!!errorMsg"
      title="An error occured"
      @close="handleError"
    >
      <p>{{ errorMsg }}</p>
    </base-dialog>
    <section>
      <div class="controls">
        <div>
          <coach-filter @change-filter="setFilters"></coach-filter>
        </div>
        <div>
          <base-button mode="outline" @click="loadCoaches(true)"
            >Refresh</base-button
          >
          <base-button
            link
            to="/auth?redirect=register"
            mode="outline"
            v-if="!isLoggedIn"
            >Login to register as a Coach</base-button
          >
          <base-button
            v-if="!isCoach && !isLoading && isLoggedIn"
            mode="flat"
            link
            to="/register"
            >Register as coach</base-button
          >
        </div>
      </div>
      <div>
        <base-spinner v-if="isLoading"></base-spinner>
        <div v-else-if="hasCoaches">
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
  </div>
</template>

<script>
import CoachItem from "../../components/coaches/CoachItem.vue";
import CoachFilter from "@/components/coaches/CoachFilter.vue";
export default {
  components: { CoachItem, CoachFilter },
  data() {
    return {
      errorMsg: "",
      isLoading: false,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
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
      return !this.isLoading && this.$store.getters["coaches/hasCoaches"];
    },
    isCoach() {
      return this.$store.getters["coaches/isCoach"];
    },
  },
  created() {
    this.loadCoaches();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
      console.log(updatedFilters);
    },
    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("coaches/loadCoaches", {
          forceRefresh: refresh,
        });
      } catch (err) {
        this.errorMsg = err.message || "Something went wrong";
      }
      this.isLoading = false;
    },
    handleError() {
      this.errorMsg = null;
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
