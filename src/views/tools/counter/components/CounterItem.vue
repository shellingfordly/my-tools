<script lang="ts" setup>
import { mathExpressionCounter } from "/@/lib/counter";
import relationship from "relationship.js";

const props = defineProps<{
  title: string;
  type: "math" | "relationship";
}>();
const value = ref("");
const result = ref();

function onCount() {
  if (props.type === "math") {
    result.value = mathExpressionCounter(value);
  } else {
    result.value = relationship({ text: unref(value).trim() });
  }
}
</script>

<template>
  <a-card :title="title">
    <div class="container w-100%">
      <a-textarea class="w-45%! h-25" v-model="value" allow-clear />
      <a-button type="primary" @click="onCount">=</a-button>
      <div class="result w-45% h-25">
        <span v-if="type === 'math'">{{ result }}</span>
        <template v-else>
          <span v-for="item in result" :key="item"> {{ item }}</span>
        </template>
      </div>
    </div>
  </a-card>
</template>

<style scoped lang="less">
.container {
  @apply flex items-center justify-between;

  .result {
    padding: 4px 12px;
    background-color: var(--color-fill-2);
    border: 1px solid transparent;
    border-radius: var(--border-radius-small);
  }
}
</style>
