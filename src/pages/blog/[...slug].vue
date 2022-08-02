<script setup lang="ts">
// const { data: article } = useAsyncData("article", () =>
//   queryContent(useRoute().path).findOne()
// );
</script>

<template>
  <div>
    <p>{{ $route.params.slug }}</p>
    <!-- <pre>{{ article }}</pre> -->
    <ContentDoc>
      <template #not-found>
        <h1>Document not found</h1>
        <p>404</p>
      </template>
    </ContentDoc>
  </div>
</template>
