<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "bg-zinc-900",
  },
});

const isShownNavigation = ref(false);

const hideNavigation = () => {
  isShownNavigation.value = false;
};

const showNavigation = () => {
  isShownNavigation.value = true;
};
</script>

<template>
  <div class="break-all h-full min-h-screen text-sm text-zinc-200">
    <div class="">
      <XNavigation
        :is-shown="isShownNavigation"
        @hide-navigation="hideNavigation"
      />
      <main class="">
        <XHeader @show-navigation="showNavigation" />
        <div
          class="h-screen overflow-x-scroll mx-auto sm:px-6 lg:px-8 px-4 max-w-7xl"
        >
          <div class="m-auto py-6">
            <slot />
          </div>
          <!-- <aside class="lg:w-3/12 lg:pl-4 mt-4 lg:mt-0">
                <Card>
                  <template #head>
                    <p>Follow me</p>
                  </template>
                  <template #body>
                    <ul>
                      <li class="flex items-center">
                        <img
                          src="/logo-gihub.png"
                          alt="github"
                          class="w-4 h-auto mr-1"
                        />
                        <text-link
                          text="github.com/kazuhe"
                          link="https://github.com/kazuhe"
                          :blank="true"
                        />
                      </li>
                      <li class="flex items-center mt-1">
                        <img
                          src="/logo-twitter.png"
                          alt="twitter"
                          class="w-4 h-auto mr-1"
                        />
                        <text-link
                          text="twitter.com/kazuhe__"
                          link="https://twitter.com/kazuhe__"
                          :blank="true"
                        />
                      </li>
                      <li class="flex items-center mt-1">
                        <img
                          src="/logo-zenn.svg"
                          alt="zenn"
                          class="w-4 h-auto mr-1"
                        />
                        <text-link
                          text="zenn.dev/kazuhe"
                          link="https://zenn.dev/kazuhe"
                          :blank="true"
                        />
                      </li>
                    </ul>
                  </template>
                </Card>
              </aside> -->
          <div>
            <global-footer />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
