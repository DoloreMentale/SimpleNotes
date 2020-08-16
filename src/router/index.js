import Vue from "vue";
import VueRouter from "vue-router";
import NoteList from "@/components/NoteList";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "NoteList",
    component: NoteList
  }
];

const router = new VueRouter({
  routes
});

export default router;
