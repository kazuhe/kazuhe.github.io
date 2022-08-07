<script setup lang="ts">
const title = "kazuhe.github.io";
const description = "kazuhe's homepage.";

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
      content: "/icon.png",
    },
    {
      property: "og:url",
      content: "https://kazuhe.github.io/",
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
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
