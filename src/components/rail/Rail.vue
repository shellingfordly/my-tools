<script lang="ts" setup>
let containerLeft = 221;
const railContainerRef = ref();
const isMove = ref(false);
const x = ref(0);

onMounted(() => {
  // if (!railContainerRef.value) return;
  // const offsetLeft = (railContainerRef.value as HTMLDivElement).offsetLeft;
  // containerLeft = offsetLeft;
  // console.log("offsetLeft", offsetLeft);
});

function mousemove(e: MouseEvent) {
  if (isMove.value) {
    x.value = e.pageX - containerLeft;
  }
}
function mousedown(e: MouseEvent) {
  isMove.value = true;
  x.value = e.pageX - containerLeft;
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
