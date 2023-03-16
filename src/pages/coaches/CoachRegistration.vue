<template>
  <div>
    <base-card mode="card-two">
      <h2>Register as a coach now</h2>
    </base-card>
    <base-card>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </div>
</template>

<script>
import CoachForm from "@/components/coaches/CoachForm.vue";
export default {
  components: {
    CoachForm,
  },

  methods: {
    saveData(data) {
      this.$store.dispatch("coaches/registerCoach", data);
      this.$router.replace("/");
    },
  },
};
</script>
