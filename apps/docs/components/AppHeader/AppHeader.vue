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
  {
    title: "Recap",
    slag: "/recap",
    isIcon: false,
  },
];

const snsNav = [
  {
    title: "Blog",
    slag: "",
    isIcon: true,
  },
  {
    title: "About",
    slag: "",
    isIcon: true,
  },
  {
    title: "Tag",
    slag: "",
    isIcon: true,
  },
];
</script>

<template>
  <div class="flex h-12 items-center justify-between px-7">
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
