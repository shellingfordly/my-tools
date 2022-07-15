<script lang="ts" setup>
import { counter } from "./counter";
import { infixToSuffix } from "./infixToSuffix";

const value = ref("");
const result = ref("");

function onCount() {
  result.value = String(counter(infixToSuffix(value.value)));
}
</script>

<template>
  <a-layout class="container">
    <a-card title="数学表达式计算">
      <template #extra> </template>
      <div class="math-code-counter">
        <a-textarea v-model="value" allow-clear />
        <a-button type="primary" @click="onCount">=</a-button>
        <div class="result">{{ result }}</div>
      </div>
    </a-card>
  </a-layout>
</template>

<style scoped lang="less">
.container {
  padding: 20px;
  height: 100%;

  .math-code-counter {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      width: 45%;
      height: 100px;
    }

    .result {
      padding: 4px 12px;
      background-color: var(--color-fill-2);
      border: 1px solid transparent;
      border-radius: var(--border-radius-small);
    }
  }
}
</style>
