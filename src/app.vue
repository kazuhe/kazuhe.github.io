<script setup lang="ts">
const title = "kazuhe.github.io";
const description = "kazuhe's homepage.";
const url = "https://kazuhe.github.io/";

useHead({
  title,
  htmlAttrs: {
    lang: "ja",
  },
  meta: [
    { name: "description", content: description },
    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:description",
      content: description,
    },
    {
      property: "og:image",
      content: `${url}icon.png`,
    },
    {
      property: "og:url",
      content: url,
    },
    {
      name: "twitter:card",
      content: "summary",
    },
    {
      name: "twitter:site",
      content: "@kazuhe__",
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
