// import { generateSitemap } from "./sitemap";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Clint Losee",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Clint Losee is a Frontend Developer specialized in Vue.js and Nuxt.js based in the Salt Lake Valley area.",
        },
        {
          hid: "author",
          name: "author",
          content: "Clint Losee",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Clint Losee",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Clint Losee is a Frontend Developer specializing in Vue.js and Nuxt.js based in the Salt Lake Valley area.",
        },
        // {
        //   hid: "og:image",
        //   property: "og:image",
        //   content: "",
        // },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://clintlosee.dev",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:site",
          name: "twitter:site",
          content: "@clintlosee",
        },
        {
          hid: "twitter:creator",
          name: "twitter:creator",
          content: "@clintlosee",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Clint Losee",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Clint Losee is a Frontend Developer specialized in Vue.js and Nuxt.js based in the Salt Lake Valley area.",
        },
        // {
        //   hid: "twitter:image",
        //   name: "twitter:image",
        //   content: "",
        // },
        // {
        //   hid: "twitter:image:alt",
        //   name: "twitter:image:alt",
        //   content: "Clint Losee",
        // },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-32x32.png",
        },
        // {
        //   rel: "canonical",
        //   href: "https://clintlosee.dev",
        // },
      ],
      script: [
        {
          src: "https://kit.fontawesome.com/27ec220848.js",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  compatibilityDate: '2025-01-13',
  devtools: { enabled: true },
  modules: [
    'bootstrap-vue-3/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/color-mode',
    '@nuxt/ui'
  ],
  css: [
    "bootstrap/dist/css/bootstrap.css",
    "~/assets/css/style.css",
    "~/assets/css/fonts.css",
  ],
  // hooks: {
  //   "build:before": () => {
  //     generateSitemap();
  //   },
  // },
  vite: {
    optimizeDeps: {
      exclude: ["class-validator"],
    },
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode'
  },

})
