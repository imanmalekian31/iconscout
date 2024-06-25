<script setup lang="ts">
import { ArrowDownTrayIcon } from '@heroicons/vue/24/outline';
import { FolderPlusIcon } from '@heroicons/vue/24/solid';

import { downloadAssetAPI } from '~/apis/asset';
import type { Asset } from '~/types';

interface Props {
  asset: Asset & { hover: boolean };
}

defineProps<Props>();

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
  <article
    :class="[
      'relative',
      asset.asset === 'lottie' ? '!bg-white' : '!bg-gray-50',
      asset.asset === 'icon' ? 'iconArticle' : 'illustrateArticle',
    ]"
    :title="asset.name"
    @mouseenter="asset.hover = true"
    @mouseleave="asset.hover = false"
  >
    <template v-if="'thumb' in asset.urls">
      <video
        v-if="asset.asset === 'lottie'"
        :src="asset.urls.thumb"
        autoplay
        loop
        muted
      />
      <img v-else :alt="asset.name" loading="lazy" :src="asset.urls.thumb" />
    </template>
    <picture v-else>
      <source :srcset="getSrcSet(asset.urls)" type="image/png" />
      <img :alt="asset.name" loading="lazy" :srcset="getSrcSet(asset.urls)" />
    </picture>

    <template v-if="asset.hover">
      <button
        type="button"
        class="absolute z-10 right-3 top-3 bg-gray-75 border border-gary-100 text-gray-650 p-1.5 rounded-lg hover:bg-gray-100 focus:outline-none"
      >
        <FolderPlusIcon class="size-6" aria-hidden="true" />
      </button>

      <button
        type="button"
        class="absolute z-10 right-3 bottom-3 bg-gray-75 border border-gary-100 text-gray-650 p-1.5 rounded-lg hover:bg-gray-100 focus:outline-none"
        @click="downloadIcon(asset.uuid)"
      >
        <ArrowDownTrayIcon class="size-6" aria-hidden="true" />
      </button>

      <h2
        :class="[
          'absolute z-10 left-3 bottom-3 text-xs truncate text-gray-700',
          ['all', 'icon'].includes(asset.asset) ? 'max-w-16' : 'max-w-44',
        ]"
      >
        {{ asset.name }}
      </h2>
    </template>
  </article>
</template>

<style>
.iconArticle {
  @apply flex items-center justify-center min-w-[120px] md:min-w-[140px] min-h-[120px] md:min-h-[140px] relative;
  @apply rounded-lg;
  @apply bg-gray-50;
  @apply cursor-pointer;

  img {
    @apply transition-transform duration-200 ease-in-out;
  }

  &:hover {
    &::after {
      @apply absolute top-0 right-0 bottom-0 left-0;
      @apply rounded-lg;
      @apply bg-[#2e334c1a];
      @apply bg-auto bg-no-repeat;
      @apply content-[''];
    }

    img {
      @apply scale-110;
    }
  }
}

.illustrateArticle {
  @apply flex items-center justify-center h-[13.125rem] relative;
  @apply py-2 px-3;
  @apply rounded-lg;
  @apply bg-gray-50;
  @apply overflow-hidden;
  @apply cursor-pointer;

  picture,
  video {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  img {
    @apply max-h-full;
    @apply transition-transform duration-200 ease-in-out;
  }

  &:hover {
    &::after {
      @apply absolute top-0 right-0 bottom-0 left-0;
      @apply rounded-lg;
      @apply bg-[#2e334c1a];
      @apply bg-auto bg-no-repeat;
      @apply content-[''];
    }

    img {
      @apply scale-110;
    }
  }
}
</style>
