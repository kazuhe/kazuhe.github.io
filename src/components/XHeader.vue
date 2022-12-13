<script setup lang="ts">
const emits = defineEmits<{
  (event: "showNavigation"): void;
}>();
</script>

<template>
  <header
    class="h-12 border-b border-zinc-700 px-3 flex justify-between items-center"
  >
    <div @click="emits('showNavigation')">
      <Icon name="grommet-icons:menu" size="24" />
    </div>
    <ul class="flex items-center">
      <li class="col-start-4">
        <NuxtLink to="https://github.com/kazuhe" target="_blank" rel="noopener">
          <Icon name="grommet-icons:github" size="24" />
        </NuxtLink>
      </li>
      <li class="ml-3 pt-0.5">
        <NuxtLink
          to="https://twitter.com/kazuhe__"
          target="_blank"
          rel="noopener"
        >
          <Icon name="grommet-icons:twitter" size="24" />
        </NuxtLink>
      </li>
    </ul>
  </header>
</template>
