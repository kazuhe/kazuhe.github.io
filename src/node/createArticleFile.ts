import fs from "node:fs";
import path from "node:path";

import { getArticlesOfZenn, getArticlesOfHatena } from "./getArticles.js";

(async () => {
  const PATH = ".articles";
  const [zenn, hatena] = await Promise.all([
    getArticlesOfZenn(),
    getArticlesOfHatena(),
  ]);
  await fs.promises.mkdir(path.resolve(PATH), { recursive: true });
  fs.promises.writeFile(path.resolve(PATH, "zenn.json"), JSON.stringify(zenn));
  fs.promises.writeFile(
    path.resolve(PATH, "hatena.json"),
    JSON.stringify(hatena)
  );
})();
