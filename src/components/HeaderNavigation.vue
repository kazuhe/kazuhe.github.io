<script setup lang="ts">
type Navigation = {
  label: string;
  link: string;
};

const navigations: Navigation[] = [
  { label: "Home", link: "/" },
  { label: "About", link: "/abnout" },
];
</script>

<template>
  <nav class="bg-gradient-to-b from-zinc-700 to-zinc-900 text-zinc-50">
    <ul class="inline-flex divide-x divide-zinc-600 border-r border-zinc-600">
      <li v-for="(navigation, i) of navigations" :key="i">
        <NuxtLink :to="navigation.link" class="inline-block px-3 py-2">{{
          navigation.label
        }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
