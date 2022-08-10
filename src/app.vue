<script setup lang="ts">
const url = "https://kazuhe.github.io/";

useHead({
  title: "kazuhe.github.io",
  htmlAttrs: {
    lang: "ja",
  },
  meta: [
    { name: "description", content: "kazuhe's homepage." },
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
