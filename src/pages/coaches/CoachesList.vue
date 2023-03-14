<template>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button mode="flat" link to="/register"
          >Register as coach</base-button
        >
      </div>
      <div>
        <ul v-if="hasCoaches">
          <coach-item
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :id="coach.id"
            :first-name="coach.firstName"
            :last-name="coach.lastName"
            :rate="coach.hourlyRate"
            :areas="coach.areas"
          ></coach-item>
        </ul>
        <h3 v-else>No coaches found</h3>
      </div>
    </base-card>
  </section>
</template>

<script>
import CoachItem from "../../components/coaches/CoachItem.vue";
export default {
  components: { CoachItem },
  computed: {
    filteredCoaches() {
      return this.$store.getters["coaches/coaches"];
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
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
  justify-content: flex-end;
  align-items: center;
  /* border-bottom: 1px solid black; */

  flex-wrap: wrap;
}

/* .controls button {
  margin-right: 0.5rem;
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

.controls button:hover {
  color: white;
  background: linear-gradient(140deg, #3f7856, #7ec384);
  border: none;
  box-shadow: #7ec384 3px 3px 6px 0px inset, #3f7856 -3px -3px 6px 1px inset;
} */

a {
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
}

a:active,
a:hover,
a.router-link-active {
  color: white;
  background: linear-gradient(140deg, #3f7856, #7ec384);
  border: none;
  box-shadow: #7ec384 3px 3px 6px 0px inset, #3f7856 -3px -3px 6px 1px inset;
}
</style>
