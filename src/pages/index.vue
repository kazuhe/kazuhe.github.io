<script setup lang="ts">
const { data: blogs } = await useAsyncData("blogs", () =>
  queryContent("blog").find()
);

const catsQuery = queryContent("blog");
</script>

<template>
  <div>
    <ul>
      <li v-for="blog in blogs" :key="blog._path" class="mt-3 hover:opacity-60">
        <NuxtLink :to="blog._path">
          <h2 class="font-bold border-b border-zinc-500">{{ blog.title }}</h2>
          <div class="flex items-start mt-2">
            <div
              v-if="blog.icon"
              class="mr-2 bg-zinc-200 min-w-[5rem] h-20 flex items-center justify-center text-2xl"
            >
              {{ blog.icon }}
            </div>
            <div class="w-auto">
              <p v-if="blog.created_at" class="text-xs flex items-center">
                <img src="/calendar.svg" alt="calendar" class="w-3" />
                <span class="ml-1">{{ blog.created_at }}</span>
              </p>
              <p class="mt-1">{{ blog.description }}</p>
              <div class="flex justify-end mt-2">
                <p
                  class="text-blue-500 text-xs border-b inline-block float-left"
                >
                  ...続きを読む
                </p>
              </div>
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
