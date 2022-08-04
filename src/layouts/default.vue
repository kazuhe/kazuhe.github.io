<template>
  <div class="break-all font-mono bg-zinc-100 h-full min-h-screen text-sm">
    <div
      class="bg-zinc-50 border-x border-zinc-200 h-full min-h-screen w-[1000px] m-auto"
    >
      <header class="w-full">
        <div>FOO</div>
        <HeaderNavigation />
      </header>
      <div class="flex p-4">
        <section class="w-8/12">
          <slot />
        </section>
        <aside class="w-4/12 pl-5">
          <Card>
            <template #head>
              <p>Follow me</p>
            </template>
            <template #body>
              <ul>
                <li>
                  <NuxtLink
                    to="https://github.com/kazuhe"
                    target="_blank"
                    rel="noopener"
                    class="flex items-center text-xs"
                    ><img
                      src="/logo-gihub.png"
                      alt="github"
                      class="w-4 h-auto mr-1"
                    />github.com/kazuhe</NuxtLink
                  >
                </li>
                <li class="mt-2">
                  <NuxtLink
                    to="https://twitter.com/kazuhe__"
                    target="_blank"
                    rel="noopener"
                    class="flex items-center text-xs"
                    ><img
                      src="/logo-twitter.png"
                      alt="twitter"
                      class="w-4 h-auto mr-1"
                    />twitter.com/kazuhe__</NuxtLink
                  >
                </li>
                <li class="mt-2">
                  <NuxtLink
                    to="https://zenn.dev/kazuhe"
                    target="_blank"
                    rel="noopener"
                    class="flex items-center text-xs"
                    ><img
                      src="/logo-zenn.svg"
                      alt="zenn"
                      class="w-4 h-auto mr-1"
                    />zenn.dev/kazuhe</NuxtLink
                  >
                </li>
              </ul>
            </template>
          </Card>
        </aside>
      </div>
    </div>
  </div>
</template>
