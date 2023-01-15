<script setup lang="ts">
import blogs from "../json/feed-zenn.json";
import XCard from "./components/XCard.vue";
import XHeader from "./components/XHeader.vue";
</script>

<template>
  <x-header class="h-12" />
  <main class="mt-12 p-6">
    <ul class="space-y-6">
      <li v-for="blog in blogs" :key="blog.path" class="">
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
