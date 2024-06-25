<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <div class="flex items-center p-2 rounded-md shadow-sm bg-gray-100">
    <div class="border-r border-blue-200">
      <label for="resolution" class="sr-only">resolution</label>
      <select
        id="resolution"
        name="resolution"
        class="h-full border-0 focus:ring-0 bg-transparent py-1 pr-7 text-gray-900 focus:outline-none sm:text-sm"
      >
        <option>3D</option>
        <option>2D</option>
      </select>
    </div>
    <form class="flex items-center w-full ml-2">
      <div class="flex items-center w-full xl:w-auto">
        <MagnifyingGlassIcon class="size-5 text-gray-900" aria-hidden="true" />
        <input
          type="search"
          name="search"
          class="block w-full truncate bg-transparent border-0 py-1 text-gray-900 focus:ring-0 placeholder:text-gray-900 text-sm"
          placeholder="Search from 8 Million+ assets"
        />
      </div>
      <button
        type="submit"
        class="flex items-center justify-center size-8 rounded bg-gray-75 hover:bg-gray-150"
        aria-label="Search"
      >
        <SvgoReverseSearchPicture filled class="!mb-0 text-lg" />
      </button>
    </form>
  </div>
</template>
