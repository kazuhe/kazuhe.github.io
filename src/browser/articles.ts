/**
 * 記事種別
 */
type ArticleType = "Zenn" | "Hatena";

/**
 * 記事
 */
export type Article = {
  title: string;
  description: string;
  link: string;
  createdAt: string;
  type: ArticleType;
};
