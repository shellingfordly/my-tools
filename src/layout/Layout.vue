<script lang="ts" setup>
import Header from "./Header.vue";
</script>

<template>
  <a-layout hp-100>
    <Header />
    <a-layout hp-100>
      <RouterView />
    </a-layout>
  </a-layout>
</template>
