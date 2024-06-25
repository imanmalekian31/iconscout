<script setup lang="ts">
import type { AssetType } from '~/types';

interface Props {
  assetType: AssetType;
}
defineProps<Props>();
</script>

<template>
  <div class="endScroll">
    <p class="text-2xl font-bold">
      View all Limit
      {{
        {
          all: 'Design Assets',
          lottie: 'Animations',
          '3d': '3D Illustrations',
          illustration: 'Illustrations',
          icon: 'Icons',
        }[assetType]
      }}
    </p>
    <button
      type="button"
      class="flex items-center justify-center px-12 py-3 mt-4 rounded-xl text-lg font-semibold bg-blue-500 text-white hover:bg-blue-600"
    >
      Get Started - It's Free
    </button>
    <div class="text-lg mt-3">
      Already have an account?
      <NuxtLink class="text-blue-500" href="#">Log In</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.endScroll {
  @apply flex flex-col items-center justify-center w-full h-[25.125rem] absolute bottom-0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.9) 21.98%,
    rgba(255, 255, 255, 0.99) 100%
  );
}
</style>
