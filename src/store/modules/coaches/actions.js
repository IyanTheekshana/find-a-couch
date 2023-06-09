export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      areas: data.areas,
      description: data.desc,
      hourlyRate: data.rate,
    };

    const token = context.rootGetters.token;
    const response = await fetch(
      `https://vue-http-demo-4c5ef-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json?auth=${token}`,
      {
        method: "PUT",
        body: JSON.stringify(coachData),
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      //Error
    }

    context.commit("registerCoach", { ...coachData, id: userId });
  },

  async loadCoaches(context, payload) {
    if (!context.getters.shouldUpdate && !payload.forceRefresh) {
      return;
    }

    const response = await fetch(
      `https://vue-http-demo-4c5ef-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`
    );
    const responeData = await response.json();
    if (!response.ok) {
      //Error

      const error = new Error(responeData.message || "Faild to fetch");
      throw error;
    }

    const coaches = [];
    for (const key in responeData) {
      const coach = {
        id: key,
        firstName: responeData[key].firstName,
        lastName: responeData[key].lastName,
        areas: responeData[key].areas,
        description: responeData[key].description,
        hourlyRate: responeData[key].hourlyRate,
      };
      coaches.push(coach);
    }
    context.commit("setCoaches", coaches);
    context.commit("setFetchTimeStamp");
  },
};
