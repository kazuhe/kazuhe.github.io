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
  <nav class="bg-zinc-800 h-full p-6">
    <div class="flex items-center">
      <img
        src="/icon.png"
        alt="kazuhe"
        class="rounded-full border border-zinc-200 w-10 h-auto mr-2"
      />
      <div>
        <h1 class="font-bold text-lg leading-none">kazuhe</h1>
        <p class="text-xs">Junior Web Developer</p>
      </div>
    </div>
    <ul class="mt-6">
      <!-- <li>
        <div class="flex">
          <Icon name="vscode-icons:folder-type-docs-opened" size="18" />
          <span class="ml-2">Articles</span>
        </div>
        <ul>
          <li>Zenn</li>
        </ul>
      </li> -->
      <li v-for="(navigation, i) of navigations" :key="i">
        <NuxtLink
          :to="navigation.link"
          class="inline-block px-3 py-2"
          :class="[
            'inline-block',
            'font-medium',
            'px-3',
            'py-2',
            { 'bg-zinc-900': $route.fullPath === navigation.link },
          ]"
          >{{ navigation.label }}</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>
