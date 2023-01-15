import fs from "node:fs";
import path from "node:path";
import Parser from "rss-parser";

/**
 * zenn の RSS からコンテンツを取得する
 */
const fetchZennContent = (): Promise<any[]> =>
  Promise.resolve(
    new Parser().parseURL("https://zenn.dev/kazuhe/feed?all=1").then((res) =>
      res.items.map((d) => ({
        title: d.title || "",
        description: d.content || "",
        path: d.link || "",
        createdAt: d.pubDate || "",
        icon: "z",
        type: "zenn" as const,
      }))
    )
  );

(async () => {
  const feed = await fetchZennContent();
  console.log(feed);

  await fs.promises.writeFile(
    path.resolve("public", "feed-zenn.json"),
    JSON.stringify(feed)
  );
})();
