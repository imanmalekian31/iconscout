<script setup lang="ts">
import {
  AdjustmentsHorizontalIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';

import { TABS } from './constants';

const layoutStore = useLayoutStore();
const filterStore = useFiltersStore();
const route = useRoute();

watch(
  route,
  (newVal) => {
    if (newVal.name === 'type') {
      filterStore.filters.asset =
        TABS.find((tab) => tab.path === newVal.params.type)?.id || 'all';
    }
  },
  { deep: true, immediate: true }
);
</script>

<template>
  <div
    class="bg-gray-50 border-b border-gray-100 z-30 sticky top-[140px] xl:top-20 px-6 hidden lg:block"
  >
    <div class="flex items-center">
      <div
        :class="[
          'flex justify-between flex-grow mr-6 border-r border-gray-100 cursor-pointer',
          layoutStore.toggleSidebar ? 'max-w-[236px]' : 'max-w-[120px]',
        ]"
        @click="layoutStore.toggleSidebar = !layoutStore.toggleSidebar"
      >
        <button class="font-semibold py-3">
          <AdjustmentsHorizontalIcon class="size-6 inline" />
          Filters
        </button>
        <button
          v-if="layoutStore.toggleSidebar"
          aria-label="Close sidebar"
          class="mr-5"
        >
          <XMarkIcon class="size-5" />
        </button>
      </div>
      <ul class="flex space-x-6 list-none p-0 mb-0">
        <template v-for="tab in TABS" :key="tab.path">
          <li class="tabListItem">
            <NuxtLink
              :to="{
                name: 'type',
                params: { type: tab.path },
                query: { ...route.query },
              }"
            >
              {{ tab.name }}
            </NuxtLink>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.tabListItem {
  @apply font-semibold;

  a {
    @apply text-blue-600 pb-3.5;

    &.router-link-active {
      @apply text-black border-b-2 border-black;
    }
  }
}
</style>
