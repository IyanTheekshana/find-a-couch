<template>
  <section>
    <base-card mode="card-two">
      <h2>Requests Recived</h2>
    </base-card>
    <base-card v-if="hasRequest">
      <request-item
        v-for="req in recivedRequests"
        :key="req.id"
        :email="req.userEmail"
        :message="req.message"
      ></request-item>
    </base-card>
    <base-card v-if="!hasRequest">
      <h4>You haven't recived any requests yet!</h4>
    </base-card>
  </section>
</template>

<script>
import RequestItem from "../../components/requests/RequestItem.vue";
export default {
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
  data() {
    return {};
  },
};
</script>
