<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/24/outline';

const layoutStore = useLayoutStore();

const filters = [
  {
    name: 'assetType',
    title: 'Asset Type',
    options: [
      { id: 'all', title: 'All Assets' },
      { id: 'lottie', title: 'Lottie Animations' },
      { id: '3d', title: '3D Illustrations' },
      { id: '3d-illustrations', title: 'Illustrations' },
      { id: 'assetType', title: 'Icons' },
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
    name: 'sortBy',
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
      class="hidden lg:block w-[260px] border-r border-[#EBEDF5] h-[calc(100vh-130px)] sticky top-[190px] xl:top-[130px]"
    >
      <div v-for="filter in filters" :key="filter.name" class="border-b">
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
                  :id="option.id"
                  name="asset-type"
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
      </div>
    </div>
  </Transition>
</template>
