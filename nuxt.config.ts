// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: './src',
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@nuxt/eslint', '@pinia/nuxt', 'nuxt-svgo', '@nuxtjs/sitemap'],
  runtimeConfig: {
    public: {
      apiBase: '',
      iconscoutClientId: '',
      iconscoutClientSecret: '',
    },
  },

  sitemap: {
    urls: [
      '',
      '/3d-illustrations',
      '/animations',
      '/illustrations',
      '/icons',
    ].map((path) => ({
      loc: path,
      changefreq: 'daily',
    })),
  },
});
