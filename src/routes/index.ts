import { createRouter, createWebHashHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import Dashboard from "../views/Dashboard.vue";
import NotFound from "../views/NotFound.vue";
import SignupPageVue from "../views/Signup.vue";
import LoginVue from "../views/Login.vue";
import LinksPage from "../views/LinksPage.vue";
import CustomUrlPage from "../views/CustomUrlPage.vue";
import QRcodePage from "../views/QRcodePage.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "landing-page",
      component: LandingPage,
    },

    { path: "/login", name: "login-page", component: LoginVue },
    { path: "/signup", name: "signup-page", component: SignupPageVue },
    {
      path: "/dashboard",
      name: "dash-board",
      component: Dashboard,
      meta: { requiresAuth: true },
    },
    {
      path: "/dashboard/customurlpage",
      name: "customurl-page",
      component: CustomUrlPage,
      meta: { requiresAuth: true },
    },
    {
      path: "/dashboard/qrcodepage",
      name: "grcode-page",
      component: QRcodePage,
      meta: { requiresAuth: true },
    },
    {
      path: "/dashboard/linkspage",
      name: "links-page",
      component: LinksPage,
      meta: { requiresAuth: true },
    },

    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
  ],
});

// global navigation guard
// router.beforeEach(
//   async (to: RouteLocationNormalized, next: NavigationGuardNext) => {
//     const isLoggedIn = !!localStorage.getItem("isLoggedIn");

//     if (to.matched.some((item) => item.meta.requiresAuth)) {
//       if (!isLoggedIn) {
//         next({ path: "/login" });
//       } else {
//         next();
//       }
//     } else if (
//       isLoggedIn &&
//       (to.name === "login-page" ||
//         to.name === "signup-page" ||
//         to.name === "landing-page")
//     ) {
//       next({ path: "/dashboard" });
//     } else {
//       next();
//     }
//   }
// );

export default router;
