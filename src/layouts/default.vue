<template>
  <div class="font-mono bg-zinc-100 h-screen text-sm">
    <div class="bg-zinc-50 border-x border-zinc-200 h-screen w-[1000px] m-auto">
      <header class="w-full">
        <div>FOO</div>
        <HeaderNavigation />
      </header>
      Some default layout shared across all pages
      <slot />
    </div>
  </div>
</template>
