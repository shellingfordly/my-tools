import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "./router";
import "@arco-design/web-vue/dist/arco.css";

const app = createApp(App);

setupRouter(app);

app.mount("#app");
