<template>
  <div class="border border-zinc-00">
    <div
      v-if="$slots.head"
      class="bg-gradient-to-b from-zinc-200 to-zinc-300 px-2 py-1"
    >
      <slot name="head" />
    </div>
    <div class="p-2">
      <slot name="body" />
    </div>
  </div>
</template>
