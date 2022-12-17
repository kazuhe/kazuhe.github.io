<script setup lang="ts">
type Props = {
  isShown: boolean;
};

const props = defineProps<Props>();

const emits = defineEmits<{
  (event: "hideNavigation"): void;
}>();

type Navigation = {
  label: string;
  link: string;
};

const navigations: Navigation[] = [
  { label: "Blog", link: "/" },
  { label: "About", link: "/about" },
  // { label: "Activity", link: "/activity" },
];
</script>

<template>
  <div
    @click="emits('hideNavigation')"
    v-show="props.isShown"
    class="fixed bg-zinc-900/[.8] inset-0 w-screen h-screen md:hidden"
  />
  <aside
    class="z-50 fixed h-full top-0 bg-zinc-800 right-full bottom-0 w-60 overflow-x-hidden overflow-y-auto md:translate-x-60"
    :class="props.isShown ? 'translate-x-60' : 'translate-x-0'"
  >
    <div
      class="flex items-center h-12 p-3 border-b border-zinc-700 md:border-none"
    >
      <img
        src="/icon.png"
        alt="kazuhe"
        class="rounded-full border border-zinc-200 w-6 h-auto"
      />
      <div class="ml-2 flex items-end">
        <h1 class="font-bold text-lg leading-none">kazuhe</h1>
        <p class="text-xs">（Ohara Kazuhiro）</p>
      </div>
    </div>
    <nav class="p-3">
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
            @click="emits('hideNavigation')"
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
  </aside>
</template>
