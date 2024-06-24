<script setup lang="ts">
const filterStore = useFiltersStore();

const titles = {
  all: 'Design Assets',
  lottie: 'Animations',
  '3d': '3D Illustrations',
  illustration: 'Illustrations',
  icon: 'Icons',
};

function pageTitle() {
  return `${titles[filterStore.filters.asset]} | IconScout`;
}

function pageDescription() {
  return `Free Download ${filterStore.assets.count.toLocaleString()} Business Target Vector Icons for commercial and personal use in Canva, Figma, Adobe XD, After Effects, Sketch & more. Available in line, flat, gradient, isometric, glyph, sticker & more design styles.`;
}

useSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  description: pageDescription,
  ogDescription: pageDescription,
  ogImage: 'https://iconscout-iman.vercel.app/images/og.png',
});
</script>

<template>
  <AssetsInfo />
  <main>
    <FiltersInline />
    <div class="flex">
      <FiltersSidebar />
      <div
        :class="[
          'flex flex-col w-full',
          { 'bg-white': filterStore.filters.asset !== 'lottie' },
        ]"
      >
        <AssetsList />
      </div>
    </div>
  </main>
</template>
