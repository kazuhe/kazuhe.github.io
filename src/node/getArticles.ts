import Parser from "rss-parser";

/**
 * 記事種別
 */
type ArticleType = "Zenn" | "Hatena";

/**
 * 記事
 */
type Article = {
  title: string;
  description: string;
  link: string;
  createdAt: string;
  type: ArticleType;
};

const parser = new Parser();

/**
 * Zenn の RSS から記事を取得する
 */
export const getArticlesOfZenn = async (): Promise<Article[]> => {
  const feed = await parser.parseURL("https://zenn.dev/kazuhe/feed?all=1");
  return feed.items.map((d) => ({
    title: d.title || "",
    description: d.content || "",
    link: d.link || "",
    createdAt: d.pubDate || "",
    type: "Zenn",
  }));
};

/**
 * Hatena の RSS から記事を取得する
 */
export const getArticlesOfHatena = async (): Promise<Article[]> => {
  const feed = await parser.parseURL("https://kazuhe.hatenablog.com/feed");
  return feed.items.map((d) => ({
    title: d.title || "",
    description: d.summary || "",
    link: d.link || "",
    createdAt: d.pubDate || "",
    type: "Hatena",
  }));
};
