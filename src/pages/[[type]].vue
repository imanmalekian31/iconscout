<script setup lang="ts">
useHead({
  title: 'Shape Design Assets - Free in SVG, PNG, BLEND, GIF | IconScout',
  meta: [
    {
      name: 'description',
      content:
        'Download 304939 high-quality Shape design assets - 3D Illustrations, Lottie Animations, Vector Icons and Illustrations. Available for free or premium at IconScout.',
    },
  ],
});

const filterStore = useFiltersStore();
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
