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
    <div f-ac-jb>
      <a-textarea v-model="value" allow-clear wp-45i h-100 />
      <a-button type="primary" @click="onCount">=</a-button>
      <div class="result">
        <span v-if="type === 'math'">{{ result }}</span>
        <template v-else>
          <span v-for="item in result" :key="item"> {{ item }}</span>
        </template>
      </div>
    </div>
  </a-card>
</template>

<style scoped lang="less">
.result {
  width: 45%;
  height: 100px;
  padding: 4px 12px;
  background-color: var(--color-fill-2);
  border: 1px solid transparent;
  border-radius: var(--border-radius-small);
  justify-content: end;
}
</style>
