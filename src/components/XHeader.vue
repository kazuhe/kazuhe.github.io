<script setup lang="ts">
import { Icon } from "@iconify/vue";
// const emits = defineEmits<{
//   (event: "showNavigation"): void;
// }>();
</script>

<template>
  <header
    class="fixed top-0 flex w-full items-center justify-end border-b border-zinc-700 bg-zinc-900 px-3"
  >
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
