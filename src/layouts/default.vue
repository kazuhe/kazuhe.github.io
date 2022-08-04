<template>
  <div class="break-all bg-zinc-100 h-full min-h-screen text-sm text-zinc-800">
    <div
      class="bg-zinc-50 border-x border-zinc-200 h-full min-h-screen w-[1000px] m-auto"
    >
      <header class="w-full">
        <div>
          <div class="flex items-center p-3">
            <img
              src="/icon.png"
              alt="kazuhe"
              class="rounded-full border border-zinc-200 w-12 h-auto mr-2"
            />
            <div>
              <h1 class="font-bold text-lg leading-none">kazuhe</h1>
              <p class="text-xs">Junior Web Developer</p>
            </div>
          </div>
        </div>
        <HeaderNavigation />
      </header>
      <div class="flex p-4">
        <section class="w-9/12">
          <slot />
        </section>
        <aside class="w-3/12 pl-4">
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
                    class="inline-flex items-center"
                    ><img
                      src="/logo-gihub.png"
                      alt="github"
                      class="w-4 h-auto mr-1"
                    />
                    <text-link text="github.com/kazuhe" />
                  </NuxtLink>
                </li>
                <li class="mt-1">
                  <NuxtLink
                    to="https://twitter.com/kazuhe__"
                    target="_blank"
                    rel="noopener"
                    class="inline-flex items-center"
                    ><img
                      src="/logo-twitter.png"
                      alt="twitter"
                      class="w-4 h-auto mr-1"
                    />
                    <text-link text="twitter.com/kazuhe__" />
                  </NuxtLink>
                </li>
                <li class="mt-1">
                  <NuxtLink
                    to="https://zenn.dev/kazuhe"
                    target="_blank"
                    rel="noopener"
                    class="inline-flex items-center"
                    ><img
                      src="/logo-zenn.svg"
                      alt="zenn"
                      class="w-4 h-auto mr-1"
                    />
                    <text-link text="zenn.dev/kazuhe" />
                  </NuxtLink>
                </li>
              </ul>
            </template>
          </Card>
        </aside>
      </div>
      <div>
        <global-footer />
      </div>
    </div>
  </div>
</template>
