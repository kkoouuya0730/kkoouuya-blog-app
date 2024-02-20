<script setup lang="ts">
import type { Badge } from "@/types/blog";

type Props = {
  BadgeInfo: Badge;
};

defineProps<Props>();
</script>

<template>
  <UBadge
    class="hover:underline"
    :color="BadgeInfo.color"
    :ui="{ rounded: 'rounded-full' }"
  >
    {{ BadgeInfo.label }}
    <UBadge
      v-if="BadgeInfo.isList"
      class="ml-2"
      color="amber"
      variant="soft"
      :ui="{ rounded: 'rounded-full' }"
      >{{ BadgeInfo.amount }}</UBadge
    >
  </UBadge>
</template>
