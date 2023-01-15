import { createApp } from "vue";
import "./style.css";
import VueGtag from "vue-gtag";
import App from "./App.vue";

createApp(App)
  .use(VueGtag, {
    config: { id: "G-GFL5N1DYX9" },
  })
  .mount("#app");
