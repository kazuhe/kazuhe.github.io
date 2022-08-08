/**
 * Blog 種別
 */
type BlogType = "zenn" | "own";

/**
 * Blog
 */
export type Blog = {
  title: string;
  description: string;
  path: string;
  createdAt: string;
  icon: string;
  type: BlogType;
  body?: unknown;
};

/**
 * Blog を最新順に並び替える
 */
type SortBlogs = ([a, b]: [Blog[], Blog[]]) => Blog[];

export const sortBlogs: SortBlogs = ([a, b]) =>
  a.concat(b).sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
