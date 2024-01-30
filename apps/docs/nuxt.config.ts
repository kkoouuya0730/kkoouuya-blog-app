// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image", "nuxt-icon"],
  components: [
    {
      path: "~/components",
      pathPrefix: false, // 名前に基づいてコンポーネントを自動インポートさせる
    },
  ],
});
