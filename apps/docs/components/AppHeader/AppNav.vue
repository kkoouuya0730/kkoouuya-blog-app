<script setup lang="ts">
import type { Nav } from "@/types/blog";

type Props = {
  NavInfo: Nav[];
};

defineProps<Props>();

const route = useRoute();
// TODO 今は1つだけしかクラスがいらないけど、将来増えたら切り出す
const currentPage = (navInfo: Nav) => {
  const [, currentPath] = route.path.split("/");
  const [, currentSlug] = navInfo.slag.split("/");
  return currentPath === currentSlug ? "border-b-2 border-red-500" : "";
};
</script>

<template>
  <nav class="flex space-x-2">
    <ul>
      <NuxtLink
        v-for="nav in NavInfo"
        class="p-1"
        :to="nav.slag"
        :class="currentPage(nav)"
        :target="nav.isExternalLink ? '_blank' : ''"
      >
        <Icon
          v-if="nav.isIcon"
          size="35px"
          :name="nav.iconName ? nav.iconName : ''"
        />
        <span v-else>{{ nav.title }}</span>
      </NuxtLink>
    </ul>
  </nav>
</template>

<style></style>
