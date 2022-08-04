<script setup lang="ts">
type Navigation = {
  label: string;
  link: string;
};

const navigations: Navigation[] = [
  { label: "Blog", link: "/" },
  { label: "About", link: "/about" },
  { label: "Activity", link: "/activity" },
];
</script>

<template>
  <nav
    class="bg-gradient-to-b from-zinc-100 to-zinc-300 border-y border-zinc-200 text-zinc-600"
  >
    <ul class="inline-flex divide-x divide-zinc-200 border-r border-zinc-200">
      <li v-for="(navigation, i) of navigations" :key="i">
        <NuxtLink
          :to="navigation.link"
          class="inline-block px-3 py-2"
          :class="[
            'inline-block',
            'font-medium',
            'px-3',
            'py-2',
            { 'bg-zinc-50': $route.fullPath === navigation.link },
          ]"
          >{{ navigation.label }}</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>
