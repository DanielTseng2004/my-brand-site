import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { MotionPlugin } from "@vueuse/motion";

const app = createApp(App);

app.use(router);
app.use(MotionPlugin); // 為了讓 Environment.vue 的 v-motion 生效

app.mount("#app");
