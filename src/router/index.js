import Vue from "vue";
import VueRouter from "vue-router";
import Libraly from "@/views/Libraly";
import Editor from "@/views/Editor";

Vue.use(VueRouter);

const routes = [
  {
    path: "/libraly",
    name: "Photo Libraly",
    component: Libraly,
  },
  {
    path: "/editor",
    name: "Photo Editor",
    component: Editor,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
