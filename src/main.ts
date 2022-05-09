import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import hxx from "./view/hxx/main.vue";
import ljf from "./view/ljf/main.vue";
import lm from "./view/lm/main.vue";
import wch from "./view/wch/main.vue";
import yjh from "./view/yjh/main.vue";

const routes = [
  {path:'/',redirect:'/hxx'},
  { path: "/hxx", component: hxx },
  { path: "/ljf", component: ljf },
  { path: "/lm", component: lm },
  { path: "/wch", component: wch },
  { path: "/yjh", component: yjh },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App).use(router).mount("#app");
