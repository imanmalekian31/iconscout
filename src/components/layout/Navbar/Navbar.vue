<script setup lang="ts">
import {
  ArrowLeftEndOnRectangleIcon,
  Bars3Icon,
  ChevronDownIcon,
} from '@heroicons/vue/24/outline';
</script>

<template>
  <header class="sticky top-0 z-30 bg-white">
    <nav class="shadow-lg py-4 px-6">
      <ul class="flex items-center my-0 w-full list-none p-0">
        <li class="lg:hidden mr-4">
          <button
            class="w-10 h-10 rounded-full flex items-center justify-center text-lg border border-gray-200 bg-transparent"
          >
            <div class="sr-only">Toggle Navbar</div>
            <Bars3Icon class="w-5 h-5" aria-hidden="true" />
          </button>
        </li>
        <li class="mr-4">
          <NuxtLink to="/">
            <img src="/images/logo.svg" alt="logo" class="w-48 h-11" />
          </NuxtLink>
        </li>
        <li class="hidden xl:block mx-4">
          <LayoutNavbarSearchInput />
        </li>
        <li class="hidden lg:flex space-x-4 pl-3">
          <button
            class="text-gray-800 font-semibold border-none bg-none hover:text-blue-600"
          >
            Explore
            <ChevronDownIcon class="size-4 inline" aria-hidden="true" />
          </button>
          <button
            class="text-gray-800 font-semibold border-none bg-none hover:text-blue-600"
          >
            Tools
            <ChevronDownIcon class="size-4 inline" aria-hidden="true" />
          </button>
          <button
            class="text-gray-800 font-semibold border-none bg-none hover:text-blue-600"
          >
            All Features
          </button>
          <button
            class="text-gray-800 font-semibold border-none bg-none hover:text-blue-600"
          >
            <img
              src="/images/gift.svg"
              class="inline size-6"
              loading="lazy"
              alt="gift"
            />
            Free Asset
          </button>
          <button
            class="text-gray-800 font-semibold border-none bg-none hover:text-blue-600"
          >
            Learn
            <ChevronDownIcon class="size-4 inline" aria-hidden="true" />
          </button>
        </li>
        <li class="ml-auto flex space-x-3">
          <button
            class="hidden md:block rounded-full border border-gray-200 px-4 py-2"
          >
            Login
          </button>
          <button
            class="size-10 md:w-auto md:h-auto rounded-full flex items-center justify-center px-4 py-2 bg-blue-500 text-white"
            aria-label="Signup"
          >
            <span class="md:hidden flex items-center">
              <ArrowLeftEndOnRectangleIcon
                class="size-5 inline"
                aria-hidden="true"
              />
            </span>
            <span class="hidden md:block"> Signup </span>
          </button>
        </li>
      </ul>
      <LayoutNavbarSearchInput class="block xl:hidden mt-4" />
    </nav>
  </header>
</template>

<style scoped>
@media (min-width: 768px) {
  .signup {
    @apply w-auto h-auto rounded-full;
  }
}
</style>
