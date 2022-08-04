type BlogType = "zenn" | "own";

export type Blog = {
  title: string;
  description: string;
  path: string;
  createdAt: string;
  icon: string;
  type: BlogType;
  body?: unknown;
};
