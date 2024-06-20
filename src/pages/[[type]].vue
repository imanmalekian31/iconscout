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
</script>

<template>
  <main>
    <FiltersInline />
    <div class="flex">
      <FiltersSidebar />
      <section class="h-screen">
        {{ $route.params.type }}
      </section>
    </div>
  </main>
</template>
