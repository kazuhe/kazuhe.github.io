<script setup lang="ts">
import blogs from "../json/feed-zenn.json";
import HelloWorld from "./components/HelloWorld.vue";
import XCard from "./components/XCard.vue";
import XHeader from "./components/XHeader.vue";
// import { Blog, sortBlogs } from "@/domain/blog";

/**
 * `/content` からコンテンツを取得する
 */
// const fetchOwnContent = (): Promise<Blog[]> =>
//   queryContent("blog")
//     .find()
//     .then((res) =>
//       res.map((d) => ({
//         title: d.title || "",
//         description: d.description || "",
//         path: d._path || "",
//         createdAt: d.created_at,
//         icon: d.icon,
//         type: "own",
//       }))
//     );

// const { data: blogs } = await useAsyncData("blogs", () =>
//   Promise.all([fetchZennContent(), fetchOwnContent()]).then(sortBlogs)
// );

// const url = "https://kazuhe.github.io/";

// useHead({
//   title: "kazuhe.github.io",
//   htmlAttrs: {
//     lang: "ja",
//   },
//   meta: [
//     { name: "description", content: "kazuhe's homepage." },
//     {
//       property: "og:image",
//       content: `${url}icon.png`,
//     },
//     {
//       property: "og:url",
//       content: url,
//     },
//     {
//       name: "twitter:card",
//       content: "summary",
//     },
//     {
//       name: "twitter:site",
//       content: "@kazuhe__",
//     },
//   ],
//   link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
// });
</script>

<template>
  <x-header class="h-12" />
  <main class="mt-12 p-4">
    <HelloWorld msg="Vite + Vue" />
    <ul>
      <li v-for="blog in blogs" :key="blog.path" class="mt-4 first:mt-0">
        <!-- {{ blog }} -->
        <x-card
          :title="blog.title"
          :description="blog.description"
          :path="blog.path"
          :created-at="blog.createdAt"
          :icon="blog.icon"
          :type="blog.type"
        />
      </li>
    </ul>
  </main>
</template>
