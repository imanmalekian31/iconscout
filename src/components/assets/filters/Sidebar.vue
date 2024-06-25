<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/24/outline';

import { filters } from './constants';

const layoutStore = useLayoutStore();
const filterStore = useFiltersStore();
</script>

<template>
  <Transition
    enter-active-class="transform transition ease-in-out duration-500 sm:duration-700"
    enter-from-class="-translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transform transition ease-in-out duration-500 sm:duration-700"
    leave-from-class="translate-x-0"
    leave-to-class="-translate-x-full"
  >
    <div
      v-show="layoutStore.toggleSidebar"
      class="hidden lg:block min-w-[260px] border-r border-gray-100 h-[calc(100vh-190px)] xl:h-[calc(100vh-130px)] sticky top-[190px] xl:top-[130px] bg-white"
    >
      <div v-for="filter in filters" :key="filter.name" class="border-b">
        <ClientOnly>
          <Disclosure defaultOpen v-slot="{ open }">
            <DisclosureButton
              class="flex items-center justify-between py-5 px-6 w-full"
            >
              {{ filter.title }}
              <ChevronDownIcon
                :class="[
                  'size-5',
                  open
                    ? 'rotate-180 transition-transform ease-linear'
                    : 'transition-transform ease-linear',
                ]"
              />
            </DisclosureButton>
            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-out"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <DisclosurePanel class="px-6 mb-5">
                <div
                  v-for="option in filter.options"
                  :key="`${filter.name}-${option.id}`"
                  class="i-radio mb-3"
                >
                  <input
                    v-model="filterStore.filters[filter.name]"
                    :id="`${filter.name}-${option.id}`"
                    :name="filter.name"
                    :value="option.id"
                    type="radio"
                  />
                  <label :for="`${filter.name}-${option.id}`">
                    {{ option.title }}
                  </label>
                </div>
              </DisclosurePanel>
            </transition>
          </Disclosure>
        </ClientOnly>
      </div>
    </div>
  </Transition>
</template>
