<script setup lang="ts">
import { capitalizeFirstLetter } from "../../utils/arrangeString";

type Props = {
  NavInfo: string[];
};

defineProps<Props>();

const route = useRoute();
// TODO 今は1つだけしかクラスがいらないけど、将来増えたら切り出す
const currentPage = (navInfo: string) => {
  const [, currentPath] = route.path.split("/");
  const [, currentSlug] = navInfo.split("/");
  return currentPath === currentSlug ? "border-b-2 border-red-500" : "";
};
</script>

<template>
  <nav>
    <ul class="flex space-x-10">
      <NuxtLink v-for="nav in NavInfo" :to="nav" :class="currentPage(nav)">
        <span>{{ capitalizeFirstLetter(nav.slice(1)) }}</span>
      </NuxtLink>
    </ul>
  </nav>
</template>

<style></style>
