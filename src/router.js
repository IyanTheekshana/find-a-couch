// import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import CoachesList from "./pages/coaches/CoachesList";
import CoachDetail from "./pages/coaches/CoachDetail";
import CoachRegistration from "./pages/coaches/CoachRegistration";
import ContactCoach from "./pages/requests/ContactCoach";
import RequestRecived from "./pages/requests/RequestsRecived";
import UserAuth from "./pages/auth/UserAuth.vue";
import NotFound from "./pages/NotFound.vue";
import store from "./store/index";

// const CoachDetail = defineAsyncComponent(() =>
//   import("./pages/coaches/CoachDetail")
// );
// const CoachRegistration = defineAsyncComponent(() =>
//   import("./pages/coaches/CoachRegistration")
// );
// const ContactCoach = defineAsyncComponent(() =>
//   import("./pages/requests/ContactCoach")
// );
// const RequestRecived = defineAsyncComponent(() =>
//   import("./pages/requests/RequestsRecived")
// );
// const NotFound = defineAsyncComponent(() => import("./pages/NotFound"));

// const UserAuth = defineAsyncComponent(() =>
//   import("./pages/auth/UserAuth.vue")
// );

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "",
      redirect: "/coaches",
    },
    {
      path: "/coaches",
      component: CoachesList,
    },
    {
      path: "/coaches/:id",
      component: CoachDetail,
      props: true,
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
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/requests",
      component: RequestRecived,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/auth",
      component: UserAuth,
      meta: {
        requiresUnauth: true,
      },
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/auth");
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next("/coaches");
  } else {
    next();
  }
});

export default router;
