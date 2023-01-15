<script setup lang="ts">
type Props = {
  title: string;
  description: string;
  path: string;
  createdAt: string;
  icon: string;
  type: string;
};

const props = defineProps<Props>();
</script>

<template>
  <div class="rounded bg-zinc-800 p-3">
    <h2>{{ props.title }}</h2>
  </div>
</template>
