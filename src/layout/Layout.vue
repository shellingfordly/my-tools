<script lang="ts" setup>
import Header from "./Header.vue";
</script>

<template>
  <a-layout hp-100>
    <Header />
    <a-layout>
      <RouterView />
    </a-layout>
  </a-layout>
</template>
