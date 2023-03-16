export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  mutations: {
    addRequest(state, payload) {
      state.requests.push(payload);
    },
  },
  actions: {
    contactCouch(context, payload) {
      const newRequest = {
        id: new Date().toISOString(),
        coachID: payload.coachID,
        userEmail: payload.email,
        message: payload.message,
      };
      context.commit("addRequest", newRequest);
    },
  },
  getters: {
    requests(state) {
      return state.requests;
    },
    hasRequests(state) {
      return state.requests && state.requests.length > 0;
    },
  },
};
