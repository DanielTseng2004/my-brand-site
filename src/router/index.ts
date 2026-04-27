import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";
import Innovation from "../views/Innovation.vue";
import Design from "../views/Design.vue";
import Environment from "../views/Environment.vue";
import Specs from "../views/Specs.vue";
import Experience from "../views/Experience.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Index },
    { path: "/innovation", component: Innovation },
    { path: "/design", component: Design },
    { path: "/environment", component: Environment },
    { path: "/specs", component: Specs },
    { path: "/experience", component: Experience },
  ],
  // 讓每次切換頁面都回到頂部，這對動畫網站很重要
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
