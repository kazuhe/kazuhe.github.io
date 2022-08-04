<script setup lang="ts">
import Parser from "rss-parser";
import { Blog } from "@/domain/blog";
import BlogCard from "@/components/BlogCard.vue";

/**
 * zenn の RSS からコンテンツを取得する
 */
const fetchZennContent = (): Promise<Blog[]> =>
  Promise.resolve(
    new Parser()
      .parseURL("https://zenn.dev/kazuhe/feed?all=1&include_scraps=1")
      .then((res) =>
        res.items.map((d) => ({
          title: d.title,
          description: d.content,
          path: d.link,
          createdAt: d.pubDate,
          icon: "z",
          type: "zenn",
        }))
      )
  );

/**
 * `/content` からコンテンツを取得する
 */
const fetchOwnContent = (): Promise<Blog[]> =>
  queryContent("blog")
    .find()
    .then((res) =>
      res.map((d) => ({
        title: d.title,
        description: d.description,
        path: d._path,
        createdAt: d.created_at,
        icon: d.icon,
        type: "own",
      }))
    );

type Sort<T> = ([a, b]: [T[], T[]]) => T[];

/**
 * Blog を最新順に並び替える
 */
const sortBlogs: Sort<Blog> = ([a, b]) =>
  a.concat(b).sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));

const { data: blogs } = await useAsyncData("blogs", () =>
  Promise.all([fetchZennContent(), fetchOwnContent()]).then(sortBlogs)
);
</script>

<template>
  <div>
    <ul>
      <li v-for="blog in blogs" :key="blog.path" class="mt-3 hover:opacity-60">
        <blog-card
          :title="blog.title"
          :description="blog.description"
          :path="blog.path"
          :created-at="blog.createdAt"
          :icon="blog.icon"
          :type="blog.type"
        />
      </li>
    </ul>
  </div>
</template>
