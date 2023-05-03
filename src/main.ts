import "./style.css";
import {
  createTimeline,
  convertJsonToTimeline,
  sortTimeline,
} from "./browser/timeline";

const app = document.querySelector("#app");

if (!app) {
  throw new Error("#app element not found");
}

(async () => {
  const zenn = await import(`../.articles/zenn.json`);
  const hatena = await import(`../.articles/hatena.json`);

  const zennArticles = convertJsonToTimeline(zenn.default);
  const hatenaArticles = convertJsonToTimeline(hatena.default);
  const timeline = sortTimeline([zennArticles, hatenaArticles]);

  app.appendChild(createTimeline(timeline));
})();
