export default {
  registerCoach(context, data) {
    const coachData = {
      // id: "c" + Math.ceil(Math.random() * (199 - 1) + 1),
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      areas: data.areas,
      description: data.desc,
      hourlyRate: data.rate,
    };

    context.commit("registerCoach", coachData);
  },
};
