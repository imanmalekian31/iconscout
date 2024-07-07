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

import { filters } from './constants';

const router = useRouter();
const layoutStore = useLayoutStore();
const filterStore = useFiltersStore();

const activeFilters = computed(() =>
  filters.filter((item) =>
    filterStore.filters.asset === 'lottie' ? item.name !== 'price' : true
  )
);

function updateLottieQuery(newVal: boolean) {
  router.push({ query: newVal ? { isDotLottie: String(newVal) } : {} });
}
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
      <SwitchGroup
        v-if="filterStore.filters.asset === 'lottie'"
        as="div"
        class="flex items-center py-5 px-6 border-b"
      >
        <SwitchLabel as="span" class="text-sm"> Dot Lottie </SwitchLabel>
        <Switch
          v-model="layoutStore.toggleDotLottie"
          :class="[
            layoutStore.toggleDotLottie ? 'bg-teal-500' : 'bg-blue-200',
            'relative inline-flex h-5 w-9 ml-auto flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none',
          ]"
          aria-label="Dot Lottie"
          @update:model-value="updateLottieQuery"
        >
          <span
            aria-hidden="true"
            :class="[
              layoutStore.toggleDotLottie ? 'translate-x-4' : 'translate-x-0',
              'pointer-events-none inline-block size-4 transform rounded-full bg-white shadow transition duration-200 ease-in-out',
            ]"
          />
        </Switch>
      </SwitchGroup>
      <div v-for="filter in activeFilters" :key="filter.name" class="border-b">
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
