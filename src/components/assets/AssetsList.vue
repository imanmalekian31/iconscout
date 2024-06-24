<script setup lang="ts">
import { ArrowDownTrayIcon } from '@heroicons/vue/24/outline';
import { FolderPlusIcon } from '@heroicons/vue/24/solid';
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
import { Vue3Lottie } from 'vue3-lottie';

import { downloadAssetAPI } from '~/apis/asset';
import type { Asset } from '~/types';

const layoutStore = useLayoutStore();
const filterStore = useFiltersStore();
const { observer } = useInfiniteScroll(loadMore);

function loadMore() {
  filterStore.fetchNextPage();
}

function getSrcSet(urls: Asset['urls']) {
  return Object.values(urls)
    .map((value, idx) => `${value} ${idx + 1}x`)
    .join(', ');
}

function downloadIcon(uuid: string) {
  downloadAssetAPI(uuid, 'svg').then((data) => {
    const url = data.response.download.download_url;
    const link = document.createElement('a');
    link.href = url;
    link.download = url;
    link.click();
  });
}
</script>

<template>
  <section
    :class="[
      ['icon', 'all'].includes(filterStore.filters.asset)
        ? 'iconContainer'
        : 'illustrationContainer',
      'w-full p-5',
    ]"
  >
    <article
      v-if="!filterStore.assets.data.length"
      v-for="i in 42"
      :key="i"
      class="animate-pulse !bg-gray-200"
    />

    <article
      v-else
      v-for="assetItem in filterStore.assets.data"
      :key="assetItem.id"
      :class="[
        'relative',
        filterStore.filters.asset === 'lottie' ? '!bg-white' : '!bg-gray-50',
      ]"
      :title="assetItem.name"
      @mouseenter="assetItem.hover = true"
      @mouseleave="assetItem.hover = false"
    >
      <picture v-if="filterStore.filters.asset !== 'lottie'">
        <source :srcset="getSrcSet(assetItem.urls)" type="image/png" />
        <img
          :alt="assetItem.name"
          loading="lazy"
          :srcset="getSrcSet(assetItem.urls)"
        />
      </picture>

      <template v-else-if="'original' in assetItem.urls">
        <DotLottieVue
          v-if="layoutStore.toggleDotLottie"
          style="height: 500px; width: 500px"
          autoplay
          loop
          :src="assetItem.urls.original"
        />
        <ClientOnly v-else>
          <Vue3Lottie :animationLink="assetItem.urls.original" />
        </ClientOnly>
      </template>

      <template v-if="assetItem.hover">
        <button
          type="button"
          class="absolute z-10 right-3 top-3 bg-gray-75 border border-gary-100 text-gray-650 p-1.5 rounded-lg hover:bg-gray-100 focus:outline-none"
        >
          <FolderPlusIcon class="size-6" aria-hidden="true" />
        </button>

        <button
          type="button"
          class="absolute z-10 right-3 bottom-3 bg-gray-75 border border-gary-100 text-gray-650 p-1.5 rounded-lg hover:bg-gray-100 focus:outline-none"
          @click="downloadIcon(assetItem.uuid)"
        >
          <ArrowDownTrayIcon class="size-6" aria-hidden="true" />
        </button>

        <h2
          :class="[
            'absolute z-10 left-3 bottom-3 text-xs truncate text-gray-700',
            ['all', 'icon'].includes(filterStore.filters.asset)
              ? 'max-w-16'
              : 'max-w-44',
          ]"
        >
          {{ assetItem.name }}
        </h2>
      </template>
    </article>
  </section>
  <div class="flex items-center justify-center my-10" ref="observer">
    <SvgoSpinner class="text-blue-500 animate-spin text-7xl" />
  </div>
</template>

<style scoped>
.iconContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 0.25rem;

  article {
    @apply bg-gray-50;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 140px;
    min-height: 140px;
    border-radius: 0.5rem;
    cursor: pointer;

    img {
      transition: transform 200ms ease-in-out;
    }

    &:hover {
      &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 0.5rem;
        background-color: #2e334c1a;
        background-size: 100px auto;
        background-repeat: no-repeat;
      }

      img {
        transform: scale(1.1);
      }
    }
  }

  article.animate-pulse {
    &:hover {
      &::after,
      img {
        transform: none !important;
        background-color: unset !important;
      }
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));

    article {
      min-width: 120px;
      min-height: 120px;
    }
  }
}

.illustrationContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 0.75rem;

  article {
    @apply bg-gray-50;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 13.125rem;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    overflow: hidden;
    cursor: pointer;

    picture,
    video {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;

      img {
        max-height: 100%;
        transition: transform 200ms ease-in-out;
      }
    }

    &:hover {
      &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 0.5rem;
        background-color: #2e334c1a;
        background-size: 100px auto;
        background-repeat: no-repeat;
      }

      img {
        transform: scale(1.1);
      }
    }
  }

  article.animate-pulse {
    &:hover {
      &::after,
      img {
        transform: none !important;
        background-color: unset !important;
      }
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
}
</style>
