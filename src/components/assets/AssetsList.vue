<script setup lang="ts">
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';

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
    <template v-if="!filterStore.assetsList.length">
      <article v-for="i in 42" :key="i" class="animate-pulse !bg-gray-200" />
    </template>

    <article
      v-else
      v-for="assetItem in filterStore.assetsList"
      :key="assetItem.id"
      :class="
        filterStore.filters.asset === 'lottie' ? '!bg-white' : '!bg-[#FAFAFC]'
      "
    >
      <picture v-if="filterStore.filters.asset !== 'lottie'">
        <source :srcset="getSrcSet(assetItem.urls)" type="image/png" />
        <img
          :alt="assetItem.slug"
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
        <Vue3Lottie v-else :animationLink="assetItem.urls.original" />
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
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 140px;
    min-height: 140px;
    border-radius: 0.5rem;
    background-color: #fafafc;
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
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 13.125rem;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    background-color: #fafafc;
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
