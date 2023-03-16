<template>
  <base-dialog :show="!!errorMsg" title="An error occured" @close="handleError">
    <p>{{ errorMsg }}</p>
  </base-dialog>
  <section>
    <base-card mode="card-two">
      <h2>Requests Recived</h2>
    </base-card>
    <base-spinner v-if="isLoading"></base-spinner>
    <base-card v-else-if="hasRequest && !isLoading">
      <request-item
        v-for="req in recivedRequests"
        :key="req.id"
        :email="req.userEmail"
        :message="req.message"
      ></request-item>
    </base-card>
    <base-card v-else>
      <h4>You haven't recived any requests yet!</h4>
    </base-card>
  </section>
</template>

<script>
import RequestItem from "../../components/requests/RequestItem.vue";
export default {
  data() {
    return {
      isLoading: false,
      errorMsg: null,
    };
  },
  components: {
    "request-item": RequestItem,
  },
  computed: {
    recivedRequests() {
      return this.$store.getters["requests/requests"];
    },
    hasRequest() {
      return this.$store.getters["requests/hasRequests"];
    },
  },
  created() {
    this.loadRequests();
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("requests/fetchRequests");
      } catch (err) {
        this.errorMsg = err.message;
      }
      this.isLoading = false;
    },
    handleError() {
      this.errorMsg = null;
    },
  },
};
</script>
