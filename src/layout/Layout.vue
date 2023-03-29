<script lang="ts" setup>
import Header from "./Header.vue";
import Sider from "./Sider.vue";
</script>

<template>
  <a-layout hp-100>
    <Header />
    <a-layout>
      <Sider />
      <a-layout>
        <RouterView />
      </a-layout>
    </a-layout>
  </a-layout>
</template>
