import "./style.css";
import { createTimeline, convertJsonToTimeline } from "./browser/timeline";

const app = document.querySelector("#app");

if (!app) {
  throw new Error("#app element not found");
}

(async () => {
  const zenn = await import(`../.articles/zenn.json`);
  const hatena = await import(`../.articles/hatena.json`);

  const timeline = convertJsonToTimeline([...zenn.default, ...hatena.default]);

  app.appendChild(createTimeline(timeline));
})();
