<script setup lang="ts">
const filterStore = useFiltersStore();
</script>

<template>
  <div class="py-8 px-6 bg-gray-50">
    <h1 class="text-2xl xl:text-4xl font-bold mb-1">
      {{ filterStore.totalAssets.toLocaleString() }} Limit
      {{
        {
          all: 'Design Assets',
          lottie: 'Animations',
          '3d': '3D Illustrations',
          illustration: 'Illustrations',
          icon: 'Icons',
        }[filterStore.filters.asset]
      }}
    </h1>
    <div class="text-sm text-[#5A607D] truncate">
      {{ filterStore.totalAssets.toLocaleString() }}
      {{ ['all', 'icon'].includes(filterStore.filters.asset) ? '2D' : '3D' }}s
      exclusively selected by our designer community.
    </div>
  </div>
</template>
