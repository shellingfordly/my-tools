<script lang="ts" setup>
import { FontFamilyOptions } from "./options";

const value = ref("auto");
const FontFamilyOptionsFilter = computed(() => {
  const values = [...new Set(FontFamilyOptions.map((item) => item.value))];
  const labels = [...new Set(FontFamilyOptions.map((item) => item.label))];
  return values.map((value, index) => ({
    value,
    label: labels[index],
  }));
});

function onChange(value: any) {
  const body = document.body;
  body.style.fontFamily = value;
}
</script>

<template>
  <a-select
    v-model="value"
    @change="onChange"
    style="width: 200px"
    allow-search
    allow-create
    placeholder="选择字体"
  >
    <a-option v-for="item in FontFamilyOptionsFilter" :value="item.value">
      {{ item.label }}
    </a-option>
  </a-select>
</template>

<style scoped lang="less"></style>
