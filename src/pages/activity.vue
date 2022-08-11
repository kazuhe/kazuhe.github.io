<script setup lang="ts">
// TODO: repo と PRID を受け取って fetch して、いい感じの配列で返す関数を作る
const { data: activity } = await useAsyncData("activity", () =>
  $fetch("https://api.github.com/repos/zenn-dev/zenn-editor/pulls/151")
);
</script>

<template>
  <div>
    <h2 class="font-bold border-b border-zinc-500 text-lg mb-4">
      GitHub Pulls
    </h2>
    <ul>
      <li class="first:mt-0 mt-4">
        <NuxtLink
          :to="activity.html_url"
          target="_blank"
          rel="noopener"
          class="block overflow-hidden lg:flex lg:items-center rounded border border-zinc-200"
        >
          <!-- OGP 画像とれない？ -->
          <img
            src="https://opengraph.githubassets.com/36b0755a7a4cd7069cfd64b5443a15bd179bc731e5b7d22d8f05acee1d72d41a/zenn-dev/zenn-editor/pull/151"
            alt="zenn-dev/zenn-editor/pull/151"
            class="lg:w-5/12"
          />

          <div class="lg:w-7/12 p-2">
            <h2 class="font-bold text-lg leading-6">{{ activity.title }}</h2>
            <p class="text-xs text-zinc-500 mt-2">
              {{ activity.body.substr(0, 150) + "..." }}
            </p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
