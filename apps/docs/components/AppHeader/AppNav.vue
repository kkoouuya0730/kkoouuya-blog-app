<script setup lang="ts">
import type { NavType } from "~/types/blog";

type Props = {
  NavInfo: NavType[];
};

defineProps<Props>();

const route = useRoute();
// TODO 今は1つだけしかクラスがいらないけど、将来増えたら切り出す
const currentPage = (navInfo: NavType) => {
  return route.path === navInfo.slag ? "border-b-2" : "";
};
</script>

<template>
  <nav class="flex space-x-3">
    <ul v-for="nav in NavInfo">
      <NuxtLink :to="nav.slag" :class="currentPage(nav)">
        <UIcon v-if="nav.isIcon" name="i-heroicons-light-bulb" />
        <span v-else>{{ nav.title }}</span>
      </NuxtLink>
    </ul>
  </nav>
</template>

<style></style>
