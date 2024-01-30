<script setup lang="ts">
const navs = [
  {
    title: "Blog",
    slag: "/blog",
    isIcon: false,
  },
  {
    title: "About",
    slag: "/about",
    isIcon: false,
  },
  {
    title: "Tag",
    slag: "/tag",
    isIcon: false,
  },
];

const snsNav = [
  {
    title: "Light and Dark",
    slag: "",
    isIcon: true,
    iconName: "tabler:sun-moon",
  },
  {
    title: "Github",
    slag: "https://github.com/kkoouuya0730",
    isIcon: true,
    iconName: "uil:github",
    isExternalLink: true,
  },
];
</script>

<template>
  <div class="flex h-12 items-center justify-between p-7">
    <NuxtLink to="/blog">
      <span class="text-lg font-medium">kkoouuyaのテックブログ</span>
    </NuxtLink>
    <div>
      <AppNav :-nav-info="navs" />
    </div>
    <div>
      <AppNav :-nav-info="snsNav" />
    </div>
  </div>
</template>
