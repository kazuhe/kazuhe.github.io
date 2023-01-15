<script setup lang="ts">
import { Icon } from "@iconify/vue";
import iconImg from "/icon.png";
</script>

<template>
  <header
    class="fixed top-0 flex w-full items-center justify-between border-b border-zinc-700 bg-zinc-900 px-6"
  >
    <div class="flex items-center">
      <img class="w-5 rounded" :src="iconImg" alt="kazuhe" />
      <h1 class="ml-2 text-sm">kazuhe.github.io</h1>
    </div>
    <ul class="flex items-center space-x-3">
      <li>
        <a href="https://twitter.com/kazuhe__" target="_blank" rel="noopener">
          <icon
            icon="line-md:twitter"
            class="text-zinc-200"
            :width="26"
            :height="26"
          />
        </a>
      </li>
      <li>
        <a href="https://github.com/kazuhe" target="_blank" rel="noopener">
          <icon
            icon="line-md:github-loop"
            class="text-zinc-200"
            :width="24"
            :height="24"
          />
        </a>
      </li>
    </ul>
  </header>
</template>
