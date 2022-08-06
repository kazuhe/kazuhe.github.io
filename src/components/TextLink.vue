<script setup lang="ts">
type Props = {
  text: string;
  link: string;
  blank?: boolean;
};

withDefaults(defineProps<Props>(), {
  text: "",
  link: "",
  blank: false,
});
</script>

<template>
  <NuxtLink
    :to="$props.link"
    :target="$props.blank ? '_blank' : ''"
    rel="noopener"
    class="leading-none"
  >
    <span
      class="text-xs text-indigo-700 text-xs border-indigo-700 hover:border-b group-hover:border-b"
      >{{ $props.text }}</span
    >
  </NuxtLink>
</template>
