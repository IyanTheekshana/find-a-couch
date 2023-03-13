import { createRouter, createWebHistory } from "vue-router";

import CoachesList from "./pages/coaches/CoachesList";
import CoachDetail from "./pages/coaches/CoachDetail";
import CoachRegistration from "./pages/coaches/CoachRegistration";
import ContactCoach from "./pages/requests/ContactCoach";
import RequestRecived from "./pages/requests/RequestsRecived";

const router = createRouter({
  history: createWebHistory,
  routes: [
    {
      path: "",
      redirect: "/coaches",
    },
    {
      path: "coaches",
      component: CoachesList,
    },
    {
      path: "/coaches/:id",
      component: CoachDetail,
      children: [
        {
          path: "contact",
          component: ContactCoach,
        },
      ],
    },
    {
      path: "/register",
      component: CoachRegistration,
    },
    {
      path: "/requests",
      component: RequestRecived,
    },
    {
      path: "/:notFound(.*)",
      component: null,
    },
  ],
});

export default router;
