<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { isZennContent } from "@/domain/blog/";
import { formatDate } from "@/domain/date/";
import logoZenn from "/logo-zenn.svg";

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
  <a
    class="block rounded bg-zinc-800 p-6"
    :href="props.path"
    target="_blank"
    rel="noopener"
  >
    <div
      class="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-50"
    >
      <img
        v-if="isZennContent(props.type)"
        :src="logoZenn"
        alt="zenn"
        class="w-6"
      />
      <template v-else>else</template>
    </div>
    <h2 class="mt-3 font-bold">{{ props.title }}</h2>
    <p class="mt-2 flex items-center text-sm text-zinc-400">
      <span class="mr-1"
        ><icon
          icon="material-symbols:calendar-month-outline-rounded"
          class="text-zinc-400"
          :width="16"
          :height="16" /></span
      >{{ formatDate(props.createdAt) }}
    </p>
  </a>
</template>
