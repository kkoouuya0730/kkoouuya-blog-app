<script setup lang="ts">
const navs = ["/blog", "/about", "/tags"];
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
      <a
        href="https://github.com/kkoouuya0730"
        target="_blank"
        aria-label="GitHub"
      >
        <Github />
      </a>
    </div>
  </div>
</template>
