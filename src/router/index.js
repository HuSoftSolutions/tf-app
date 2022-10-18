import { createRouter, createWebHistory } from "vue-router";
import LandingView from "@/views/LandingView.vue";
import ProfileView from "@/views/ProfileView.vue";
import LocationView from "@/views/LocationView.vue";
import PageNotFoundView from "@/views/PageNotFoundView.vue";

const routes = [
  /*
    public: show recently visted locations
  */
  {
    path: "/",
    name: "landing",
    component: LandingView,
  },
  /*
    public: show recently visted locations and bookings
    admin: show employee management, location analytics 
  */
  {
    path: "/profile/:id",
    name: "profile",
    component: ProfileView,
  },
  /*
    public: show restricted teesheet
    admin: show full teesheet
  */
  {
    path: "/location/:id",
    name: "location",
    component: LocationView,
  },
  /*
    catch all other paths
  */
  {
    path: "/:catchAll(.*)",
    name: "pageNotFound",
    component: PageNotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
