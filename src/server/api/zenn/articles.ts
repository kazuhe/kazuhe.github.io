import Parser from "rss-parser";
import { Article } from "@/domain/article";

const parser = new Parser();

export default defineEventHandler(async () => {
  const feed = await parser.parseURL(
    "https://zenn.dev/kazuhe/feed?all=1&include_scraps=1"
  );
  const articles: Article[] = feed.items.map((d) => ({
    title: d.title,
    description: d.content,
    path: d.link,
    created_at: d.pubDate,
    icon: "z",
    type: "zenn",
  }));
  return articles;
});
