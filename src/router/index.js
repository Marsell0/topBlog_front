import { createRouter, createWebHistory } from "vue-router";
import UploadView from "../views/UploadView.vue";
import DoneView from "../views/DoneView.vue";

const routes = [
  {
    path: "/",
    name: "upload",
    component: UploadView,
  },
  {
    path: "/done",
    name: "done",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DoneView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
