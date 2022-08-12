<script setup lang="ts">
type Props = {
  tag: "h1" | "h2" | "h3" | "h4";
};

withDefaults(defineProps<Props>(), {
  tag: "h2",
});

const styles = {
  h1: ["text-3xl font-bold border-b pb-3"],
  h2: ["text-2xl font-bold border-b pb-3"],
  h3: ["text-xl font-bold"],
};
</script>

<template>
  <component :is="$props.tag" :class="styles[$props.tag]"><slot /></component>
</template>
