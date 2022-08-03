type ArticleType = "zenn" | "blog";

export type Article = {
  title: string;
  description: string;
  path: string;
  created_at: string;
  icon: string;
  type: ArticleType;
  body?: unknown;
};
