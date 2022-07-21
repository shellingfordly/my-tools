<script lang="ts" setup>
import { formatNumber } from "/@/lib/utils";

const emit = defineEmits(["change"]);

const railContainerRef = ref<HTMLDivElement>();
const isMove = ref(false);
const x = ref(0);
const clientRect = ref<DOMRect>();
const ContainerBorder = 3;

watch(x, (_x) => {
  const time = formatNumber((_x / clientRect.value?.width!) * 30, 2);
  emit("change", time);
});

onMounted(() => {
  if (!railContainerRef) return;
  clientRect.value = unref(railContainerRef)?.getBoundingClientRect();
});

function setX(_x: number) {
  const rect = unref(clientRect)!;
  if (_x > rect.width + rect.left - ContainerBorder) {
    x.value = rect.width - 3;
  } else if (_x < rect.left) {
    x.value = 0;
  } else {
    x.value = _x - (rect.left || 0);
  }
}

function mousemove(e: MouseEvent) {
  if (isMove.value) {
    setX(e.pageX);
  }
}

function mousedown(e: MouseEvent) {
  isMove.value = true;
}
</script>

<template>
  <div
    ref="railContainerRef"
    :class="$style.railContainer"
    @mousemove="mousemove"
    @mouseup="isMove = false"
  >
    <div
      :class="$style.sliderBar"
      @mousedown="mousedown"
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
