import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter";
import { createTimeline } from "./createTimeline";

const app = document.querySelector("#app");

if (!app) {
  throw new Error("#app element not found");
}

const timeline = [
  {
    date: "2021-01-01",
    title: "ICONIX プロセスによる Java 製 REST API の設計",
    link: "/",
  },
  {
    date: "2021-01-01",
    title: "Vite 2.0",
    link: "/",
  },
];

app.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

app.appendChild(createTimeline(timeline));

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
