import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "./router";
import "@unocss/reset/tailwind.css";
import "./styles/index.less";
import "uno.css";

const app = createApp(App);

setupRouter(app);

app.mount("#app");
