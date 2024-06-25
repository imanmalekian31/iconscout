<script setup>
import { HeartIcon, LockClosedIcon } from '@heroicons/vue/24/solid';

const footerLinks = [
  {
    title: 'Graphic Resources',
    list: [
      'Free Icons',
      'Free Emoji Icons',
      'Free Logo Icons',
      'iOS Icons',
      'Sticker Icons',
      'Gradient Icons',
      'Curated Bundle',
      'Calendar of Festival',
      'Free Assets of the day',
      'Explore Design Assets',
    ],
  },
  {
    title: 'Products',
    list: [
      'Unicon Icon Font',
      'Color editor',
      'Apps & Plugins',
      'Hire designers',
      'IconScout API',
      'Top Illustrations',
      'Top 3D Assets',
      'Reverse Image Search',
      'Unicon Plugin for Figma',
    ],
  },
  {
    title: 'Company',
    list: [
      'Blog',
      'About',
      'Access features',
      'Sell on IconScout',
      'Startup program',
      "We're hiring",
    ],
  },
  {
    title: 'Legal',
    list: [
      'Terms of use',
      'Privacy policy',
      'License agreement',
      'Contributor terms',
      'Support center',
      'Join discord community',
    ],
  },
];
</script>

<template>
  <footer class="bg-gray-100">
    <div class="lg:container mx-auto px-3">
      <div
        class="flex flex-wrap justify-center md:justify-between items-center py-12 border-b border-gray-300"
      >
        <div class="flex items-center text-black">
          <NuxtLink to="/">
            <SvgoLogo filled class="!mb-0 !w-48 !h-11" />
          </NuxtLink>
          <span class="ml-4 text-base">Design Resource Marketplace</span>
        </div>
        <p class="text-base text-black text-center mt-4 md:mt-0">
          <span class="text-blue-600">9,126,617</span>
          graphic resources & counting
        </p>
      </div>
      <div class="py-6">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6"
        >
          <div v-for="col in footerLinks" class="px-3" :key="col.title">
            <h2 class="font-bold mb-2 text-gray-900">{{ col.title }}</h2>
            <ul class="list-none p-0 text-gray-800">
              <li v-for="list in col.list" :key="list" class="mb-2">
                <a href="#" rel="nofollow noopener" target="_blank">
                  {{ list }}
                </a>
              </li>
            </ul>
          </div>
          <div class="col-span-full lg:col-span-2 px-3">
            <h2 class="font-bold mb-3">Get IconScout for desktop</h2>
            <div
              class="inline-flex divide-x divide-gray-150 border border-gray-150"
            >
              <a
                href="https://iconscout.com/desktop-app/for-mac"
                rel="nofollow noopener"
                target="_blank"
                class="flex items-center justify-center px-4 py-2.5 text-xl"
              >
                <SvgoApple class="text-gray-650 !mb-0" />
              </a>
              <a
                href="https://iconscout.com/desktop-app/for-windows"
                rel="nofollow noopener"
                target="_blank"
                class="flex items-center justify-center px-4 py-2.5 text-xl"
              >
                <SvgoWindow class="text-gray-650 !mb-0" />
              </a>
            </div>
            <h2 class="font-bold mt-6 mb-3">Get LottieFiles mobile app</h2>
            <div class="flex space-x-3">
              <a
                href="https://lottiefiles.com/ios"
                rel="nofollow noopener"
                target="_blank"
              >
                <img
                  src="/images/app-store.png"
                  width="120"
                  height="40"
                  alt="App Store"
                />
              </a>
              <a
                href="https://lottiefiles.com/android"
                rel="nofollow noopener"
                target="_blank"
              >
                <img
                  src="/images/play-store.png"
                  width="130"
                  height="40"
                  alt="Google Play Store"
                />
              </a>
            </div>
            <h2 class="font-bold mt-5 mb-3">Follow us</h2>
            <div
              class="inline-flex divide-x divide-gray-150 border border-gray-150"
            >
              <a
                href="https://www.facebook.com/iconscout"
                rel="nofollow noopener"
                target="_blank"
                class="p-2.5 flex items-center justify-center"
              >
                <SvgoFacebook class="text-gray-650 !mb-0" />
              </a>
              <a
                href="https://www.instagram.com/iconscout"
                rel="nofollow noopener"
                target="_blank"
                class="p-2.5 flex items-center justify-center"
              >
                <SvgoInstagram class="text-gray-650 !mb-0" />
              </a>
              <a
                href="https://twitter.com/iconscout"
                rel="nofollow noopener"
                target="_blank"
                class="p-2.5 flex items-center justify-center"
              >
                <SvgoTwitter class="text-gray-650 !mb-0" />
              </a>
              <a
                href="https://www.linkedin.com/company/iconscout"
                rel="nofollow noopener"
                target="_blank"
                class="p-2.5 flex items-center justify-center"
              >
                <SvgoLinkedin class="text-gray-650 !mb-0" />
              </a>
              <a
                href="https://dribbble.com/iconscout"
                rel="nofollow noopener"
                target="_blank"
                class="p-2.5 flex items-center justify-center"
              >
                <SvgoDeribbble class="text-gray-650 !mb-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-150 text-gray-800 py-6">
      <div class="container mx-auto flex justify-between items-center">
        <p class="text-sm mb-0">
          &copy; {{ new Date().getFullYear() }} Design Barn Inc. Made with
          <HeartIcon class="size-4 inline text-red-700" /> in India
        </p>
        <div class="flex items-center">
          <div class="italic mr-4 text-sm flex items-center">
            <LockClosedIcon class="text-yellow-500 size-5 mr-1" />
            <span class="font-extralight"> Secure Payments </span>
          </div>
          <img src="/images/stripe.png" width="84" height="40" alt="Stripe" />
        </div>
      </div>
    </div>
  </footer>
</template>
