<script lang="ts" setup>
const visible = ref(false);
</script>

<template>
  <a-link @click="visible = true">查看帮助</a-link>
  <a-modal
    :visible="visible"
    :footer="false"
    @cancel="visible = false"
    title="支持语法"
  >
    <h2>功能</h2>
    <a-typography-paragraph>
      <ul>
        <li>目前支持加(+)、减(-)、乘(*/x)、除(/)、次方(^)的运算</li>
        <li>支持直接写中文加、减、乘、除、2的2次方的形式</li>
      </ul>
    </a-typography-paragraph>
    <h2>例子</h2>
    <a-typography-paragraph>
      <ul>
        <li>1. 普通数学表达式: 1^2*(3+4)-5/6</li>
        <li>2. 中文数字表达式: 七减三加六除二减四的二次方</li>
        <li>3. 中文混合数字: 七+2减9/三*2的2次方</li>
      </ul>
    </a-typography-paragraph>
  </a-modal>
</template>

<style scoped lang="less"></style>
