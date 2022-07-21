<script lang="ts" setup>
const railContainerRef = ref<HTMLDivElement>();
const isMove = ref(false);
const x = ref(0);
const clientRect = ref<DOMRect>();

onMounted(() => {
  if (!railContainerRef) return;
  clientRect.value = unref(railContainerRef)?.getBoundingClientRect();
});

function mousemove(e: MouseEvent) {
  if (isMove.value) {
    x.value = e.pageX - (clientRect.value?.left || 0);
  }
}

function mousedown(e: MouseEvent) {
  isMove.value = true;
  x.value = e.pageX - (clientRect.value?.left || 0);
}
</script>

<template>
  <div
    ref="railContainerRef"
    :class="$style.railContainer"
    @mousemove="mousemove"
  >
    <div
      :class="$style.sliderBar"
      @mousedown="mousedown"
      @mouseup="isMove = false"
      :style="{ left: x + 'px' }"
    ></div>
  </div>
</template>

<style module scoped lang="less">
.railContainer {
  position: relative;
  width: 100%;
  height: 100px;
  background-color: #aaa;

  .sliderBar {
    position: absolute;
    left: 200px;
    border-left: 3px solid red;
    height: 100%;
    cursor: move;
  }
}
</style>
