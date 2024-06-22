<script setup lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Switch,
  SwitchGroup,
  SwitchLabel,
} from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/24/outline';

import type { SidebarOption } from '~/types';

const layoutStore = useLayoutStore();
const filterStore = useFiltersStore();

const filters: SidebarOption[] = [
  {
    name: 'asset',
    title: 'Asset Type',
    options: [
      { id: 'all', title: 'All Assets' },
      { id: 'lottie', title: 'Lottie Animations' },
      { id: '3d', title: '3D Illustrations' },
      { id: 'illustration', title: 'Illustrations' },
      { id: 'icon', title: 'Icons' },
    ],
  },
  {
    name: 'price',
    title: 'Price',
    options: [
      { id: 'free', title: 'Free' },
      { id: 'premium', title: 'Premium' },
      { id: 'all', title: 'All' },
    ],
  },
  {
    name: 'sort',
    title: 'Sort by',
    options: [
      { id: 'popular', title: 'Popular' },
      { id: 'latest', title: 'Recent' },
      { id: 'featured', title: 'Featured' },
      { id: 'relevant', title: 'Relevant' },
    ],
  },
];
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
      class="hidden lg:block min-w-[260px] border-r border-[#EBEDF5] h-[calc(100vh-190px)] xl:h-[calc(100vh-130px)] sticky top-[190px] xl:top-[130px] bg-white"
    >
      <SwitchGroup
        v-if="filterStore.filters.asset === 'lottie'"
        as="div"
        class="flex items-center py-5 px-6 border-b"
      >
        <SwitchLabel as="span" class="text-sm"> Dot Lottie </SwitchLabel>
        <Switch
          v-model="filterStore.filters.dotlottie"
          :class="[
            filterStore.filters.dotlottie ? 'bg-[#24A8AF]' : 'bg-[#B4BAD6]',
            'relative inline-flex h-5 w-9 ml-auto flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none',
          ]"
        >
          <span
            aria-hidden="true"
            :class="[
              filterStore.filters.dotlottie ? 'translate-x-4' : 'translate-x-0',
              'pointer-events-none inline-block size-4 transform rounded-full bg-white shadow transition duration-200 ease-in-out',
            ]"
          />
        </Switch>
      </SwitchGroup>
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
              <DisclosurePanel>
                <div
                  v-for="option in filter.options"
                  :key="option.id"
                  class="flex items-center mx-6 mb-3"
                >
                  <input
                    v-model="filterStore.filters[filter.name]"
                    :id="option.id"
                    :name="filter.name"
                    :value="option.id"
                    type="radio"
                    class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    :for="option.id"
                    class="ml-3 block text-sm font-medium leading-6 text-gray-900 cursor-pointer"
                  >
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
