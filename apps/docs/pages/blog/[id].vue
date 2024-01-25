<script setup>
const route = useRoute();
</script>

<template>
  <h1>プロジェクトNo.: {{ route.params.id }}</h1>
</template>
