<script setup lang="ts">
const filterStore = useFiltersStore();
const { observer } = useInfiniteScroll(loadMore);

function loadMore() {
  filterStore.fetchNextPage();
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
      :class="[
        ['icon', 'all'].includes(filterStore.filters.asset)
          ? 'min-w-[120px] md:min-w-[140px] min-h-[120px] md:min-h-[140px]'
          : 'h-[13.125rem]',
        'animate-pulse rounded-lg !bg-gray-200',
      ]"
    />

    <AssetsCard
      v-for="asset in filterStore.assets.data"
      :key="asset.id"
      :asset="asset"
    />
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

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
}

.illustrationContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 0.75rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
}
</style>
