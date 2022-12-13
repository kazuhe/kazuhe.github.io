<template>
  <div class="mb-4">
    <ContentDoc v-slot="{ doc }">
      <Head>
        <Title>{{ doc.title }}</Title>
        <Meta name="description" :content="doc.description" />
        <Meta name="og:title" :content="doc.title" />
        <Meta name="og:description" :content="doc.description" />
      </Head>
      <ContentRenderer class="markdown-body" :value="doc" />
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
