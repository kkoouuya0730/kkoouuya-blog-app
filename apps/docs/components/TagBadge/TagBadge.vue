<script setup lang="ts">
import type { BadgeType } from "@/types/blog";

type Props = {
  BadgeInfo: BadgeType;
};

defineProps<Props>();
</script>

<template>
  <UBadge :color="BadgeInfo.color" :ui="{ rounded: 'rounded-full' }">
    {{ BadgeInfo.label }}
  </UBadge>
</template>
