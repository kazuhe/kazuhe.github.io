<script setup lang="ts">
type Props = {
  text: string;
};

withDefaults(defineProps<Props>(), {
  text: "",
});
</script>

<template>
  <span
    class="text-xs text-indigo-700 text-xs border-indigo-700 hover:border-b group-hover:border-b"
    >{{ $props.text }}</span
  >
</template>
