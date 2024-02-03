<script setup lang="ts">
const tags = [
  {
    label: "React",
    color: "amber",
    isList: true,
    amount: 5,
  },
  {
    label: "React",
    color: "amber",
    isList: true,
    amount: 5,
  },
  {
    label: "React",
    color: "amber",
    isList: true,
    amount: 5,
  },
  {
    label: "React",
    color: "amber",
    isList: true,
    amount: 5,
  },
  {
    label: "React",
    color: "amber",
    isList: true,
    amount: 5,
  },
  {
    label: "React",
    color: "amber",
    isList: true,
    amount: 5,
  },
  {
    label: "React",
    color: "amber",
    isList: true,
    amount: 5,
  },
  {
    label: "React",
    color: "amber",
    isList: true,
    amount: 5,
  },
  {
    label: "React",
    color: "amber",
    isList: true,
    amount: 5,
  },
  {
    label: "React",
    color: "amber",
    isList: true,
    amount: 5,
  },
  {
    label: "React",
    color: "amber",
    isList: true,
    amount: 5,
  },
  {
    label: "React",
    color: "amber",
    isList: true,
    amount: 5,
  },
  {
    label: "React",
    color: "amber",
    isList: true,
    amount: 5,
  },
  {
    label: "React",
    color: "amber",
    isList: true,
    amount: 5,
  },
];
</script>

<template>
  <div class="flex flex-col space-x-2 gap-3 p-5">
    <h1>タグ一覧</h1>
    <div>
      <ul class="flex flex-wrap x-1 gap-3">
        <NuxtLink v-for="tag in tags" :to="'/blog/' + tag.label.toLowerCase()">
          <TagBadge :-badge-info="tag" />
        </NuxtLink>
      </ul>
    </div>
  </div>
</template>
