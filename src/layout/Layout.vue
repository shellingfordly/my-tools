<script lang="ts" setup>
import Header from "./Header.vue";
</script>

<template>
  <a-layout style="height: 100%">
    <Header />
    <a-layout style="height: 100%">
      <RouterView />
    </a-layout>
  </a-layout>
</template>
