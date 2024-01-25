<script setup lang="ts">
import type { BlogType } from "@/types/blog";

type Props = {
  BlogInfo: BlogType;
};

defineProps<Props>();
</script>

<template>
  <article>
    <UCard>
      <template #header>
        <NuxtLink :to="BlogInfo.slag">
          <NuxtImg format="webp" :src="BlogInfo.thumnail" />
        </NuxtLink>
      </template>

      <p class="text-lg font-bold">
        {{ BlogInfo.title }}
      </p>
      <p class="text-sm text-gray-500">
        {{ BlogInfo.publishedAt }}
      </p>
      <p>
        {{ BlogInfo.summary }}
      </p>

      <template #footer class="h-6">
        <ul
          class="flex flex-wrap space-x-1 gap-1"
          v-for="tagBadgeInfo in BlogInfo.tag"
        >
          <TagBadge :-badge-info="tagBadgeInfo" />
        </ul>
      </template>
    </UCard>
  </article>
</template>
