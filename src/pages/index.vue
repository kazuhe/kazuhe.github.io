<script setup lang="ts">
// import Parser from "rss-parser";
import { Blog, sortBlogs } from "@/domain/blog";
import BlogCard from "@/components/BlogCard.vue";

/**
 * zenn の RSS からコンテンツを取得する
 */
// const fetchZennContent = (): Promise<Blog[]> =>
//   Promise.resolve(
//     new Parser().parseURL("https://zenn.dev/kazuhe/feed?all=1").then((res) =>
//       res.items.map((d) => ({
//         title: d.title || "",
//         description: d.content || "",
//         path: d.link || "",
//         createdAt: d.pubDate || "",
//         icon: "z",
//         type: "zenn" as const,
//       }))
//     )
//   );

/**
 * `/content` からコンテンツを取得する
 */
const fetchOwnContent = (): Promise<Blog[]> =>
  queryContent("blog")
    .find()
    .then((res) =>
      res.map((d) => ({
        title: d.title || "",
        description: d.description || "",
        path: d._path || "",
        createdAt: d.created_at,
        icon: d.icon,
        type: "own",
      }))
    );

const { data: blogs } = await useAsyncData("blogs", () => fetchOwnContent());

// const { data: blogs } = await useAsyncData("blogs", () =>
//   Promise.all([fetchZennContent(), fetchOwnContent()]).then(sortBlogs)
// );
</script>

<template>
  <div>
    <ul>
      <li v-for="blog in blogs" :key="blog.path" class="first:mt-0 mt-4">
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
