<script setup lang="ts">
import { fetchPulls } from "@/infrastructures/activity/github";

const { data: activities } = await useAsyncData("activities", () =>
  fetchPulls()
);
</script>

<template>
  <div>
    <base-heading tag="h1">Activity</base-heading>
    <p class="mt-3">私の Activity を雑にまとめる</p>
    <base-heading tag="h2" class="mt-4">GitHub Pulls</base-heading>
    <ul class="mt-4">
      <li
        v-for="activity in activities"
        :key="activity.createdAt"
        class="first:mt-0 mt-4"
      >
        <NuxtLink
          v-if="activity !== undefined"
          :to="activity.url"
          target="_blank"
          rel="noopener"
          class="block border border-zinc-200 p-4"
        >
          <div class="flex items-center">
            <img src="/logo-gihub.png" alt="gihub" class="w-3 h-auto mr-1" />
            <p class="text-zinc-500 text-xs">{{ activity.repo }}</p>
          </div>
          <h2 class="text-lg leading-6 mt-2">
            <span class="text-zinc-500 mr-2">#{{ activity.number }}</span>
            <span class="font-bold">{{ activity.title }}</span>
          </h2>
          <p class="text-xs text-zinc-500 mt-2">
            {{ activity.description }}
          </p>
          <div class="flex items-center mt-2">
            <img
              src="/icon.png"
              alt="kazuhe"
              class="rounded-full border border-zinc-200 w-4 h-auto mr-1"
            />
            <div class="text-xs leading-none">
              <span class="font-bold mr-1">kazuhe</span>
              <span class="text-zinc-500">{{ activity.createdAt }}</span>
            </div>
          </div>
        </NuxtLink>
        <p v-else>...コンテンツを取得できませんでした</p>
      </li>
    </ul>
  </div>
</template>
