<script setup lang="ts">
// import { Blog } from "@/domain/blog";
// ↑この型を利用したいけどダメっぽい

type Props = {
  title: string;
  description: string;
  path: string;
  createdAt: string;
  icon: string;
  type: "zenn" | "own";
};

withDefaults(defineProps<Props>(), {
  title: "",
  description: "",
  path: "",
  created_at: "",
  icon: "",
  type: "own",
});
</script>

<template>
  <NuxtLink
    :to="$props.path"
    :target="$props.type === 'own' ? '' : '_blank'"
    rel="noopener"
    class="hover:opacity-60 group"
  >
    <h2 class="font-bold border-b border-zinc-500">{{ $props.title }}</h2>
    <div class="flex items-start mt-2">
      <div
        class="mr-2 bg-zinc-200 min-w-[5rem] h-20 flex items-center justify-center text-2xl"
      >
        <img
          v-if="$props.type === 'zenn'"
          src="/logo-zenn.svg"
          alt="zenn"
          class="w-5 h-auto"
        />
        <p v-else>{{ $props.icon }}</p>
      </div>
      <div class="w-full">
        <p v-if="$props.createdAt" class="text-xs flex items-center">
          <img src="/calendar.svg" alt="calendar" class="w-3" />
          <span class="ml-1">{{ $props.createdAt }}</span>
        </p>
        <p class="mt-1">{{ $props.description }}</p>
        <div class="flex justify-end mt-2">
          <text-link text="...続きを読む" />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
