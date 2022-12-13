<template>
  <div class="mb-4">
    <ContentDoc v-slot="{ doc }">
      <Head>
        <Title>{{ doc.icon }} {{ doc.title }}</Title>
        <Meta name="description" :content="doc.description" />
        <Meta name="og:title" :content="doc.icon + doc.title" />
        <Meta name="og:description" :content="doc.description" />
      </Head>
      <base-heading tag="h1" class="mb-3"
        >{{ doc.icon }} {{ doc.title }}</base-heading
      >
      <div class="border-b-2 text-zinc-400 text-xs pb-4 mb-4">
        <p class="mb-2">
          <span class="font-bold">Created at</span>
          <span class="border-b ml-1">{{ doc.created_at }}</span>
        </p>
        <p>
          <span class="font-bold">Tags</span>
          <span
            v-for="(tag, i) in doc.tags"
            :key="i"
            class="bg-zinc-200 border-b px-1 py-0.5 mx-1 rounded leading-none"
            >{{ tag }}</span
          >
        </p>
      </div>
      <ContentRenderer class="markdown-body bg-zinc-900" :value="doc" />
    </ContentDoc>
  </div>
</template>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .markdown-body {
    @apply bg-zinc-900;

    table tr {
      @apply bg-zinc-900;
    }
  }
}
</style>
